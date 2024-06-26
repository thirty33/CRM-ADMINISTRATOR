<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
  ]);
});

Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware([
  'auth',
  'verified'
])->group(function () {
  Route::get('/module-list', [\App\Http\Controllers\ModulesController::class, 'index'])
    ->name('module.index');
  Route::get('/module-list/{module}', [\App\Http\Controllers\ModulesController::class, 'show'])
    ->name('module.show');
  Route::delete('/module-delete/{item}', [\App\Http\Controllers\ModulesController::class, 'destroy'])
    ->name('module.delete');
  Route::patch('/module-list/{module}', [\App\Http\Controllers\ModulesController::class, 'update'])
    ->name('module.update');
});

Route::get('/404', function () {
  return '';
})->name('page404');

require __DIR__ . '/auth.php';
