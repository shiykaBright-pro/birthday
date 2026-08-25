import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../data/content'

export default function OpeningScreen({ onOpen }) {
  // choose the first strong portrait-like image as hero (fallback to first)
  const hero = images[0]

  return (
    <div className="opening-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="opening-box hero"
      >
        <img className="hero-img" src={`/images/${hero}`} alt="Hero" loading="eager" decoding="async" />
        <div className="opening-content">
          <h3 className="muted">A Little Surprise For Someone Very Special...</h3>
          <h1>For Daddy <span className="heart">❤️</span></h1>
          <p className="subtle">Tap below to open</p>
          <motion.button
            className="primary-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpen}
          >
            Open Surprise 🎁
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
