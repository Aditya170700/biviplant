<?php

namespace App\Repositories;

use App\Models\Event;
use App\Interfaces\EventInterface;

class EventRepository implements EventInterface
{
    public function __construct(Event $model)
    {
        $this->model = $model;
    }

    public function getPaginated($request)
    {
        return $this->model
            ->when($request->search, function ($query) use ($request) {
                $query->where('title', 'like', "%$request->search%");
            })
            ->when($request->field && $request->direction, function ($query) use ($request) {
                $query->orderBy($request->field, $request->direction);
            })
            ->when(!$request->field || !$request->direction, function ($query) use ($request) {
                $query->latest();
            })
            ->paginate($request->limit ?? 25);
    }

    public function getOne()
    {
        return $this->model->latest()->first();
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

    public function update(Event $model, array $data)
    {
        return $model->update($data);
    }

    public function delete(Event $model)
    {
        return $model->delete();
    }
}
