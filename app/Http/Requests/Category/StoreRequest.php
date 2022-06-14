<?php

namespace App\Http\Requests\Category;

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
        return [
            'name' => 'required|string|max:255',
            'meta_title' => 'required|string|max:255',
            'meta_description' => 'required|string|max:255',
            'meta_keyword' => 'required|string|max:255',
            'banner' => 'required|image|mimes:jpeg,png,jpg|max:2048',
            'icon' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ];
    }

    public function banner()
    {
        return File::upload('categories/banners', $this->file('banner'));
    }

    public function icon()
    {
        return File::upload('categories/icons', $this->file('icon'));
    }

    public function attributes()
    {
        return [
            'name' => 'Name',
            'meta_title' => 'Meta Title',
            'meta_description' => 'Meta Description',
            'meta_keyword' => 'Meta Keyword',
            'banner' => 'Banner',
            'icon' => 'Icon',
        ];
    }

    public function failedValidation($validator)
    {
        throw new ValidationException($validator);
    }
}
