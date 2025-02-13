"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

interface MovieCardProps {
  title: string
  category: string
  rating: number
  image: string
}

export function MovieCard({ title, category, rating, image }: MovieCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="relative group rounded-3xl overflow-hidden min-w-[300px]">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={225}
        className="w-full aspect-video object-cover"
      />
      <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm">{rating}</span>
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
      </div>
    </motion.div>
  )
}

