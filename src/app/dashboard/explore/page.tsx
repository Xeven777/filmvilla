"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Search, Bell, Grid2X2, User2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MovieCard } from "@/components/movie-card";
import { TrailerCard } from "@/components/trailer-card";
import { ContinueWatchingCard } from "@/components/continue-watching-card";
import { MovieCarousel } from "@/components/movie-carousel";
import { cn } from "@/lib/utils";

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
    <div className="min-h-screen pt-12 bg-background p-6">
      <h2 className="text-3xl md:text-8xl font-semibold tracking-tight text-center mx-auto bg-gradient-to-b from-foreground to-muted/50 via-foreground/70 bg-clip-text text-transparent w-fit py-4">
        Explore
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        <motion.div variants={item} className="glass rounded-3xl p-6 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input className="pl-10" placeholder="Search movies..." />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="min-w-[140px]">
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
                  "cursor-pointer transition-colors",
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
            <TrailerCard
              title="Bheeshma Parvam"
              duration="02:59"
              views="2.3M"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4379e3065e4ba2bea8c4767a2dbf599-eRaxj9cXJbj9rploAaHSRGVvNIHcUk.webp"
            />
            <TrailerCard
              title="Black Panther 2"
              duration="03:29"
              views="1.1M"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4379e3065e4ba2bea8c4767a2dbf599-eRaxj9cXJbj9rploAaHSRGVvNIHcUk.webp"
            />
            <TrailerCard
              title="The Batman"
              duration="02:45"
              views="5.1M"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4379e3065e4ba2bea8c4767a2dbf599-eRaxj9cXJbj9rploAaHSRGVvNIHcUk.webp"
            />
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
            <ContinueWatchingCard
              title="Spider-man: No way home"
              progress={75}
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4379e3065e4ba2bea8c4767a2dbf599-eRaxj9cXJbj9rploAaHSRGVvNIHcUk.webp"
            />
            <ContinueWatchingCard
              title="Minnal Murali"
              progress={45}
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4379e3065e4ba2bea8c4767a2dbf599-eRaxj9cXJbj9rploAaHSRGVvNIHcUk.webp"
            />
            <ContinueWatchingCard
              title="The Dark Knight"
              progress={30}
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4379e3065e4ba2bea8c4767a2dbf599-eRaxj9cXJbj9rploAaHSRGVvNIHcUk.webp"
            />
          </MovieCarousel>
        </motion.section>

        <motion.section variants={item} className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Popular Movies 2021</h2>
            <Button variant="ghost" size="sm">
              All movies
            </Button>
          </div>
          <MovieCarousel>
            <MovieCard
              title="Nomadland"
              category="Drama / Western"
              rating={4.8}
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4379e3065e4ba2bea8c4767a2dbf599-eRaxj9cXJbj9rploAaHSRGVvNIHcUk.webp"
            />
            <MovieCard
              title="Space sweepers"
              category="Sci-fi / Space / Drama"
              rating={4.5}
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4379e3065e4ba2bea8c4767a2dbf599-eRaxj9cXJbj9rploAaHSRGVvNIHcUk.webp"
            />
            <MovieCard
              title="The suicide squad"
              category="Action / Adventure"
              rating={4.1}
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4379e3065e4ba2bea8c4767a2dbf599-eRaxj9cXJbj9rploAaHSRGVvNIHcUk.webp"
            />
            <MovieCard
              title="Dune"
              category="Sci-fi / Adventure"
              rating={4.7}
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e4379e3065e4ba2bea8c4767a2dbf599-eRaxj9cXJbj9rploAaHSRGVvNIHcUk.webp"
            />
          </MovieCarousel>
        </motion.section>
      </motion.div>
    </div>
  );
}
