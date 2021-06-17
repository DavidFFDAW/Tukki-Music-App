<?php

namespace App\Http\Controllers;

use App\Http\Utils\StorageService;
use App\Models\Song;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WebController extends Controller
{
    public function getUsersWithPetitions()
    {
        $petitioningUsers = User::where('petition_status', '=', 'pending')->get();

        return view('admin.users')->with([
            'petitioningUsers' => $petitioningUsers
        ]);
    }

    public function updatePetition(Request $request)
    {
        $user = User::find($request->id);

        if ($request->button === 'deny') {
            $user->petition_status = 'not_started';
            $user->type = 'normal';
        }
        if ($request->button === 'accept') {
            $user->petition_status = 'accepted';
            $user->type = 'artist';
        }

        $user->updated_at = now();
        $user->save();
        return redirect()->route('admin.userPetitions');
    }


    public function getArtistSongs()
    {
        $user = User::find(Auth::id());

        return view('artist.songs')->with([
            'songs' => $user->songs,
        ]);
    }

    public function getCreateNewSong()
    {
        return view('artist.songCreate');
    }

    public function createNewSong(Request $request)
    {

        if ($request->hasFile('song')) {
            $newSong = new Song();
            $newSong->url = StorageService::uploadNewSong($request->file('song'));
            $newSong->name = $request->name;
            $newSong->artist = Auth::user()->name;
            $newSong->duration = $request->duration;
            $newSong->created_at = now();
            $newSong->artist_id = Auth::id();

            $newSong->save();
        }
        return redirect()->route('artist.songs');
    }

    public function getUpdateSong($id)
    {
        $requestedSong = Song::find($id);

        if (!$requestedSong || $requestedSong->user->id !== Auth::id()) return redirect()->route('artist.songs');

        return view('artist.songUpdate')->with([
            'song' => $requestedSong,
        ]);
    }
    public function updateSong(Request $request)
    {
        $modifySong = Song::find($request->id);
        //if (!$modifySong || $modifySong->user->id !== Auth::id()) return redirect()->route('artist.songs');

        if ($request->hasFile('song')) {
            $modifySong->url = StorageService::updateSong($modifySong, $request->song);
        }
        $modifySong->name = $request->name;
        $modifySong->duration = $request->duration;
        $modifySong->save();

        return redirect()->route('artist.songs');
    }
    public function deleteSong(Request $request)
    {
        $deleteSong = Song::find($request->id);
        if (!$deleteSong || $deleteSong->user->id !== Auth::id()) return redirect()->route('artist.songs');

        $deleteSong->delete();

        return redirect()->route('artist.songs');
    }
}
