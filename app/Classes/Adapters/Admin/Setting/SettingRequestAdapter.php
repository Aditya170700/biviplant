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
            'mail_mailer' => $data['mail_mailer'],
            'mail_host' => $data['mail_host'],
            'mail_port' => $data['mail_port'],
            'mail_username' => $data['mail_username'],
            'mail_password' => $data['mail_password'],
            'mail_encryption' => $data['mail_encryption'],
            'mail_from_address' => $data['mail_from_address'],
            'mail_from_name' => $data['mail_from_name'],
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
            'mail_mailer' => 'Mail Mailer',
            'mail_host' => 'Mail Host',
            'mail_port' => 'Mail Port',
            'mail_username' => 'Mail Username',
            'mail_password' => 'Mail Password',
            'mail_encryption' => 'Mail Encryption',
            'mail_from_address' => 'Mail From Address',
            'mail_from_name' => 'Mail From Name',
        ];
    }
}
