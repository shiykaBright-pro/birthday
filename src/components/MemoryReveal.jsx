import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { memories as memoriesData } from '../data/content'

export default function MemoryReveal({ onContinue }) {
  const [visible, setVisible] = useState(0)

  return (
    <section className="memory-reveal">
      <h3>A Few Moments Worth Remembering...</h3>
      <div className="memory-box">
        <motion.div className="memory-photo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>
          <img src={`/images/${memoriesData[visible].image}`} alt={`Memory ${visible + 1}`} loading="lazy" decoding="async" />
        </motion.div>
        <div className="memory-actions">
          {visible < memoriesData.length - 1 ? (
            <button className="ghost-btn" onClick={() => setVisible(v => v + 1)}>There's More...</button>
          ) : (
            <button className="primary-btn" onClick={onContinue}>Continue ❤️</button>
          )}
        </div>
      </div>
    </section>
  )
}
