<?php

namespace App\Http\Requests\Admin\Origin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use App\Classes\Adapters\Admin\Origin\OriginRequestAdapter;

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
        return OriginRequestAdapter::rulesCreated();
    }

    public function data()
    {
        return OriginRequestAdapter::transform($this->all());
    }

    public function attributes()
    {
        return OriginRequestAdapter::attributes();
    }

    public function failedValidation($validator)
    {
        throw new ValidationException($validator);
    }
}
