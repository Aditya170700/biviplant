<?php

namespace App\Http\Requests\Admin\Banner;

use App\Classes\Adapters\Admin\Banner\BannerRequestAdapter;
use App\Services\File;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

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
        return BannerRequestAdapter::rulesCreated();
    }

    public function path()
    {
        return File::upload('banners', $this->file('path'));
    }

    public function data()
    {
        $data = $this->all()+['path_url' => $this->path()];
        return BannerRequestAdapter::transform($data);
    }

    public function attributes()
    {
        return BannerRequestAdapter::attributes();
    }

    public function failedValidation($validator)
    {
        throw new ValidationException($validator);
    }
}
