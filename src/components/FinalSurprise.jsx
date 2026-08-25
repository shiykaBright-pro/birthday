import React from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import NextHint from './NextHint'

export default function FinalSurprise({ revealed, onReset }) {
  const [showConfetti, setShowConfetti] = React.useState(false)

  React.useEffect(() => {
    if (revealed) {
      setShowConfetti(true)
      const t = setTimeout(() => setShowConfetti(false), 8000)
      return () => clearTimeout(t)
    }
  }, [revealed])

  return (
    <section className="final-surprise">
      {!revealed ? (
        <div className="final-prompt">
          <h3>There's One Last Thing...</h3>
          <p>Are You Ready?</p>
          <button className="reveal-btn" onClick={() => {
            // set global state by dispatching custom event
            window.dispatchEvent(new CustomEvent('reveal-final'))
          }}>Reveal Your Final Surprise 🎁</button>
        </div>
      ) : (
        <motion.div className="final-stage" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {showConfetti && <Confetti numberOfPieces={350} recycle={false} />}
          <motion.h1 initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>HAPPY BIRTHDAY, DADDY! ❤️🎉</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>Thank you for being the amazing father you are.</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>We love you more than words can say.</motion.p>
          <button className="primary-btn" onClick={onReset}>Celebrate Again</button>
          <NextHint text="Tip: Tap 'Celebrate Again' to re-run the experience" />
        </motion.div>
      )}
    </section>
  )
}
