import React, { useState } from 'react'
import OpeningScreen from './components/OpeningScreen'
import SurpriseReveal from './components/SurpriseReveal'
import IntroSection from './components/IntroSection'
import BirthdayMessage from './components/BirthdayMessage'
import SpecialReasons from './components/SpecialReasons'
import MemoryReveal from './components/MemoryReveal'
import HiddenSurprises from './components/HiddenSurprises'
import BirthdayWishes from './components/BirthdayWishes'
import FinalSurprise from './components/FinalSurprise'
import MusicPlayer from './components/MusicPlayer'
import Footer from './components/Footer'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [showIntro, setShowIntro] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [showReasons, setShowReasons] = useState(false)
  const [showMemories, setShowMemories] = useState(false)
  const [showHidden, setShowHidden] = useState(false)
  const [showWishes, setShowWishes] = useState(false)
  const [finalRevealed, setFinalRevealed] = useState(false)
  const [readyForFinal, setReadyForFinal] = useState(false)

  React.useEffect(() => {
    const handler = () => setFinalRevealed(true)
    window.addEventListener('reveal-final', handler)
    return () => window.removeEventListener('reveal-final', handler)
  }, [])

  return (
    <div className="app-root">
      <MusicPlayer />
      {!opened && <OpeningScreen onOpen={() => setOpened(true)} />}
      {opened && (
        <main className="main-flow">
          <SurpriseReveal onContinue={() => setShowIntro(true)} />
          {showIntro && <IntroSection onContinue={() => setShowMessage(true)} />}
          {showMessage && <BirthdayMessage onContinue={() => setShowReasons(true)} />}
          {showReasons && <SpecialReasons onContinue={() => setShowMemories(true)} />}
          {showMemories && <MemoryReveal onContinue={() => setShowHidden(true)} />}
          {showHidden && <HiddenSurprises onContinue={() => setShowWishes(true)} />}
          {showWishes && <BirthdayWishes onContinue={() => setReadyForFinal(true)} />}
          {readyForFinal && <FinalSurprise revealed={finalRevealed} onReset={() => window.location.reload()} />}
          <Footer />
        </main>
      )}
    </div>
  )
}
