<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function index()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    public function store()
    {
        $googleUser = Socialite::driver('google')->stateless()->user();

        $user = User::updateOrCreate([
            'email' => $googleUser->email,
        ], [
            'name' => $googleUser->name,
            'avatar' => $googleUser->avatar
        ]);
        $token = $user->createToken('access-token')->plainTextToken;
        Auth::login($user);
        return Redirect::to(env('FRONTEND_URL') . "?access_token=" . $token);
    }

    public function show()
    {
        return new UserResource(Auth::user());
    }

    public function destroy()
    {
        auth()->user()->currentAccessToken()->delete();
        return response()->noContent();
    }
}
