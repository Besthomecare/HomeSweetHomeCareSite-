import { Resend } from 'resend';

export async function getUncachableResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    throw new Error('RESEND_API_KEY not found in environment variables');
  }

  return {
    client: new Resend(apiKey),
    fromEmail: 'Home Sweet Home Care <info@besthomecare.net>'
  };
}
