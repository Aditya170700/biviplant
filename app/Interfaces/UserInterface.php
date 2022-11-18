<?php

namespace App\Interfaces;

use App\Models\User;

interface UserInterface
{
    public function getPaginated($request);
    public function getPaginateCustomers($request);
    public function getAdminId($request);
    public function getById(string $id);
    public function create(array $data);
    public function update(User $model, array $data);
    public function delete(User $model);
}
