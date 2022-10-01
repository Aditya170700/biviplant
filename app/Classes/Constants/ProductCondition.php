<?php

namespace App\Classes\Constants;

class ProductCondition
{
    const SEED_PLANT = 1;
    const YOUNG_PLANT = 2;
    const FRUIT_PLANT = 3;
    const BIG_PLANT = 4;
    const FLOWER_PLANT = 5;

    public static function labels(): array
    {
        return [
            self::SEED_PLANT => 'Bibit Tanaman',
            self::YOUNG_PLANT => 'Tanaman Remaja',
            self::FRUIT_PLANT => 'Tanaman Berbuah',
            self::BIG_PLANT => 'Tanaman Induk',
            self::FLOWER_PLANT => 'Tanaman Bunga'
            
        ];
    }

    public static function label(int $id)
    {
        return $id ? self::labels()[$id] : null;
    }

}