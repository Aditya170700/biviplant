<?php

namespace App\Http\Controllers;

use App\Http\Requests\Front\Cart\StoreRequest;
use App\Http\Requests\Front\Cart\UpdateRequest;
use App\Interfaces\CartInterface;
use App\Interfaces\SettingInterface;
use App\Interfaces\UserAddressInterface;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function __construct(
        Request $request,
        SettingInterface $settingInterface,
        CartInterface $cartInterface,
        UserAddressInterface $userAddressInterface,
    ) {
        $this->request = $request;
        $this->cartInterface = $cartInterface;
        $this->userAddressInterface = $userAddressInterface;
        $this->setting = $settingInterface->getOne();
    }

    public function index()
    {
        try {
            return Inertia::render('Cart', [
                'carts' => $this->cartInterface->getByUser(),
                'user_addresses' => auth()->user() ? $this->userAddressInterface->getPaginated($this->request, [
                    'subdistrict' => function ($query) {
                        $query->select('id', 'name', 'city_id')
                            ->with([
                                'city' => function ($query) {
                                    $query->select('id', 'name', 'province_id')
                                        ->with([
                                            'province' => function ($query) {
                                                $query->select('id', 'name');
                                            }
                                        ]);
                                }
                            ]);
                    },
                ]) : null,
                'meta_title' => $this->setting->meta_title,
                'meta_description' => $this->setting->meta_description,
                'meta_keyword' => $this->setting->meta_keyword,
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION,
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function store(StoreRequest $request)
    {
        $this->cartInterface->create($request->data());

        return redirect()->route('cart.index');
    }

    public function update(UpdateRequest $request, $id)
    {
        $this->cartInterface->update($this->cartInterface->getById($id), $request->data());

        return redirect()->route('cart.index');
    }

    public function destroy($id)
    {
        $this->cartInterface->delete($this->cartInterface->getById($id));

        return redirect()->route('cart.index')->with('success', 'Berhasil menghapus item dari keranjang');
    }
}
