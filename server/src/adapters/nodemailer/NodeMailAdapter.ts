import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../MailAdapter";


var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e2ffd2676d6b63",
      pass: "894e96382bcf51"
    }
  });


export class NodeMailerAdapter implements MailAdapter {
    async sendMail(data: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <michels@feedget.com>",
            to: "Mateus Michels <michels09@hotmail.com>",
            subject: data.subject,
            html: data.body
        });
    };

}