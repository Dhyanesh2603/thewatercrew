import * as React from 'react'
import { cn } from '@/utils/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-[#0B2A3C] text-white hover:bg-[#076E73] shadow-xs active:scale-[0.99]',
      outline: 'border border-slate-200 bg-white text-[#0B2A3C] hover:bg-[#F4FBFA] hover:border-[#076E73]/40 shadow-2xs',
      secondary: 'bg-slate-100 text-[#0B2A3C] hover:bg-slate-200/80',
      ghost: 'hover:bg-slate-100 hover:text-[#0B2A3C]',
      link: 'text-[#076E73] underline-offset-4 hover:underline p-0 h-auto',
    }

    const sizes = {
      default: 'h-10 px-4 py-2 text-sm rounded-xl',
      sm: 'h-8 px-3 text-xs rounded-lg',
      lg: 'h-12 px-6 text-base rounded-xl font-semibold',
      icon: 'h-9 w-9 rounded-xl flex items-center justify-center',
    }

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2A3C]/20 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
