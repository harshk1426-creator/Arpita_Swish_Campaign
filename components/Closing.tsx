'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, ArrowUpRight } from 'lucide-react'

export default function Closing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative bg-swish-charcoal py-40 md:py-60 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.3) saturate(0.3)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <div>
            <motion.p
              className="font-inter text-[#2BDE73] text-sm tracking-[0.3em] uppercase mb-10 font-medium"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              Let&apos;s Talk
            </motion.p>

            <motion.h2
              className="font-fraunces font-black text-white leading-tight"
              style={{ fontSize: 'clamp(52px, 8vw, 96px)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              Let&apos;s{' '}
              <span className="italic" style={{ color: '#2BDE73' }}>build</span>{' '}
              this.
            </motion.h2>

            <motion.p
              className="font-inter text-white/50 text-lg mt-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Swish has the product. It has the speed. What it needs is a brand that makes people feel something before they even open the app. That&apos;s what I&apos;m here to build.
            </motion.p>
          </div>

          <motion.div
            className="bg-white/5 border border-white/10 rounded-2xl p-10 backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            <div className="mb-8">
              <p className="font-inter text-white/40 text-xs tracking-widest uppercase mb-2">Applicant</p>
              <p className="font-fraunces font-black text-white text-3xl">Arpita Ambekar</p>
            </div>
            <div className="mb-8">
              <p className="font-inter text-white/40 text-xs tracking-widest uppercase mb-2">Role</p>
              <p className="font-inter text-white text-lg">Brand Manager, Swish</p>
            </div>
            <div className="mb-10">
              <p className="font-inter text-white/40 text-xs tracking-widest uppercase mb-2">Contact</p>
              <a href="mailto:arpita_ambekar@pg26.mesaschool.co" className="font-inter text-white text-lg flex items-center gap-2 group">
                <Mail className="w-4 h-4 text-white/50 group-hover:text-[#2BDE73] transition-colors" />
                arpita_ambekar@pg26.mesaschool.co
              </a>
            </div>
            <motion.a
              href="https://www.linkedin.com/in/-arpitaambekar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-semibold text-base transition-all"
              style={{ background: '#2BDE73', color: '#1A1A1A' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="font-fraunces italic text-white/30 text-xl md:text-2xl">
            &ldquo;Fast gets you the order. Taste gets you the repeat.&rdquo;
          </p>
          <p className="font-inter text-white/20 text-sm">© 2026 · Arpita Ambekar</p>
        </motion.div>
      </div>

      {/* Swish brand footer image */}
      <motion.div
        className="relative mt-20 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.9 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Swish_pic.png"
          alt="Swish"
          className="w-full object-cover rounded-2xl"
          style={{ maxHeight: '320px', objectPosition: 'center' }}
        />
      </motion.div>
    </section>
  )
}
