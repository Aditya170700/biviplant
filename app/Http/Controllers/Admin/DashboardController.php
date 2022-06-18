<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        try {
            if ($request->refreshPage) {
                cache()->flush();
            }

            return Inertia::render('Dashboard/Index', [
                'refreshPage' => cache('refreshPage'),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
