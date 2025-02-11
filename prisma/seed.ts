import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const movieData = [
  {
    title: "The Conjuring",
    info: "Its a Horror Movies.....Dont Watch alone",
    rating: 4.2,
    img: "https://pastposters.com/cdn/shop/files/conjuring-cinema-quad-movie-poster-_3_c9df05c1-d466-4985-b41d-52ad752c76a0.jpg?v=1730153023&width=990",
    videoUrl: "https://www.youtube.com/watch?v=k10ETZ41q5o",
    category: "Horror",
  },
  {
    title: "Killers of the Flower Moon",
    info: "A gripping crime drama based on true events",
    rating: 4.5,
    img: "https://ntvb.tmsimg.com/assets/p22972321_v_h10_aa.jpg?w=1280&h=720",
    videoUrl: "https://www.youtube.com/watch?v=EP34Yoxs3FQ",
    category: "Drama",
  },
  {
    title: "Oppenheimer",
    info: "Christopher Nolan's biopic on J. Robert Oppenheimer and the creation of the atomic bomb.",
    rating: 4.8,
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/318a5c24-e3bd-4e62-b0b2-218ed339eb69/dg1qvqv-ad89e62d-f1ac-4906-aee4-292da3811d21.jpg",
    videoUrl: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    category: "Biography",
  },
  {
    title: "Interstellar",
    info: "This visually stunning epic combines science and emotion, featuring a thought-provoking story, Hans Zimmer's haunting score, and outstanding performances by the cast.",
    rating: 4.9,
    img: "https://www.hdwallpapers.net/previews/interstellar-the-movie-475.jpg",
    videoUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    category: "Sci-Fi",
  },
  {
    title: "The Shawshank Redemption",
    info: "A classic tale of hope and friendship set in prison.",
    rating: 4.9,
    img: "https://i.etsystatic.com/47325174/r/il/c6a3b0/5556719109/il_794xN.5556719109_dp1g.jpg",
    videoUrl: "https://www.youtube.com/watch?v=NmzuHjWmXOc",
    category: "Drama",
  },
  {
    title: "Inception",
    info: "A mind-bending sci-fi thriller with unforgettable visuals and storytelling.",
    rating: 4.7,
    img: "https://images.squarespace-cdn.com/content/v1/5ec686197f8b2976074846c2/1618809593080-N5PB8CWYOW3OPDE2TT6E/Feature+3-1.png",
    videoUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    category: "Sci-Fi",
  },
];

async function main() {
  for (const movie of movieData) {
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
