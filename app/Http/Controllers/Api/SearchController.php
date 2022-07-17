<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategorySearch\CategorySearchCollection;
use App\Http\Resources\ProductSearch\ProductSearchCollection;
use App\Interfaces\CategoryInterface;
use App\Interfaces\ProductInterface;

class SearchController extends Controller
{
    public function __construct(Request $request, ProductInterface $productInterface, CategoryInterface $categoryInterface)
    {
        $this->request = $request;
        $this->productInterface = $productInterface;
        $this->categoryInterface = $categoryInterface;
    }

    public function search()
    {
        $products = [];
        $categories = [];

        if ($this->request->keyword) {
            $products = $this->productInterface
                ->search($this->request->keyword);
            $categories = $this->categoryInterface
                ->search($this->request->keyword);
        }

        return response()->json([
            'products' => $products,
            'categories' => $categories,
        ]);
    }
}
