import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, type, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Casa JohnSUN Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New Inquiry — ${type || "General"} | ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0B0B0B; color: #D9D0C3; padding: 40px;">
          <div style="border-bottom: 1px solid #C7A15A; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #C7A15A; font-size: 24px; margin: 0; letter-spacing: 4px;">CASA JOHNSUN</h1>
            <p style="color: #A79A8E; font-size: 11px; letter-spacing: 3px; margin: 6px 0 0;">NEW INQUIRY</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #A79A8E; font-size: 12px; letter-spacing: 2px; width: 120px;">NAME</td>
                <td style="padding: 10px 0; color: #D9D0C3; font-size: 14px;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: #A79A8E; font-size: 12px; letter-spacing: 2px;">EMAIL</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #C7A15A;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 10px 0; color: #A79A8E; font-size: 12px; letter-spacing: 2px;">PHONE</td>
                <td style="padding: 10px 0; color: #D9D0C3;">${phone}</td></tr>` : ""}
            <tr><td style="padding: 10px 0; color: #A79A8E; font-size: 12px; letter-spacing: 2px;">TYPE</td>
                <td style="padding: 10px 0; color: #C7A15A; font-weight: bold;">${type || "General Inquiry"}</td></tr>
          </table>

          <div style="margin-top: 24px; padding: 20px; border: 1px solid rgba(199,161,90,0.3); background: rgba(199,161,90,0.05);">
            <p style="color: #A79A8E; font-size: 11px; letter-spacing: 2px; margin: 0 0 10px;">MESSAGE</p>
            <p style="color: #D9D0C3; font-size: 14px; line-height: 1.8; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(199,161,90,0.2);">
            <p style="color: #A79A8E; font-size: 11px; text-align: center;">casajohnsun.com · Scottsdale, AZ · EST. 2026</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
