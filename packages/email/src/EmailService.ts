import nodemailer from 'nodemailer';
import Handlebars from 'handlebars';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(config: EmailConfig) {
    this.transporter = nodemailer.createTransport(config);
  }

  async sendEmail(
    to: string,
    subject: string,
    template: string,
    data: Record<string, any>
  ): Promise<void> {
    const compiled = Handlebars.compile(template);
    const html = compiled(data);

    await this.transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@covercraft.com',
      to,
      subject,
      html,
    });
  }

  async sendWelcomeEmail(email: string, name: string, verificationLink: string): Promise<void> {
    const template = `
      <h1>Welcome to CoverCraft, {{name}}!</h1>
      <p>Please verify your email to get started.</p>
      <a href="{{verificationLink}}">Verify Email</a>
    `;
    await this.sendEmail(email, 'Welcome to CoverCraft', template, {
      name,
      verificationLink,
    });
  }

  async sendPasswordResetEmail(
    email: string,
    name: string,
    resetLink: string
  ): Promise<void> {
    const template = `
      <h1>Reset Your Password</h1>
      <p>Hi {{name}}, we received a request to reset your password.</p>
      <a href="{{resetLink}}">Reset Password</a>
      <p>This link expires in 1 hour.</p>
    `;
    await this.sendEmail(email, 'Reset Your Password', template, {
      name,
      resetLink,
    });
  }

  async sendExportNotification(
    email: string,
    projectName: string,
    downloadLink: string
  ): Promise<void> {
    const template = `
      <h1>Your Cover Page is Ready!</h1>
      <p>Your project "{{projectName}}" has been exported successfully.</p>
      <a href="{{downloadLink}}">Download Now</a>
      <p>This link expires in 7 days.</p>
    `;
    await this.sendEmail(email, 'Your Cover Page Export is Ready', template, {
      projectName,
      downloadLink,
    });
  }
}
