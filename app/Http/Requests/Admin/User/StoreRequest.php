<?php

namespace App\Http\Requests\Admin\User;

use App\Classes\Adapters\Admin\User\UserRequestAdapter;
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
        return UserRequestAdapter::rulesCreated();
    }

    public function profilePhotoPath()
    {
        return File::upload('users/profile_photo_path', $this->file('photo'));
    }

    public function data()
    {
        return UserRequestAdapter::transform($this->all() + [
            'password_adapter' => bcrypt($this->password),
            'photo_url_adapter' => $this->profilePhotoPath(),
        ]);
    }

    public function attributes()
    {
        return UserRequestAdapter::attributes();
    }

    public function failedValidation($validator)
    {
        throw new ValidationException($validator);
    }
}
