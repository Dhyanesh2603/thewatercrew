import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { NAV_ITEMS } from '@/constants/navigation'
import { cn } from '@/utils/cn'

interface NavbarProps {
  onOpenInternship?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInternship }) => {
  const [isHidden, setIsHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Hide on scroll down, reveal on scroll up
      if (!mobileMenuOpen) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 70) {
          setIsHidden(true)
        } else if (currentScrollY < lastScrollY.current || currentScrollY <= 20) {
          setIsHidden(false)
        }
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])

  useEffect(() => {
    setMobileMenuOpen(false)
    setIsHidden(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        // Relaxing, calm dark slate-green tone (not blue, not pitch dark)
        'bg-[#202D2B] border-b border-[#2C3E3A] text-white',
        isScrolled ? 'shadow-md py-3' : 'py-3.5 sm:py-4',
        isHidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Title (Zero hover effects as requested) */}
          <Link
            to="/"
            className="flex items-center gap-3 focus:outline-none rounded-lg p-1"
            aria-label="The water crew Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex items-center justify-center border border-white/20 bg-slate-900 shadow-xs shrink-0">
              <img
                src="/logo.png"
                alt="The water crew Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-white select-none">
              The water crew
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.href)

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    'px-3 lg:px-3.5 py-1.5 text-xs lg:text-sm font-semibold uppercase tracking-wider rounded-lg transition-colors relative',
                    isActive
                      ? 'text-white font-bold bg-white/12'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Clean flat indicator without glowing effects */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicatorClean"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#076E73] rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}

            {/* Simple Green Action Button */}
            {onOpenInternship && (
              <div className="ml-2 pl-2 border-l border-[#2C3E3A]">
                <button
                  type="button"
                  onClick={onOpenInternship}
                  className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors bg-[#076E73] hover:bg-[#065A5E] text-white shadow-2xs flex items-center gap-1 cursor-pointer"
                >
                  <span>Apply</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors text-slate-200 hover:text-white hover:bg-white/5 border border-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#202D2B] border-b border-[#2C3E3A] shadow-xl px-5 py-6 mt-3 max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.href)

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block px-4 py-3 text-sm font-semibold uppercase tracking-wider rounded-xl transition-colors',
                      isActive
                        ? 'bg-white/12 text-white font-bold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}

              {onOpenInternship && (
                <div className="pt-4 mt-2 border-t border-[#2C3E3A]">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      onOpenInternship()
                    }}
                    className="w-full py-3 bg-[#076E73] hover:bg-[#065A5E] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Apply for Internship</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
