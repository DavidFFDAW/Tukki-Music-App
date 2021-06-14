<?php

namespace App\Http\Controllers;

use App\Models\Playlist;
use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;

class PlaylistController extends Controller
{
    public function getUserPlaylist(Request $request)
    {
        $user = $this->getUserFromToken($request);

        $myPlaylists = $user->playlists;

        return response()->json(['playlists' => $myPlaylists], 200);
    }

    public function createNewPlaylist(Request $request)
    {
        $user = $this->getUserFromToken($request);

        if (!$request->name || !$request->description) return response()->json([
            'error' => 'Not enough fields to make the petition',
        ], 400);

        $playlist = new Playlist();
        $playlist->name = $request->name;
        $playlist->description = $request->description;
        $playlist->user_id = $user->id;
        $playlist->created_at = now();

        $playlist->save();

        return response()->json(['playlists' => $user->playlists]);
    }
}
