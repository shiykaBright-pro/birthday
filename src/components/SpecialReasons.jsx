import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { specialReasons } from '../data/content'

export default function SpecialReasons({ onContinue }) {
  const [active, setActive] = useState(null)

  return (
    <section className="special-reasons">
      <h3>There Are So Many Reasons To Celebrate You...</h3>
      <div className="reasons-grid">
        {specialReasons.map((it, idx) => (
          <motion.div key={it.title} className={`reason-card ${active === idx ? 'open' : ''}`} onClick={() => setActive(idx)} whileHover={{ scale: 1.02 }}>
            <h4>{it.title}</h4>
            <motion.div className="reason-text" initial={{ height: 0 }} animate={{ height: active === idx ? 'auto' : 0 }} transition={{ duration: 0.4 }}>
              {active === idx && <p>{it.text}</p>}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <button className="primary-btn" onClick={onContinue}>Show Memories ❤️</button>
    </section>
  )
}
