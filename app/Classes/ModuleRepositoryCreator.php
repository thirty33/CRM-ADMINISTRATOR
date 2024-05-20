<?php

namespace App\Classes;

use App\Contracts\ListRepositoryInterface;

class ModuleRepositoryCreator extends ListDataRepositoryCreator
{

  public function factoryMethod(): ListRepositoryInterface
  {
    return new ModuleRepository();
  }
  /**
   * Create a new class instance.
   */
  public function __construct()
  {
    //
  }
}
