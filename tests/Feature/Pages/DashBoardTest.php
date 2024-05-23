<?php

namespace Tests\Feature\Pages;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

class DashBoardTest extends TestCase
{

    use RefreshDatabase;

    public function test_user_cannot_access_without_auth(): void
    {
        $response = $this->get('/dashboard');

        // $response->dump();

        $response->assertRedirect(route('login', absolute: false));
    }

    public function test_user_can_access_with_auth(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('/dashboard');

        // $response->dump();

        $response->assertStatus(200);
    }

    public function test_can_view_sidebar_options(): void {

        $user = User::factory()->create();

        $this
            ->actingAs($user)
            ->get('/dashboard')
            ->assertOk()
            ->assertInertia(fn(Assert $page) => $page->component('Dashboard'));

        $this
            ->actingAs($user)
            ->get('/module-list')
            ->assertOk()
            ->assertInertia(fn(Assert $page) => $page->component('Modules/Index'));
    }
}
