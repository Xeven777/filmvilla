import React from 'react'
import { Bell, ChevronDown, Film, Home, PlayCircle, Search, Settings, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white pt-10">
      {/* Navigation Bar */}
      {/* <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black to-transparent">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold text-red-600">FILMFLIX</h1>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" className="text-white hover:text-red-600"><Home className="mr-2 h-4 w-4" />Home</Button>
            <Button variant="ghost" className="text-white hover:text-red-600"><Film className="mr-2 h-4 w-4" />Movies</Button>
            <Button variant="ghost" className="text-white hover:text-red-600"><PlayCircle className="mr-2 h-4 w-4" />TV Shows</Button>
            <Button variant="ghost" className="text-white hover:text-red-600"><User className="mr-2 h-4 w-4" />My List</Button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="h-5 w-5" />
          <Bell className="h-5 w-5" />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="flex-grow px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Welcome back, Aritra!</h2>

          {/* User Profile and Subscription */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="col-span-2 bg-zinc-900 text-white">
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="https://github.com/aritraduttagupta.png" />
                    <AvatarFallback>ADG</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">Aritra Dutta Gupta</h3>
                    <p className="text-zinc-400">aritra@filmvilla.io</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Edit Profile</Button>
              </CardFooter>
            </Card>
            <Card className="bg-zinc-900 text-white">
              <CardHeader>
                <CardTitle>Subscription</CardTitle>
                <CardDescription className="text-zinc-400">Premium Plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Next billing date:</span>
                    <span>May 15, 2024</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-sm text-zinc-400">25 days left in your billing cycle</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Manage Subscription</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Continue Watching */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">Continue Watching</h3>
            <ScrollArea className="w-full whitespace-nowrap rounded-md">
              <div className="flex space-x-4 pb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Card key={i} className="w-[250px] bg-zinc-900 text-white">
                    <CardContent className="p-0">
                      <img
                        src={`/placeholder.svg?height=141&width=250`}
                        alt={`Movie ${i}`}
                        className="w-full h-[141px] object-cover rounded-t-md"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold">Movie Title {i}</h4>
                        <p className="text-sm text-zinc-400">Episode {i}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>

          {/* Recommended for You */}
          <section>
            <h3 className="text-2xl font-semibold mb-4">Recommended for You</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <Card key={i} className="bg-zinc-900 text-white">
                  <CardContent className="p-0">
                    <img
                      src={`/placeholder.svg?height=200&width=150`}
                      alt={`Recommended Movie ${i}`}
                      className="w-full h-[200px] object-cover rounded-t-md"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold">Recommended Title {i}</h4>
                      <p className="text-sm text-zinc-400">Genre</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Button variant="link" className="text-zinc-400 hover:text-white">About</Button>
            <Button variant="link" className="text-zinc-400 hover:text-white">Help Center</Button>
            <Button variant="link" className="text-zinc-400 hover:text-white">Terms of Use</Button>
            <Button variant="link" className="text-zinc-400 hover:text-white">Privacy</Button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-zinc-400">© 2024 FILMFLIX</span>
            <Settings className="h-5 w-5 text-zinc-400" />
          </div>
        </div>
      </footer>
    </div>
  )
}