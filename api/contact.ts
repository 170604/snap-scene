// /api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  phone: z.string().min(7).max(20),
  type: z.enum(['General Query', 'Booking', 'Support']),
  message: z.string().min(1).max(5000),
  // Honeypot (should be empty)
  company: z.string().optional(), 
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, message: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    // Basic origin protection (optional, customize your domain)
    const origin = req.headers.origin || '';
    const allowedOrigins = [
      'https://snapsandscenes.com',
      'https://www.snapsandscenes.com',
      'http://localhost:5173', // Vite default dev
      'http://localhost:8080', // your config
    ];
    if (origin && !allowedOrigins.includes(origin)) {
      // Not strictly necessary for same-origin calls, but a nice hardening step
      // Return 403 but avoid leaking details
      return res.status(403).json({ ok: false, message: 'Forbidden' });
    }

    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return res.status(400).json({
        ok: false,
        message: 'Validation failed',
        issues: parsed.error.issues,
      });
    }

    const data = parsed.data;

    // Honeypot check — if filled, quietly pretend success
    if (data.company && data.company.trim() !== '') {
      return res.status(200).json({ ok: true, message: 'Received' });
    }

    // Build transporter
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      SMTP_SECURE, // 'true' or 'false'
      SMTP_FROM,
      SMTP_TO,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !SMTP_TO) {
      return res.status(500).json({ ok: false, message: 'Email not configured' });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: String(SMTP_SECURE || 'false') === 'true', // true for 465, false for others
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject = `New ${data.type} via Contact Form — ${data.name}`;
    const text = `
New contact form submission:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Type: ${data.type}

Message:
${data.message}

-- 
Snaps & Scenes Website
`;

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;font-size:14px;">
        <h2>New ${data.type} via Contact Form</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Type:</strong> ${escapeHtml(data.type)}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(data.message).replace(/\n/g, '<br/>')}</p>
        <hr/>
        <p style="color:#777;">Snaps & Scenes Website</p>
      </div>
    `;

    await transporter.sendMail({
      from: SMTP_FROM,
      to: SMTP_TO,
      replyTo: `${data.name} <${data.email}>`,
      subject,
      text,
      html,
    });

    return res.status(200).json({ ok: true, message: 'Email sent' });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return res.status(500).json({ ok: false, message: 'Internal Server Error' });
  }
}

function escapeHtml(str: string) {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
