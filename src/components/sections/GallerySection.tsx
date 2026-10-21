import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Image as ImageIcon, Maximize2, X } from 'lucide-react'
import { GALLERY_ITEMS } from '@/constants/projectData'
import type { GalleryItem } from '@/types'
import { easeEngineering } from '@/animations/motionVariants'
import { cn } from '@/utils/cn'

type CategoryFilter = 'All' | 'Laboratory' | 'Workshop' | 'Prototype' | 'Field Testing'

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const categories: CategoryFilter[] = ['All', 'Laboratory', 'Workshop', 'Prototype', 'Field Testing']

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FAFBFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/90 text-xs font-semibold text-slate-700 tracking-wide mb-3">
              <ImageIcon className="w-3.5 h-3.5 text-[#0B2545]" />
              PHOTO ARCHIVE & FIELD BENCHMARKS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Experimental Rigs & Prototype Manufacturing
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Photographic documentation of our physical testing, water flume benchmarks, CNC composite milling, and prototype assembly at VIT.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-slate-200/90 rounded-xl shadow-2xs self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200',
                  activeCategory === cat
                    ? 'bg-[#0B2545] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest Inspired Modern Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedItem(item)}
                className={cn(
                  'relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-sm group cursor-pointer',
                  item.aspectRatio === 'tall' ? 'aspect-[3/4]' : item.aspectRatio === 'wide' ? 'aspect-[16/10]' : 'aspect-square'
                )}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Dark Technical Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Category Pill Top Left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold text-slate-800 rounded-md shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon Top Right */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-8 h-8 rounded-lg bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Overlay Title & Subtext */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <span className="text-[10px] font-mono uppercase text-sky-300 tracking-wider block mb-1">
                    {item.date}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-200 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Image Preview"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: easeEngineering }}
              className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl z-10 text-white"
            >
              <div className="relative aspect-[16/10] bg-black">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 bg-slate-900">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-sky-950 text-sky-300 text-xs font-mono font-semibold border border-sky-800">
                    {selectedItem.category} · {selectedItem.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
