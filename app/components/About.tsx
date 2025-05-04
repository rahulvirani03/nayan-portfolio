'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed"
        >
          <p className="mb-4">
            I'm John Doe, an architect with a passion for blending form and function in innovative ways. With over a decade of experience in sustainable urban design, I strive to create spaces that inspire and enhance the human experience.
          </p>
          <p>
            Beyond architecture, I express my creativity through various forms of visual art, exploring the intersection of structure, color, and emotion. My artistic endeavors inform and enrich my architectural practice, resulting in unique, holistic design solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

