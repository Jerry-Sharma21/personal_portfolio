'use server';

import { getErrorMessage, validateString } from '@/lib/Utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/ContactFormEmail';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const senderMessage = formData.get('senderMessage');

  // sever side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }

  if (!validateString(senderMessage, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'er.abhijeetsharma14@gmail.com',
      subject: 'Message from Contact Form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        senderMessage: senderMessage as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
};
