<?php

namespace App\Classes;

use App\Contracts\ListRepositoryInterface;
use App\Http\Resources\ModuleResource;
use App\Models\Module;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

  /**
   * filter headers query params to made order
   *
   * @param array $requestArray
   * @return Array
   */
  private function getEnabledRequestArray($requestArray = []) {

    $newRequestArray = [];

    foreach ($requestArray as $key => $value) {
      if (in_array($key, array_values($this->availableOrderParams())) && !($value === 'false')) {
        $newRequestArray[$key] = $value;
      }
    }

    return $newRequestArray;

  }

  /**
   * Add order sentences to query
   *
   * @param [type] $query
   * @param [type] $requestArray
   * @return \Illuminate\Database\Query\Builder
  */
  private function addOrderToQuery($query, $requestArray) {

    $newRequestArray = $this->getEnabledRequestArray($requestArray);

    if (count($newRequestArray) > 0) {

      $query = $query->orderBy(array_keys($newRequestArray)[0], array_values($newRequestArray)[0]);

      $sliceQuery = array_slice($newRequestArray, 1);
      foreach ($sliceQuery as $key => $value) {
        $query = $query->orderBy($key, $value);
      }

    }

    return $query;

  }

  /**
   * Add filter sentences to query
   *
   * @param [type] $query
   * @param [type] $requestArray
   * @return \Illuminate\Database\Query\Builder
  */
  private function addFilterSentencesToQuery($query, $requestArray) {

    $tablesProps = array_map(function ($item) {
      return $item['columnProp'];
    }, $this->tableHeaders);

    if(array_key_exists('q', $requestArray) && $requestArray['q']) {
      $needle = $requestArray['q'];
      $query->whereAny($tablesProps, 'LIKE', "%$needle%");
    }

    return $query;
  }

  public function getList(array $requestArray = [])
  {

    $query = DB::table('modules');

    $query = $this->addFilterSentencesToQuery($query, $requestArray);
    $query = $this->addOrderToQuery($query, $requestArray);

    $query = $query->paginate($this->items_per_page);

    $modules = ModuleResource::collection($query);
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
