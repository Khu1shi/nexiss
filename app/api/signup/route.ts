import { NextResponse } from "next/server";

type SignupPayload = {
  fullName?: string;
  workEmail?: string;
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  industry?: string;
  cityMarket?: string;
  city?: string;
  primaryGoal?: string;
  optIn?: boolean;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as SignupPayload;
  const fullName = payload.fullName?.trim() || payload.name?.trim();
  const workEmail = payload.workEmail?.trim() || payload.email?.trim();

  if (!fullName || !workEmail) {
    return NextResponse.json(
      { success: false, message: "Full name and work email are required." },
      { status: 400 }
    );
  }

  console.log("NexisGEO early access signup:", {
    fullName,
    workEmail,
    company: payload.company?.trim() || undefined,
    role: payload.role?.trim() || payload.industry?.trim() || undefined,
    cityMarket: payload.cityMarket?.trim() || payload.city?.trim() || undefined,
    primaryGoal: payload.primaryGoal?.trim() || undefined,
    optIn: Boolean(payload.optIn)
  });

  return NextResponse.json({
    success: true,
    message: "Signup captured successfully."
  });
}
