<?php

namespace App\Http\Controllers;

use App\Interfaces\CategoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function __construct(Request $request, CategoryInterface $categoryInterface)
    {
        $this->request = $request;
        $this->categoryInterface = $categoryInterface;
    }

    public function show($slug)
    {
        try {
            $category = $this->categoryInterface->getBySlug($slug);
            return Inertia::render('ProductCategory/Products', [
                'category' => $this->categoryInterface->getBySlug($slug),
                'products' => ''
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
