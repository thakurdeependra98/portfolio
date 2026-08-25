import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { fullName, email, phoneNumber, subject, details } = body;

    // Basic validation
    if (!fullName || !email || !phoneNumber || !subject || !details) {
      return NextResponse.json(
        {
          message: 'All fields are required.',
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL!],

      // When you click reply, it will reply directly to the visitor
      replyTo: email,

      subject: `Portfolio Contact: ${subject}`,

      html: `
        <h2>New Contact Details Form Submission by ${fullName}</h2>

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <hr />

        <h3>Message</h3>

        <p>${details}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);

      return NextResponse.json(
        {
          message: error.message || 'Failed to send email.',
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        message: 'Message sent successfully!',
        data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('Contact API error:', error);

    return NextResponse.json(
      {
        message: 'Something went wrong. Please try again.',
      },
      {
        status: 500,
      }
    );
  }
}