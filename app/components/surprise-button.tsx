'use client'

import { useState, useEffect } from 'react'
import { track } from '@vercel/analytics'

const PHI = 1.618

export default function SurpriseButton() {
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Show button when user is within 100px of the bottom
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 100
      setIsVisible(isNearBottom)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const surpriseEffects = [
    // Effect 1: Upside Down Flip
    () => {
      document.body.style.transform = 'rotate(180deg)'
      document.body.style.transition = `transform ${PHI}s ease-in-out`
      setTimeout(() => {
        document.body.style.transform = 'rotate(0deg)'
        setTimeout(() => {
          document.body.style.transition = ''
        }, PHI * 1000)
      }, PHI * 2000)
    },

    // Effect 2: Golden Confetti
    () => {
      const colors = ['#FFD700', '#FFA500', '#FF8C00', '#DAA520', '#B8860B']
      const currentScrollY = window.scrollY

      for (let i = 0; i < 50; i++) {
        setTimeout(
          () => {
            const confetti = document.createElement('div')
            confetti.style.position = 'absolute'
            confetti.style.left = Math.random() * 100 + '%'
            confetti.style.top = `${currentScrollY - 20}px`
            confetti.style.width = '8px'
            confetti.style.height = '8px'
            confetti.style.backgroundColor =
              colors[Math.floor(Math.random() * colors.length)]
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`
            confetti.style.borderRadius = '50%'
            confetti.style.pointerEvents = 'none'
            confetti.style.zIndex = '9999'
            confetti.style.transition = `all ${PHI * 3}s linear`

            document.body.appendChild(confetti)

            setTimeout(() => {
              confetti.style.top = `${currentScrollY + window.innerHeight + 50}px`
              confetti.style.transform = `rotate(${Math.random() * 720}deg)`
              confetti.style.opacity = '0'
            }, 100)

            setTimeout(
              () => {
                confetti.remove()
              },
              PHI * 3000 + 200,
            )
          },
          i * (PHI * 50),
        )
      }
    },

    // Effect 3: Color Chaos Mode
    () => {
      const originalColors = new Map()
      const elements = document.querySelectorAll('*')
      const chaosColors = [
        '#FF6B6B',
        '#4ECDC4',
        '#45B7D1',
        '#96CEB4',
        '#FFEAA7',
        '#DDA0DD',
        '#98D8E8',
      ]

      elements.forEach((el) => {
        const htmlEl = el as HTMLElement
        if (htmlEl.style) {
          originalColors.set(el, {
            color: htmlEl.style.color || window.getComputedStyle(htmlEl).color,
            backgroundColor:
              htmlEl.style.backgroundColor ||
              window.getComputedStyle(htmlEl).backgroundColor,
          })

          htmlEl.style.transition = 'all 0.3s ease'
          htmlEl.style.color =
            chaosColors[Math.floor(Math.random() * chaosColors.length)]
          if (Math.random() > 0.7) {
            htmlEl.style.backgroundColor =
              chaosColors[Math.floor(Math.random() * chaosColors.length)]
          }
        }
      })

      setTimeout(() => {
        elements.forEach((el) => {
          const htmlEl = el as HTMLElement
          const original = originalColors.get(el)
          if (original && htmlEl.style) {
            htmlEl.style.color = original.color
            htmlEl.style.backgroundColor = original.backgroundColor
            setTimeout(() => {
              htmlEl.style.transition = ''
            }, 300)
          }
        })
      }, PHI * 3000)
    },
  ]

  const handleSurprise = () => {
    if (isActive) return

    setIsActive(true)
    const effectIndex = Math.floor(Math.random() * surpriseEffects.length)
    const effectNames = ['upside_down_flip', 'golden_confetti', 'color_chaos']
    
    // Track the analytics event
    track('surprise_button_clicked', {
      effect: effectNames[effectIndex],
      scroll_position: window.scrollY,
      viewport_height: window.innerHeight
    })
    
    const randomEffect = surpriseEffects[effectIndex]
    randomEffect()

    setTimeout(() => {
      setIsActive(false)
    }, PHI * 4000)
  }

  if (!isVisible) return null

  return (
    <button
      onClick={handleSurprise}
      disabled={isActive}
      className={`fixed bottom-12 left-4 z-50 transform rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl sm:bottom-4 ${isActive ? 'cursor-not-allowed opacity-50' : 'hover:from-yellow-500 hover:via-orange-500 hover:to-red-500'} animate-pulse ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} `}
    >
      {isActive ? '✨ Surprising...' : '🎲 Surprise Me'}
    </button>
  )
}
