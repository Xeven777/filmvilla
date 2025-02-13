import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "./ui/button";
import { Play, Plus } from "lucide-react";

const MovieCard = ({
  movie,
}: {
  movie: { img: string; title: string; info: string };
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href="/dashboard/watch">
          <Card className="w-[350px] overflow-hidden">
            <CardContent className="p-0">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="rounded-t-lg object-cover size-full"
                />
              </AspectRatio>
            </CardContent>
          </Card>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{movie.title}</h4>
            <p className="text-sm">{movie.info}</p>
            <div className="flex items-center pt-2">
              <Button size="sm" className="mr-2">
                <Play className="mr-2 h-4 w-4" />
                Play
              </Button>
              <Button size="sm" variant="outline">
                <Plus className="mr-2 h-4 w-4" />
                My List
              </Button>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default MovieCard;
