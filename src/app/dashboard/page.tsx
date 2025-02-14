import Image from "next/image";
import { Info, Loader, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import MovieCard from "@/components/MovieCard";
import { getAllMovies } from "@/action/db";

export const revalidate = 600;

export default async function Dashboard() {
  const movieData = await getAllMovies();

  if (!movieData) {
    return (
      <div className="w-full min-h-60 py-32">
        <Loader
          className="m-auto animate-spin ease-in-out text-primary"
          size={60}
        />
      </div>
    );
  }
  const noOfMovies = movieData.length;

  const movieList1 = movieData?.slice(0, noOfMovies / 3);
  const movieList2 = movieData?.slice(noOfMovies / 3, (noOfMovies / 3) * 2);
  const movieList3 = movieData?.slice((noOfMovies / 3) * 2, noOfMovies);

  const RandomMovie = movieData[Math.floor(Math.random() * movieData.length)];

  return (
    <main className="flex-1 pb-20">
      <section className="relative min-h-[85vh]">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={RandomMovie.img}
            alt={RandomMovie.title}
            className="object-cover"
            fill
          />
        </AspectRatio>
        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-background/85 p-6 md:p-10 to-transparent">
          <div className="max-w-lg">
            <h1 className="mb-4 text-3xl md:text-4xl font-bold">
              {RandomMovie.title}
            </h1>
            <p className="mb-4 md:text-lg">{RandomMovie.info}</p>
            <div className="flex gap-4">
              <Link href={`/dashboard/watch/movie?m=${RandomMovie.id}`}>
                <Button size="lg">
                  <Play className="mr-2 size-4" />
                  Play
                </Button>
              </Link>
              <Link href={`/dashboard/watch?m=${RandomMovie.id}`}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/30 backdrop-blur-md"
                >
                  <Info className="mr-2 size-4" />
                  More Info
                </Button>
              </Link>
            </div>
            <div>
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
                      index < Math.floor(RandomMovie.rating)
                        ? "text-yellow-400"
                        : "text-muted"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm md:text-base text-muted-foreground">
                  {RandomMovie.rating.toFixed(1)} / 5
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-6">
        <h2 className="mb-4 text-2xl font-semibold">Your favorites </h2>
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {movieList3?.map((movie, i) => (
              <MovieCard key={i} movie={movie} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <section className="p-6">
        <h2 className="mb-4 text-2xl font-semibold">Trending Now</h2>
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {movieList1?.map((movie, i) => (
              <MovieCard key={i} movie={movie} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <section className="p-6">
        <h2 className="mb-4 text-2xl font-semibold">New Release</h2>
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {movieList2?.map((movie, i) => (
              <MovieCard key={i} movie={movie} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </main>
  );
}
