<?php

namespace App\Http\Requests\Admin\Voucher;

use App\Classes\Adapters\Admin\Voucher\VoucherRequestAdapter;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

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
        return VoucherRequestAdapter::rulesCreated();
    }

    public function data()
    {
        return VoucherRequestAdapter::transform($this->all());
    }

    public function attributes()
    {
        return VoucherRequestAdapter::attributes();
    }

    public function failedValidation($validator)
    {
        throw new ValidationException($validator);
    }
}
