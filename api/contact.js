import process from "node:process";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const name = clean(request.body?.name, 80);
  const email = clean(request.body?.email, 160).toLowerCase();
  const subject = clean(request.body?.subject, 140);
  const message = clean(request.body?.message, 5000);
  const website = clean(request.body?.website, 200);

  // Bots commonly fill hidden fields. Return success without sending anything.
  if (website) {
    return response.status(200).json({ ok: true });
  }

  if (!name || !EMAIL_PATTERN.test(email) || !subject || !message) {
    return response.status(400).json({ error: "Please complete every field correctly." });
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(503).json({
      error: "Email delivery is not configured yet. Please use the email link instead.",
    });
  }

  const to = process.env.CONTACT_TO_EMAIL || "moemenatia4@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio message: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
        html: `
          <div style="font-family:Arial,sans-serif;color:#17141f;line-height:1.6">
            <h2>New portfolio message</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            <hr style="border:0;border-top:1px solid #e7e3eb" />
            <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const details = await resendResponse.text();
      console.error("Resend rejected the contact email:", details);
      return response.status(502).json({ error: "Email delivery failed. Please try again." });
    }

    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact endpoint failed:", error);
    return response.status(500).json({ error: "Email delivery failed. Please try again." });
  }
}
