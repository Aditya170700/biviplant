<?php

namespace App\Classes\Repository;

use Illuminate\Database\Eloquent\Model;

class BaseRepository implements BaseRepositoryInterface
{
    private $model;
    private $table;

    public function __construct(Model $model)
    {
        $this->model = $model;
        $this->table = $this->setTable();
    }

    public function getModel()
    {
        return $this->model;
    }

    protected function setModel($model)
    {
        $this->model = $model;
    }

    public function getAll($with=null)
    {
        $model = $this->model;
        if ($with) {
            $model = $model->with($with);
        }

        return $model->latest()
                    ->all();
    }

    public function find($id, $with=null)
    {
        $model = $this->model;
        if ($with) {
            $model = $model->with($with);
        }

        return $model->findOrFail($id);
    }

    public function store(array $data)
    {
        return $this->model->create($data);
    }

    public function update(Model $model, array $data)
    {
        return $model->update($data);
    }

    public function destroy(Model $model)
    {
        return $model->delete();
    }

    private function setTable()
    {
        return $this->getModel()->getTable();
    }

    public function table()
    {
        return $this->table;
    }

    /**
     * Function Find By specified column
     * @param string $column
     * @param mix $value
     * @param array $with - for eager loading
     */
    public function findBy(string $column, $value, array $with=null)
    {
        $model = $this->model;
        if ($with) {
            $model = $model->with($with);
        }

        $result = $model->where($column, $value)->get();

        return $result->isEmpty() ? null : $result;
    }
}
