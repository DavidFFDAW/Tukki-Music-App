<?php

namespace App\Http\Utils;

use Illuminate\Support\Facades\Storage;

class StorageService
{

    private static function generateFileName($songName)
    {
        $timestamp = now();
        return md5($songName . $timestamp);
    }

    private static function deleteThisSongIfExist($song_path)
    {
        if ($song_path) {
            if (Storage::disk('songs')->exists($song_path)) {
                Storage::disk('songs')->delete($song_path);
            }
        }
    }

    public static function uploadNewSong($song)
    {
        $extension = $song->extension();
        $name = self::generateFileName($song->getClientOriginalName()) . ".$extension";

        Storage::putFileAs('songs', $song, $name, 'public');
        return $name;
    }

    public static function updateSong($song_path, $song)
    {
        self::deleteThisSongIfExist($song_path);

        $fileExtension = $song->extension();
        $filename = self::generateFileName($song->getClientOriginalName()) . "." . $fileExtension;

        Storage::putFileAs('public', $song, $filename, 'public');
        return $filename;
    }
}
