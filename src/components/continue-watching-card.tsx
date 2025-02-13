"use client"

import { motion } from "framer-motion"
import { Pause } from "lucide-react"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"

interface ContinueWatchingCardProps {
  title: string
  progress: number
  image: string
}

export function ContinueWatchingCard({ title, progress, image }: ContinueWatchingCardProps) {
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
          <Pause className="w-8 h-8" />
          <span className="text-sm">{progress}%</span>
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <Progress value={progress} className="h-1 mt-2" />
        </div>
      </div>
    </motion.div>
  )
}

