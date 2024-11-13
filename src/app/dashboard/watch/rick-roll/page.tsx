import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=1ML_G3L2P8Lp-nJd"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="min-h-svh"
    ></iframe>
  );
}