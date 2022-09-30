<?php

namespace App\Http\Controllers\Admin;

use App\Classes\Constants\ProductCondition;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\File\StoreRequest as FileStoreRequest;
use App\Http\Requests\Admin\Product\StoreRequest;
use App\Http\Requests\Admin\Product\UpdateRequest;
use App\Interfaces\CategoryInterface;
use App\Interfaces\FileInterface;
use App\Interfaces\OriginInterface;
use App\Interfaces\ProductInterface;

class ProductController extends Controller
{
    public function __construct(Request $request, ProductInterface $productInterface, CategoryInterface $categoryInterface, FileInterface $fileInterface, OriginInterface $originInterface)
    {
        $this->request = $request;
        $this->productInterface = $productInterface;
        $this->categoryInterface = $categoryInterface;
        $this->fileInterface = $fileInterface;
        $this->originInterface = $originInterface;
    }

    public function index()
    {
        try {
            return Inertia::render('Dashboard/Product/Index', [
                'results' => $this->productInterface->getPaginated($this->request),
                'filters' => $this->request->all(['search', 'field', 'direction', 'limit']),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function create()
    {
        try {
            return Inertia::render('Dashboard/Product/Create', [
                'categories' => $this->categoryInterface->getAll($this->request),
                'product_conditions' => ProductCondition::labels()
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function store(StoreRequest $request)
    {
        try {
            $this->productInterface
                ->create($request->data());

            return redirect()->route('admin.products.index')
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function show($id)
    {
        try {
            return Inertia::render('Dashboard/Product/Show', [
                'result' => $this->productInterface->getById($id, [
                    'category' => function ($query) {
                        $query->select('id', 'name');
                    },
                    'files' => function ($query) {
                        $query->select('id', 'path', 'product_id');
                    },
                ]),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function edit($id)
    {
        try {
            return Inertia::render('Dashboard/Product/Edit', [
                'result' => $this->productInterface->getById($id),
                'categories' => $this->categoryInterface->getAll($this->request),
                'product_conditions' => ProductCondition::labels()
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function update(UpdateRequest $request, $id)
    {
        try {
            $model = $this->productInterface->getById($id);
            $this->productInterface
                ->update($model, $request->data());

            return redirect()->route('admin.products.index')
                ->with('success', 'Berhasil ubah data');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function destroy($id)
    {
        try {
            $this->productInterface->delete($this->productInterface->getById($id));

            return redirect()->route('admin.products.index')
                ->with('success', 'Berhasil hapus data');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function files($id)
    {
        try {
            $result = $this->productInterface->getById($id);
            $result->setRelation('files', $result->files()->paginate(12));

            return Inertia::render('Dashboard/Product/File', [
                'result' => $result,
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function storeFiles(FileStoreRequest $request, $id)
    {
        try {
            $this->fileInterface
                ->create($request->data());

            return redirect()->back()
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function destroyFiles($id, $fileId)
    {
        try {
            $this->fileInterface
                ->delete($this->fileInterface->getById($fileId));

            return redirect()->back()
                ->with('success', 'Berhasil tambah data');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function origins($id)
    {
        try {
            $result = $this->productInterface->getById($id);
            $result->setRelation('origins', $result->origins()->with([
                'subdistrict' => function ($query) {
                    $query->select('id', 'city_id', 'name')
                        ->with([
                            'city' => function ($query) {
                                $query->select('id', 'province_id', 'name')
                                    ->with([
                                        'province' => function ($query) {
                                            $query->select('id', 'name');
                                        }
                                    ]);
                            }
                        ]);
                }
            ])->get());

            return Inertia::render('Dashboard/Product/Origin', [
                'result' => $result,
                'origins' => $this->originInterface->getAll([
                    'subdistrict' => function ($query) {
                        $query->select('id', 'city_id', 'name')
                            ->with([
                                'city' => function ($query) {
                                    $query->select('id', 'province_id', 'name')
                                        ->with([
                                            'province' => function ($query) {
                                                $query->select('id', 'name');
                                            }
                                        ]);
                                }
                            ]);
                    }
                ]),
            ]);
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function attachOrigins($id, $originId)
    {
        try {
            $this->productInterface
                ->attachOrigins($this->productInterface->getById($id), $this->originInterface->getById($originId));

            return redirect()->route('admin.products.index')
                ->with('success', 'Berhasil pilih data');
        } catch (\Throwable $th) {
            panic($th);
        }
    }

    public function detachOrigins($id, $originId)
    {
        try {
            $this->productInterface
                ->detachOrigins($this->productInterface->getById($id), $this->originInterface->getById($originId));

            return redirect()->route('admin.products.index')
                ->with('success', 'Berhasil hapus data');
        } catch (\Throwable $th) {
            panic($th);
        }
    }
}
