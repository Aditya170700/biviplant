<?php

namespace App\Http\Requests\Banner;

use App\Interfaces\BannerInterface;
use App\Models\Banner;
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
            'title' => 'required|string|max:255',
            'sub_title' => 'required|string|max:255',
            'link' => 'required|string|max:255',
            'path' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ];
    }

    public function banner()
    {
        return Banner::find($this->id);
    }

    public function path()
    {
        if ($this->hasFile('path')) {
            return File::upload('banners', $this->file('path'));
        }

        return $this->banner()->path;
    }

    public function data()
    {
        return [
            'title' => $this->title,
            'sub_title' => $this->sub_title,
            'link' => $this->link,
            'path' => $this->path(),
        ];
    }

    public function attributes()
    {
        return [
            'title' => 'Judul',
            'sub_title' => 'Sub Judul',
            'link' => 'Link',
            'path' => 'Gambar'
        ];
    }

    public function failedValidation($validator)
    {
        throw new ValidationException($validator);
    }
}
