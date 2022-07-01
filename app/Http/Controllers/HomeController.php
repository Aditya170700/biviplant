<?php

namespace App\Http\Controllers;

use App\Interfaces\BannerInterface;
use App\Interfaces\CategoryInterface;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct(
        Request $request,
        BannerInterface $bannerInterface,
        CategoryInterface $categoryInterface
    )
    {
        $this->request = $request;
        $this->bannerInterface = $bannerInterface;
        $this->categoryInterface = $categoryInterface;
    }
    
    public function index()
    {
        try {
            return Inertia::render('Homepage', [
                'banners' => $this->bannerInterface->getPaginated($this->request),
                'categories' => $this->categoryInterface->getPaginated($this->request),
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
