<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Event\StoreRequest;
use App\Http\Requests\Admin\Event\UpdateRequest;
use App\Interfaces\EventInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function __construct(Request $request, EventInterface $eventInterface)
    {
        $this->request = $request;
        $this->eventInterface = $eventInterface;
    }

    public function index()
    {
        try {
            return Inertia::render('Dashboard/Event/Index', [
                'results' => $this->eventInterface->getPaginated($this->request),
                'filters' => $this->request->all(['search', 'field', 'direction', 'limit']),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function create()
    {
        try {
            return Inertia::render('Dashboard/Event/Create');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $this->eventInterface
                ->create($request->data());

            return redirect()->route('admin.events.index')
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function show($id)
    {
        try {
            return Inertia::render('Dashboard/Event/Show', [
                'result' => $this->eventInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function edit($id)
    {
        try {
            return Inertia::render('Dashboard/Event/Edit', [
                'result' => $this->eventInterface->getById($id),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function update(UpdateRequest $request, string $id)
    {
        try {
            $model = $this->eventInterface->getById($id);
            $this->eventInterface
                ->update($model, $request->data());

            return redirect()->route('admin.events.index')
                ->with('success', 'Berhasil ubah data');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function destroy($id)
    {
        try {
            $this->eventInterface->delete($this->eventInterface->getById($id));

            return redirect()->route('admin.events.index')
                ->with('success', 'Berhasil hapus data');
        } catch (\Throwable $th) {
            panic($th);
        }
    }
}
