<?php

namespace App\Classes\Repository;

use Illuminate\Database\Eloquent\Model;

interface BaseRepositoryInterface
{
    public function getAll(array $with=null);
    public function find($id, array $with=null);
    public function store(array $data);
    public function update(Model $model, array $data);
    public function destroy(Model $model);
    public function getModel();
}
