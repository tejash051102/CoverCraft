# Email Service Package

Email templates and Nodemailer integration for CoverCraft.

## Features

- Email verification
- Password reset
- Export notifications
- HTML templates with Handlebars

## Usage

```typescript
import { EmailService } from '@covercraft/email';

const emailService = new EmailService({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASS!,
  },
});

await emailService.sendWelcomeEmail(
  'user@example.com',
  'John',
  'https://example.com/verify?token=xyz'
);
```

## Templates

- `WELCOME_TEMPLATE` - Account verification
- `PASSWORD_RESET_TEMPLATE` - Password reset
- `EXPORT_TEMPLATE` - Export notification
