import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { wishes as wishesData } from '../data/content'

export default function BirthdayWishes({ onContinue }) {
  const [idx, setIdx] = useState(0)

  return (
    <section className="birthday-wishes">
      <h3>My Wishes For You ❤️</h3>
      <motion.div className="wish-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h4>{wishesData[idx]}</h4>
        <p className="muted">Tap to reveal the next wish</p>
        <div className="wish-actions">
          {idx < wishesData.length - 1 ? (
            <button className="primary-btn" onClick={() => setIdx(i => i + 1)}>Reveal Next</button>
          ) : (
            <button className="primary-btn" onClick={onContinue}>Ready for the final surprise</button>
          )}
        </div>
      </motion.div>
    </section>
  )
}
