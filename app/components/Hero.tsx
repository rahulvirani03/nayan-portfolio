"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Architectural background"
        fill
        className="object-cover opacity-20"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold mb-4">Nayan Aher</h1>
        <h2 className="text-3xl mb-8">Architect</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col items-center"
        >
          <p className="text-xl mb-6 max-w-2xl">
            Crafting innovative spaces that blend form and function, while
            exploring the intersection of architecture and art.
          </p>
          <a
            href="#about"
            className="text-xl bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            Discover My Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
