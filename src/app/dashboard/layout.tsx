import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ChevronRight,
  ClapperboardIcon,
  Home,
  LineChart,
  Package2,
  Settings,
  UserCircleIcon,
  Users2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserButton } from "@clerk/nextjs";
import ThemeTogglebutton from "@/components/ui/ThemeToggle";

export const metadata: Metadata = {
  title: "Dashboard | FilmVilla",
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
                href="/dashboard"
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              >
                <ClapperboardIcon className="size-4 transition-all group-hover:scale-110" />
                <span className="sr-only">FilmVilla</span>
              </Link>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/dashboard"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Home className="size-5" />
                    <span className="sr-only">Home</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Home</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/dashboard/explore"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <LineChart className="size-5" />
                    <span className="sr-only">Movies</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Explore</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/dashboard/profile"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <UserCircleIcon className="size-5" />
                    <span className="sr-only">Profile</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Profile</TooltipContent>
              </Tooltip>
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Settings className="size-5" />
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
                    className="shrink-0 sm:hidden z-30"
                  >
                    <ChevronRight className="size-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[300px] sm:w-[400px] pt-20"
                >
                  <nav className="grid gap-2">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <ClapperboardIcon className="size-5" />
                      FilmVilla
                    </Link>
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <Home className="size-5" />
                      Home
                    </Link>
                    <Link
                      href="/dashboard/explore"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <LineChart className="size-5" />
                      Explore
                    </Link>
                    <Link
                      href="/dashboard/profile"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <UserCircleIcon className="size-5" />
                      Profile
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <div className="flex w-11/12 items-center justify-end md:justify-between gap-4 p-2 fixed top-0">
                <Link
                  href="/dashboard"
                  className="items-center gap-2 text-lg font-semibold hidden md:flex"
                >
                  <ArrowLeft className="size-5" />
                </Link>

                <div className="flex items-center gap-4">
                  <ThemeTogglebutton />
                  <UserButton />
                </div>
              </div>
            </header>
            {children}
          </div>
        </div>
      </TooltipProvider>
    </div>
  );
}
