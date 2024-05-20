<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Classes\ListDataRepositoryCreator;
use App\Classes\ModuleRepositoryCreator;
use App\Classes\UserRepositoryCreator;
use Illuminate\Contracts\Foundation\Application;
use App\Http\Controllers\ModulesController;

class RepositoryServiceProvider extends ServiceProvider
{
  /**
   * Register services.
   */
  public function register(): void
  {

    $this->app->when(ModulesController::class)
      ->needs(ListDataRepositoryCreator::class)
      ->give(function () {
        return new ModuleRepositoryCreator();
      });
  }

  /**
   * Bootstrap services.
   */
  public function boot(): void
  {
    //
  }
}
