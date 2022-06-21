<?php

namespace App\Http\Requests\Admin\User;

use App\Services\File;
use App\Interfaces\UserInterface;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use App\Classes\Adapters\Admin\User\UserRequestAdapter;

class UpdateRequest extends FormRequest
{
    public function __construct(UserInterface $userInterface)
    {
        $this->repository = $userInterface;
    }

    public function getModelById()
    {
        return $this->repository->getById($this->id);
    }

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
        return UserRequestAdapter::rulesUpdated($this->id);
    }

    public function profilePhotoPath()
    {
        if ($this->hasFile('photo')) {
            return File::upload('users/profile_photo_path', $this->file('photo'));
        }

        return $this->getModelById()->profile_photo_path;
    }

    public function data()
    {
        return UserRequestAdapter::transform($this->all() + [
            'password_adapter' => $this->password ? bcrypt($this->password) : $this->getModelById()->password,
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
