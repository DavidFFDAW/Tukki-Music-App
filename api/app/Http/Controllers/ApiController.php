<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Album;
use App\Models\Playlist;
use App\Models\Song;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getSongs()
    {
        $songs = Song::all();
        ddd($songs);

        return response()->json(['response' => $songs], 200);
    }

    public function getUsers()
    {
        $users = User::all();

        return response()->json(['response' => $users]);
    }

    public function getAlbums()
    {
        $users = Album::all();

        return response()->json(['response' => $users]);
    }

    public function getPlaylists()
    {
        $users = Playlist::all();

        return response()->json(['response' => $users]);
    }
    public function getCSRF()
    {
        return response()->json(['response' => csrf_token()]);
    }
}
