<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Album;
use App\Models\Playlist;
use App\Models\Song;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class ApiController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$credentials) return response()->json([
            'error' => 'Needed fields might be missing',
        ], 400);

        $tryGettingUser = User::where('email', '=', $request->email)->get();
        if (!$tryGettingUser) return response()->json(['error' => 'Unable to find user with this email address'], 404);
        if ($tryGettingUser->type !== 'admin') return response()->json(['error' => 'This user is not allowed to enter this page'], 403);

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'Invalid credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Token could not be created'], 500);
        }
        return response()->json(compact('token'));
    }
    public function getUsersWithPetitions(Request $req)
    {
        $users = User::where('petition_status', '=', 'pending')->get();

        if (!$users) return response()->json([
            'error' => 'Users not found',
        ], 404);

        return response()->json([
            'users' => $users,
        ], 200);
    }

    public function updateUserPetition(Request $request, $id)
    {
        $user = User::find($id);

        if ($request->accepted) {
            $user->petition_status = 'accepted';
        } else {
            $user->petition_status = 'not_started';
        }
        $user->update_at = now();
        $user->save();
    }
}
