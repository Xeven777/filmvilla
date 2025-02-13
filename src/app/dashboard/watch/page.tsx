"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Heart, Play, Plus, Star, ThumbsUp, Volume2 } from "lucide-react";
import Link from "next/link";

export default function MovieWatchPageComponent() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen">
      <main className="">
        {/* Video Player */}
        <div className="relative aspect-video bg-zinc-900">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/36e6ba9d-ab5b-44e9-808b-fe3c4de3be87/d8175pz-ef68c011-7ea4-433b-aa1e-5917ea7958b1.jpg/v1/fill/w_1192,h_670,q_70,strp/interstellar_wallpaper_2_by_nordlingart_d8175pz-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzM2ZTZiYTlkLWFiNWItNDRlOS04MDhiLWZlM2M0ZGUzYmU4N1wvZDgxNzVwei1lZjY4YzAxMS03ZWE0LTQzM2ItYWExZS01OTE3ZWE3OTU4YjEuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yRTENKjCBVMDirvEdgjyVfTxN769YuLHHFSYi9WC_Kc"
            alt="Movie Thumbnail"
            className="w-full h-full object-cover aspect-video"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link href={"/dashboard/watch/movie"}>
              <Button
                variant="outline"
                size="icon"
                className="w-16 h-16 rounded-full bg-black/50 hover:bg-black/75 transition-colors"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <span className="sr-only">Pause</span>
                ) : (
                  <Play className="h-8 w-8" />
                )}
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
            <Button variant="outline" size="sm">
              HD
            </Button>
          </div>
        </div>

        {/* Movie Details */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-2">Interstellar</h1>
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-sm text-muted-foreground">2014</span>
            <span className="text-sm text-zinc-400">PG-13</span>
            <span className="text-sm text-zinc-400">2h 49min</span>
            <span className="text-sm text-green-500">98% Match</span>
          </div>
          <p className="text-zinc-300 mb-6">
            A team of explorers travel through a wormhole in space in an attempt
            to ensure humanity&apos;s survival.
          </p>
          <div className="flex items-center space-x-4 mb-8">
            <Button>
              <Play className="mr-2 size-4" />
              Resume
            </Button>
            <Button variant="outline">
              <Plus className="mr-2 size-4" />
              My List
            </Button>
            <Button variant="outline" size="icon">
              <ThumbsUp className="size-5" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">Cast</h2>
              <p className="text-zinc-400">
                Matthew McConaughey, Anne Hathaway, Jessica Chastain
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Genres</h2>
              <p className="text-zinc-400">Adventure, Drama, Sci-Fi</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* More Like This */}
        <div className="px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">More Like This</h2>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="w-[250px] bg-zinc-900">
                  <CardContent className="p-0">
                    <img
                      src={`/placeholder.svg?height=141&width=250`}
                      alt={`Similar Movie ${i}`}
                      className="w-full h-[141px] object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">Similar Movie {i}</h3>
                      <div className="flex items-center justify-between text-sm text-zinc-400">
                        <span>2023</span>
                        <span>2h 15min</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
