"use server";
import prisma from "@/lib/prisma";

export async function addUser(userData: any) {
  try {
    const user = await prisma.users.create({
      data: {
        clerkId: userData.id,
        firstName: userData.firstName || "",
        imgUrl: userData.imageUrl || "",
      },
    });
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
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

    const movieExists = await prisma.movies.findUnique({
      where: { id: movieId },
    });
    if (!movieExists) {
      throw new Error("Movie not found");
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
    throw error;
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
    throw error;
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

    const likes = user?.likes;

    if (!likes || likes.length === 0) return [];

    const movies = await Promise.all(
      likes.map(async (like) => {
        return prisma.movies.findUnique({
          where: { id: like.movieId },
        });
      })
    );

    return movies.filter(
      (movie): movie is NonNullable<typeof movie> => movie !== null
    );
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

export async function getMovieById(id: string) {
  try {
    const movie = await prisma.movies.findUnique({
      where: { id },
    });
    return movie;
  } catch (error) {
    console.error(error);
    return null;
  }
}
