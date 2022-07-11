<?php

namespace App\Http\Requests\Admin\File;

use App\Services\File;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use App\Classes\Adapters\Admin\File\FileRequestAdapter;

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
        return FileRequestAdapter::rulesCreated();
    }

    public function path()
    {
        return File::uploadAs('files', $this->file('path'), "{$this->name}.{$this->ext}");
    }

    public function data()
    {
        return FileRequestAdapter::transform($this->all() + [
            'path_url_adapter' => $this->path(),
        ]);
    }

    public function attributes()
    {
        return FileRequestAdapter::attributes();
    }

    public function failedValidation($validator)
    {
        throw new ValidationException($validator);
    }
}
