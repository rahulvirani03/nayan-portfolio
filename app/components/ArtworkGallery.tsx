'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const artworks = [
  { title: 'Abstract Cityscape', image: '/placeholder.svg?height=400&width=600', size: 'large' },
  { title: 'Geometric Patterns', image: '/placeholder.svg?height=300&width=300', size: 'small' },
  { title: 'Urban Sketches', image: '/placeholder.svg?height=300&width=300', size: 'small' },
  { title: 'Architectural Details', image: '/placeholder.svg?height=600&width=400', size: 'tall' },
  { title: 'Color Studies', image: '/placeholder.svg?height=300&width=300', size: 'small' },
  { title: 'Mixed Media Collage', image: '/placeholder.svg?height=400&width=600', size: 'large' },
]

export default function ArtworkGallery() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Artwork Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {artworks.map((artwork, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${
                artwork.size === 'large'
                  ? 'md:col-span-2 aspect-video'
                  : artwork.size === 'tall'
                  ? 'md:row-span-2 aspect-[2/3]'
                  : 'aspect-square'
              }`}
            >
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <h3 className="text-white text-xl font-semibold text-center p-4">{artwork.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

