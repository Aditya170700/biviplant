<?php

namespace App\Classes\Adapters\Admin\Setting;

use App\Classes\Adapters\DataRequestAdapterInterface;

class SettingRequestAdapter implements DataRequestAdapterInterface
{
    public static function rulesCreated(): array
    {
        return [
            'meta_title' => 'required|string|max:255',
            'meta_description' => 'required|string|max:255',
            'meta_keyword' => 'required|string|max:255',
            'owner' => 'required|string|max:255',
            'facebook' => 'required|string|max:255',
            'ig' => 'required|string|max:255',
            'tiktok' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'about_us' => 'required|string',
            'privacy_policy' => 'required|string',
        ];
    }

    public static function rulesUpdated($id): array
    {
        return [];
    }

    public static function transform($data)
    {
        return [
            'meta_title' => $data['meta_title'],
            'meta_description' => $data['meta_description'],
            'meta_keyword' => $data['meta_keyword'],
            'owner' => $data['owner'],
            'facebook' => $data['facebook'],
            'ig' => $data['ig'],
            'tiktok' => $data['tiktok'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'about_us' => $data['about_us'],
            'privacy_policy' => $data['privacy_policy'],
            'logo' => $data['logo_url_adapter'],
        ];
    }

    public static function attributes(): array
    {
        return [
            'meta_title' => 'Meta Title',
            'meta_description' => 'Meta Deskription',
            'meta_keyword' => 'Meta Keyword',
            'owner' => 'Owner',
            'facebook' => 'Link Profil Facebook',
            'ig' => 'Link Profil Instagram',
            'tiktok' => 'Link Profil Tiktok',
            'email' => 'Email',
            'phone' => 'No HP',
            'about_us' => 'Tentang Kami',
            'privacy_policy' => 'Kebijakan Pribadi',
            'logo' => 'Logo',
        ];
    }
}
