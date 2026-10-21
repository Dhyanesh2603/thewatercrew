import React from 'react'
import { cn } from '@/utils/cn'

interface SectionHeaderProps {
  badge: string
  title: string
  subtitle?: string
  icon?: React.ReactNode
  className?: string
  centered?: boolean
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  icon,
  className,
  centered = false,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-16',
        centered ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-700 tracking-wide mb-3">
        {icon}
        <span>{badge}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
