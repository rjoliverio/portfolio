<?php

use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::apiResource('contact_us', ContactUsController::class);
Route::apiResource('portfolio', PortfolioController::class);
require __DIR__ . '/auth.php';
