<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactUsRequest;
use App\Jobs\SendEmail;

class ContactUsController extends Controller
{
    public function store(StoreContactUsRequest $request)
    {
        $sender = $request->validated();
        SendEmail::dispatch($sender['email'], $sender['subject'], $sender['message']);
        return response()->noContent();
    }
}
