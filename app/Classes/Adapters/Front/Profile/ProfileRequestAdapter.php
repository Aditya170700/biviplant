<?php

namespace App\Classes\Adapters\Front\Profile;

use App\Classes\Adapters\DataRequestAdapterInterface;

class ProfileRequestAdapter implements DataRequestAdapterInterface
{
    public static function rulesCreated(): array
    {
        return [];
    }

    public static function rulesUpdated($id): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|unique:users,email,' . $id,
            'phone' => 'required|string|max:255|unique:users,phone,' . $id,
            'password' => 'confirmed',
        ];
    }

    public static function transform($data)
    {
        return [
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password_adapter'],
            'phone' => $data['phone'],
            'profile_photo_path' => $data['photo_url_adapter'],
        ];
    }

    public static function attributes(): array
    {
        return [
            'name' => 'Nama',
            'email' => 'Email',
            'password' => 'Password',
            'phone' => 'No Telepon',
            'profile_photo_path' => 'Foto Profil',
        ];
    }
}
