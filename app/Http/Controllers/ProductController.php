<?php

namespace App\Http\Controllers;

use App\Interfaces\CategoryInterface;
use App\Interfaces\ProductInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function __construct(
        Request $request,
        ProductInterface $productInterface,
        CategoryInterface $categoryInterface
    )
    {
        $this->request = $request;
        $this->productInterface = $productInterface;
        $this->categoryInterface = $categoryInterface;
    }

    public function index()
    {
        try {
            return Inertia::render('Products', [
                'categories' => $this->categoryInterface->getPaginated($this->request),
                'products' => $this->productInterface->getPaginated($this->request),
                'meta_title' => 'Jual Tanaman Hias dan Buah Dalam Pot',
                'meta_description' => 'Jual Tanaman Hias dan Buah Dalam Pot',
                'meta_keyword' => 'Keyword',
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
