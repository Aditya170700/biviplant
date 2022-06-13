<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index()
    {
        try {
            return Inertia::render('Dashboard/Index');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
