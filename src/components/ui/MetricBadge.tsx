import React from 'react'
import { cn } from '@/utils/cn'

interface MetricBadgeProps {
  label: string
  value: string
  subtext?: string
  className?: string
}

export const MetricBadge: React.FC<MetricBadgeProps> = ({
  label,
  value,
  subtext,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 shadow-2xs text-left',
        className
      )}
    >
      <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
        {label}
      </span>
      <span className="text-base sm:text-lg font-mono font-bold text-[#0B2545] mt-0.5 block">
        {value}
      </span>
      {subtext && (
        <span className="text-[10px] text-slate-500 mt-0.5 block">
          {subtext}
        </span>
      )}
    </div>
  )
}
