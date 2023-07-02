<?php

namespace App\Http\Controllers;

use App\Http\Resources\PortfolioResource;
use App\Models\Portfolio;

class PortfolioController extends Controller
{
    public function index()
    {
        return PortfolioResource::collection(Portfolio::with(['github_links', 'output_links', 'images', 'technologies'])->get());
    }
}
