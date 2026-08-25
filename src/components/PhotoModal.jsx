import React from 'react'
import { motion } from 'framer-motion'

export default function PhotoModal({ src, alt, onClose, prev, next, hasPrev, hasNext }) {
  return (
    <div className="photo-modal" onClick={onClose}>
      <motion.div className="photo-modal-inner" onClick={e => e.stopPropagation()} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <button className="modal-close" onClick={onClose}>✕</button>
        {hasPrev && <button className="modal-prev" onClick={prev}>‹</button>}
        {hasNext && <button className="modal-next" onClick={next}>›</button>}
        <img src={src} alt={alt} />
      </motion.div>
    </div>
  )
}
