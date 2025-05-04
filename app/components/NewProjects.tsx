"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function NewProjects() {
  const dummyProjects = [
    {
      id: 1,
      title: "Empire Towers Balewadi",
      size: "large",
      images: [
        {
          id: 1,
          src: "/project-images/project-1.jpg",
          alt: "Project 1",
        },
      ],
    },
    {
      id: 2,
      title: "Prestige Heights Baner",
      size: "medium",
      images: [
        {
          id: 1,
          src: "/project-images/project-2.jpg",
          alt: "Project 1",
        },
      ],
    },
    {
      id: 3,
      title: "Pune's Office Space",
      size: "large",
      images: [
        {
          id: 1,
          src: "/project-images/project-3.jpg",
          alt: "Project 1",
        },
      ],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();
  console.log("isInView", isInView);
  console.log("controls", controls);

  useEffect(() => {
    if (isInView) {
      console.log("isInView effect");

      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const cardVariants = {
      hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
        x: index % 2 === 0 ? -30 : 30,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.1,
        },
      },
      hover: {
        y: -10,
        scale: 1.03,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      },
    };

    return (
      <motion.div
        className="relative group overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-lg border-2 border-gray-200"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        // whileHover="hover"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={project.images[0].src || "/placeholder.svg"}
            alt={project.images[0].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Title overlay that appears on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <h3 className="text-2xl font-bold text-white drop-shadow-md">
              {project.title}
            </h3>
            <p className="text-white/80 mt-2 text-sm">
              {project.size === "large"
                ? "Large-scale development"
                : "Medium-scale project"}
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              View Project
            </Button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div
      id="projects"
      className="flex flex-col py-20 px-4 md:px-12 lg:px-24 min-h-screen bg-gradient-to-b from-background to-background/90 text-text-black"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
          Portfolio
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text  bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          My Work
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mx-auto mt-6"></div>
      </motion.div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto w-full"
      >
        {dummyProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
}
