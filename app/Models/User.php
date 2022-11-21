<?php

namespace App\Models;

use App\Traits\Uuid;
use App\Services\File;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Jetstream\HasProfilePhoto;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, HasProfilePhoto, Notifiable, TwoFactorAuthenticatable, Uuid;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'string',
        'email_verified_at' => 'datetime',
    ];
    public $incrementing = false;
    protected $keyType = 'string';

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_path_url',
        'is_admin',
    ];

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function unreadMessages()
    {
        return $this->hasMany(Message::class)
            ->whereHas('conversation', function($q) {
                $q->where('receiver_id', auth()->id())
                    ->orWhere('sender_id', auth()->id());
            })
            ->whereNull('read_at');
    }

    protected function profilePhotoPathUrl(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $attributes['profile_photo_path']
                ? File::show($attributes['profile_photo_path'])
                : "https://ui-avatars.com/api/?background=00B894&color=fff&name={$attributes['name']}",
        );
    }

    protected function isAdmin(): Attribute
    {
        return Attribute::make(
            get: fn ($value, $attributes) => $attributes['role'] == 'admin',
        );
    }

    public function social_accounts()
    {
        return $this->hasMany(SocialAccount::class);
    }
    public function conversationAsSender()
    {
        return $this->hasMany(Conversation::class, 'sender_id');
    }

    public function conversationAsReceiver()
    {
        return $this->hasMany(Conversation::class, 'receiver_id');
    }
}
