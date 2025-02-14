import { getMovieById } from "@/action/db";
import React, { cache } from "react";

type SearchParams = Promise<{ [key: string]: string | undefined }>;

function convertToEmbedLink(url: string) {
  try {
    // Handle youtu.be format
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Handle youtube.com format
    if (url.includes("youtube.com/watch")) {
      const urlObj = new URL(url);
      const videoId = urlObj.searchParams.get("v");
      if (!videoId) return null;
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return null;
  } catch (error) {
    console.error("Error parsing YouTube URL:", error);
    return null;
  }
}

export default async function page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  const movieId = searchParams.m;

  if (!movieId) {
    return <div className="pt-20 text-center text-5xl">No Movie ID</div>;
  }
  const movieDetails = await getMovieById(movieId);

  if (!movieDetails) {
    return <div className="pt-20 text-center text-5xl">Invalid Movie ID</div>;
  }

  const embedLink = convertToEmbedLink(movieDetails.videoUrl);

  if (!embedLink) {
    return <div className="pt-20 text-center text-5xl">Invalid Video URL</div>;
  }

  return (
    <iframe
      width="100%"
      height="100%"
      src={embedLink}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="min-h-svh"
    ></iframe>
  );
}
