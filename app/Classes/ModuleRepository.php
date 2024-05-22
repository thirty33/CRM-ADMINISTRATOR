<?php

namespace App\Classes;

use App\Contracts\ListRepositoryInterface;
use App\Http\Resources\ModuleCollection;
use App\Models\Module;
use Illuminate\Database\Eloquent\Model;

class ModuleRepository implements ListRepositoryInterface
{
    private $items_per_page = 10;
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
      $this->items_per_page = config('app.DEFAULT_NUMBER_PER_PAGE_PAGINATION');
    }

    public function getList()
    {
      $query = Module::paginate($this->items_per_page);
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

    public function deleteItem(Model $item) {
      $item->delete();
    }
}
