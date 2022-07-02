<?php

namespace App\Interfaces;

use App\Models\Event;

interface EventInterface
{
    public function getPaginated($request);
    public function getOne();
    public function getById(string $id);
    public function create(array $data);
    public function update(Event $model, array $data);
    public function delete(Event $model);
}
