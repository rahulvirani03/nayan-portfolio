'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Senior Architect',
    company: 'Modern Designs Inc.',
    period: '2018 - Present',
    description: 'Lead architect for sustainable urban development projects.',
    progress: 100,
  },
  {
    title: 'Project Architect',
    company: 'Green Spaces Co.',
    period: '2014 - 2018',
    description: 'Managed eco-friendly residential and commercial projects.',
    progress: 80,
  },
  {
    title: 'Junior Architect',
    company: 'City Planners Ltd.',
    period: '2010 - 2014',
    description: 'Assisted in the design and planning of public spaces and infrastructure.',
    progress: 60,
  },
]

export default function WorkExperience() {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 bg-gray-700 p-6 rounded-lg shadow-md relative overflow-hidden"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                <h4 className="text-xl text-gray-300 mb-2">{exp.company}</h4>
                <p className="text-gray-400 mb-4">{exp.period}</p>
                <p className="text-gray-200">{exp.description}</p>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-blue-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${exp.progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

