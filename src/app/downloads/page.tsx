"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Search, Download, FileArchive, FileIcon, LayoutGrid, List } from "lucide-react"

type DocItem = {
  name: string;
  url: string;
  type: string;
  size: string;
  date: string;
}

export default function DownloadsPage() {
  const [items, setItems] = React.useState<DocItem[]>([])
  const [searchQuery, setSearchQuery] = React.useState("")
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid')
  
  React.useEffect(() => {
    fetch('/api/downloads')
      .then(res => res.json())
      .then(data => setItems(data.files || []))
      .catch(console.error)
  }, [])

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.type.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getIcon = (type: string) => {
    if (type === 'PDF') return <FileText className="w-8 h-8 text-red-400" />
    if (type === 'Archive') return <FileArchive className="w-8 h-8 text-yellow-400" />
    return <FileIcon className="w-8 h-8 text-blue-400" />
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Document <span className="text-accent">Center</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access our technical specifications, product catalogs, certifications, and company profiles.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search documents..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-black/5 border border-black/5 rounded-full pl-10 pr-4 py-3 text-gray-900 focus:outline-none focus:border-accent/50 focus:bg-black/5 transition-colors"
            />
          </div>
          
          <div className="flex bg-black/5 rounded-lg p-1 border border-black/5">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-black/5 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-black/5 text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Documents Display */}
        {items.length === 0 ? (
          <div className="text-center text-gray-500 py-20 border border-dashed border-black/5 rounded-2xl">
            <p>No documents found. Add PDFs or files to the `public/downloads` folder.</p>
          </div>
        ) : (
          <motion.div 
            layout 
            className={viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
              : "flex flex-col gap-4"
            }
          >
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.url}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`glass-card rounded-xl group relative overflow-hidden transition-all duration-300 hover:border-accent/30 ${
                    viewMode === 'list' ? 'flex items-center p-4 pr-6' : 'p-6 flex flex-col h-64'
                  }`}
                >
                  <div className={`flex ${viewMode === 'list' ? 'items-center gap-4 flex-1' : 'flex-col gap-4 h-full'}`}>
                    <div className="p-3 bg-black/5 rounded-lg shrink-0 group-hover:bg-accent/10 transition-colors w-max">
                      {getIcon(item.type)}
                    </div>
                    
                    <div className={`flex-1 ${viewMode === 'list' ? '' : 'flex flex-col'}`}>
                      <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-accent transition-colors" title={item.name}>
                        {item.name}
                      </h3>
                      <div className={`flex text-xs text-gray-500 mt-2 gap-3 ${viewMode === 'list' ? 'items-center' : 'mt-auto flex-wrap'}`}>
                        <span className="bg-black/5 px-2 py-1 rounded">{item.type}</span>
                        <span>{item.size}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href={item.url}
                    download
                    className={`absolute ${viewMode === 'list' ? 'right-6' : 'bottom-6 right-6'} w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110`}
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  )
}
