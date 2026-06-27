"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X, ZoomIn } from "lucide-react"

type MediaItem = {
  name: string;
  url: string;
  type: 'image' | 'video';
  category: string;
}

export default function GalleryPage() {
  const [items, setItems] = React.useState<MediaItem[]>([])
  const [filter, setFilter] = React.useState('All')
  const [selectedItem, setSelectedItem] = React.useState<MediaItem | null>(null)
  
  React.useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => setItems(data.files || []))
      .catch(console.error)
  }, [])

  const filteredItems = items.filter(item => filter === 'All' || item.category === filter)
  const categories = ['All', ...Array.from(new Set(items.map(i => i.category)))]

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Manufacturing <span className="text-accent">Gallery</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our state-of-the-art facility, precision equipment, and custom engineered touch solutions.
          </p>
        </div>

        {/* Filters */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? 'bg-accent text-accent-foreground' 
                    : 'bg-black/5 text-gray-600 hover:bg-black/5 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Masonry Grid */}
        {items.length === 0 ? (
          <div className="text-center text-gray-500 py-20 border border-dashed border-black/5 rounded-2xl">
            <p>No media found. Add images or videos to the `public/gallery` folder.</p>
          </div>
        ) : (
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.url}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl bg-black/5 break-inside-avoid"
                  onClick={() => setSelectedItem(item)}
                >
                  {item.type === 'image' ? (
                    <img src={item.url} alt={item.name} className="w-full h-auto object-cover" loading="lazy" />
                  ) : (
                    <div className="relative">
                      <video src={item.url} className="w-full h-auto" preload="metadata" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Play className="w-12 h-12 text-gray-900 opacity-80" />
                      </div>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <ZoomIn className="w-8 h-8 text-gray-900 drop-shadow-lg" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-black/5 rounded-full text-gray-900 hover:bg-black/10 transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              {selectedItem.type === 'image' ? (
                <img src={selectedItem.url} alt={selectedItem.name} className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
              ) : (
                <video src={selectedItem.url} controls autoPlay className="max-w-full max-h-[90vh] rounded-lg shadow-2xl outline-none" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
