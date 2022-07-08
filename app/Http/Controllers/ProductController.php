<?php

namespace App\Http\Controllers;

use App\Interfaces\CategoryInterface;
use App\Interfaces\ProductInterface;
use App\Interfaces\SettingInterface;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function __construct(
        Request $request,
        ProductInterface $productInterface,
        CategoryInterface $categoryInterface,
        SettingInterface $settingInterface
    )
    {
        $this->request = $request;
        $this->productInterface = $productInterface;
        $this->categoryInterface = $categoryInterface;
        $this->setting = $settingInterface->getOne();
    }

    public function index()
    {
        try {
            return Inertia::render('Product/Products', [
                'categories' => $this->categoryInterface->getPaginated($this->request),
                'products' => $this->productInterface->getPaginated($this->request),
                'meta_title' => $this->setting->meta_title,
                'meta_description' => $this->setting->meta_description,
                'meta_keyword' => $this->setting->meta_keyword,
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function show($slug)
    {
        try {
            return Inertia::render('Product/Product', [
                'categories' => $this->categoryInterface->getPaginated($this->request),
                'product' => $this->productInterface->findBySlug($slug),
                'products' => $this->productInterface->getPaginated($this->request),
                'meta_title' => $this->setting->meta_title,
                'meta_description' => $this->setting->meta_description,
                'meta_keyword' => $this->setting->meta_keyword,
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
