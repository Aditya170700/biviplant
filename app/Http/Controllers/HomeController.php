<?php

namespace App\Http\Controllers;

use App\Classes\Constants\ProductCondition;
use App\Interfaces\BannerInterface;
use App\Interfaces\CategoryInterface;
use App\Interfaces\ConversationInterface;
use App\Interfaces\EventInterface;
use App\Interfaces\OriginInterface;
use App\Interfaces\ProductInterface;
use App\Interfaces\SettingInterface;
use App\Interfaces\UserInterface;
use App\Interfaces\VoucherInterface;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct(
        Request $request,
        EventInterface $eventInterface,
        BannerInterface $bannerInterface,
        ConversationInterface $conversationInterface,
        ProductInterface $productInterface,
        VoucherInterface $voucherInterface,
        CategoryInterface $categoryInterface,
        SettingInterface $settingInterface,
        OriginInterface $originInterface,
        UserInterface $userInterface
    ) {
        $this->request = $request;
        $this->eventInterface = $eventInterface;
        $this->bannerInterface = $bannerInterface;
        $this->conversationInterface = $conversationInterface;
        $this->productInterface = $productInterface;
        $this->voucherInterface = $voucherInterface;
        $this->categoryInterface = $categoryInterface;
        $this->originInterface = $originInterface;
        $this->userInterface = $userInterface;
        $this->setting = $settingInterface->getOne();
    }

    public function index(Request $request)
    {
        try {
            return Inertia::render('Homepage', [
                'banners' => $this->bannerInterface->getPaginated($this->request),
                'categories' => $this->categoryInterface->getPaginated($this->request),
                'event' => $this->eventInterface->getOne(),
                'products' => $this->productInterface->featuredProducts(),
                'seed_plants' => $this->productInterface->featuredProducts(ProductCondition::SEED_PLANT),
                'young_plants' => $this->productInterface->featuredProducts(ProductCondition::YOUNG_PLANT),
                'fruit_plants' => $this->productInterface->featuredProducts(ProductCondition::FRUIT_PLANT),
                'big_plants' => $this->productInterface->featuredProducts(ProductCondition::BIG_PLANT),
                'flower_plants' => $this->productInterface->featuredProducts(ProductCondition::FLOWER_PLANT),
                'product_best_sellers' => $this->productInterface->getBestSeller($this->request),
                'vouchers' => $this->voucherInterface->getActive(),
                'meta_title' => $this->setting ? $this->setting->meta_title : 'Biviplant',
                'meta_description' => $this->setting ? $this->setting->meta_description : 'Tempat grosir tanaman buah',
                'meta_keyword' => $this->setting ? $this->setting->meta_keyword : 'tanaman',
                'setting' => $this->setting,
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function aboutUs()
    {
        try {
            return Inertia::render('Sidebar/AboutUs', [
                'setting' => $this->setting,
                'origins' => $this->originInterface->getAll(['subdistrict.city.province']),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function privacyPolicy()
    {
        try {
            return Inertia::render('Sidebar/PrivacyPolicy', [
                'privacy_policy' => $this->setting->privacy_policy
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }
}
