<?php

namespace App\Http\Controllers;

use App\Interfaces\ConversationInterface;
use App\Interfaces\UserInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    protected $user;
    protected $conversation;

    public function __construct(
        UserInterface $user,
        ConversationInterface $conversation
    )
    {
        $this->user = $user;
        $this->conversation = $conversation;
    }

    public function index(Request $request)
    {
        $admins = $this->user->getAdminId($request);
        $id = array_merge([ auth()->id() ], $admins);
        return Inertia::render('Chat', [
            'meta_title' => 'Chat Admin',
            'meta_description' => 'Fitur chat dengan admin biviplant',
            'meta_keyword' => 'chat, layanan, customer care, customer service',
            'conversation' => $this->conversation->getBySenderReceiver($id)
        ]);
    }
}
