import { db } from "@/lib/db/index";
import { NextResponse } from "next/server";
import { URL } from "url"; // Use the URL API to parse query params

export async function GET(request: Request) {
  // Extract the URL from the request object
  const { searchParams } = new URL(request.url);

  // Get the 'id' parameter from the URL
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  // Query the database using Prisma
  const data = await db.post.findUnique({
    where: {
      id: id, // Prisma will look for the post with this id
    },
  });

  if (!data) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  // Return the result in JSON format
  return NextResponse.json({ data: data }, { status: 200 });
}
