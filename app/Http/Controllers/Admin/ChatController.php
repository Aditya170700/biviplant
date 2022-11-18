<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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
        return Inertia::render('Dashboard/Chat/Index', [
            'user' => auth()->user(),
            'customers' => $this->user->getPaginateCustomers($request)
        ]);
    }

    public function show(Request $request)
    {
        try {
            $conversation = $this->conversation->getBySenderReceiver($request->sender_id);
            return response()->json($conversation);
        } catch (\Throwable $th) {
            panic($th);
        }
    }
}
