import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  public sendEmail(
    emailAddress: string,
    userId: number,
    verificationCode: string,
  ): void {
    this.mailerService
      .sendMail({
        to: `${emailAddress}`,
        from: 'ntm@mail.bg',
        subject: 'Verification Code for the Library App',
        html: `<h1>Welcome to the library app</h1>
          <p>Click on the following link to activate your account</p>
          <a href="http://localhost:4200/verify/${userId}/${verificationCode}">Verify</a>
        `,
      })
      .then(() => {})
      .catch(err => {});
  }
}
