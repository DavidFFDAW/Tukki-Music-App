<?php

use App\Http\Controllers\WebController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Auth::routes();
Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', [App\Http\Controllers\HomeController::class, 'index']);

    Route::group(['middleware' => 'web.admin'], function () {

        Route::get('/admin/users', [WebController::class, 'getUsersWithPetitions'])->name('admin.userPetitions');
        Route::post('/admin/users/petition', [WebController::class, 'updatePetition'])->name('admin.updatePetition');
    });
    Route::group(['middleware' => 'web.artist'], function () {

        Route::get('/artist/songs', [WebController::class, 'getArtistSongs'])->name('artist.songs');
        Route::get('/artist/song/new', [WebController::class, 'getCreateNewSong'])->name('artist.getCreateSong');
        Route::post('/artist/song/new', [WebController::class, 'createNewSong'])->name('artist.createSong');
        Route::get('/artist/song/update/{id}', [WebController::class, 'getUpdateSong'])->name('artist.getUpdateSong');
        Route::post('/artist/song/update', [WebController::class, 'updateSong'])->name('artist.updateSong');
        Route::post('/artist/song/delete', [WebController::class, 'deleteSong'])->name('artist.deleteSong');
    });

    //Route::get();
});
