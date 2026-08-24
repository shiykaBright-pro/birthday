import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { hiddenSurprises } from '../data/content'

export default function HiddenSurprises({ onContinue }) {
  const [revealed, setRevealed] = useState(hiddenSurprises.map(() => false))

  return (
    <section className="hidden-surprises">
      <h3>But Wait... There's More 👀</h3>
      <div className="surprises-row">
        {hiddenSurprises.map((m, i) => (
          <motion.div key={i} className="surprise-card" onClick={() => {
            const copy = [...revealed]; copy[i] = true; setRevealed(copy)
          }} whileHover={{ scale: 1.02 }}>
            {!revealed[i] ? (
              <motion.div className="tap-box" initial={{ opacity: 1 }}>
                <p>Tap to reveal something...</p>
              </motion.div>
            ) : (
              <motion.div className="reveal" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <p>{m}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      <button className="primary-btn" onClick={onContinue}>See Wishes</button>
    </section>
  )
}
