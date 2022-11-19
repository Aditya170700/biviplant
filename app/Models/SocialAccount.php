<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Uuid;

class SocialAccount extends Model
{
    use HasFactory, Uuid;

    protected $guarded = [];

    function user()
    {
        return $this->belongsTo(User::class);
    }
}
