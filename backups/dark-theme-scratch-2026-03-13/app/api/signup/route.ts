import { NextResponse } from "next/server";

type SignupPayload = {
  name?: string;
  email?: string;
  company?: string;
  industry?: string;
  city?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as SignupPayload;

  if (!payload.name || !payload.email) {
    return NextResponse.json(
      { success: false, message: "Name and email are required." },
      { status: 400 }
    );
  }

  console.log("NexisGEO early access signup:", payload);

  return NextResponse.json({
    success: true,
    message: "Signup captured successfully."
  });
}
