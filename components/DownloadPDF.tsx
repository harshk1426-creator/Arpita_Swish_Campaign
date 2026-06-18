'use client'

import { useState } from 'react'
import { Download, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DownloadPDF() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleDownload = async () => {
    setLoading(true)
    setDone(false)

    try {
      const { default: jsPDF } = await import('jspdf')
      const { default: html2canvas } = await import('html2canvas')

      const sections = document.querySelectorAll('main > section')
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [1280, 720] })

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement

        const canvas = await html2canvas(section, {
          scale: 1.5,
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          width: section.scrollWidth,
          height: section.scrollHeight,
          windowWidth: 1280,
        })

        const imgData = canvas.toDataURL('image/jpeg', 0.92)
        const pdfWidth = 1280
        const pdfHeight = 720

        // Scale canvas to fit slide, letterboxing if needed
        const canvasAspect = canvas.width / canvas.height
        const slideAspect = pdfWidth / pdfHeight

        let drawW, drawH, drawX, drawY
        if (canvasAspect > slideAspect) {
          drawW = pdfWidth
          drawH = pdfWidth / canvasAspect
          drawX = 0
          drawY = (pdfHeight - drawH) / 2
        } else {
          drawH = pdfHeight
          drawW = pdfHeight * canvasAspect
          drawX = (pdfWidth - drawW) / 2
          drawY = 0
        }

        if (i > 0) pdf.addPage()
        pdf.addImage(imgData, 'JPEG', drawX, drawY, drawW, drawH)
      }

      pdf.save('Arpita_Ambekar_Swish_Pitch.pdf')
      setDone(true)
      setTimeout(() => setDone(false), 3000)
    } catch (err) {
      console.error('PDF generation failed:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
    >
      <motion.button
        onClick={handleDownload}
        disabled={loading}
        className="flex items-center gap-2.5 px-5 py-3 rounded-full font-inter font-semibold text-sm shadow-2xl transition-all disabled:opacity-70"
        style={{ background: '#2BDE73', color: '#1A1A1A' }}
        whileHover={{ scale: loading ? 1 : 1.05 }}
        whileTap={{ scale: loading ? 1 : 0.97 }}
      >
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.span
              key="loading"
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating...
            </motion.span>
          ) : done ? (
            <motion.span
              key="done"
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Downloaded!
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Download className="w-4 h-4" />
              Download Deck
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  )
}
