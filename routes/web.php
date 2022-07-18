<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\EventController;
use App\Http\Controllers\Admin\BannerController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\OriginController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\VoucherController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController as HomeProductController;
use App\Http\Controllers\ProfileController;

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

Route::middleware(['auth', 'role:admin'])
    ->name('admin.')
    ->prefix('admin')
    ->group(function () {
        Route::controller(DashboardController::class)
            ->group(function () {
                Route::get('/', 'index')->name('dashboard');
            });
        Route::controller(ProductController::class)
            ->name('products.')
            ->group(function () {
                Route::get('/products/{id}/files', 'files')->name('files');
                Route::post('/products/{id}/files', 'storeFiles')->name('files.store');
                Route::delete('/products/{id}/files/{fileId}', 'destroyFiles')->name('files.destroy');
            });
        Route::controller(ProductController::class)
            ->name('products.')
            ->group(function () {
                Route::get('/products/{id}/origins', 'origins')->name('origins');
                Route::post('/products/{id}/origins/{originId}', 'attachOrigins')->name('origins.attach');
                Route::delete('/products/{id}/origins/{originId}', 'detachOrigins')->name('origins.detach');
            });
        Route::controller(OriginController::class)
            ->name('origins.')
            ->group(function () {
                Route::get('/origins', 'index')->name('index');
                Route::post('/origins', 'store')->name('store');
                Route::delete('/origins/{id}', 'destroy')->name('destroy');
            });
        Route::controller(SettingController::class)
            ->name('settings.')
            ->group(function () {
                Route::get('/settings', 'index')->name('index');
                Route::post('/settings', 'store')->name('store');
            });
        Route::resources([
            'categories' => CategoryController::class,
            'users' => UserController::class,
            'banners' => BannerController::class,
            'events' => EventController::class,
            'vouchers' => VoucherController::class,
            'products' => ProductController::class,
        ]);
    });

Route::get('/', [HomeController::class, 'index'])->name('homepage');

Route::middleware(['auth'])
    ->group(function () {
        Route::controller(ProfileController::class)
            ->name('profile.')
            ->prefix('profile')
            ->group(function () {
                Route::get('/', 'index')->name('index');
                Route::put('/', 'update')->name('update');
            });
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
Route::controller(HomeProductController::class)
    ->name('product.')
    ->prefix('products')
    ->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('/{slug}', 'show')->name('show');
    });
