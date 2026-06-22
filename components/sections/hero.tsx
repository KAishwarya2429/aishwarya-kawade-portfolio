'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { resume } from '@/data/resume'

const roles = [
  'AI Engineer',
  'Backend Developer',
  'Open Source Contributor',
  'System Designer',
  'AI Agent Builder',
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedRole, setDisplayedRole] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    
    if (!isDeleting && displayedRole === currentRole) {
      const delayBeforeDelete = setTimeout(() => {
        setIsDeleting(true)
        setTypingSpeed(50)
      }, 2000)
      return () => clearTimeout(delayBeforeDelete)
    }

    if (isDeleting && displayedRole === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      setTypingSpeed(100)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedRole(displayedRole.slice(0, -1))
      } else {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedRole, roleIndex, isDeleting, typingSpeed])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        className="max-w-4xl w-full text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main headline */}
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          {resume.headline.split(' ').map((word, i) => (
            <span key={i}>
              {word === 'Think,' || word === 'Learn' || word === 'Scale.' ? (
                <span className="gradient-text">{word} </span>
              ) : (
                word + ' '
              )}
            </span>
          ))}
        </motion.h1>

        {/* Typing animation role */}
        <motion.div
          className="mb-8 h-12"
          variants={itemVariants}
        >
          <p className="text-xl sm:text-2xl text-cyan-400 font-semibold min-h-12">
            {displayedRole}
            <span className="animate-pulse ml-1">|</span>
          </p>
        </motion.div>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {resume.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <a
            href="#projects"
            className="glass-card-hover px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            View Projects
          </a>
          <a
            href="https://github.com/aishwarya-kawade"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-hover px-8 py-3 rounded-lg font-semibold text-white border border-cyan-500/50 hover:border-cyan-400 transition-all"
          >
            GitHub Profile
          </a>
          <a
            href="https://linkedin.com/in/aishwaryakawade"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card-hover px-8 py-3 rounded-lg font-semibold text-white border border-cyan-500/50 hover:border-cyan-400 transition-all"
          >
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <div className="w-6 h-10 border border-cyan-400 rounded-full flex items-center justify-center">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
