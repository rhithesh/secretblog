import { db } from "@/lib/db/index";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await db.post.findMany();
  console.log(data);
  return NextResponse.json({ data: data }, { status: 200 });
}
