<?php

namespace App\Http\Controllers;

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
            // untuk mendapatkan id admin guna get conversation
            $admins = $this->userInterface->getAdminId($request);
            $id = array_merge([ auth()->id() ], $admins);

            return Inertia::render('Homepage', [
                'banners' => $this->bannerInterface->getPaginated($this->request),
                'categories' => $this->categoryInterface->getPaginated($this->request),
                'event' => $this->eventInterface->getOne(),
                'products' => $this->productInterface->featuredProducts(),
                'product_best_sellers' => $this->productInterface->getBestSeller($this->request),
                'vouchers' => $this->voucherInterface->getActive(),
                'meta_title' => $this->setting ? $this->setting->meta_title : 'Biviplant',
                'meta_description' => $this->setting ? $this->setting->meta_description : 'Tempat grosir tanaman buah' ,
                'meta_keyword' => $this->setting ? $this->setting->meta_keyword : 'tanaman',
                'setting' => $this->setting,
                'origins' => $this->originInterface->getAll(['subdistrict.city.province']),
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION,
                'unread_messages_count' => $this->conversationInterface->getUnreadMessagesBySenderReceiver($id)
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function aboutUs()
    {
        try {
            return Inertia::render('Sidebar/AboutUs', [
                'about_us' => $this->setting->about_us
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
