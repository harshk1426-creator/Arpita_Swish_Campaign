'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const questions = ['Will it come late?', 'Will it come cold?', 'Is it even worth it?']

function AnimatedQuestion({ text, delay }: { text: string; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.p
      ref={ref}
      className="font-fraunces italic text-swish-charcoal leading-tight"
      style={{ fontSize: 'clamp(36px, 6vw, 80px)' }}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {text}
    </motion.p>
  )
}

export default function Tension() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-swish-cream py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.p
          ref={ref}
          className="font-inter text-[#2BDE73] text-sm tracking-[0.3em] uppercase mb-10 font-medium"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          The Customer Insight
        </motion.p>

        <motion.h2
          className="font-fraunces font-black text-swish-charcoal mb-16"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          The Hesitation.
        </motion.h2>

        <div className="space-y-4 md:space-y-6 mb-20">
          {questions.map((q, i) => (
            <AnimatedQuestion key={q} text={q} delay={0.2 + i * 0.25} />
          ))}
        </div>

        <motion.div
          className="border-l-4 pl-8"
          style={{ borderColor: '#2BDE73' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          <p className="font-inter text-swish-charcoalmid text-xl md:text-2xl leading-relaxed">
            Every order starts with doubt. That&apos;s the moment we need to own.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
