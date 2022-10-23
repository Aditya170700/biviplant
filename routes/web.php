<?php

use App\Http\Controllers\AddressController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AddressGuestController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RatingController;

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

Route::get('/', [HomeController::class, 'index'])->name('homepage');
Route::get('/tentang-kami', [HomeController::class, 'aboutUs'])->name('about_us');

Route::middleware(['auth'])
    ->group(function () {
        Route::controller(ProfileController::class)
            ->name('profile.')
            ->prefix('profile')
            ->group(function () {
                Route::get('/', 'index')->name('index');
                Route::get('/edit', 'edit')->name('edit');
                Route::put('/', 'update')->name('update');
            });
        Route::controller(RatingController::class)
            ->name('rating.')
            ->prefix('rating')
            ->group(function () {
                Route::get('/{id}', 'index')->name('index');
                Route::post('/store', 'store')->name('store');
            });
        Route::controller(AddressController::class)
            ->name('address.')
            ->prefix('address')
            ->group(function () {
                Route::get('/', 'index')->name('index');
                Route::get('/create', 'create')->name('create');
                Route::post('/store', 'store')->name('store');
                Route::get('/{id}/edit', 'edit')->name('edit');
                Route::put('/{id}', 'update')->name('update');
                Route::put('/{id}/status', 'updateStatus')->name('update.status');
            });
        Route::controller(OrderController::class)
            ->name('orders.')
            ->prefix('orders')
            ->group(function () {
                Route::post('/', 'store')->name('store');
                Route::get('/notify', 'notify')->name('notify');
                Route::get('/return', 'return')->name('return');
                Route::get('/cancel', 'cancel')->name('cancel');
                Route::get('/history', 'history')->name('history');
                Route::get('/{id}/detail', 'detail')->name('detail');
                Route::get('/{id}/track', 'track')->name('track');
                Route::put('/{id}/finish', 'finish')->name('finish');
            });
    });

Route::controller(AddressGuestController::class)
    ->name('address-guest.')
    ->prefix('address-guest')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::get('/{id}/edit', 'edit')->name('edit');
    });

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

/**
 * PRODUCT
 */
Route::controller(ProductController::class)
    ->name('product.')
    ->prefix('products')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/{slug}', 'show')->name('show');
    });

/**
 * CART
 */
Route::controller(CartController::class)
    ->name('cart.')
    ->prefix('carts')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::post('/', 'store')->name('store');
        Route::put('/{id}', 'update')->name('update');
        Route::delete('/{id}', 'destroy')->name('destroy');
    });

/**
 * CATEGORY
 */
Route::controller(CategoryController::class)
    ->name('category.')
    ->prefix('kategori')
    ->group(function () {
        Route::get('/{slug}', 'show')->name('show');
    });
