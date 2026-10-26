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

      // Check if user is scrolled past top threshold
      if (currentScrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Hide on scroll down, reveal on scroll up
      // If mobile menu is open, do not auto-hide
      if (!mobileMenuOpen) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 70) {
          // Scrolling DOWN -> hide menu bar
          setIsHidden(true)
        } else if (currentScrollY < lastScrollY.current || currentScrollY <= 20) {
          // Scrolling UP or at top -> reveal menu bar
          setIsHidden(false)
        }
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setIsHidden(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        // Darker shade to make the menu bar distinctly identifiable rather than blending with light background
        'bg-[#070D14] border-b border-[#142334] text-white',
        isScrolled ? 'shadow-[0_8px_30px_rgba(0,0,0,0.45)] py-3' : 'py-3.5 sm:py-4',
        // Hide on scroll down
        isHidden ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Title (Left) */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-500/40 rounded-lg p-1"
            aria-label="The Water Crew Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 border border-slate-700/60 bg-slate-900/80 shadow-inner">
              <img
                src="/logo.png"
                alt="The Water Crew Logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight leading-tight oil-spill-hover">
                <span className="text-white">THE WATER</span>{' '}
                <span className="text-[#00F0FF] font-black">CREW</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase text-slate-400 -mt-0.5">
                MARINE OIL SPILL RECOVERY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Right - matching reference website) */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3" aria-label="Main Navigation">
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
                    'px-3 lg:px-3.5 py-1.5 text-xs lg:text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-200 relative group/link',
                    isActive
                      ? 'text-[#00F0FF] bg-cyan-950/40 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                      : 'text-slate-200 hover:text-[#00F0FF] hover:bg-slate-800/60'
                  )}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* Active bottom glow bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeDarkNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#00F0FF] rounded-full shadow-[0_0_8px_#00F0FF]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}

            {/* Quick Action Button */}
            {onOpenInternship && (
              <div className="ml-2 pl-2 border-l border-slate-800">
                <button
                  type="button"
                  onClick={onOpenInternship}
                  className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 bg-[#076E73] text-white hover:bg-[#0aa3ab] hover:shadow-[0_0_15px_rgba(7,110,115,0.4)] flex items-center gap-1 cursor-pointer"
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
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors text-slate-200 hover:text-white hover:bg-slate-800 border border-slate-800"
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
            className="md:hidden bg-[#070D14] border-b border-slate-800 shadow-2xl px-5 py-6 mt-3 max-h-[85vh] overflow-y-auto"
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
                      'block px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-colors',
                      isActive
                        ? 'bg-cyan-950/60 text-[#00F0FF] border border-cyan-500/30'
                        : 'text-slate-200 hover:text-[#00F0FF] hover:bg-slate-800/80'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}

              {onOpenInternship && (
                <div className="pt-4 mt-2 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      onOpenInternship()
                    }}
                    className="w-full py-3 bg-[#076E73] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#0aa3ab] transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
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
