<?php

namespace App\Classes;

use App\Contracts\ListRepositoryInterface;

class UserRepositoryCreator extends ListDataRepositoryCreator
{

  public function factoryMethod(): ListRepositoryInterface
  {
    return new UserRepository();
  }
  /**
   * Create a new class instance.
   */
  public function __construct()
  {
    //
  }
}
