import Image from "next/image";
import { Info, Play } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
import { moviedata, moviedata2, moviedata3 } from "@/lib/data";
import MovieCard from "@/components/MovieCard";

export default function Dashboard() {
  return (
    <main className="flex-1">
      <section className="relative">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://wallpapers.com/images/featured/stranger-things-dkttxahzpl44tbsa.jpg"
            alt="Featured movie"
            className="object-cover"
            fill
          />
        </AspectRatio>
        <div className="absolute inset-0 flex items-center bg-gradient-to-r from-background/80 p-6 to-transparent">
          <div className="max-w-lg">
            <h1 className="mb-4 text-4xl font-bold">Stranger Things (S2)</h1>
            <p className="mb-4 text-lg">
              In 1980s Indiana, a group of young friends witness supernatural
              forces and secret government exploits. As they search for answers,
              the children unravel a series of extraordinary mysteries.
            </p>
            <div className="flex gap-4">
              <Link href={"/dashboard/watch/movie"}>
                <Button size="lg">
                  <Play className="mr-2 h-4 w-4" />
                  Play
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                <Info className="mr-2 h-4 w-4" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="p-6">
        <h2 className="mb-4 text-2xl font-semibold">Trending Now</h2>
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {moviedata.map((movie, i) => (
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
            {moviedata2.map((movie, i) => (
              <MovieCard key={i} movie={movie} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <section className="p-6">
        <h2 className="mb-4 text-2xl font-semibold">Your favorites </h2>
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {moviedata3.map((movie, i) => (
              <MovieCard key={i} movie={movie} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </main>
  );
}
