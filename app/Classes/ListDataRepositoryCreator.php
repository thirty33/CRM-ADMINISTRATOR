<?php

namespace App\Classes;

use App\Contracts\ListRepositoryInterface;

abstract class ListDataRepositoryCreator
{
    abstract public function factoryMethod(): ListRepositoryInterface;
    /**
     * Create a new class instance.
    */
    public function __construct()
    {

    }

    public function listData(Array $requestArray = []) {
      $repository = $this->factoryMethod();
      $result = $repository->getList($requestArray);
      return $result;
    }

    public function getTableHeaders() {
      $repository = $this->factoryMethod();
      $result = $repository->getTableHeaders();
      return $result;
    }

    public function deleteItem($item) {
      $repository = $this->factoryMethod();
      $repository->deleteItem($item);
    }
}
