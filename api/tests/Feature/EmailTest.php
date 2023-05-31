<?php

namespace Tests\Feature;

use App\Mail\ContactUsEmail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class EmailTest extends TestCase
{
    use RefreshDatabase;
    public function test_can_send_email_from_contact_us(): void
    {
        $payload = [
            'email' => 'test@example.com',
            'subject' => 'Test Email',
            'message' => 'This is a test email.',
        ];
        Mail::fake();
        $response = $this->post('api/contact_us', $payload);
        $response->assertStatus(204);
        Mail::assertQueued(ContactUsEmail::class);
    }
}
