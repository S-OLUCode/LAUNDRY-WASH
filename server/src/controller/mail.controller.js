import { sendMail } from "../utils/mail.js";
import { welcomeTemplate, restPasswordTemplate, bookingTemplate, } from "../utils/emailTemplates.js";


const mailService = {
    sendRegistrationEmail: async (user, verificationLink) => {
        const emailBody = welcomeTemplate(user.fullname, verificationLink);
        await sendMail({
            to: user.email,
            subject: "Verify Your account",
            html: emailBody,
        });
    },
     sendPasswordEmail: async (user, passwordLink) => {
        const emailBody = restPasswordTemplate(user.fullname, passwordLink);
        await sendMail({
            to: user.email,
            subject: "Reset Password",
            html: emailBody,
        });
    },
    sendBookingConfirmation: async (user, booking) => {
    const emailBody = bookingTemplate(user.fullname, booking);
    await sendMail({
      to: user.email,
      subject: "Booking confirmation",
      html: emailBody,
    });
  },
};


export default mailService;