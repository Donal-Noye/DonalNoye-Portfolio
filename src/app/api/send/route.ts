import { Resend } from "resend";
import { GithubAccessTokenEmail } from "@/components/email-template";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const {data} = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'leekeiz49@gmail.com',
      subject: 'Hello World',
      react: GithubAccessTokenEmail({username: "Donal Noye"})
    })

    return Response.json({data})
  } catch (e) {
    return Response.json({e})
  }
}