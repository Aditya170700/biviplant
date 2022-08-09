<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Front\Cart\StoreRequest;
use App\Http\Requests\Front\Cart\UpdateRequest;
use App\Http\Resources\Cart\StoreCartResource;
use App\Interfaces\CartInterface;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function __construct(Request $request, CartInterface $cartInterface)
    {
        $this->request = $request;
        $this->cartInterface = $cartInterface;
    }

    public function store(StoreRequest $request)
    {
        return new StoreCartResource($this->cartInterface->create($request->data()));
    }

    public function update(UpdateRequest $request)
    {
        $cart = $this->cartInterface->getByProductUser($request['product_id'], $request['user_id']);

        $this->cartInterface->update($cart, $request->data());

        return new StoreCartResource($cart);
    }
}
