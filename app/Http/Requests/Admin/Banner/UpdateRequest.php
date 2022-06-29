<?php

namespace App\Http\Requests\Admin\Banner;

use App\Classes\Adapters\Admin\Banner\BannerRequestAdapter;
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
        return BannerRequestAdapter::rulesUpdated($this->id);
    }

    public function banner()
    {
        return Banner::find($this->id);
    }

    public function pathUrl()
    {
        if ($this->hasFile('path')) {
            return File::upload('banners', $this->file('path'));
        }

        return $this->banner()->path;
    }

    public function data()
    {
        $data = array_merge($this->all(), ['path_url' => $this->pathUrl()]);
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
