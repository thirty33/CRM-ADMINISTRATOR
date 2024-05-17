<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Illuminate\Support\Facades\App;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'local' => App::currentLocale(),
            'language' => function () {
                if (!file_exists(lang_path(App::currentLocale()
                    . '/' . App::currentLocale() . '.json'))) {
                    return [];
                }
                return json_decode(
                    file_get_contents(
                        lang_path(App::currentLocale() . '/'
                            . App::currentLocale() . '.json')
                    ),
                    true
                );
            }
        ];
    }
}
