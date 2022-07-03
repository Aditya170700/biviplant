<?php

namespace App\Http\Requests\Admin\Setting;

use App\Classes\Adapters\Admin\Setting\SettingRequestAdapter;
use App\Interfaces\SettingInterface;
use App\Services\File;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class StoreRequest extends FormRequest
{
    public function __construct(SettingInterface $settingInterface)
    {
        $this->repository = $settingInterface;
    }

    public function getData()
    {
        return $this->repository->getOne();
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
        return SettingRequestAdapter::rulesCreated();
    }

    public function logo()
    {
        if ($this->hasFile('logo')) {
            return File::upload('settings/logo', $this->file('logo'));
        }

        return $this->getData()->logo ?? null;
    }

    public function data()
    {
        return SettingRequestAdapter::transform($this->all() + [
            'logo_url_adapter' => $this->logo(),
        ]);
    }

    public function attributes()
    {
        return SettingRequestAdapter::attributes();
    }

    public function failedValidation($validator)
    {
        throw new ValidationException($validator);
    }
}
