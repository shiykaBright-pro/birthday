import React from 'react'
import { motion } from 'framer-motion'

export default function SurpriseReveal({ onContinue }) {
  return (
    <section className="surprise-reveal">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        HAPPY BIRTHDAY, DADDY! <span className="emoji">❤️🎉</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="lead"
      >
        Today is a special day because we get to celebrate YOU.
      </motion.p>
      <motion.div className="reveal-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
        <button className="ghost-btn" onClick={onContinue}>
          Continue ❤️
        </button>
      </motion.div>
    </section>
  )
}
