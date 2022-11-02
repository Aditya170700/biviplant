<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Rating\PaginateCollection;
use App\Interfaces\RatingInterface;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    public function __construct(RatingInterface $ratingInterface)
    {
        $this->ratingInterface = $ratingInterface;
    }

    public function index($productId)
    {
        $results = $this->ratingInterface
            ->getPaginated($productId);

        return new PaginateCollection($results);
    }
}
