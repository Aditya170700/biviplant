<?php

namespace App\Repositories;

use App\Models\Category;
use App\Interfaces\CategoryInterface;

class CategoryRepository implements CategoryInterface
{
    public function __construct(Category $model)
    {
        $this->model = $model;
    }

    public function getPaginated($request)
    {
        return $this->model
            ->when($request->search, function ($query) use ($request) {
                $query->where('name', 'like', "%$request->search%");
            })
            ->when($request->field && $request->direction, function ($query) use ($request) {
                $query->orderBy($request->field, $request->direction);
            })
            ->when(!$request->field || !$request->direction, function ($query) use ($request) {
                $query->latest();
            })
            ->paginate($request->limit ?? 25);
    }

    public function getById(string $id)
    {
        return $this->model
            ->findOrFail($id);
    }

    public function create(array $data)
    {
        return $this->model
            ->create([
                'meta_title' => $data['meta_title'],
                'meta_description' => $data['meta_description'],
                'meta_keyword' => $data['meta_keyword'],
                'icon' => $data['icon'],
                'name' => $data['name'],
                'banner' => $data['banner'],
            ]);
    }

    public function update(Category $model, array $data)
    {
        return $model->update([
            'meta_title' => $data['meta_title'],
            'meta_description' => $data['meta_description'],
            'meta_keyword' => $data['meta_keyword'],
            'icon' => $data['icon'],
            'name' => $data['name'],
            'banner' => $data['banner'],
        ]);
    }

    public function delete(Category $model)
    {
        return $model->delete();
    }
}
