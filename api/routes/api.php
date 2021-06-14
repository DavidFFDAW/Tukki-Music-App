<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PlaylistController;

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
        Route::post('/playlist/new', [PlaylistController::class, 'createNewPlaylist']);


        Route::get('/user', [UserController::class, 'getAuthenticatedUser']);
    });



    /* Route::post('/login', [UserController::class, 'logUser'])->middleware(['api']);

    Route::group(['middleware' => 'jwt'], function () {

        Route::get('/songs', [ApiController::class, 'getSongs']);
        Route::get('/users', [ApiController::class, 'getUsers']);
        Route::get('/albums', [ApiController::class, 'getAlbums']);
        Route::get('/playlists', [ApiController::class, 'getPlaylists']);
    }); */
});
