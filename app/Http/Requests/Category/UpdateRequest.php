<?php

namespace App\Http\Requests\Category;

use App\Services\File;
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
        return [
            'name' => 'required|string|max:255',
            'meta_title' => 'required|string|max:255',
            'meta_description' => 'required|string|max:255',
            'meta_keyword' => 'required|string|max:255',
        ];
    }

    public function banner()
    {
        if ($this->hasFile('banner')) {
            return File::upload('categories/banners', $this->file('banner'));
        }

        return NULL;
    }

    public function icon()
    {
        if ($this->hasFile('icon')) {
            return File::upload('categories/icons', $this->file('icon'));
        }

        return NULL;
    }

    public function attributes()
    {
        return [
            'name' => 'Name',
            'meta_title' => 'Meta Title',
            'meta_description' => 'Meta Description',
            'meta_keyword' => 'Meta Keyword',
        ];
    }

    public function failedValidation($validator)
    {
        throw new ValidationException($validator);
    }
}
