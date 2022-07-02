<?php

namespace App\Http\Controllers;

use App\Interfaces\BannerInterface;
use App\Interfaces\CategoryInterface;
use App\Interfaces\EventInterface;
use App\Interfaces\ProductInterface;
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
        ProductInterface $productInterface,
        VoucherInterface $voucherInterface,
        CategoryInterface $categoryInterface
    )
    {
        $this->request = $request;
        $this->eventInterface = $eventInterface;
        $this->bannerInterface = $bannerInterface;
        $this->productInterface = $productInterface;
        $this->voucherInterface = $voucherInterface;
        $this->categoryInterface = $categoryInterface;
    }
    
    public function index()
    {
        try {
            return Inertia::render('Homepage', [
                'banners' => $this->bannerInterface->getPaginated($this->request),
                'categories' => $this->categoryInterface->getPaginated($this->request),
                'event' => $this->eventInterface->getOne(),
                'products' => $this->productInterface->featuredProducts(),
                'vouchers' => $this->voucherInterface->getPaginated($this->request),
                'meta_title' => 'Jual Tanaman Hias dan Buah Dalam Pot',
                'meta_description' => 'Jual Tanaman Hias dan Buah Dalam Pot',
                'meta_keyword' => 'Keyword',
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION,
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
