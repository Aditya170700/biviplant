<?php

namespace App\Http\Requests\Admin\Event;

use App\Classes\Adapters\Admin\Event\EventRequestAdapter;
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
        return EventRequestAdapter::rulesCreated();
    }

    public function path()
    {
        return File::upload('event/banners', $this->file('path'));
    }

    public function data()
    {
        $data = $this->all()+['path_url' => $this->path()];
        return EventRequestAdapter::transform($data);
    }

    public function attributes()
    {
        return EventRequestAdapter::attributes();
    }

    public function failedValidation($validator)
    {
        throw new ValidationException($validator);
    }
}
