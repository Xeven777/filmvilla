import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Cabin } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
const font = Cabin({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FilmVilla",
  description: "Watch your favorite movies and TV shows online!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
