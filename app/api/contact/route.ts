import { NextResponse } from 'next/server';
import { Resend } from 'resend';

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

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey || !contactEmail) {
      console.error('Contact API is missing RESEND_API_KEY or CONTACT_EMAIL.');

      return NextResponse.json(
        {
          message: 'Contact service is not configured.',
        },
        {
          status: 503,
        }
      );
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
  from: 'Portfolio Contact <onboarding@resend.dev>',
  to: [contactEmail],
  replyTo: email,

  subject: `New Portfolio Inquiry: ${subject}`,

  html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Portfolio Inquiry</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background-color: #f4f4f5;
          font-family: Arial, Helvetica, sans-serif;
          color: #18181b;
        "
      >
        <div
          style="
            max-width: 650px;
            margin: 0 auto;
            padding: 40px 20px;
          "
        >
          <!-- Header -->
          <div
            style="
              background-color: #18181b;
              padding: 32px;
              text-align: center;
              border-radius: 12px 12px 0 0;
            "
          >
            <h1
              style="
                margin: 0;
                color: #ffffff;
                font-size: 24px;
                font-weight: 700;
              "
            >
              New Contact Inquiry
            </h1>

            <p
              style="
                margin: 10px 0 0;
                color: #a1a1aa;
                font-size: 14px;
              "
            >
              Someone contacted you through your portfolio website
            </p>
          </div>

          <!-- Main Content -->
          <div
            style="
              background-color: #ffffff;
              padding: 32px;
              border: 1px solid #e4e4e7;
              border-top: none;
            "
          >
            <h2
              style="
                margin: 0 0 8px;
                font-size: 22px;
                color: #18181b;
              "
            >
              Hello Deependra 👋
            </h2>

            <p
              style="
                margin: 0 0 30px;
                color: #71717a;
                font-size: 15px;
                line-height: 1.6;
              "
            >
              You have received a new message from
              <strong style="color: #18181b;">${fullName}</strong>
              through your portfolio contact form.
            </p>

            <!-- Contact Details -->
            <div
              style="
                background-color: #fafafa;
                border: 1px solid #e4e4e7;
                border-radius: 10px;
                padding: 20px;
                margin-bottom: 24px;
              "
            >
              <h3
                style="
                  margin: 0 0 18px;
                  font-size: 16px;
                  color: #18181b;
                "
              >
                Contact Details
              </h3>

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="
                  border-collapse: collapse;
                  font-size: 14px;
                "
              >
                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #71717a;
                      width: 120px;
                      border-bottom: 1px solid #e4e4e7;
                    "
                  >
                    Name
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      color: #18181b;
                      font-weight: 600;
                      border-bottom: 1px solid #e4e4e7;
                    "
                  >
                    ${fullName}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #71717a;
                      border-bottom: 1px solid #e4e4e7;
                    "
                  >
                    Email
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      border-bottom: 1px solid #e4e4e7;
                    "
                  >
                    <a
                      href="mailto:${email}"
                      style="
                        color: #2563eb;
                        text-decoration: none;
                        font-weight: 600;
                      "
                    >
                      ${email}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0;
                      color: #71717a;
                      border-bottom: 1px solid #e4e4e7;
                    "
                  >
                    Phone
                  </td>

                  <td
                    style="
                      padding: 10px 0;
                      border-bottom: 1px solid #e4e4e7;
                    "
                  >
                    <a
                      href="tel:${phoneNumber}"
                      style="
                        color: #18181b;
                        text-decoration: none;
                        font-weight: 600;
                      "
                    >
                      ${phoneNumber}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 10px 0 0;
                      color: #71717a;
                    "
                  >
                    Subject
                  </td>

                  <td
                    style="
                      padding: 10px 0 0;
                      color: #18181b;
                      font-weight: 600;
                    "
                  >
                    ${subject}
                  </td>
                </tr>
              </table>
            </div>

            <!-- Message -->
            <div
              style="
                margin-top: 24px;
              "
            >
              <h3
                style="
                  margin: 0 0 12px;
                  font-size: 16px;
                  color: #18181b;
                "
              >
                Message
              </h3>

              <div
                style="
                  background-color: #18181b;
                  color: #f4f4f5;
                  padding: 20px;
                  border-radius: 10px;
                  font-size: 15px;
                  line-height: 1.7;
                  white-space: pre-wrap;
                "
              >
${details}
              </div>
            </div>

            <!-- Reply Button -->
            <div
              style="
                text-align: center;
                margin-top: 32px;
              "
            >
              <a
                href="mailto:${email}"
                style="
                  display: inline-block;
                  background-color: #18181b;
                  color: #ffffff;
                  padding: 14px 24px;
                  border-radius: 8px;
                  text-decoration: none;
                  font-size: 14px;
                  font-weight: 600;
                "
              >
                Reply to ${fullName}
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div
            style="
              padding: 24px 20px;
              text-align: center;
              color: #a1a1aa;
              font-size: 12px;
              line-height: 1.6;
            "
          >
            <p style="margin: 0;">
              This message was submitted through your portfolio website.
            </p>

            <p style="margin: 8px 0 0;">
              © ${new Date().getFullYear()} Deependra Singh
            </p>
          </div>
        </div>
      </body>
    </html>
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