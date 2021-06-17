<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PlaylistController;
use App\Http\Controllers\AdminApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/users', [ApiController::class, 'getUsers']);

Route::group(['middleware' => 'cors'], function () {

    Route::post('/login', [UserController::class, 'authenticate']);
    Route::post('/register', [UserController::class, 'register']);

    Route::group(['middleware' => ['jwt']], function () {

        Route::get('/songs', [ApiController::class, 'getSongs']);

        Route::get('/myplaylists', [PlaylistController::class, 'getUserPlaylist']);
        Route::get('/playlists/{id}/data', [PlaylistController::class, 'getPlaylistByIdData']);
        Route::put('/playlist/{id}', [PlaylistController::class, 'updatePlaylistInfo']);
        Route::get('/playlists/{id}/songs', [PlaylistController::class, 'getPlaylistByIdSongs']);
        Route::post('/playlist/new', [PlaylistController::class, 'createNewPlaylist']);


        Route::get('/user', [UserController::class, 'getAuthenticatedUser']);
        Route::put('/user/update', [UserController::class, 'updateUserInfo']);
        Route::put('/user/listened', [UserController::class, 'updateLastListenedTo']);
        Route::post('/user/search', [ApiController::class, 'getSearch']);
        Route::put('/user/petition', [UserController::class, 'makePetition']);


        Route::group(['middleware' => ['admin']], function () {

            Route::post('/admin/login', [AdminApiController::class, 'authenticate']);
            Route::get('/admin/users', [AdminApiController::class, 'getUsersWithPetitions']);
            Route::put('/admin/users', [AdminApiController::class, 'updateUserPetition']);
        });
    });



    /* Route::post('/login', [UserController::class, 'logUser'])->middleware(['api']);

    Route::group(['middleware' => 'jwt'], function () {

        Route::get('/songs', [ApiController::class, 'getSongs']);
        Route::get('/users', [ApiController::class, 'getUsers']);
        Route::get('/albums', [ApiController::class, 'getAlbums']);
        Route::get('/playlists', [ApiController::class, 'getPlaylists']);
    }); */
});
