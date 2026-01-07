import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, //true for 465, false for other ports
  requireTLS: true, //upgrade to secure connection using TLS
  auth: {
    user: process.env.GOOGLE_APP_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: process.env.NODE_ENV === "production", //allow self-signed certificates
  },
});

//verify emaail service connection
const verifyEmailConnection = async () => {
  try {
    await transporter.verify();
    console.log("Email service is ready to send emails");
  } catch (error) {
    console.error("Failed to connect email service", {
      error: error.message,
      code: error.code,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
};
verifyEmailConnection().catch(console.error);

export const sendMail = async ({ to, subject, html }) => {
  const mailOptions = {
    from: "LAUNDRYWASH <laundrywash@gmail.com",
    to,
    subject,
    html,
  };
  try {
    const res = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to %s, subject: %s", to, subject);
  } catch (error) {
    console.error("Error sending email:", {
      error: error.message,
      code: error.code,
      stack: error.stack,
    });
  }
};
