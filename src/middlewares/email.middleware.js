import nodeMailer from "nodemailer"

export const sendEmail = async ({email , subject , message}) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        service: process.env.SMTP_SERVICE,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SIMP_MAIL,
            pass: process.env.SMTP_PASSWORD,

        }
    })

    const options = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject,
        //text,
        html: message,
    }
    await transporter.sendMail(options)
    
}

