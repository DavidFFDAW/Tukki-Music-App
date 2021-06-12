<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    use HasFactory;

    protected $table = 'songs';

    public function album()
    {
        return $this->belongsTo(AlbumSong::class);
    }

    public function playlists()
    {
        return $this->belongsToMany(PlaylistSong::class);
    }
}
