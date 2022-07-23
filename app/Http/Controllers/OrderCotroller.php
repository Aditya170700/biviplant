<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class OrderCotroller extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function history()
    {
        try {
            return Inertia::render('Order/History');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
