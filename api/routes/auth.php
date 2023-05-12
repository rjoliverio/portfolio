<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/redirect', [AuthController::class, 'index']);
Route::get('/callback', [AuthController::class, 'store']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/auth', [AuthController::class, 'show']);
    Route::post('/logout', [AuthController::class, 'destroy']);
});
