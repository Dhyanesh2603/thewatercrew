import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HomePage } from '@/pages/HomePage'
import { InternshipModal } from '@/components/ui/InternshipModal'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export function App() {
  const [isInternshipOpen, setIsInternshipOpen] = useState(false)

  // Initialize Lenis smooth scroll
  useSmoothScroll()

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#FAFBFC] text-slate-900 selection:bg-sky-500/20 selection:text-sky-950 font-sans">
          <Navbar onOpenInternship={() => setIsInternshipOpen(true)} />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </div>
          <Footer />
          <InternshipModal
            isOpen={isInternshipOpen}
            onClose={() => setIsInternshipOpen(false)}
          />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
