<?php

namespace App\Http\Requests\Admin\Product;

use App\Interfaces\ProductInterface;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use App\Classes\Adapters\Admin\Product\ProductRequestAdapter;

class UpdateRequest extends FormRequest
{
    public function __construct(ProductInterface $ProductInterface)
    {
        $this->repository = $ProductInterface;
    }

    public function getModelById()
    {
        return $this->repository->getById($this->id);
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return ProductRequestAdapter::rulesUpdated($this->id);
    }

    public function data()
    {
        return ProductRequestAdapter::transform($this->all());
    }

    public function attributes()
    {
        return ProductRequestAdapter::attributes();
    }

    public function failedValidation($validator)
    {
        throw new ValidationException($validator);
    }
}
