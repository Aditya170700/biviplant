<?php

namespace App\Http\Requests\Admin\Product;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use App\Classes\Adapters\Admin\Product\ProductRequestAdapter;

class StoreRequest extends FormRequest
{
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
        return ProductRequestAdapter::rulesCreated();
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
