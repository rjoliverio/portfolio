<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactUsRequest;
use App\Mail\ContactUsEmail;
use Illuminate\Support\Facades\Mail;

class ContactUsController extends Controller
{
    public function store(StoreContactUsRequest $request)
    {
        $sender = $request->validated();
        Mail::queue(new ContactUsEmail($sender['email'], $sender['subject'], $sender['message']));
        return response()->noContent();
    }
}
