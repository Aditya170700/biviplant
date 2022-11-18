<?php

namespace App\Repositories;

use App\Models\Conversation;
use App\Interfaces\ConversationInterface;

class ConversationRepository implements ConversationInterface
{
    public function __construct(Conversation $model)
    {
        $this->model = $model;
    }

    public function getBySenderReceiver($receiverId)
    {
        $conversation = $this->model
            ->with([
                'messages' => function ($query) {
                    $query->orderBy('created_at', 'asc')
                        ->with(['user']);
                },
                'receiver',
                'sender',
            ])
            ->whereIn('sender_id', is_array($receiverId) ? $receiverId : [auth()->id(), $receiverId])
            ->whereIn('receiver_id', is_array($receiverId) ? $receiverId : [auth()->id(), $receiverId])
            ->first();

        if (!$conversation) {
            if (is_array($receiverId)) {
                foreach ($receiverId as $id) {
                    $conversation = $this->create([
                        'sender_id' => auth()->id(),
                        'receiver_id' => $id
                    ]);
                }
            }else {
                $conversation = $this->create([
                    'sender_id' => auth()->id(),
                    'receiver_id' => $receiverId
                ]);
            }
            $conversation->load([
                'messages' => function ($query) {
                    $query->orderBy('created_at', 'asc')
                        ->with(['user']);
                },
                'receiver',
                'sender',
            ]);
        }
        return $conversation;
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

    public function update(Conversation $model, array $data)
    {
        return $model->update($data);
    }

    public function delete(Conversation $model)
    {
        return $model->delete();
    }
}
