import React, { useState, useRef } from 'react'

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="music-player">
      <audio ref={audioRef} src="/assets/music.mp3" />
      <button onClick={toggle} className="music-btn" aria-label={playing ? 'Pause music' : 'Play music'}>
        <span className="icon">{playing ? '⏸' : '▶'}</span>
        <span className="label">{playing ? 'Pause' : 'Play'}</span>
      </button>
    </div>
  )
}
