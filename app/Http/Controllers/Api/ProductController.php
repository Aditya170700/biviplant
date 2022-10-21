<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Interfaces\ProductInterface;
use App\Http\Resources\Product\ProductCollection;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct(
        Request $request,
        ProductInterface $productInterface,
    ) {
        $this->request = $request;
        $this->productInterface = $productInterface;
    }

    public function index()
    {
        try {
            return new ProductCollection($this->productInterface->getPaginated($this->request));
        } catch (\Throwable $th) {
            panic($th);
        }
    }
}
