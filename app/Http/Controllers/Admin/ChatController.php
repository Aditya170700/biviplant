<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Dashboard/Chat/Index');
    }
}
