import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PhotoModal from './PhotoModal'
import { images } from '../data/content'

export default function PhotoGallery() {
  const [openIndex, setOpenIndex] = useState(-1)

  const open = (i) => setOpenIndex(i)
  const close = () => setOpenIndex(-1)
  const prev = (e) => { e.stopPropagation(); setOpenIndex(i => Math.max(0, i - 1)) }
  const next = (e) => { e.stopPropagation(); setOpenIndex(i => Math.min(images.length - 1, i + 1)) }

  return (
    <div className="photo-gallery">
      <div className="grid">
        {images.map((img, i) => (
          <motion.div className="thumb" key={img} whileHover={{ scale: 1.03 }} onClick={() => open(i)}>
            <img src={`/images/${img}`} alt={`Photo ${i+1}`} loading="lazy" decoding="async" />
          </motion.div>
        ))}
      </div>
      {openIndex >= 0 && (
        <PhotoModal
          src={`/images/${images[openIndex]}`}
          alt={`Photo ${openIndex + 1}`}
          onClose={close}
          prev={(e) => prev(e)}
          next={(e) => next(e)}
          hasPrev={openIndex > 0}
          hasNext={openIndex < images.length - 1}
        />
      )}
    </div>
  )
}
