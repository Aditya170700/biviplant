<?php

namespace App\Models;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visit extends Model
{
    use HasFactory, Uuid;

    protected $guarded = [];

    protected $casts = [
        'id' => 'string',
    ];
}
