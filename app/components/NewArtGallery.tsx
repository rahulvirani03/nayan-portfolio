"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

// Mixed media data (images and videos)
const mediaData = [
  {
    id: 1,
    type: "image",
    src: "/art-data/content-1.jpg",
    width: 400,
    height: 600,
    alt: "Tall portrait image",
  },
  {
    id: 2,
    type: "video",
    src: "/art-data/content-2.mp4",
    width: 600,
    height: 400,
    alt: "Landscape video",
  },
  {
    id: 3,
    type: "image",
    src: "/art-data/content-3.jpg",
    width: 500,
    height: 500,
    alt: "Square image",
  },
  {
    id: 4,
    type: "image",
    src: "/art-data/content-4.jpg",
    width: 500,
    height: 500,
    alt: "Short video",
  },
  {
    id: 5,
    type: "video",
    src: "/art-data/content-5.mp4",
    width: 300,
    height: 500,
    alt: "Portrait video",
  },
  {
    id: 6,
    type: "video",
    src: "/art-data/content-6.mp4",
    width: 500,
    height: 500,
    alt: "Short video",
  },
];

export function ArtWall() {
  const isMobile = false; // useIsMobile()
  const [columns, setColumns] = useState(2);

  useEffect(() => {
    const calculateColumns = () => {
      if (isMobile || window.innerWidth < 640) {
        setColumns(2); // ✅ two columns on mobile
      } else if (window.innerWidth < 768) {
        setColumns(2);
      } else if (window.innerWidth < 1024) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    calculateColumns();
    window.addEventListener("resize", calculateColumns);
    return () => window.removeEventListener("resize", calculateColumns);
  }, [isMobile]);

  const getColumnsClass = (columns: number) => {
    switch (columns) {
      case 2:
        return "columns-2";
      case 3:
        return "columns-3";
      case 4:
      default:
        return "columns-4";
    }
  };

  return (
    <div
      id="gallery"
      className=" py-20 px-4 md:px-12 lg:px-24 min-h-screen bg-gradient-to-b from-background to-background/90 text-text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
          Gallery
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text  bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Also My Work
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mx-auto mt-6"></div>
      </motion.div>
      <div className={`${getColumnsClass(columns)} gap-4`}>
        {mediaData.map((media) => (
          <div
            key={media.id}
            className="mb-4 break-inside-avoid relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group"
          >
            {media.type === "image" ? (
              <Image
                src={media.src}
                alt={media.alt}
                width={media.width}
                height={media.height}
                className="w-full h-auto object-cover"
              />
            ) : (
              <video
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
                onMouseEnter={(e) => {
                  const video = e.currentTarget;
                  if (video.paused) {
                    video.play().catch((err) => {
                      console.error("Playback failed:", err);
                    });
                  }
                }}
                onMouseOut={(e) => {
                  const video = e.currentTarget;
                  video.pause();
                }}
              >
                <source src={media.src} type="video/mp4" />
              </video>
            )}

            <div className="pointer-events-none absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full text-white">
                <p className="font-medium truncate">{media.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
