'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SwishTruth() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative bg-swish-charcoal py-32 md:py-48 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=80"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.p
          className="font-inter text-[#2BDE73] text-sm tracking-[0.3em] uppercase mb-16 font-medium"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Central Thesis
        </motion.p>

        <div className="grid md:grid-cols-2 gap-0 md:gap-16">
          <motion.div
            className="border-b md:border-b-0 md:border-r border-white/10 pb-16 md:pb-0 md:pr-16 mb-16 md:mb-0"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="inline-block font-inter text-xs tracking-widest uppercase mb-8 px-3 py-1.5 rounded-full" style={{ background: '#2BDE7320', color: '#2BDE73' }}>
              10 minutes
            </div>
            <h2 className="font-fraunces font-black text-white leading-tight" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}>
              Speed gets you the <span style={{ color: '#2BDE73' }}>first order.</span>
            </h2>
            <p className="font-inter text-white/50 text-lg mt-6 leading-relaxed">
              Curiosity cracks the door open. &ldquo;Food in ten minutes?&rdquo; gets people to try — once.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            <div className="inline-block font-inter text-xs tracking-widest uppercase mb-8 px-3 py-1.5 rounded-full" style={{ background: '#ffffff15', color: 'rgba(255,255,255,0.6)' }}>
              Taste
            </div>
            <h2 className="font-fraunces font-black text-white leading-tight" style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}>
              Taste gets you the <span style={{ color: '#2BDE73' }}>repeat.</span>
            </h2>
            <p className="font-inter text-white/50 text-lg mt-6 leading-relaxed">
              People order again and again because the food is actually good. Hot. Fresh. Real.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-24 md:mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <div className="w-16 h-px bg-white/20 mx-auto mb-8" />
          <p className="font-inter text-white/40 text-base md:text-lg tracking-wide uppercase">
            This is the gap nobody else is playing.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
