<?php

namespace App\Interfaces;

use App\Models\Conversation;

interface ConversationInterface
{
    public function getBySenderReceiver($receiverId);
    public function getById(string $id);
    public function create(array $data);
    public function update(Conversation $model, array $data);
    public function delete(Conversation $model);
}
