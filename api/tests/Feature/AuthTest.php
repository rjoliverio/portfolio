<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Socialite\Facades\Socialite;
use Mockery;
use Tests\Support\AuthTrait;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use AuthTrait, RefreshDatabase;
    public function test_sign_in_to_google_redirect(): void
    {
        $provider = Mockery::mock('Laravel\Socialite\Contracts\Provider');
        $provider->shouldReceive('redirect')->andReturn($provider);
        $provider->shouldReceive('stateless')->andReturn($provider);

        Socialite::shouldReceive('driver')->with('google')->andReturn($provider);
        $response = $this->get('api/redirect');
        $response->assertStatus(200);
    }

    public function test_sign_in_to_google_callback(): void
    {
        $abstractUser = Mockery::mock('Laravel\Socialite\Two\User');
        $abstractUser->email = 'rjoliverio@test.com';
        $abstractUser->name = 'Rj Oliverio';
        $abstractUser->avatar = 'https://en.gravatar.com/userimage';

        $provider = Mockery::mock('Laravel\Socialite\Contracts\Provider');
        $provider->shouldReceive('user')->andReturn($abstractUser);
        $provider->shouldReceive('stateless')->andReturn($provider);

        Socialite::shouldReceive('driver')->with('google')->andReturn($provider)->once();
        $response = $this->get('api/callback');
        $response->assertStatus(302);
    }

    public function test_show_user(): void
    {
        $user = $this->createUser();
        $this->createAuth($user);
        $response = $this->get("api/auth", $this->getTokenHeader());
        $data = $response->getOriginalContent();
        $response->assertStatus(200);
        $this->assertEquals($user->id, $data['id']);
    }

    public function test_logout_user(): void
    {
        $user = $this->createUser();
        $this->createAuth($user);
        $response = $this->post("api/logout", $this->getTokenHeader());
        $response->assertStatus(204);
    }
}
