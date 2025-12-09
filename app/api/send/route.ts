import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_RJgHeYzE_7QSCRCpKzXkRbKVmVvDhSRFy');

export async function POST(req: Request) {
  const data = await req.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "team@dtcbrokers.com", 
      subject: "New Form Submission",
      text: JSON.stringify(data, null, 2), 
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
