"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ContinueWatchingCard } from "@/components/continue-watching-card";
import { MovieCarousel } from "@/components/movie-carousel";
import { cn } from "@/lib/utils";
import { moviedata, moviedata2, moviedata3 } from "@/lib/data";
import MovieCard from "@/components/MovieCard";
import { TrailerCard } from "@/components/trailer-card";

const genres = [
  { id: "action", name: "Action", color: "bg-rose-500" },
  { id: "western", name: "Western", color: "bg-green-500" },
  { id: "adventure", name: "Adventure", color: "bg-blue-500" },
  { id: "drama", name: "Drama", color: "bg-yellow-500" },
  { id: "scifi", name: "Sci-fi", color: "bg-purple-500" },
  { id: "crime", name: "Crime", color: "bg-orange-500" },
  { id: "comedy", name: "Comedy", color: "bg-pink-500" },
  { id: "thriller", name: "Thriller", color: "bg-teal-500" },
];

const sortOptions = [
  { id: "trending", name: "Trending Now" },
  { id: "popular", name: "Most Popular" },
  { id: "newest", name: "Newest First" },
  { id: "rating", name: "Highest Rated" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ExplorePage() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  const toggleGenre = (genreId: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId]
    );
  };

  return (
    <div className="min-h-screen pt-12 bg-background p-6 relative">
      <div className="dark:bg-primary/50 bg-primary/30 h-20 w-3/5 left-1/2 -translate-x-1/2 absolute top-40 blur-3xl" />
      <h2 className="text-3xl md:text-8xl font-semibold tracking-tight text-center mx-auto bg-gradient-to-b from-foreground to-muted/50 via-foreground/70 bg-clip-text text-transparent w-fit py-4 z-10 relative">
        Explore
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        <motion.div
          variants={item}
          className="rounded-3xl p-6 space-y-6 max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center z-10 relative">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
              <Input
                className="pl-10 bg-background/20 backdrop-blur shadow-lg text-xl py-6"
                placeholder="Search movies..."
              />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="min-w-[140px] bg-transparent backdrop-blur-md "
                >
                  {selectedSort.name}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-2">
                {sortOptions.map((option) => (
                  <Button
                    key={option.id}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      selectedSort.id === option.id && "bg-primary/10"
                    )}
                    onClick={() => setSelectedSort(option)}
                  >
                    {option.name}
                  </Button>
                ))}
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Badge
                key={genre.id}
                className={cn(
                  "cursor-pointer transition-colors shadow text-foreground",
                  selectedGenres.includes(genre.id) ? genre.color : "bg-muted"
                )}
                onClick={() => toggleGenre(genre.id)}
              >
                {genre.name}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.section variants={item} className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">New trailers</h2>
          </div>
          <MovieCarousel>
            {moviedata2.map((movie, i) => (
              <TrailerCard key={i} movie={movie} />
            ))}
          </MovieCarousel>
        </motion.section>

        <motion.section variants={item} className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Continue Watching</h2>
            <Button variant="ghost" size="sm">
              4 Movies
            </Button>
          </div>
          <MovieCarousel>
            {moviedata3.map((movie, i) => (
              <TrailerCard key={i} movie={movie} continueWatching />
            ))}
          </MovieCarousel>
        </motion.section>

        <motion.section variants={item} className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Popular Movies 2025</h2>
            <Button variant="ghost" size="sm">
              All movies
            </Button>
          </div>
          <MovieCarousel>
            {moviedata.map((movie, i) => (
              <TrailerCard key={i} movie={movie} />
            ))}
          </MovieCarousel>
        </motion.section>
      </motion.div>
    </div>
  );
}
