import { useEffect, useState } from 'react'

// Konami code sequence: ↑↑↓↓←→←→BA
const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA'
]

export const useKonamiCode = (onActivate: () => void) => {
  const [sequence, setSequence] = useState<string[]>([])
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isActive) return // Prevent multiple activations

      const key = event.code
      setSequence(prev => {
        const newSequence = [...prev, key]
        
        // Check if the sequence matches the Konami code
        if (newSequence.length === KONAMI_CODE.length) {
          const isKonamiCode = KONAMI_CODE.every((k, i) => newSequence[i] === k)
          
          if (isKonamiCode) {
            setIsActive(true)
            onActivate()
            // Reset sequence after activation
            return []
          }
          
          // Reset sequence if it doesn't match
          return []
        }
        
        // Check if the current sequence still matches the beginning of Konami code
        const isPartialMatch = newSequence.every((k, i) => KONAMI_CODE[i] === k)
        if (!isPartialMatch) {
          return []
        }
        
        return newSequence
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onActivate, isActive])

  const reset = () => {
    setIsActive(false)
    setSequence([])
  }

  return { isActive, reset }
}
