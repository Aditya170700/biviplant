<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Requests\Front\Profile\UpdateRequest;
use App\Interfaces\UserInterface;

class ProfileController extends Controller
{
    public function __construct(Request $request, UserInterface $userInterface)
    {
        $this->request = $request;
        $this->userInterface = $userInterface;
    }

    public function index()
    {
        try {
            return Inertia::render('Profile/Show');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function edit()
    {
        try {
            return Inertia::render('Profile/Edit');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function update(UpdateRequest $request)
    {
        try {
            $model = $this->userInterface->getById($request->id);
            $this->userInterface
                ->update($model, $request->data());

            return redirect()->back()
                ->with('success', 'Berhasil ubah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
