import * as React from 'react'
import { cn } from '@/utils/cn'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'slate'
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  ...props
}) => {
  const variants = {
    default: 'border-transparent bg-[#0B2545] text-white',
    secondary: 'border-transparent bg-slate-100 text-slate-900',
    outline: 'text-slate-800 border-slate-200 bg-white',
    slate: 'bg-slate-50 text-slate-700 border-slate-200/80',
  }

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-colors',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
