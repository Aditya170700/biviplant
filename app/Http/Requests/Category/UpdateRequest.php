<?php

namespace App\Http\Requests\Category;

use App\Services\File;
use App\Models\Category;
use App\Interfaces\CategoryInterface;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use App\Classes\Adapters\Admin\Category\CategoryRequestAdapter;

class UpdateRequest extends FormRequest
{
    public function __construct(CategoryInterface $categoryInterface)
    {
        $this->repository = $categoryInterface;
    }

    public function getCategory()
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
        return CategoryRequestAdapter::rulesUpdated();
    }

    public function banner()
    {
        if ($this->hasFile('banner')) {
            return File::upload('categories/banners', $this->file('banner'));
        }

        return $this->getCategory()->banner;
    }

    public function icon()
    {
        if ($this->hasFile('icon')) {
            return File::upload('categories/icons', $this->file('icon'));
        }

        return $this->getCategory()->icon;
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
