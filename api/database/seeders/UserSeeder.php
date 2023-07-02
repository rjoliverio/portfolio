<?php

namespace Database\Seeders;

use App\Enums\RoleEnum;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::updateOrCreate(
            [
                'email' => 'rjmoliverio@gmail.com'
            ],
            [
                'name' => 'Rj Oliverio',
                'avatar' => 'https://placehold.co/600x400'
            ]
        );
        $user->roles()->sync([RoleEnum::ADMIN->value, RoleEnum::GUEST->value]);
    }
}
