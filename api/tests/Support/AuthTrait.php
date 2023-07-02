<?php

namespace Tests\Support;

use App\Enums\RoleEnum;
use App\Models\Role;
use App\Models\User;
use Laravel\Sanctum\Sanctum;

trait AuthTrait
{
    public function getTokenHeader()
    {
        $token = User::create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'avatar' => 'https://en.gravatar.com/userimage'
        ])->createToken('access-token')->plainTextToken;
        return ["Authorization" => "Bearer {$token}"];
    }
    public function createUser()
    {
        Role::updateOrCreate(['id' => RoleEnum::GUEST->value, 'name' => 'guest']);
        return User::factory()->create();
    }
    public function createAuth($user)
    {
        Sanctum::actingAs($user);
    }
}
