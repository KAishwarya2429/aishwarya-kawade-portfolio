"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";

export function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">My Journey</span>
          </h2>
          <p className="text-gray-400 text-lg">From 2019 to the future</p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {resume.timeline.map((timelineItem, index) => (
              <motion.div
                key={timelineItem.year}
                className={`flex gap-6 sm:gap-0 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
                variants={itemVariants}
              >
                {/* Content */}
                <div
                  className={`flex-grow ${index % 2 === 0 ? "sm:pr-[calc(50%+1.5rem)]" : "sm:pl-[calc(50%+1.5rem)]"}`}
                >
                  <motion.div
                    className="glass-card p-6 sm:p-8 rounded-xl hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Year */}
                    <h3 className="text-3xl font-bold gradient-text mb-4">
                      {timelineItem.year}
                    </h3>

                    {/* Events */}
                    <ul className="space-y-3">
                      {timelineItem.events.map((event, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-cyan-400 font-bold mt-1">
                            →
                          </span>
                          <span>{event}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-4 border-background z-10 flex items-center justify-center"
                    whileHover={{ scale: 1.3 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-background" />
                  </motion.div>
                </div>

                {/* Mobile timeline dot */}
                <div className="sm:hidden">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 border-3 border-background -translate-x-[7.5px] mt-2"
                    whileHover={{ scale: 1.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-block glass-card px-6 py-3 rounded-full">
            <p className="text-cyan-400 font-semibold">
              The journey continues...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
