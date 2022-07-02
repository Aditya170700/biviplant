<?php

namespace App\Repositories;

use App\Models\Origin;
use App\Interfaces\OriginInterface;

class OriginRepository implements OriginInterface
{
    public function __construct(Origin $model)
    {
        $this->model = $model;
    }

    public function getPaginated($request)
    {
        return $this->model
            ->where('product_id', $request->product_id)
            ->when($request->search, function ($query) use ($request) {
                $query->where('sender', 'like', "%$request->search%");
            })
            ->when($request->field && $request->direction, function ($query) use ($request) {
                $query->orderBy($request->field, $request->direction);
            })
            ->when(!$request->field || !$request->direction, function ($query) use ($request) {
                $query->latest();
            })
            ->paginate($request->limit ?? 10);
    }

    public function getById(string $id)
    {
        return $this->model
            ->findOrFail($id);
    }

    public function create(array $data)
    {
        return $this->model
            ->create($data);
    }

    public function delete(Origin $model)
    {
        return $model->delete();
    }
}
