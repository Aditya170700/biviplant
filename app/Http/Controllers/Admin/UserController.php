<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Interfaces\UserInterface;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Http\Requests\User\UpdateRequest;

class UserController extends Controller
{
    public function __construct(Request $request, UserInterface $userInterface)
    {
        $this->request = $request;
        $this->userInterface = $userInterface;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return Inertia::render('Dashboard/User/Index', [
                'results' => $this->userInterface->getPaginated($this->request),
                'filters' => $this->request->all(['search', 'field', 'direction', 'limit']),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        try {
            return Inertia::render('Dashboard/User/Create');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRequest $request)
    {
        try {
            $this->userInterface
                ->create($request->data());

            return redirect()->route('admin.users.index')
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            return Inertia::render('Dashboard/User/Show', [
                'result' => $this->userInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try {
            return Inertia::render('Dashboard/User/Edit', [
                'result' => $this->userInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRequest $request, $id)
    {
        try {
            $model = $this->userInterface->getById($id);
            $this->userInterface
                ->update($model, $request->data());

            return redirect()->route('admin.users.index')
                ->with('success', 'Berhasil ubah data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $this->userInterface->delete($this->userInterface->getById($id));

            return redirect()->route('admin.users.index')
                ->with('success_delete', 'Berhasil hapus data');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
