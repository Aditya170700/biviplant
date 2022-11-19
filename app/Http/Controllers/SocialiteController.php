<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\SocialAccount;
use Laravel\Socialite\Facades\Socialite;
use DB;

class SocialiteController extends Controller
{
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function handleProvideCallback($provider)
    {
        try {
            $user = Socialite::driver($provider)->user();
        } catch (Exception $e) {
            return redirect()->back();
        }

        $authUser = $this->findOrCreateUser($user, $provider);

        auth()->login($authUser, true);

        return redirect()->route('homepage');
    }

    public function findOrCreateUser($socialUser, $provider)
    {
        try {
            $socialAccount = SocialAccount::where('provider_id', $socialUser->getId())
                ->where('provider_name', $provider)
                ->first();

            if ($socialAccount) {
                return $socialAccount->user;
            } else {
                DB::beginTransaction();
                $user = User::where('email', $socialUser->getEmail())->first();

                if (!$user) {
                    $user = User::create([
                        'name' => $socialUser->getName(),
                        'email' => $socialUser->getEmail(),
                        'password' => bcrypt(Str::random(24)),
                        'phone' => '08',
                    ]);
                }

                SocialAccount::create([
                    'provider_id' => $socialUser->getId(),
                    'provider_name' => $provider,
                    'user_id' => $user->id,
                ]);

                DB::commit();
                return $user;
            }
        } catch (Exception $e) {
            DB::rollBack();
            return redirect()->back();
        }
    }
}
