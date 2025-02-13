"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Play, Plus, Star, ThumbsUp, Volume2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  getMovieById,
  isMovieLiked,
  likeMovie,
  dislikeMovie,
} from "@/action/db";
import { useUser } from "@clerk/nextjs";
import netflix from "@/assets/netflix.jpg";
import { Movies } from "@prisma/client";
import Image from "next/image";
import { moviedata } from "@/lib/data";
import { TrailerCard } from "@/components/trailer-card";

export default function MovieWatchPageComponent() {
  const params = useSearchParams();
  const movieId = params.get("m");
  const [movieDetails, setMovieDetails] = useState<Movies>();
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useUser();

  if (!movieId) {
    return <div>Invalid Movie ID</div>;
  }

  useEffect(() => {
    const fetchData = async () => {
      if (movieId && user) {
        const [movieData, likeStatus] = await Promise.all([
          getMovieById(movieId),
          isMovieLiked(user.id, movieId),
        ]);
        setMovieDetails(movieData!);
        setIsLiked(likeStatus);
      }
    };

    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [movieId, user]);

  const handleLikeClick = async () => {
    if (!user || !movieId) return;

    try {
      if (isLiked) {
        await dislikeMovie(user.id, movieId);
        setIsLiked(false);
      } else {
        await likeMovie(user.id, movieId);
        setIsLiked(true);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <div className="min-h-screen">
      <main className="">
        {/* Video Player */}
        <div className="relative aspect-video">
          <Image
            width={1920}
            height={1080}
            src={movieDetails?.img || netflix}
            alt={movieDetails?.title || "Movie Title"}
            className="w-full h-full object-cover aspect-video"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link href={"/dashboard/watch/movie"}>
              <Button
                variant="outline"
                size="icon"
                className="w-16 h-16 rounded-full"
              >
                <Play className="h-8 w-8" />
              </Button>
            </Link>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <Volume2 className="size-4" />
              </Button>
              <span className="text-sm">1:23 / 2:15:00</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="bg-background/30 backdrop-blur "
            >
              HD
            </Button>
          </div>
        </div>

        {/* Movie Details */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight">
            {movieDetails?.title || "Movie Title"}
          </h1>
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm md:text-base text-primary">
              {movieDetails?.category || "Category"}
            </span>
            <span className="text-sm md:text-base text-muted-foreground inline-flex items-center gap-1">
              {movieDetails?.rating || "Rating"}
              <Star className="size-4 inline-block fill-yellow-500 stroke-none" />
            </span>
            <span className="text-sm md:text-base text-muted-foreground">
              2h 49min
            </span>
            <span className="text-sm md:text-base text-green-500">
              98% Match
            </span>
          </div>
          <p className="mb-6">{movieDetails?.info || "..."}</p>
          <div className="flex items-center space-x-4 mb-10">
            <Button>
              <Play className="mr-2 size-4" />
              Resume
            </Button>
            <Button variant="outline">
              <Plus className="mr-2 size-4" />
              My List
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleLikeClick}
              className={isLiked ? "bg-rose-600 text-primary-foreground" : "bg-rose-800/20"}
            >
              <ThumbsUp className="size-5" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Cast</h2>
              <p className="text-muted-foreground">
                Matthew McConaughey, Anne Hathaway, Jessica Chastain
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* More Like This */}
        <div className="px-4 py-8 mb-32 mt-10">
          <h2 className="text-2xl font-semibold mb-4">More Like This</h2>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-4">
              {moviedata.map((movie, i) => (
                <TrailerCard key={i} movie={movie} />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </main>

      <footer className="mt-auto py-6 px-4 bg-muted">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Button
              variant="link"
              className="text-muted-foreground hover:underline"
            >
              Audio and Subtitles
            </Button>
            <Button
              variant="link"
              className="text-muted-foreground hover:underline"
            >
              Help Center
            </Button>
            <Button
              variant="link"
              className="text-muted-foreground hover:underline"
            >
              Gift Cards
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Star className="mr-2 size-4 stroke-none fill-yellow-500" />
              Star
            </Button>
            <span className="text-muted-foreground">
              © {new Date().getFullYear()} FILMFLIX
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
