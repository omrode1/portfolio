'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { useKonamiCode } from './useKonamiCode'
import RetroTerminal from './RetroTerminal'

interface KonamiContextType {
  isTerminalOpen: boolean
  openTerminal: () => void
  closeTerminal: () => void
}

const KonamiContext = createContext<KonamiContextType | undefined>(undefined)

export const useKonami = () => {
  const context = useContext(KonamiContext)
  if (!context) {
    throw new Error('useKonami must be used within a KonamiProvider')
  }
  return context
}

export const KonamiProvider = ({ children }: { children: ReactNode }) => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)

  const openTerminal = () => {
    setIsTerminalOpen(true)
  }

  const closeTerminal = () => {
    setIsTerminalOpen(false)
  }

  // Use the Konami code hook
  useKonamiCode(openTerminal)

  return (
    <KonamiContext.Provider value={{ isTerminalOpen, openTerminal, closeTerminal }}>
      {children}
      <RetroTerminal isOpen={isTerminalOpen} onClose={closeTerminal} />
    </KonamiContext.Provider>
  )
}
