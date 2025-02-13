"use client";
import React, { useState, useEffect } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "./ui/button";
import { Heart, Play } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { Movies } from "@prisma/client";
import { revalidateTag } from "next/cache";

const MovieCard = ({ movie }: { movie: Movies }) => {
  const { user } = useUser();
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkLikeStatus = async () => {
      if (!user) return;
      try {
        const response = await fetch(
          `/api/movies/like?movieId=${movie.id}&userId=${user.id}`,
          {
            cache: "force-cache",
            next: {
              tags: ["likes"],
            },
          }
        );
        const data = await response.json();
        setIsLiked(data.isLiked);
      } catch (error) {
        console.error("Error checking like status:", error);
      }
    };
    checkLikeStatus();
  }, [movie.id, user]);

  const handleLike = async () => {
    if (!user) return;
    setIsLoading(true);
    console.log({ movie, user, isLiked });
    try {
      const response = await fetch("/api/movies/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieId: movie.id,
          userId: user.id,
          action: isLiked ? "dislike" : "like",
        }),
      });

      if (response.ok) {
        setIsLiked(!isLiked);
        revalidateTag("likes");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setIsLoading(false);
  };

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
              <Button
                size="sm"
                variant="outline"
                className={isLiked ? "border-rose-500 bg-rose-600/10" : ""}
                onClick={handleLike}
                disabled={isLoading}
              >
                <Heart
                  className={`mr-2 h-4 w-4 ${
                    isLiked ? "fill-rose-500 stroke-none" : ""
                  }`}
                />
                {isLiked ? "Liked" : "Like"}
              </Button>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default MovieCard;
