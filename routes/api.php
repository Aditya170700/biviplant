<?php

use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\ProvinceController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\ShippingCostController;
use App\Http\Controllers\Api\SubdistrictController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('provinces', ProvinceController::class)->only(['index']);
Route::resource('cities', CityController::class)->only(['index']);
Route::resource('subdistricts', SubdistrictController::class)->only(['index']);
Route::get('/search', [SearchController::class, 'search'])->name('search');

Route::controller(CartController::class)
    ->prefix('carts')
    ->group(function () {
        Route::post('/', 'store');
        Route::put('/', 'update');
    });

Route::controller(ShippingCostController::class)
    ->prefix('shipping-costs')
    ->group(function () {
        Route::get('/get-nearest', 'getNearest');
    });
