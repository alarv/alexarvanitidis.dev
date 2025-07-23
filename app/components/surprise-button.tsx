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

    // Effect 4: Matrix Rain
    () => {
      const matrixChars = [
        'φ',
        '1.618',
        '1',
        '1',
        '2',
        '3',
        '5',
        '8',
        '13',
        '21',
        '34',
        '55',
        '89',
      ]
      const currentScrollY = window.scrollY

      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          const column = document.createElement('div')
          column.style.position = 'absolute'
          column.style.left = Math.random() * 100 + '%'
          column.style.top = currentScrollY + 'px'
          column.style.color = '#00ff00'
          column.style.fontFamily = 'monospace'
          column.style.fontSize = '14px'
          column.style.pointerEvents = 'none'
          column.style.zIndex = '9999'
          column.style.opacity = '0.8'

          // Create falling characters in the column
          for (let j = 0; j < 20; j++) {
            setTimeout(() => {
              const char = document.createElement('div')
              char.textContent =
                matrixChars[Math.floor(Math.random() * matrixChars.length)]
              char.style.opacity = Math.random() * 0.8 + 0.2 + ''
              column.appendChild(char)

              setTimeout(() => {
                char.style.transition = `all ${PHI * 2}s linear`
                char.style.transform = `translateY(${window.innerHeight + 100}px)`
                char.style.opacity = '0'
              }, 100)
            }, j * 200)
          }

          document.body.appendChild(column)

          setTimeout(
            () => {
              column.remove()
            },
            PHI * 2000 + 4000,
          )
        }, i * 300)
      }
    },

    // Effect 5: Neon Glow Mode
    () => {
      const elements = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, p, a, button, span',
      )
      const originalStyles = new Map()

      elements.forEach((el) => {
        const htmlEl = el as HTMLElement
        originalStyles.set(el, {
          textShadow:
            htmlEl.style.textShadow ||
            window.getComputedStyle(htmlEl).textShadow,
          transition: htmlEl.style.transition,
        })

        const neonColors = [
          '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff',
          '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
          '0 0 5px #ffff00, 0 0 10px #ffff00, 0 0 15px #ffff00',
        ]

        htmlEl.style.transition = 'text-shadow 0.3s ease'
        htmlEl.style.textShadow =
          neonColors[Math.floor(Math.random() * neonColors.length)]
      })

      setTimeout(() => {
        elements.forEach((el) => {
          const htmlEl = el as HTMLElement
          const original = originalStyles.get(el)
          if (original) {
            htmlEl.style.textShadow = original.textShadow
            setTimeout(() => {
              htmlEl.style.transition = original.transition
            }, 300)
          }
        })
      }, PHI * 2500)
    },

    // Effect 6: Pixelation
    () => {
      document.body.style.transition = `filter ${PHI}s ease-in-out, transform ${PHI}s ease-in-out`
      document.body.style.filter = 'blur(2px)'
      document.body.style.transform = 'scale(0.98)'
      document.body.style.imageRendering = 'pixelated'

      setTimeout(() => {
        document.body.style.filter = 'blur(0px)'
        document.body.style.transform = 'scale(1)'
        setTimeout(() => {
          document.body.style.transition = ''
          document.body.style.imageRendering = ''
        }, PHI * 1000)
      }, PHI * 1000)
    },

    // Effect 7: Sepia/Film Grain
    () => {
      // Create sepia overlay that covers entire viewport
      const sepiaOverlay = document.createElement('div')
      sepiaOverlay.style.position = 'fixed'
      sepiaOverlay.style.top = '0'
      sepiaOverlay.style.left = '0'
      sepiaOverlay.style.width = '100vw'
      sepiaOverlay.style.height = '100vh'
      sepiaOverlay.style.backgroundColor = 'rgba(181, 140, 63, 0.4)'
      sepiaOverlay.style.mixBlendMode = 'multiply'
      sepiaOverlay.style.pointerEvents = 'none'
      sepiaOverlay.style.zIndex = '9997'
      sepiaOverlay.style.opacity = '0'
      sepiaOverlay.style.transition = `opacity ${PHI * 0.5}s ease`

      // Create grain overlay
      const grain = document.createElement('div')
      grain.style.position = 'fixed'
      grain.style.top = '0'
      grain.style.left = '0'
      grain.style.width = '100vw'
      grain.style.height = '100vh'
      grain.style.background = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
      grain.style.opacity = '0.6'
      grain.style.pointerEvents = 'none'
      grain.style.zIndex = '9998'
      grain.style.animation = 'grain 0.2s steps(10) infinite'

      // Add additional sepia filter to html element for better coverage
      const htmlElement = document.documentElement
      const originalFilter = htmlElement.style.filter || ''
      htmlElement.style.transition = `filter ${PHI}s ease`
      htmlElement.style.filter = 'sepia(1) contrast(1.3) saturate(0.8) brightness(1.1)'

      // Add grain animation keyframes
      const style = document.createElement('style')
      style.textContent = `
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
      `
      document.head.appendChild(style)
      
      document.body.appendChild(sepiaOverlay)
      document.body.appendChild(grain)

      // Fade in the sepia overlay
      setTimeout(() => {
        sepiaOverlay.style.opacity = '1'
      }, 100)

      setTimeout(() => {
        // Fade out
        sepiaOverlay.style.opacity = '0'
        htmlElement.style.filter = originalFilter
        
        setTimeout(() => {
          sepiaOverlay.remove()
          grain.remove()
          style.remove()
          htmlElement.style.transition = ''
        }, PHI * 500)
      }, PHI * 2500)
    },

    // Effect 8: Earthquake Shake
    () => {
      const intensity = 10
      let shakeCount = 0
      const maxShakes = PHI * 20

      const shake = () => {
        if (shakeCount < maxShakes) {
          const x = (Math.random() - 0.5) * intensity
          const y = (Math.random() - 0.5) * intensity
          document.body.style.transform = `translate(${x}px, ${y}px)`
          shakeCount++
          setTimeout(shake, 50)
        } else {
          document.body.style.transform = ''
          document.body.style.transition = `transform ${PHI * 0.5}s ease`
          setTimeout(() => {
            document.body.style.transition = ''
          }, PHI * 500)
        }
      }
      shake()
    },

    // Effect 9: Gravity Drop
    () => {
      const elements = document.querySelectorAll(
        'h1, h2, h3, h4, p, img, button, div',
      )
      const originalTransforms = new Map()

      elements.forEach((el, index) => {
        const htmlEl = el as HTMLElement
        originalTransforms.set(el, htmlEl.style.transform || '')

        setTimeout(() => {
          htmlEl.style.transition = `transform ${PHI * 0.8}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
          htmlEl.style.transform = `translateY(${Math.random() * 50 + 20}px) rotate(${(Math.random() - 0.5) * 10}deg)`

          setTimeout(() => {
            htmlEl.style.transition = `transform ${PHI * 0.6}s cubic-bezier(0.34, 1.56, 0.64, 1)`
            htmlEl.style.transform = originalTransforms.get(el)

            setTimeout(() => {
              htmlEl.style.transition = ''
            }, PHI * 600)
          }, PHI * 800)
        }, index * 50)
      })
    },

    // Effect 10: Elastic Bounce
    () => {
      document.body.style.transition = `transform ${PHI * 1.5}s cubic-bezier(0.68, -0.55, 0.265, 1.55)`
      document.body.style.transform = 'scale(1.05)'

      setTimeout(() => {
        document.body.style.transform = 'scale(0.95)'

        setTimeout(() => {
          document.body.style.transform = 'scale(1.02)'

          setTimeout(() => {
            document.body.style.transform = 'scale(1)'
            setTimeout(() => {
              document.body.style.transition = ''
            }, PHI * 500)
          }, PHI * 300)
        }, PHI * 400)
      }, PHI * 500)
    },

    // Effect 11: Disco Ball
    () => {
      const currentScrollY = window.scrollY

      // Create disco ball overlay
      const disco = document.createElement('div')
      disco.style.position = 'absolute'
      disco.style.top = currentScrollY + 'px'
      disco.style.left = '0'
      disco.style.width = '100vw'
      disco.style.height = '100vh'
      disco.style.background =
        'conic-gradient(from 0deg, transparent 0deg, rgba(255,0,255,0.3) 60deg, transparent 120deg, rgba(0,255,255,0.3) 180deg, transparent 240deg, rgba(255,255,0,0.3) 300deg, transparent 360deg)'
      disco.style.pointerEvents = 'none'
      disco.style.zIndex = '9997'
      disco.style.animation = `discoSpin ${PHI * 2}s linear infinite`

      // Add spinning keyframes
      const style = document.createElement('style')
      style.textContent = `
        @keyframes discoSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `
      document.head.appendChild(style)
      document.body.appendChild(disco)

      // Add sparkle effects
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          const sparkle = document.createElement('div')
          sparkle.style.position = 'absolute'
          sparkle.style.left = Math.random() * 100 + '%'
          sparkle.style.top =
            currentScrollY + Math.random() * window.innerHeight + 'px'
          sparkle.style.width = '4px'
          sparkle.style.height = '4px'
          sparkle.style.background = ['#ff00ff', '#00ffff', '#ffff00'][
            Math.floor(Math.random() * 3)
          ]
          sparkle.style.borderRadius = '50%'
          sparkle.style.pointerEvents = 'none'
          sparkle.style.zIndex = '9998'
          sparkle.style.animation = 'sparkle 0.5s ease-in-out'

          const sparkleStyle = document.createElement('style')
          sparkleStyle.textContent = `
            @keyframes sparkle {
              0% { transform: scale(0) rotate(0deg); opacity: 1; }
              50% { transform: scale(1) rotate(180deg); opacity: 1; }
              100% { transform: scale(0) rotate(360deg); opacity: 0; }
            }
          `
          document.head.appendChild(sparkleStyle)
          document.body.appendChild(sparkle)

          setTimeout(() => {
            sparkle.remove()
            sparkleStyle.remove()
          }, 500)
        }, i * 100)
      }

      setTimeout(() => {
        disco.remove()
        style.remove()
      }, PHI * 3000)
    },

    // Effect 12: Paper Airplane
    () => {
      const currentScrollY = window.scrollY

      for (let i = 0; i < 5; i++) {
        setTimeout(
          () => {
            const airplane = document.createElement('div')
            airplane.innerHTML = `
            <svg width="40" height="20" viewBox="0 0 40 20" style="transform: rotate(${Math.random() * 20 - 10}deg);">
              <path d="M0 10 L15 0 L40 10 L15 20 Z" fill="#FFD700" stroke="#FFA500" stroke-width="1"/>
              <path d="M15 10 L25 5 L25 15 Z" fill="#FFA500"/>
            </svg>
          `
            airplane.style.position = 'absolute'
            airplane.style.left = '-50px'
            airplane.style.top =
              currentScrollY + Math.random() * window.innerHeight + 'px'
            airplane.style.pointerEvents = 'none'
            airplane.style.zIndex = '9999'
            airplane.style.transition = `all ${PHI * 3}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`

            document.body.appendChild(airplane)

            setTimeout(() => {
              airplane.style.left = window.innerWidth + 50 + 'px'
              airplane.style.transform = `translateY(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 360}deg)`
              airplane.style.opacity = '0'
            }, 100)

            setTimeout(
              () => {
                airplane.remove()
              },
              PHI * 3000 + 200,
            )
          },
          i * PHI * 400,
        )
      }
    },

    // Effect 13: Clippy Helper
    () => {
      // Create Clippy container
      const clippyContainer = document.createElement('div')
      clippyContainer.style.position = 'fixed'
      clippyContainer.style.bottom = '20px'
      clippyContainer.style.right = '20px'
      clippyContainer.style.zIndex = '9999'
      clippyContainer.style.pointerEvents = 'none'

      // Create Clippy image
      const clippy = document.createElement('img')
      clippy.src = '/clippy.png'
      clippy.style.width = '80px'
      clippy.style.height = 'auto'
      clippy.style.display = 'block'
      clippy.style.animation = 'clippyBounce 2s ease-in-out infinite'

      // Create speech bubble
      const speechBubble = document.createElement('div')
      speechBubble.textContent = 'Hi, do you need help?'
      speechBubble.style.position = 'absolute'
      speechBubble.style.bottom = '85px'
      speechBubble.style.right = '10px'
      speechBubble.style.backgroundColor = '#ffffff'
      speechBubble.style.border = '2px solid #000000'
      speechBubble.style.borderRadius = '8px'
      speechBubble.style.padding = '8px 12px'
      speechBubble.style.fontSize = '14px'
      speechBubble.style.fontFamily = 'Arial, sans-serif'
      speechBubble.style.whiteSpace = 'nowrap'
      speechBubble.style.boxShadow = '2px 2px 4px rgba(0,0,0,0.3)'
      speechBubble.style.animation = 'fadeInUp 0.5s ease-out'

      // Create speech bubble tail
      const bubbleTail = document.createElement('div')
      bubbleTail.style.position = 'absolute'
      bubbleTail.style.bottom = '-8px'
      bubbleTail.style.right = '25px'
      bubbleTail.style.width = '0'
      bubbleTail.style.height = '0'
      bubbleTail.style.borderLeft = '8px solid transparent'
      bubbleTail.style.borderRight = '8px solid transparent'
      bubbleTail.style.borderTop = '8px solid #000000'

      const bubbleTailInner = document.createElement('div')
      bubbleTailInner.style.position = 'absolute'
      bubbleTailInner.style.bottom = '1px'
      bubbleTailInner.style.right = '-6px'
      bubbleTailInner.style.width = '0'
      bubbleTailInner.style.height = '0'
      bubbleTailInner.style.borderLeft = '6px solid transparent'
      bubbleTailInner.style.borderRight = '6px solid transparent'
      bubbleTailInner.style.borderTop = '6px solid #ffffff'

      bubbleTail.appendChild(bubbleTailInner)
      speechBubble.appendChild(bubbleTail)

      // Add animations CSS
      const style = document.createElement('style')
      style.textContent = `
        @keyframes clippyBounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(10px) scale(0.8); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0px) scale(1); 
          }
        }
        @keyframes fadeOut {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.8); }
        }
      `
      document.head.appendChild(style)

      // Assemble the components
      clippyContainer.appendChild(speechBubble)
      clippyContainer.appendChild(clippy)
      document.body.appendChild(clippyContainer)

      // Animate out after delay
      setTimeout(() => {
        speechBubble.style.animation = 'fadeOut 0.5s ease-in forwards'
        clippy.style.animation = 'fadeOut 0.5s ease-in forwards'

        setTimeout(() => {
          clippyContainer.remove()
          style.remove()
        }, 500)
      }, PHI * 2500)
    },
  ]

  const handleSurprise = () => {
    if (isActive) return

    setIsActive(true)
    const effectIndex = Math.floor(Math.random() * surpriseEffects.length)
    const effectNames = [
      'upside_down_flip',
      'golden_confetti',
      'color_chaos',
      'matrix_rain',
      'neon_glow',
      'pixelation',
      'sepia_film_grain',
      'earthquake_shake',
      'gravity_drop',
      'elastic_bounce',
      'disco_ball',
      'paper_airplane',
      'clippy_helper',
    ]

    // Track the analytics event
    track('surprise_button_clicked', {
      effect: effectNames[effectIndex],
      scroll_position: window.scrollY,
      viewport_height: window.innerHeight,
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
