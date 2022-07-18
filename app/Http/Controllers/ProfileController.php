<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function __construct(
        Request $request,
    ) {
        $this->request = $request;
    }

    public function index()
    {
        try {
            return Inertia::render('Profile/Show');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
