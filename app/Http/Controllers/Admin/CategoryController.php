<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Category\StoreRequest;
use App\Http\Requests\Admin\Category\UpdateRequest;
use App\Interfaces\CategoryInterface;

class CategoryController extends Controller
{
    public function __construct(Request $request, CategoryInterface $categoryInterface)
    {
        $this->request = $request;
        $this->categoryInterface = $categoryInterface;
    }

    public function index()
    {
        try {
            return Inertia::render('Dashboard/Category/Index', [
                'results' => $this->categoryInterface->getPaginated($this->request),
                'filters' => $this->request->all(['search', 'field', 'direction', 'limit']),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function create()
    {
        try {
            return Inertia::render('Dashboard/Category/Create');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $this->categoryInterface
                ->create($request->data());

            return redirect()->route('admin.categories.index')
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function show($id)
    {
        try {
            return Inertia::render('Dashboard/Category/Show', [
                'result' => $this->categoryInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function edit($id)
    {
        try {
            return Inertia::render('Dashboard/Category/Edit', [
                'result' => $this->categoryInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function update(UpdateRequest $request, string $id)
    {
        try {
            $model = $this->categoryInterface->getById($id);
            $this->categoryInterface
                ->update($model, $request->data());

            return redirect()->route('admin.categories.index')
                ->with('success', 'Berhasil ubah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function destroy($id)
    {
        try {
            $this->categoryInterface->delete($this->categoryInterface->getById($id));

            return redirect()->route('admin.categories.index')
                ->with('success_delete', 'Berhasil hapus data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
