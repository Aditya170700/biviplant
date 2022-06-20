<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Banner\StoreRequest;
use App\Http\Requests\Banner\UpdateRequest;
use App\Interfaces\BannerInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BannerController extends Controller
{

    public function __construct(Request $request, BannerInterface $bannerInterface)
    {
        $this->request = $request;
        $this->bannerInterface = $bannerInterface;
    }

    public function index()
    {
        try {
            return Inertia::render('Dashboard/Banner/Index', [
                'results' => $this->bannerInterface->getPaginated($this->request),
                'filters' => $this->request->all(['search', 'field', 'direction', 'limit']),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function create()
    {
        try {
            return Inertia::render('Dashboard/Banner/Create');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $this->bannerInterface
                ->create($request->data());

            return redirect()->route('admin.banners.index')
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function show($id)
    {
        try {
            return Inertia::render('Dashboard/Banner/Show', [
                'result' => $this->bannerInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function edit($id)
    {
        try {
            return Inertia::render('Dashboard/Banner/Edit', [
                'result' => $this->bannerInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function update(UpdateRequest $request, string $id)
    {
        try {
            $model = $this->bannerInterface->getById($id);
            $this->bannerInterface
                ->update($model, $request->data());

            return redirect()->route('admin.banners.index')
                ->with('success', 'Berhasil ubah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function destroy($id)
    {
        try {
            $this->bannerInterface->delete($this->bannerInterface->getById($id));

            return redirect()->route('admin.banners.index')
                ->with('success_delete', 'Berhasil hapus data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
