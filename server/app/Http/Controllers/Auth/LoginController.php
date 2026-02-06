<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\ApiResponseTrait;

class LoginController extends Controller
{
    use ApiResponseTrait;

    /**
     * Handle an authentication attempt.
     */
    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]);

            $user = \App\Models\User::where('email', $request->email)->first();

            if (! $user || ! \Illuminate\Support\Facades\Hash::check($request->password, $user->password)) {
                return $this->validationError([
                    'email' => ['The provided credentials do not match our records.'],
                ], 'Login failed');
            }

            $token = $user->createToken('auth_token')->plainTextToken;

            return $this->success([
                'access_token' => $token,
                'token_type' => 'Bearer',
                'user' => $user
            ], 'Authenticated successfully.');

        } catch (\Exception $e) {
            return $this->handleException($e);
        }
    }

    /**
     * Log the user out of the application.
     */
    public function logout(Request $request)
    {
        try {
            // Revoke the token that was used to authenticate the current request
            if ($request->user()) {
                $request->user()->currentAccessToken()->delete();
            }

            return $this->success(null, 'Logged out successfully.');

        } catch (\Exception $e) {
            return $this->handleException($e);
        }
    }
}
