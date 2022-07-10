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

    public function getPaginated($request, array $with = [])
    {
        return $this->model
            ->with($with)
            ->when($request->search, function ($query) use ($request) {
                $query->where('sender', 'like', "%$request->search%");
            })
            ->when($request->field && $request->direction, function ($query) use ($request) {
                $query->orderBy($request->field, $request->direction);
            })
            ->when(!$request->field || !$request->direction, function ($query) {
                $query->latest();
            })
            ->paginate($request->limit ?? 25);
    }

    public function getById(string $id, array $with = [])
    {
        return $this->model
            ->with($with)
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
