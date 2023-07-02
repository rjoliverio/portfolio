<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PortfolioResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'started_at' => $this->started_at,
            'finished_at' => $this->finished_at,
            'gihub_links' => LinkResource::collection($this->whenLoaded('github_links')),
            'output_links' => LinkResource::collection($this->whenLoaded('output_links')),
            'images' => LinkResource::collection($this->whenLoaded('images')),
            'technologies' => collect($this->whenLoaded('technologies'))->map(function ($tech) {
                return $tech['name'];
            }),
        ];
    }
}
