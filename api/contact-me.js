// api/contact-me.js

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed",
        });
    }

    try {
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({
                message: "Name, email and message are required.",
            });
        }

        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["ananya.s.prof@gmail.com"],
            replyTo: email,
            subject: `Portfolio message from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>New Portfolio Contact</h2>

                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>

                    <h3>Message</h3>
                    <p>${message.replace(/\n/g, "<br />")}</p>
                </div>
            `,
        });

        if (error) {
            console.error(error);

            return res.status(500).json({
                message: "Failed to send email.",
            });
        }

        return res.status(200).json({
            message: "Message sent successfully!",
            id: data?.id,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Something went wrong.",
        });
    }
}