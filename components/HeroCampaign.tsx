'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const campaignCards = [
  {
    headline: 'Hot food.',
    subheadline: '10 minutes.',
    body: 'No excuses.',
    bg: '#1A1A1A',
    text: '#FFFFFF',
    accent: '#2BDE73',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
  },
  {
    headline: 'Order',
    subheadline: 'Already.',
    body: 'The campaign that kills hesitation.',
    bg: '#2BDE73',
    text: '#1A1A1A',
    accent: '#1A1A1A',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
  },
  {
    headline: 'Stop second-guessing.',
    subheadline: 'Start eating.',
    body: 'Because the food is actually that good.',
    bg: '#FAFAF7',
    text: '#1A1A1A',
    accent: '#2BDE73',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
  },
]

export default function HeroCampaign() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-white py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-inter text-[#2BDE73] text-sm tracking-[0.3em] uppercase mb-10 font-medium"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Hero Campaign
        </motion.p>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <h2 className="font-fraunces font-black text-swish-charcoal leading-none" style={{ fontSize: 'clamp(56px, 10vw, 128px)' }}>
            Order{' '}
            <span className="italic" style={{ color: '#2BDE73' }}>Already.</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <p className="font-inter text-swish-charcoalmid text-xl leading-relaxed">
            We&apos;re not competing with Zomato or Swiggy on delivery. We&apos;re killing the hesitation moment — the second someone thinks &ldquo;should I order?&rdquo; we answer before they finish the thought.
          </p>
          <p className="font-inter text-swish-charcoalmid text-xl leading-relaxed">
            The campaign is built around confidence. Not speed. When you know the food is good, you don&apos;t second-guess. You just order.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {campaignCards.map((card, i) => (
            <motion.div
              key={i}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{ minHeight: '420px' }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
            >
              <div className="relative flex-1" style={{ minHeight: '220px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.img}
                  alt={card.headline}
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ filter: 'brightness(0.88) saturate(1.1)' }}
                />
              </div>
              <div className="p-8" style={{ backgroundColor: card.bg }}>
                <p className="font-inter text-xs tracking-widest uppercase mb-4" style={{ color: card.accent }}>
                  Campaign Concept {i + 1}
                </p>
                <h3 className="font-fraunces font-black leading-tight mb-1" style={{ color: card.text, fontSize: 'clamp(24px, 3vw, 32px)' }}>
                  {card.headline}
                </h3>
                <h3 className="font-fraunces italic font-black leading-tight mb-4" style={{ color: card.accent, fontSize: 'clamp(24px, 3vw, 32px)' }}>
                  {card.subheadline}
                </h3>
                <p className="font-inter text-sm leading-relaxed opacity-70" style={{ color: card.text }}>
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
