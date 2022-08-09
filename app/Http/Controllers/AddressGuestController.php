<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class AddressGuestController extends Controller
{
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function index()
    {
        try {
            return Inertia::render('AddressGuest/Index');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function create()
    {
        try {
            return Inertia::render('AddressGuest/Create');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function edit(string $id)
    {
        try {
            return Inertia::render('AddressGuest/Edit');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
