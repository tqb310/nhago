// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    auth: {
        user: process.env.USER_NAME,
        pass: process.env.PASSWORD,
    },
    secure: true,
});

export default async function handler(req, res) {
    const { name, email, content, phone } = req.body;
    const mailData = {
        from: email,
        to: 'baotq310@gmail.com',
        subject: 'Tin nhắn từ ' + name,
        html: `
      <div><strong>Name:</strong> ${name}</div>
      <br/>
      <div><strong>Email:</strong> ${email}</div>
      <br/>
      <div><strong>Phone:</strong> ${phone}</div>
      <br/>
      <div><strong>Message:</strong> ${content}</div>
      <br/>
      <p>Sent from:
        ${email}</p>`,
    };

    try {
        const data = await transporter.sendMail(mailData);
        console.log(data);
        res.status(200).json({ status: 'OK' });
    } catch (error) {
        console.log(error);
        res.status(201).json({ status: 'FAILED' });
    }
}

