import React, { useRef, useState, useCallback, useEffect } from 'react'
import { cn } from '@/utils/cn'

interface Ripple {
  id: number
  x: number
  y: number
}

interface OilSpillTextProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div' | 'p'
}

/**
 * OilSpillText
 * Renders crisp, dignified deep-tech typography.
 * When hovered, spawns a small oil droplet radius at the cursor position
 * with concentric liquid ripple waves in authentic oil colors (crude black,
 * petrol amber, deep teal, ocean navy) without any glowing effect.
 */
export const OilSpillText: React.FC<OilSpillTextProps> = ({
  children,
  className,
  as: Component = 'span',
}) => {
  const containerRef = useRef<HTMLElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [isHovered, setIsHovered] = useState(false)
  const lastDropTime = useRef(0)
  const lastPos = useRef({ x: -999, y: -999 })

  const spawnDropletRipple = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    const now = Date.now()
    const dist = Math.hypot(x - lastPos.current.x, y - lastPos.current.y)

    // Rate-limit droplet generation: at least 150ms apart or 24px distance
    if (now - lastDropTime.current > 150 && (dist > 24 || lastDropTime.current === 0)) {
      lastDropTime.current = now
      lastPos.current = { x, y }
      const newRipple: Ripple = { id: now, x, y }
      setRipples((prev) => [...prev.slice(-3), newRipple])
    }
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      spawnDropletRipple(e.clientX, e.clientY)
    },
    [spawnDropletRipple]
  )

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      setIsHovered(true)
      spawnDropletRipple(e.clientX, e.clientY)
    },
    [spawnDropletRipple]
  )

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      // Direct click always drops a fresh droplet
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const newRipple: Ripple = { id: Date.now(), x, y }
      setRipples((prev) => [...prev.slice(-3), newRipple])
    },
    []
  )

  // Clean up completed ripples after animation completes (~1.35s)
  useEffect(() => {
    if (ripples.length === 0) return
    const timer = setTimeout(() => {
      const cutoff = Date.now() - 1400
      setRipples((prev) => prev.filter((r) => r.id > cutoff))
    }, 400)
    return () => clearTimeout(timer)
  }, [ripples])

  return (
    <Component
      ref={containerRef as any}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      className={cn('relative inline-block group cursor-default select-none overflow-visible', className)}
    >
      {/* Base Layer: Crisp Deep Ocean Navy (100% Sharp, Zero Glow) */}
      <span className="relative z-10 block transition-opacity duration-700 ease-in-out group-hover:opacity-0 text-[#0B2A3C]">
        {children}
      </span>

      {/* Viscous Oil Spillage Overlay Layer (Sharp, Authentic Oil Tones, Zero Glow) */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-0 z-20 pointer-events-none select-none transition-opacity duration-700 ease-in-out oil-spill-layer',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
      >
        {children}
      </span>

      {/* Small Oil Droplet & Concentric Ripple Waves in Oil Colors */}
      <div className="absolute inset-0 pointer-events-none z-30 overflow-visible">
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute pointer-events-none"
            style={{ left: ripple.x, top: ripple.y }}
          >
            {/* Small Oil Droplet Core (Small radius, dense crude oil bead) */}
            <div className="oil-droplet-core" />

            {/* Concentric Oil Color Ripple Rings (Hydrocarbon amber, petrol teal, ocean navy) */}
            <div className="oil-ripple-ring oil-ring-1" />
            <div className="oil-ripple-ring oil-ring-2" />
            <div className="oil-ripple-ring oil-ring-3" />
          </div>
        ))}
      </div>
    </Component>
  )
}
