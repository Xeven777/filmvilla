"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import Image from "next/image"

interface TrailerCardProps {
  title: string
  duration: string
  views: string
  image: string
}

export function TrailerCard({ title, duration, views, image }: TrailerCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="relative group rounded-3xl overflow-hidden min-w-[400px]">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={225}
        className="w-full aspect-video object-cover"
      />
      <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-sm">{views}</span>
          <span className="text-sm">{duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <Play className="w-8 h-8" />
          <div>
            <h3 className="font-semibold">{title}</h3>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

