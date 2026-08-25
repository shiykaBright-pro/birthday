import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { wishes as wishesData } from '../data/content'
import NextHint from './NextHint'

export default function BirthdayWishes({ onContinue }) {
  const [idx, setIdx] = useState(0)

  return (
    <section className="birthday-wishes">
      <h3>My Wishes For You ❤️</h3>
      <motion.div className="wish-card prominent" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="wish-index">{idx + 1} / {wishesData.length}</div>
        <h2 className="wish-text">{wishesData[idx]}</h2>
        <p className="muted">Tap the button to reveal the next wish</p>
        <div className="wish-actions">
          {idx < wishesData.length - 1 ? (
            <button className="primary-btn" onClick={() => setIdx(i => i + 1)}>Reveal Next</button>
          ) : (
            <button className="primary-btn" onClick={onContinue}>Ready for the final surprise</button>
          )}
        </div>
      </motion.div>
      <NextHint text="Next: Reveal the final surprise when you're ready" />
    </section>
  )
}
