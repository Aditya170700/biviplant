<?php

namespace App\Repositories;

use App\Models\User;
use App\Interfaces\UserInterface;
use App\Models\Message;

class UserRepository implements UserInterface
{
    public function __construct(User $model)
    {
        $this->model = $model;
    }

    public function getPaginated($request)
    {
        return $this->model
            ->when($request->search, function ($query) use ($request) {
                $query->where('name', 'like', "%$request->search%")
                    ->orWhere('email', 'like', "%$request->search%")
                    ->orWhere('phone', 'like', "%$request->search%");
            })
            ->when($request->field && $request->direction, function ($query) use ($request) {
                $query->orderBy($request->field, $request->direction);
            })
            ->when(!$request->field || !$request->direction, function ($query) use ($request) {
                $query->latest();
            })
            ->paginate($request->limit ?? 25);
    }

    public function getPaginateCustomers($request)
    {
        return $this->model
            ->with([
                'unreadMessages', 
                'messages', 
                'latesMessages' => function ($q) {
                    $q->first();
                }
            ])
            ->when($request->search, function ($query) use ($request) {
                $query->where('name', 'like', "%$request->search%")
                    ->orWhere('email', 'like', "%$request->search%")
                    ->orWhere('phone', 'like', "%$request->search%");
            })
            ->where('role', 'customer')
            ->paginate($request->limit ?? 500);
    }

    public function getAdminId($request)
    {
        return $this->model
            ->when($request->search, function ($query) use ($request) {
                $query->where('name', 'like', "%$request->search%")
                    ->orWhere('email', 'like', "%$request->search%")
                    ->orWhere('phone', 'like', "%$request->search%");
            })
            ->where('role', 'admin')
            ->pluck('id')
            ->toArray();
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

    public function update(User $model, array $data)
    {
        return $model->update($data);
    }

    public function delete(User $model)
    {
        return $model->delete();
    }
}
