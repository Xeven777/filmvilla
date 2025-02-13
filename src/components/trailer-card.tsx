"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export function TrailerCard({
  movie,
  continueWatching,
}: {
  movie: { img: string; title: string; info: string };
  continueWatching?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group rounded-xl overflow-hidden min-w-[400px]"
    >
      <Image
        src={movie.img || "/placeholder.svg"}
        alt={movie.title}
        width={400}
        height={225}
        className="w-full aspect-video object-cover"
      />

      <div className="flex group-hover:opacity-100 opacity-0 transition-all duration-500 items-center gap-2 absolute bottom-0 z-10 w-full backdrop-blur-lg py-3 px-4 line-clamp-1 text-ellipsis bg-background/20 border-b-2">
        <Play className="size-5" />
        <div>
          <h3 className="font-semibold">{movie.title}</h3>
        </div>
      </div>
      {continueWatching && (
        <>
          <div
            className={cn(
              "absolute bottom-0 z-20 h-1 bg-red-500 rounded-2xl",
              "w-3/4"
            )}
          />
          <div className="absolute top-0 right-0 p-2 bg-primary text-primary-foreground text-xs font-semibold rounded-bl-xl">
            {Math.round(Math.random() * 100)}%
          </div>
        </>
      )}
    </motion.div>
  );
}
