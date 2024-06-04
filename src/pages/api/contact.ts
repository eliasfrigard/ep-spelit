import type { NextApiRequest, NextApiResponse } from 'next';
import EmailTemplate from '@/components/Emails/ContactTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_TOKEN)

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body.formType !== '06438a38-1d24-4343-91c5-7f2d6e5393c8') {
    // Return 200 status for the honeypot.
    return res.status(200).json({ message: 'Success' })
  }

  const { data, error } = await resend.emails.send({
    from: 'Eteläpohjalaiset Spelit <noreply@email.ep-spelit.xyz>',
    to: ['ep.spelit@gmail.com'],
    subject: 'Uusi yhteydenotto!',
    react: EmailTemplate(req.body),
    text: 'Sent from Resend API',
  })

  if (error) {
    return res.status(400).json(error)
  }

  res.status(200).json(data)
}

export default send
