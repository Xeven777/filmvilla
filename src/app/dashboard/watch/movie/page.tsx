import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/HYVxnPmb15E?si=a5gsr0Im_Fj9kp40"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="min-h-svh"

    ></iframe>
  );
}
