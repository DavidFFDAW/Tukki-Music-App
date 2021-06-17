<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Album;
use App\Models\Playlist;
use App\Models\Song;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getSearch(Request $request)
    {
        if (!$request->term) return response()->json([
            'error' => 'Cannot search without a term',
        ], 400);

        $searchedTerm = '%' . $request->term . '%';

        $songsWithTerm = Song::where('name', 'like', $searchedTerm)->limit(10)->get();

        foreach ($songsWithTerm as $song) {
            $song['uri'] = asset('songs/' . $song->url);
        }

        $usersWithTerm = User::where('name', 'like', $searchedTerm)->limit(10)->get();

        return response()->json([
            'songs' => $songsWithTerm,
            'users' => $usersWithTerm,
        ], 200);
    }
}
