import React from 'react'
import { motion } from 'framer-motion'

export default function IntroSection({ onContinue }) {
  return (
    <section className="intro-section">
      <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Before You Continue...</motion.h3>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="muted">
        This isn't just a website. It's a little surprise made with love, filled with words that sometimes aren't said enough.
      </motion.p>
      <motion.button className="primary-btn" onClick={onContinue} whileHover={{ scale: 1.03 }}>
        Continue ❤️
      </motion.button>
    </section>
  )
}
