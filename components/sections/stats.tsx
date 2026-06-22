'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { resume } from '@/data/resume'

export function Stats() {
  const [counts, setCounts] = useState<Record<string, number>>({})
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    resume.stats.forEach((stat) => {
      const maxCount = parseInt(stat.value.replace(/\D/g, ''))
      let current = 0

      const interval = setInterval(() => {
        current += Math.ceil(maxCount / 30)
        if (current >= maxCount) {
          setCounts((prev) => ({ ...prev, [stat.label]: maxCount }))
          clearInterval(interval)
        } else {
          setCounts((prev) => ({ ...prev, [stat.label]: current }))
        }
      }, 50)

      return () => clearInterval(interval)
    })
  }, [isVisible])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative py-20 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
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
            <span className="gradient-text">Impact by Numbers</span>
          </h2>
          <p className="text-gray-400 text-lg">Metrics that showcase my technical journey</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resume.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 sm:p-8 text-center rounded-xl group hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
              variants={itemVariants}
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {counts[stat.label] || 0}+
              </div>
              <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub contribution graph placeholder */}
        <motion.div
          className="mt-16 glass-card p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-white">GitHub Contributions</h3>
          <div className="flex items-center justify-center h-32 bg-[rgba(255,255,255,0.02)] rounded-lg border border-[rgba(255,255,255,0.05)]">
            <p className="text-gray-400 text-sm">
              Open source contributions across multiple projects
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
