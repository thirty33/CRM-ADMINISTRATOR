<?php

namespace App\Contracts;
use Illuminate\Database\Eloquent\Model;

interface ListRepositoryInterface
{
  public function getList(Array $requestArray = []);
  public function getTableHeaders();
  public function deleteItem(Model $item);
}
