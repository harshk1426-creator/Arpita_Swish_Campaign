'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Star, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    icon: Zap,
    title: 'Speed',
    tagline: '10 minutes. Every time.',
    body: 'The promise that gets you in the door. Non-negotiable, always delivered, never an asterisk.',
    stat: '10 min',
  },
  {
    icon: Star,
    title: 'Taste',
    tagline: 'Hot. Fresh. Real food.',
    body: "This is what makes you come back. It's what sets Swish apart from every QC app in the market.",
    stat: '5★',
  },
  {
    icon: ShieldCheck,
    title: 'Confidence',
    tagline: 'Order without second-guessing.',
    body: "You don't overthink it. You know exactly what's coming. That trust is the brand's most powerful asset.",
    stat: '0 doubts',
  },
]

export default function BrandPillars() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-swish-cream py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-inter text-[#2BDE73] text-sm tracking-[0.3em] uppercase mb-10 font-medium"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Brand Pillars
        </motion.p>

        <motion.h2
          className="font-fraunces font-black text-swish-charcoal mb-20"
          style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Three things. No compromise.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                className="bg-white rounded-2xl p-10 flex flex-col"
                style={{ borderTop: '4px solid #2BDE73', boxShadow: '0 2px 24px rgba(0,0,0,0.04)' }}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8" style={{ background: '#2BDE7318' }}>
                  <Icon className="w-6 h-6" style={{ color: '#2BDE73' }} />
                </div>
                <div className="font-fraunces font-black text-swish-charcoal mb-1" style={{ fontSize: 'clamp(32px, 3vw, 44px)' }}>
                  {pillar.stat}
                </div>
                <h3 className="font-fraunces font-black text-swish-charcoal text-2xl mb-2">{pillar.title}</h3>
                <p className="font-inter text-[#2BDE73] text-sm font-semibold tracking-wide mb-5">{pillar.tagline}</p>
                <p className="font-inter text-swish-charcoalmid text-base leading-relaxed mt-auto">{pillar.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
