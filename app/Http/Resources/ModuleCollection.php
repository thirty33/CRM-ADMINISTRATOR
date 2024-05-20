<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ModuleCollection extends ResourceCollection
{
  /**
   * Transform the resource into an array.
   *
   * @return array<string, mixed>
   */
  public function toArray(Request $request): array
  {
    $data = $this->collection->map(function ($item) {
      return [
        'route' => $item->route,
        'description' => $item->description,
        'title' => $item->title,
        'label' => $item->label
      ];
    })->toArray();
    return $data;
  }
}
