<?php

namespace App\Interfaces;

use App\Models\UserAddress;

interface UserAddressInterface
{
    public function getPaginated($request);
    public function getById(string $id);
    public function create(array $data);
    public function update(UserAddress $model, array $data);
    public function makePrimary(UserAddress $model);
    public function makeNotPrimary(UserAddress $model);
    public function delete(UserAddress $model);
}
