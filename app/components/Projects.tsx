'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Eco-Friendly Skyscraper',
    image: '/placeholder.svg?height=400&width=600',
    description: 'A sustainable high-rise building with integrated green spaces and energy-efficient systems.',
  },
  {
    title: 'Urban Park Redesign',
    image: '/placeholder.svg?height=400&width=600',
    description: 'Revitalization of a city park, incorporating natural elements and community-focused areas.',
  },
  {
    title: 'Modern Art Museum',
    image: '/placeholder.svg?height=400&width=600',
    description: 'A contemporary museum design that seamlessly blends art and architecture.',
  },
]

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Architectural Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

