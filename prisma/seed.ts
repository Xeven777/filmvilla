import { moreMoviedata } from "@/lib/data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteAllMovies() {
  console.log("Deleting all records...");
  try {
    // First delete all MovieLikes records
    await prisma.movieLikes.deleteMany({});
    console.log("Successfully deleted all movie likes");

    // Then delete all Movies records
    const deletedCount = await prisma.movies.deleteMany({});
    console.log(`Successfully deleted ${deletedCount.count} movies`);
  } catch (error) {
    console.error("Error deleting records:", error);
    throw error;
  }
}

async function main() {
  await deleteAllMovies();
  for (const movie of moreMoviedata) {
    console.log(`Creating movie: ${movie.title}`);
    await prisma.movies.create({
      data: movie,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
