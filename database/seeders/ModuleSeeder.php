<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Module;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Module::factory()->create([
          'route' => '/module-list',
          'description' => 'list modules',
          'title' => 'Module List',
          'label' => 'Module List',
        ]);

        Module::factory()->create([
          'route' => '/user-list',
          'description' => 'list users',
          'title' => 'User List',
          'label' => 'User List',
        ]);

        Module::factory()->create([
          'route' => '/role-list',
          'description' => 'role list',
          'title' => 'Role List',
          'label' => 'Role List',
        ]);

        Module::factory()->create([
          'route' => '/company-list',
          'description' => 'company list',
          'title' => 'Role List',
          'label' => 'Role List',
        ]);
        Module::factory()->create([
          'route' => '/module-list',
          'description' => 'list modules',
          'title' => 'Module List',
          'label' => 'Module List',
        ]);

        Module::factory()->create([
          'route' => '/user-list',
          'description' => 'list users',
          'title' => 'User List',
          'label' => 'User List',
        ]);

        Module::factory()->create([
          'route' => '/role-list',
          'description' => 'role list',
          'title' => 'Role List',
          'label' => 'Role List',
        ]);

        Module::factory()->create([
          'route' => '/company-list',
          'description' => 'company list',
          'title' => 'Role List',
          'label' => 'Role List',
        ]);
        Module::factory()->create([
          'route' => '/module-list',
          'description' => 'list modules',
          'title' => 'Module List',
          'label' => 'Module List',
        ]);

        Module::factory()->create([
          'route' => '/user-list',
          'description' => 'list users',
          'title' => 'User List',
          'label' => 'User List',
        ]);

        Module::factory()->create([
          'route' => '/role-list',
          'description' => 'role list',
          'title' => 'Role List',
          'label' => 'Role List',
        ]);

        Module::factory()->create([
          'route' => '/company-list',
          'description' => 'company list',
          'title' => 'Role List',
          'label' => 'Role List',
        ]);
        Module::factory()->create([
          'route' => '/module-list',
          'description' => 'list modules',
          'title' => 'Module List',
          'label' => 'Module List',
        ]);

        Module::factory()->create([
          'route' => '/user-list',
          'description' => 'list users',
          'title' => 'User List',
          'label' => 'User List',
        ]);

        Module::factory()->create([
          'route' => '/role-list',
          'description' => 'role list',
          'title' => 'Role List',
          'label' => 'Role List',
        ]);

        Module::factory()->create([
          'route' => '/company-list',
          'description' => 'company list',
          'title' => 'Role List',
          'label' => 'Role List',
        ]);

        Module::factory(20)->create();
    }
}
