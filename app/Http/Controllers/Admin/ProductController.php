<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\File\StoreRequest as FileStoreRequest;
use App\Http\Requests\Admin\Product\StoreRequest;
use App\Http\Requests\Admin\Product\UpdateRequest;
use App\Interfaces\CategoryInterface;
use App\Interfaces\FileInterface;
use App\Interfaces\ProductInterface;

class ProductController extends Controller
{
    public function __construct(Request $request, ProductInterface $productInterface, CategoryInterface $categoryInterface, FileInterface $fileInterface)
    {
        $this->request = $request;
        $this->productInterface = $productInterface;
        $this->categoryInterface = $categoryInterface;
        $this->fileInterface = $fileInterface;
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

    public function files(Request $request, $id)
    {
        try {
            $request->product_id = $id;
            return Inertia::render('Dashboard/Product/File', [
                'results' => $this->fileInterface->getPaginated($request),
                'product' => $this->productInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function storeFiles(FileStoreRequest $request, $id)
    {
        try {
            $this->fileInterface
                ->create($request->data());

            return redirect()->back()
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function destroyFiles($id, $fileId)
    {
        try {
            $this->fileInterface->delete($this->fileInterface->getById($fileId));

            return redirect()->back()
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
