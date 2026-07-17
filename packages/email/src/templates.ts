export const WELCOME_TEMPLATE = `
<!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1>Welcome to CoverCraft!</h1>
      <p>Hi {{name}},</p>
      <p>Thank you for joining CoverCraft - the AI-powered cover page builder for Indian students.</p>
      <p>Please verify your email to get started:</p>
      <a href="{{verificationLink}}" style="display: inline-block; padding: 12px 24px; background-color: #3B82F6; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0;">
        Verify Email
      </a>
      <p>Best regards,<br>The CoverCraft Team</p>
    </div>
  </body>
</html>
`;

export const PASSWORD_RESET_TEMPLATE = `
<!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1>Reset Your Password</h1>
      <p>Hi {{name}},</p>
      <p>We received a request to reset your password. Click the link below to create a new password:</p>
      <a href="{{resetLink}}" style="display: inline-block; padding: 12px 24px; background-color: #3B82F6; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0;">
        Reset Password
      </a>
      <p>This link expires in 1 hour.</p>
      <p>If you didn't request this, please ignore this email.</p>
      <p>Best regards,<br>The CoverCraft Team</p>
    </div>
  </body>
</html>
`;

export const EXPORT_TEMPLATE = `
<!DOCTYPE html>
<html>
  <body style="font-family: Arial, sans-serif;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1>Your Cover Page is Ready!</h1>
      <p>Hi {{name}},</p>
      <p>Your project "{{projectName}}" has been exported successfully.</p>
      <a href="{{downloadLink}}" style="display: inline-block; padding: 12px 24px; background-color: #3B82F6; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0;">
        Download Now
      </a>
      <p>This link expires in 7 days.</p>
      <p>Best regards,<br>The CoverCraft Team</p>
    </div>
  </body>
</html>
`;
