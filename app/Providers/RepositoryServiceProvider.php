<?php

namespace App\Providers;

use App\Interfaces\UserInterface;
use App\Interfaces\BannerInterface;
use App\Interfaces\CartInterface;
use App\Repositories\UserRepository;
use App\Interfaces\CategoryInterface;
use App\Interfaces\CityInterface;
use App\Interfaces\EventInterface;
use App\Interfaces\FileInterface;
use App\Interfaces\OriginInterface;
use App\Interfaces\ProductInterface;
use App\Interfaces\ProvinceInterface;
use App\Interfaces\SettingInterface;
use App\Interfaces\SubdistrictInterface;
use App\Interfaces\UserAddressInterface;
use App\Interfaces\VoucherInterface;
use App\Repositories\BannerRepository;
use App\Repositories\CartRepository;
use Illuminate\Support\ServiceProvider;
use App\Repositories\CategoryRepository;
use App\Repositories\CityRepository;
use App\Repositories\EventRepository;
use App\Repositories\FileRepository;
use App\Repositories\OriginRepository;
use App\Repositories\ProductRepository;
use App\Repositories\ProvinceRepository;
use App\Repositories\SettingRepository;
use App\Repositories\SubdistrictRepository;
use App\Repositories\UserAddressRepository;
use App\Repositories\VoucherRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(CategoryInterface::class, CategoryRepository::class);
        $this->app->bind(BannerInterface::class, BannerRepository::class);
        $this->app->bind(UserInterface::class, UserRepository::class);
        $this->app->bind(EventInterface::class, EventRepository::class);
        $this->app->bind(VoucherInterface::class, VoucherRepository::class);
        $this->app->bind(ProductInterface::class, ProductRepository::class);
        $this->app->bind(FileInterface::class, FileRepository::class);
        $this->app->bind(OriginInterface::class, OriginRepository::class);
        $this->app->bind(ProvinceInterface::class, ProvinceRepository::class);
        $this->app->bind(CityInterface::class, CityRepository::class);
        $this->app->bind(SubdistrictInterface::class, SubdistrictRepository::class);
        $this->app->bind(SettingInterface::class, SettingRepository::class);
        $this->app->bind(UserAddressInterface::class, UserAddressRepository::class);
        $this->app->bind(CartInterface::class, CartRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
