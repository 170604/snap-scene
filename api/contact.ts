
import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, type, message } = req.body;

  if (!name || !email || !phone || !type) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // 1. Save to Google Sheets (via your Apps Script webhook)
    await fetch(
      "https://script.google.com/macros/s/AKfycbxrC52odl-5gc0hFQnVR5BiRJbAhzMTb3K6muSTnRBo9IsXJNqe6uztQ0odTOMVhUAY/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, type, message }),
      }
    );

    // 2. Send Email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or use SMTP if needed
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"Snaps & Scenes" <${process.env.EMAIL_USER}>`,
      to: "contact@snapsandscenes.com", // where you want to receive messages
      subject: `📩 New Contact Form Submission - ${type}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Type: ${type}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Type:</b> ${type}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Data saved + email sent" });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
