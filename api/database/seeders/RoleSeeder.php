<?php

namespace Database\Seeders;

use App\Enums\RoleEnum;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [[
            'name' => RoleEnum::ADMIN->toString()
        ], [
            'name' => RoleEnum::GUEST->toString()
        ]];

        Role::upsert($roles, ['name']);
    }
}
