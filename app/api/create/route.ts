import { db } from "@/lib/db/index";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
  try {
    await db.post.create({
      data: {
        title: data.title,
        content: data.content,
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json({ data: data }, { status: 200 });
}
