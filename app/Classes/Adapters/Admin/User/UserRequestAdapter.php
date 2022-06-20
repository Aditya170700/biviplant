<?php

namespace App\Classes\Adapters\Admin\User;

use App\Classes\Adapters\DataRequestAdapterInterface;

class UserRequestAdapter implements DataRequestAdapterInterface
{
    public static function rulesCreated(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|unique:users',
            'password' => 'required|string|max:255|confirmed',
            'role' => 'required|string|in:admin,customer',
            'phone' => 'required|string|max:255|unique:users',
            'photo' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ];
    }

    public static function rulesUpdated($id): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|unique:users,email,' . $id,
            'role' => 'required|string|in:admin,customer',
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
            'role' => $data['role'],
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
            'role' => 'Role',
            'phone' => 'No Telepon',
            'profile_photo_path' => 'Foto Profil',
        ];
    }
}
