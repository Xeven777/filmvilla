import Image from "next/image";
import {
    Info, Play,
    Plus
} from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

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
            <h1 className="mb-4 text-4xl font-bold">Featured Movie Title</h1>
            <p className="mb-4 text-lg">
              A brief description of the featured movie. This exciting film will
              keep you on the edge of your seat!
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                <Play className="mr-2 h-4 w-4" />
                Play
              </Button>
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
            {[...Array(10)].map((_, i) => (
              <HoverCard key={i}>
                <HoverCardTrigger asChild>
                  <Link href="/dashboard/watch">
                    <Card className="w-[250px]">
                      <CardContent className="p-0">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={"https://picsum.photos/400/250"}
                            alt={`Movie ${i + 1}`}
                            className="rounded-t-lg object-cover"
                          />
                        </AspectRatio>
                      </CardContent>
                    </Card>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Movie {i + 1}</h4>
                      <p className="text-sm">
                        A brief description of Movie {i + 1}. This film is part
                        of our trending collection.
                      </p>
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
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </main>
  );
}
