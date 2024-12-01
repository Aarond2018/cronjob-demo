
import { action } from "./_generated/server";
import { Resend } from 'resend';

export const sendMail = action({
  args: {},
  handler: async (ctx) => {
    const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['aarondamilola1998@gmail.com'],
      subject: 'Hello world',
      html: '<strong>It works!</strong>'
    })

    if (error) {
      return console.log(error)
    }
    console.log(data)
  } catch (error) {
    console.log(error)
  } 
  },
});