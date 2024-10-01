import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  LineChart,
  Package2,
  Search,
  Settings,
  Users2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Dashboard | FilmVilla",
  description: "Movie App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TooltipProvider>
        <div className="flex min-h-screen w-full flex-col bg-background">
          <aside className="fixed inset-y-0 left-0 z-20 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
              <Link
                href="#"
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              >
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">Netflix</span>
              </Link>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Home className="h-5 w-5" />
                    <span className="sr-only">Home</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Home</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Users2 className="h-5 w-5" />
                    <span className="sr-only">TV Shows</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">TV Shows</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <LineChart className="h-5 w-5" />
                    <span className="sr-only">Movies</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Movies</TooltipContent>
              </Tooltip>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </nav>
          </aside>
          <div className="flex flex-col sm:pl-14">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    className="shrink-0 sm:hidden"
                  >
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <nav className="grid gap-2">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Package2 className="h-5 w-5" />
                      Netflix
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Home className="h-5 w-5" />
                      Home
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Users2 className="h-5 w-5" />
                      TV Shows
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <LineChart className="h-5 w-5" />
                      Movies
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <div className="flex w-full items-center gap-4">
                <form className="hidden flex-1 sm:block">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full appearance-none bg-background pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                    />
                  </div>
                </form>
                <Button size="sm" className="ml-auto">
                  Sign In
                </Button>
              </div>
            </header>
            {children}
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}
