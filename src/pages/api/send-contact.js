import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohammadmuzamel3@gmail.com",
      pass: "bhnbhxuljaproplc",
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <mohammadmuzamel3@gmail.com>`, // your authenticated Gmail
      to: "mohammadmuzamel3@gmail.com", // your receiving address
      replyTo: email, // customer's email (for reply)
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    });
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}