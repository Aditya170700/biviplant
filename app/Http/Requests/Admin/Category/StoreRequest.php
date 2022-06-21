<?php

namespace App\Http\Requests\Admin\Category;

use App\Classes\Adapters\Admin\Category\CategoryRequestAdapter;
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
        dd($this->all());
        return CategoryRequestAdapter::rulesCreated();
    }

    public function banner()
    {
        return File::upload('categories/banners', $this->file('banner'));
    }

    public function icon()
    {
        return File::upload('categories/icons', $this->file('icon'));
    }

    public function data()
    {
        return CategoryRequestAdapter::transform($this->all() + [
            'banner_url_adapter' => $this->banner(),
            'icon_url_adapter' => $this->icon(),
        ]);
    }

    public function attributes()
    {
        return CategoryRequestAdapter::attributes();
    }

    public function failedValidation($validator)
    {
        throw new ValidationException($validator);
    }
}
