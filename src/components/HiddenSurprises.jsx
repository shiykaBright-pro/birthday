import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { hiddenSurprises } from '../data/content'
import PhotoGallery from './PhotoGallery'

export default function HiddenSurprises({ onContinue }) {
  const [revealed, setRevealed] = useState(hiddenSurprises.map(() => false))
  const [galleryOpen, setGalleryOpen] = useState(false)

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
      <div style={{display:'flex',gap:12,marginTop:12,alignItems:'center'}}>
        <button className="primary-btn" onClick={() => setGalleryOpen(v => !v)}>{galleryOpen ? 'Close Gallery' : 'Open Gallery'}</button>
        <button className="primary-btn" onClick={onContinue}>See Wishes</button>
        <div className="muted">Tip: Open the gallery to browse all photos</div>
      </div>
      {galleryOpen && (
        <div style={{marginTop:12}}>
          <PhotoGallery />
        </div>
      )}
    </section>
  )
}
