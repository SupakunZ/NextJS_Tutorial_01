import Post from "@/app/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connect(); // เชื่อมต่อ Database
    const posts = await Post.find()
    return new NextResponse(JSON.stringify(posts), { status: 200 });

  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
}