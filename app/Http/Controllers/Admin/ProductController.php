<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\StoreRequest;
use App\Http\Requests\Admin\Product\UpdateRequest;
use App\Interfaces\CategoryInterface;
use App\Interfaces\ProductInterface;

class ProductController extends Controller
{
    public function __construct(Request $request, ProductInterface $productInterface, CategoryInterface $categoryInterface)
    {
        $this->request = $request;
        $this->productInterface = $productInterface;
        $this->categoryInterface = $categoryInterface;
    }

    public function index()
    {
        try {
            return Inertia::render('Dashboard/Product/Index', [
                'results' => $this->productInterface->getPaginated($this->request),
                'filters' => $this->request->all(['search', 'field', 'direction', 'limit']),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function create()
    {
        try {
            return Inertia::render('Dashboard/Product/Create', [
                'categories' => $this->categoryInterface->getAll($this->request),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $this->productInterface
                ->create($request->data());

            return redirect()->route('admin.products.index')
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function show($id)
    {
        try {
            return Inertia::render('Dashboard/Product/Show', [
                'result' => $this->productInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function edit($id)
    {
        try {
            return Inertia::render('Dashboard/Product/Edit', [
                'result' => $this->productInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function update(UpdateRequest $request, $id)
    {
        try {
            $model = $this->productInterface->getById($id);
            $this->productInterface
                ->update($model, $request->data());

            return redirect()->route('admin.products.index')
                ->with('success', 'Berhasil ubah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function destroy($id)
    {
        try {
            $this->productInterface->delete($this->productInterface->getById($id));

            return redirect()->route('admin.products.index')
                ->with('success', 'Berhasil hapus data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
