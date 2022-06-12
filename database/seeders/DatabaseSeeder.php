<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Ramsey\Uuid\Uuid;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'id' => Uuid::uuid6(),
            'name' => 'Admin',
            'email' => 'admin@biviplant.com',
            'phone' => '08364746473',
            'role' => 'admin',
        ]);

        \App\Models\User::factory()->create([
            'id' => Uuid::uuid6(),
            'name' => 'Customer',
            'email' => 'customer@biviplant.com',
            'phone' => '08364746473',
            'role' => 'customer',
        ]);
    }
}
