<?php

namespace App\Http\Controllers;

use App\Classes\ListDataRepositoryCreator;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Module;

class ModulesController extends Controller
{
  public function __construct(
    protected ListDataRepositoryCreator $repository
  ) {
  }

  public function index(Request $request)
  {
    return Inertia::render('Modules/Index', [
      'dataItems' => $this->repository->listData(),
      'headers' => $this->repository->getTableHeaders()
    ]);
  }
}
