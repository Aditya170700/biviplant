<?php

use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CityController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ProvinceController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\ShippingCostController;
use App\Http\Controllers\Api\SubdistrictController;
use App\Http\Controllers\Api\VoucherController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\RatingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\ProductImport;

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

Route::controller(OrderController::class)
    ->prefix('orders')
    ->group(function () {
        Route::get('/list-payment-method', 'listPaymentMethod');
        Route::get('/track', 'track');
    });

Route::controller(VoucherController::class)
    ->prefix('vouchers')
    ->group(function () {
        Route::post('/check', 'check');
    });

Route::controller(ProductController::class)
    ->prefix('products')
    ->group(function () {
        Route::get('/', 'index');
    });

Route::controller(RatingController::class)
    ->prefix('feedbacks')
    ->group(function () {
        Route::get('/{productId}', 'index');
    });
    
Route::post('/import', function (Request $request) {
    dd(Excel::import(new ProductImport, $request->file('excel')));
});
