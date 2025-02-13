"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export function TrailerCard({
  movie,
}: {
  movie: { img: string; title: string; info: string };
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

      <div className="flex group-hover:opacity-100 opacity-0 transition-all duration-500 items-center gap-2 absolute bottom-0 z-10 w-full backdrop-blur-lg py-3 px-4 line-clamp-1 text-ellipsis bg-background/20">
        <Play className="size-5" />
        <div>
          <h3 className="font-semibold">{movie.title}</h3>
        </div>
      </div>
    </motion.div>
  );
}
