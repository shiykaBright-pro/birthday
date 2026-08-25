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
        style={{ backgroundImage: `linear-gradient(rgba(7,10,20,0.45), rgba(7,10,20,0.45)), url(/images/${hero})` }}
      >
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
      </motion.div>
    </div>
  )
}
