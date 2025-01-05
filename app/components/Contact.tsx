'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaBehance } from 'react-icons/fa'

export default function Contact() {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl mb-8">
            Interested in collaborating or have a project in mind? Let's connect and bring your vision to life.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            <a href="#" className="text-3xl hover:text-gray-400 transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" className="text-3xl hover:text-gray-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-3xl hover:text-gray-400 transition-colors">
              <FaBehance />
            </a>
          </motion.div>
          <motion.a
            href="mailto:johndoe@example.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-block bg-white text-gray-900 py-3 px-8 rounded-full text-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Email Me
          </motion.a>
        </div>
      </div>
    </section>
  )
}

