<?php

namespace App\Providers;

use App\Interfaces\UserInterface;
use App\Interfaces\BannerInterface;
use App\Repositories\UserRepository;
use App\Interfaces\CategoryInterface;
use App\Interfaces\EventInterface;
use App\Repositories\BannerRepository;
use Illuminate\Support\ServiceProvider;
use App\Repositories\CategoryRepository;
use App\Repositories\EventRepository;

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
