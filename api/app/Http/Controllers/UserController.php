<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Utils\StorageImageService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$credentials) return response()->json([
            'error' => 'Needed fields might be missing',
        ], 400);

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'Invalid credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Token could not be created'], 500);
        }
        return response()->json(compact('token'));
    }

    public function getAuthenticatedUser()
    {
        try {
            if (!$user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }
        return response()->json(compact('user'));
    }


    public function register(Request $request)
    {
        if (!$request->get('repeatPassword')) return response()->json([
            'error' => 'repeatPassword field is required',
        ], 400);

        if (User::where('email', '=', $request->get('email'))->first()) return response()->json([
            'error' => 'Not possible to register with this email',
        ], 401);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|unique:users',
            'password' => 'required|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'Some field is missing or incorrect'], 400);
        }

        if ($request->get('password') !== $request->get('repeatPassword')) return response()->json([
            'error' => 'Introduced passwords do not match',
        ], 403);

        $user = User::create([
            'name' => $request->get('name'),
            'username' => $request->get('username'),
            'email' => $request->get('email'),
            'verified' => false,
            'type' => 'normal',
            'last_listened_to' => null,
            'petition_status' => 'not_started',
            'password' => Hash::make($request->get('password')),
            'created_at' => now(),
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json(compact('user', 'token'), 201);
    }

    public function updateUserInfo(Request $request)
    {

        $userFromToken = $this->getUserFromToken($request);

        if (!$userFromToken) return response()->json([
            'error' => 'User has not been found'
        ], 404);

        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255',
            'password' => 'required|min:6',
            'repeatPassword' => 'required|min:6',
        ]);

        if ($validator->fails()) return response()->json([
            'error' => 'Some field is missing or is incorrect'
        ], 400);

        if ($request->password !== $request->repeatPassword) return response()->json([
            'error' => 'Passwords are not Equals',
        ], 400);

        if ($request->hasFile('avatar')) {
            //$path = StorageImageService::storeNewUserAvatar();
            //$userFromToken->image = $path;
        }
        $userFromToken->username = $request->username;
        $userFromToken->password = Hash::make($request->password);
        $userFromToken->updated_at = now();
        $userFromToken->save();
    }

    public function updateLastListenedTo(Request $request)
    {
        $userFromToken = $this->getUserFromToken($request);

        if (!$request->song_name) return response()->json([
            'error' => 'Not song indicated',
        ], 400);

        $userFromToken->last_listened_to = $request->song_name;
        $userFromToken->save();
    }
}
