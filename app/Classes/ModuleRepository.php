<?php

namespace App\Classes;

use App\Contracts\ListRepositoryInterface;
use App\Http\Resources\ModuleCollection;
use App\Models\Module;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class ModuleRepository implements ListRepositoryInterface
{
  private $items_per_page = 10;

  private $tableHeaders = [];

  /**
   * Create a new class instance.
   */
  public function __construct()
  {
    $this->setTableHeaders();
    $this->items_per_page = config('app.DEFAULT_NUMBER_PER_PAGE_PAGINATION');
  }

  private function setTableHeaders()
  {
    $this->tableHeaders = [
      [
        'title' => 'Route',
        'columnProp' => 'route',
        'order_activated' => true,
        'query_name' => 'route',
        'query_params' => [
          'up_arrow' => 'ASC',
          'down_arrow' => 'DESC',
          'deactivate' => 'false'
        ]
      ],
      [
        'title' => 'Description',
        'columnProp' => 'description',
        'order_activated' => true,
        'query_name' => 'description',
        'query_params' => [
          'up_arrow' => 'ASC',
          'down_arrow' => 'DESC',
          'deactivate' => 'false'
        ]
      ],
      [
        'title' => 'Title',
        'columnProp' => 'title',
        'order_activated' => true,
        'query_name' => 'title',
        'query_params' => [
          'up_arrow' => 'ASC',
          'down_arrow' => 'DESC',
          'deactivate' => 'false'
        ]
      ],
      [
        'title' => 'Label',
        'columnProp' => 'label',
        'order_activated' => true,
        'query_name' => 'label',
        'query_params' => [
          'up_arrow' => 'ASC',
          'down_arrow' => 'DESC',
          'deactivate' => 'false'
        ]
      ],
    ];
  }

  private function availableOrderParams()
  {
    $queryNames = array_map(function ($item) {
      return $item['query_name'];
    }, $this->tableHeaders);
    return $queryNames;
  }

  public function getList(array $requestArray = [])
  {

    $newRequestArray = [];
    foreach ($requestArray as $key => $value) {
      if (in_array($key, array_values($this->availableOrderParams())) && !($value === 'false')) {
        $newRequestArray[$key] = $value;
      }
    }

    if (count($newRequestArray) > 0) {

      $sliceQuery = array_slice($newRequestArray, 1);

      $query = Module::orderBy(array_keys($newRequestArray)[0], array_values($newRequestArray)[0]);

      foreach ($sliceQuery as $key => $value) {
        $query = $query->orderBy($key, $value);
      }

      $query = $query->paginate($this->items_per_page);
    } else {
      $query = Module::paginate($this->items_per_page);
    }

    $modules = new ModuleCollection($query);
    return $modules;
  }

  public function getTableHeaders()
  {
    return $this->tableHeaders;
  }

  public function deleteItem(Model $item)
  {
    $item->delete();
  }
}
