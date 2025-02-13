import prisma from "@/lib/prisma";
import { Users } from "@prisma/client";

export async function addUser(userData: Users) {
  try {
    const user = await prisma.users.create({
      data: {
        clerkId: userData.id,
        firstName: userData.firstName,
        imgUrl: userData.imgUrl,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.users.findUnique({
      where: {
        clerkId: id,
      },
    });
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getUserByClerkId(clerkId: string) {
  try {
    const user = await prisma.users.findUnique({
      where: {
        clerkId,
      },
    });
    return user;
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
}

export async function likeMovie(clerkId: string, movieId: string) {
  try {
    const user = await getUserByClerkId(clerkId);
    if (!user) {
      throw new Error("User not found");
    }

    const like = await prisma.movieLikes.create({
      data: {
        userId: user.id,
        movieId,
      },
    });
    return like;
  } catch (error) {
    console.error("Error liking movie:", error);
    return null;
  }
}

export async function dislikeMovie(clerkId: string, movieId: string) {
  try {
    const user = await getUserByClerkId(clerkId);
    if (!user) {
      throw new Error("User not found");
    }

    const like = await prisma.movieLikes.deleteMany({
      where: {
        userId: user.id,
        movieId,
      },
    });
    return like;
  } catch (error) {
    console.error("Error disliking movie:", error);
    return null;
  }
}

export async function isMovieLiked(clerkId: string, movieId: string) {
  try {
    const user = await getUserByClerkId(clerkId);
    if (!user) return false;

    const like = await prisma.movieLikes.findFirst({
      where: {
        userId: user.id,
        movieId,
      },
    });
    return !!like;
  } catch (error) {
    console.error("Error checking like status:", error);
    return false;
  }
}

export async function getLikedMovies(userId: string) {
  try {
    const user = await prisma.users.findUnique({
      where: {
        clerkId: userId,
      },
      include: {
        likes: true,
      },
    });
    return user?.likes;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllMovies() {
  try {
    const movies = await prisma.movies.findMany();
    return movies;
  } catch (error) {
    console.error(error);
    return null;
  }
}
