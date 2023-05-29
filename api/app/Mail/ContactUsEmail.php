<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactUsEmail extends Mailable
{
    use Queueable, SerializesModels;

    public string $email;
    public string $subjectLine;
    public string $messageLine;

    /**
     * Create a new message instance.
     */
    public function __construct(string $email, string $subject, string $message)
    {
        $this->email = $email;
        $this->subjectLine = $subject;
        $this->messageLine = $message;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            to: 'rjmoliverio@gmail.com',
            from: new Address($this->email, 'Portfolio Inquiry'),
            subject: $this->subjectLine,
            replyTo: $this->email,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.contact_us',
            with: [
                'messageLine' => $this->messageLine,
                'subjectLine' => $this->subjectLine
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
