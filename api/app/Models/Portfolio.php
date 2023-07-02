<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Portfolio extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('portfolio-images')->useDisk(env('FILESYSTEM_DISK'));
    }

    public function github_links(): HasMany
    {
        return $this->hasMany(Link::class)->where('type', 'github');
    }

    public function output_links(): HasMany
    {
        return $this->hasMany(Link::class)->where('type', 'output');
    }

    public function images(): MorphMany
    {
        return $this->media()->where('collection_name', 'portfolio-images');
    }

    public function technologies(): BelongsToMany
    {
        return $this->belongsToMany(Technology::class, 'portfolio_technologies');
    }
}
