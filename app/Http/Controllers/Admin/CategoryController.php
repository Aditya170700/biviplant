<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Category\StoreRequest;
use App\Http\Requests\Category\UpdateRequest;
use App\Interfaces\CategoryInterface;
use App\Models\Category;

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
                ->create([
                    'meta_title' => $request->meta_title,
                    'meta_description' => $request->meta_description,
                    'meta_keyword' => $request->meta_keyword,
                    'icon' => $request->icon(),
                    'name' => $request->name,
                    'banner' => $request->banner(),
                ]);

            return redirect()->route('admin.categories.index')
                ->with('success', 'Created');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function show(Category $model)
    {
        try {
            return Inertia::render('Dashboard/Category/Show', [
                'result' => $model,
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
                ->update($model, [
                    'meta_title' => $request->meta_title,
                    'meta_description' => $request->meta_description,
                    'meta_keyword' => $request->meta_keyword,
                    'icon' => $request->icon() ?? $model->icon,
                    'name' => $request->name,
                    'banner' => $request->banner() ?? $model->banner,
                ]);

            return redirect()->route('admin.categories.index')
                ->with('success', 'Updated');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function destroy($id)
    {
        try {
            $this->categoryInterface->delete($this->categoryInterface->getById($id));

            return redirect()->route('admin.categories.index')
                ->with('success', 'Deleted');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
