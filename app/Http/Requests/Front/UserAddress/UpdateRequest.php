<?php

namespace App\Http\Requests\Front\UserAddress;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use App\Classes\Adapters\Front\UserAddress\UserAddressRequestAdapter;

class UpdateRequest extends FormRequest
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
        return UserAddressRequestAdapter::rulesUpdated($this->id);
    }

    public function data()
    {
        return UserAddressRequestAdapter::transform($this->all() + ['user_id' => $this->user_id]);
    }

    public function attributes()
    {
        return UserAddressRequestAdapter::attributes();
    }

    public function failedValidation($validator)
    {
        throw new ValidationException($validator);
    }
}
