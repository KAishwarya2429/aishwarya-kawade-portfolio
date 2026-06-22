'use client'

import { motion } from 'framer-motion'
import { resume } from '@/data/resume'
import { ExternalLink, Code2 } from 'lucide-react'

export function FeaturedProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="projects"
      className="relative py-20 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Highlight of my best work in AI, backend systems, and open source</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resume.featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card p-6 sm:p-8 rounded-xl group hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 flex flex-col"
              variants={itemVariants}
            >
              {/* Project Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-cyan-400 font-semibold mb-3">{project.subtitle}</p>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-[rgba(0,212,255,0.05)] p-4 rounded-lg border border-[rgba(0,212,255,0.2)]">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Problem</p>
                  <p className="text-sm text-gray-300">{project.problem}</p>
                </div>
                <div className="bg-[rgba(0,153,204,0.05)] p-4 rounded-lg border border-[rgba(0,153,204,0.2)]">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Solution</p>
                  <p className="text-sm text-gray-300">{project.solution}</p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Key Features</p>
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[rgba(0,212,255,0.1)] text-xs text-cyan-300 rounded-full border border-[rgba(0,212,255,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links - flex-grow pushes this to bottom */}
              <div className="flex gap-3 pt-4 border-t border-[rgba(255,255,255,0.1)] mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgba(0,212,255,0.1)] hover:bg-[rgba(0,212,255,0.2)] text-cyan-400 text-sm font-medium transition-colors"
                >
                  <Code2 size={16} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[rgba(0,212,255,0.1)] hover:bg-[rgba(0,212,255,0.2)] text-cyan-400 text-sm font-medium transition-colors"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
