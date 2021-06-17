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

    public function getPlaylistByIdData(Request $request, $id)
    {
        $user = $this->getUserFromToken($request);

        $playlist = Playlist::find($id);

        if (!$playlist) return response()->json([
            'error' => 'Not found Playlist',
        ], 404);

        if ($playlist->user->id !== $user->id) return response()->json([
            'error' => 'This playlist does not belong to the logged user',
        ], 403);

        return response()->json(['data' => [
            'name' => $playlist->name,
            'description' => $playlist->description,
            'image' => $playlist->image,

        ]], 200);
    }


    public function getPlaylistByIdSongs(Request $request, $id)
    {
        $user = $this->getUserFromToken($request);

        $searchingPlaylist = Playlist::find($id);

        if (!$searchingPlaylist) return response()->json([
            'error' => 'Not found Playlist',
        ], 404);

        if ($searchingPlaylist->user->id !== $user->id) return response()->json([
            'error' => 'This playlist is not belonged by this user',
        ], 403);

        return response()->json([
            'songs' => $searchingPlaylist->songs,
        ], 200);
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

    public function updatePlaylistInfo(Request $request, $id)
    {
        $user = $this->getUserFromToken($request);

        if (!$request->name || !$request->description) return response()->json([
            'error' => 'Not enough fields to make the petition',
        ], 400);

        $playlist = Playlist::find($id);

        if (!$playlist) return response()->json([
            'error' => 'Playlist could not be found :('
        ], 404);

        $playlist->name = $request->name;
        $playlist->description = $request->description;

        $playlist->save();

        return response()->json([
            'playlists' => $user->playlists,
        ], 200);
    }
}
