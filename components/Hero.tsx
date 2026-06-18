'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center grain-overlay">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.45) saturate(1.2)' }}
        />
      </motion.div>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      <motion.div className="relative z-10 text-center px-6 max-w-6xl mx-auto" style={{ opacity }}>
        <motion.p
          className="font-inter text-[#2BDE73] text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Brand Manager Application · Swish
        </motion.p>

        <motion.h1
          className="font-fraunces font-black text-white leading-none"
          style={{ fontSize: 'clamp(64px, 14vw, 160px)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Order{' '}
          <span className="italic" style={{ color: '#2BDE73' }}>Already.</span>
        </motion.h1>

        <motion.p
          className="font-inter text-white/70 text-lg md:text-xl mt-8 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          A brand pitch for Swish, by Arpita Ambekar.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="font-inter text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
          <ChevronDown className="text-white/50 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
