import React, { useRef, useState, useCallback } from 'react'
import { cn } from '@/utils/cn'

interface OilSpillTextProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div' | 'p'
}

/**
 * OilSpillText
 * Renders dignified deep-tech typography that blooms into a subtle, viscous
 * oil spillage sheen with interactive fluid dynamics when hovered.
 */
export const OilSpillText: React.FC<OilSpillTextProps> = ({
  children,
  className,
  as: Component = 'span',
}) => {
  const containerRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100))
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100))
    setMousePos({ x, y })
  }, [])

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLElement>) => {
    setIsHovered(true)
    handleMouseMove(e)
  }, [handleMouseMove])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  return (
    <Component
      ref={containerRef as any}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn('relative inline-block group cursor-default', className)}
      style={
        {
          '--mouse-x': `${mousePos.x}%`,
          '--mouse-y': `${mousePos.y}%`,
        } as React.CSSProperties
      }
    >
      {/* Base Layer: Pristine Deep Ocean Navy */}
      <span className="relative z-10 block transition-opacity duration-700 ease-in-out group-hover:opacity-0 text-[#0B2A3C]">
        {children}
      </span>

      {/* Viscous Oil Spillage Overlay Layer: Smoothly manifests on hover */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-0 z-20 pointer-events-none select-none transition-opacity duration-700 ease-in-out oil-spill-layer',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
      >
        {children}
      </span>
    </Component>
  )
}
