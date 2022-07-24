<?php

namespace App\Http\Controllers;

use App\Interfaces\CategoryInterface;
use App\Interfaces\ProductInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function __construct(
        Request $request, 
        CategoryInterface $categoryInterface,
        ProductInterface $productInterface,
    )
    {
        $this->request = $request;
        $this->categoryInterface = $categoryInterface;
        $this->productInterface = $productInterface;
    }

    public function show($slug)
    {
        try {
            $category = $this->categoryInterface->getBySlug($slug);
            $products = $this->productInterface->getBySlugCategory($slug);

            return Inertia::render('ProductCategory/Products', [
                'category' => $category,
                'products' => $products,
                'meta_title' => $category->meta_title,
                'meta_keyword' => $category->meta_keyword,
                'meta_description' => $category->meta_description,
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }
}
