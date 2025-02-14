import { moreMovieData, moviedata } from "@/lib/data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  for (const movie of moreMovieData) {
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
