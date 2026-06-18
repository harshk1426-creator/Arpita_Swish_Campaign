'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Positioning() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section ref={ref} className="relative py-40 md:py-60 px-6 overflow-hidden grain-overlay" style={{ background: '#1B3D2B' }}>
      <motion.div className="absolute inset-0 opacity-10" style={{ y: bgY }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0)' }}
        />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.p
          className="font-inter text-[#2BDE73]/60 text-sm tracking-[0.3em] uppercase mb-12 font-medium"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Positioning
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="font-inter text-[#2BDE73]/60 text-lg md:text-xl mb-6" style={{ letterSpacing: '0.05em' }}>
            — The line that drives everything —
          </p>
          <h2 className="font-fraunces italic font-black text-white leading-tight" style={{ fontSize: 'clamp(36px, 6vw, 80px)' }}>
            &ldquo;Fast gets you the order.{' '}
            <span style={{ color: '#2BDE73' }}>Taste gets you the repeat.</span>&rdquo;
          </h2>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="w-16 h-px bg-[#2BDE73]/30 mx-auto mb-8" />
          <p className="font-inter text-white/40 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            This is the brand truth Swish can own exclusively. Not fast. Not cheap. Fast <em>and</em> genuinely good.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
