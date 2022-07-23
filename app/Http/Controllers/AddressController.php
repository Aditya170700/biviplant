<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Interfaces\UserAddressInterface;
use App\Http\Requests\Front\UserAddress\StoreRequest;
use App\Http\Requests\Front\UserAddress\UpdateRequest;

class AddressController extends Controller
{
    public function __construct(Request $request, UserAddressInterface $userAddressInterface)
    {
        $this->request = $request;
        $this->userAddressInterface = $userAddressInterface;
    }

    public function index()
    {
        try {
            return Inertia::render('Address/Index', [
                'results' => $this->userAddressInterface->getPaginated($this->request, [
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
                ]),
                'filters' => $this->request->all(['search', 'field', 'direction', 'limit']),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function create()
    {
        try {
            return Inertia::render('Address/Create');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $this->userAddressInterface
                ->create($request->data());

            return redirect()->route('address.index')
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function edit(string $id)
    {
        try {
            return Inertia::render('Address/Edit', [
                'result' => $this->userAddressInterface->getById($id, [
                    'subdistrict' => function ($query) {
                        $query->select('id', 'name', 'city_id')
                            ->with([
                                'city' => function ($query) {
                                    $query->select('id', 'name', 'province_id');
                                }
                            ]);
                    },
                ]),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function update(UpdateRequest $request, string $id)
    {
        try {
            $model = $this->userAddressInterface->getById($id);
            $this->userAddressInterface
                ->update($model, $request->data());

            return redirect()->route('address.index')
                ->with('success', 'Berhasil ubah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function updateStatus(string $id)
    {
        try {
            $model = $this->userAddressInterface->getById($id);
            $this->userAddressInterface
                ->makeNotPrimary($model);
            $this->userAddressInterface
                ->makePrimary($model);

            return redirect()->back()
                ->with('success', 'Berhasil ubah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
