<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
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
                'categories' => $this->categoryInterface->getPaginated($this->request),
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

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        try {
            return Inertia::render('Dashboard/Category/Show', [
                'category' => $this->categoryInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function edit($id)
    {
        try {
            return Inertia::render('Dashboard/Category/Edit', [
                'category' => $this->categoryInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        try {
            return $this->categoryInterface->delete($this->categoryInterface->getById($id));
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
