import React, { useState } from 'react'
import { cn } from '@/utils/cn'

interface OilSpillTextProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div' | 'p'
}

/**
 * OilSpillText
 * Crisp, dignified deep-tech typography.
 * When hovered, a subtle, viscous oil spillage sheen flows strictly inside the font.
 * Zero external ripples, zero glowing effect.
 */
export const OilSpillText: React.FC<OilSpillTextProps> = ({
  children,
  className,
  as: Component = 'span',
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Component
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn('relative inline-block group cursor-default', className)}
    >
      {/* Base Layer: Crisp Deep Ocean Navy (100% Sharp, Zero Glow) */}
      <span className="relative z-10 block transition-opacity duration-500 ease-in-out group-hover:opacity-0 text-[#0B2A3C]">
        {children}
      </span>

      {/* Viscous Oil Spillage Layer: Confined strictly within the font characters */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-0 z-20 pointer-events-none select-none transition-opacity duration-500 ease-in-out oil-spill-layer',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
      >
        {children}
      </span>
    </Component>
  )
}
