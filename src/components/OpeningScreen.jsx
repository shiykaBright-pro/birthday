import React from 'react'
import { motion } from 'framer-motion'

export default function OpeningScreen({ onOpen }) {
  return (
    <div className="opening-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="opening-box"
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
