<?php

namespace App\Classes;

use App\Contracts\ListRepositoryInterface;
use App\Http\Resources\ModuleCollection;
use App\Models\Module;

class ModuleRepository implements ListRepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }

    public function getList()
    {
      // $query = Module::paginate(10);
      $query = Module::paginate(2);
      $modules = new ModuleCollection($query);
      return $modules;
    }

    public function getTableHeaders()
    {
      return [
        ['title' => 'Route', 'columnProp' => 'route'],
        ['title' => 'Description', 'columnProp' => 'description'],
        ['title' => 'Title', 'columnProp' => 'title'],
        ['title' => 'Label', 'columnProp' => 'label'],
      ];
    }
}
