<?php

namespace App\Classes;

use App\Contracts\ListRepositoryInterface;

class UserRepository implements ListRepositoryInterface
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
      return 'Chao';
    }
}
