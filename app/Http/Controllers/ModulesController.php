<?php

namespace App\Http\Controllers;

use App\Classes\ListDataRepositoryCreator;
use Illuminate\Http\Request;
use App\Http\Requests\GetModulesRequest;
use App\Http\Requests\StoreModuleRequest;
use Inertia\Inertia;
use App\Models\Module;

class ModulesController extends Controller
{
  public function __construct(
    protected ListDataRepositoryCreator $repository
  ) {
  }

  public function index(GetModulesRequest $request)
  {
    return Inertia::render('Modules/Index', [
      'dataItems' => $this->repository->listData($request->all()),
      'headers' => $this->repository->getTableHeaders(),
      'path_module' => 'module',
      'delete_action' => 'delete',
      'udpate_action' => 'update',
      'index_action' => 'index'
    ]);
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Request $request, Module $item)
  {
    $this->repository->deleteItem($item);
    return to_route('module.index', $request->all());
  }

  /**
   * Display the specified resource.
   */
  public function show(Module $module)
  {
    return Inertia::render('Modules/Show', compact('module'));
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(StoreModuleRequest $request, Module $module)
  {
    $module->update($request->all());

    return redirect()->route('module.index');
      // ->with('status', 'item updated');
  }
}
