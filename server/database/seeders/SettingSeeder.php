<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    public function run(): void
    {
        $settings = [
            [
                'key' => 'site_config',
                'value' => [
                    'app_name' => 'Sekolah Beta',
                    'app_logo' => '/assets/logo.png',
                    'meta_description' => 'Aplikasi Sekolah Beta Laravel + Vue',
                    'theme_color' => '#000000',
                ],
            ],
            [
                'key' => 'contact_info',
                'value' => [
                    'email' => 'admin@sekolahbeta.com',
                    'phone' => '+62 812 3456 7890',
                    'address' => 'Jakarta, Indonesia',
                ]
            ],
            [
                'key' => 'feature_flags',
                'value' => [
                    'enable_registration' => true,
                    'enable_notifications' => false,
                ]
            ]
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(
                ['key' => $setting['key']],
                ['value' => $setting['value']]
            );
        }
    }
}
