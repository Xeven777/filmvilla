import { likeMovie, dislikeMovie, isMovieLiked } from "@/action/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const movieId = searchParams.get("movieId");
    const clerkId = searchParams.get("userId");

    if (!movieId || !clerkId) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    const isLiked = await isMovieLiked(clerkId, movieId);
    return NextResponse.json({ isLiked });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { movieId, userId: clerkId, action } = await req.json();

    if (!movieId || !clerkId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let result;
    if (action === "like") {
      result = await likeMovie(clerkId, movieId);
    } else if (action === "dislike") {
      result = await dislikeMovie(clerkId, movieId);
    }

    if (!result) {
      throw new Error(`Failed to ${action} movie`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
