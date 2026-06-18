'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function WhyTenMinutes() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={sectionRef} className="bg-swish-cream py-32 md:py-48 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-inter text-[#2BDE73] text-sm tracking-[0.3em] uppercase mb-10 font-medium"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          The White Space
        </motion.p>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="md:sticky md:top-32 self-start">
            <motion.h2
              className="font-fraunces font-black text-swish-charcoal leading-tight"
              style={{ fontSize: 'clamp(38px, 5vw, 64px)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              Speed is the hook.{' '}
              <span className="italic" style={{ color: '#2BDE73' }}>Taste is the story.</span>
            </motion.h2>

            <motion.div
              className="relative mt-10 rounded-2xl overflow-hidden aspect-[4/3]"
              style={{ y: imgY }}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1200&q=80"
                alt="Fresh food"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.92) saturate(1.15)' }}
              />
            </motion.div>
          </div>

          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            <p className="font-inter text-swish-charcoalmid text-xl leading-relaxed">
              Quick commerce cracked delivery. Nobody cracked the food.
            </p>

            <div className="border-l-4 pl-6 py-2" style={{ borderColor: '#2BDE73' }}>
              <p className="font-fraunces italic text-swish-charcoal text-2xl md:text-3xl leading-snug">
                &ldquo;QC food has over-indexed on speed and ignored taste. That&apos;s the white space.&rdquo;
              </p>
            </div>

            <p className="font-inter text-swish-charcoalmid text-xl leading-relaxed">
              Zomato, Swiggy - they compete on time. Delivery is a commodity. Swish competes on taste. That&apos;s the brand.
            </p>

            <p className="font-inter text-swish-charcoalmid text-xl leading-relaxed">
              The insight: people are hesitant. &ldquo;What kind of food even comes in 10 minutes?&rdquo; We answer that question every single time the food arrives. Hot. Fresh. Better than expected.
            </p>

            <div className="rounded-2xl p-8" style={{ background: '#1A1A1A' }}>
              <p className="font-inter text-white/50 text-xs tracking-widest uppercase mb-3">The Opportunity</p>
              <p className="font-fraunces font-black text-white text-2xl md:text-3xl leading-tight">
                Play on taste <span style={{ color: '#2BDE73' }}>and</span> convenience. Nobody else is.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
