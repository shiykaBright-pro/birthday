import React from 'react'
import { motion } from 'framer-motion'
import { birthdayMessage } from '../data/content'

export default function BirthdayMessage({ onContinue }) {
  return (
    <section className="birthday-message">
      <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>A Message From My Heart</motion.h3>
      <motion.div className="message-box" initial={{ opacity: 0, filter: 'blur(6px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} transition={{ delay: 0.35 }}>
        {birthdayMessage.split('\n\n').map((p, i) => (
          <motion.p key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.18 }}>
            {p}
          </motion.p>
        ))}
      </motion.div>
      <motion.button className="ghost-btn" onClick={onContinue} whileHover={{ scale: 1.02 }}>Continue</motion.button>
    </section>
  )
}
