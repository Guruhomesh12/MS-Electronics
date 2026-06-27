"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "The Evolution of Optical Bonding in Harsh Environments",
    excerpt: "How new adhesive technologies are expanding the operating temperature ranges of industrial HMI panels.",
    date: "October 12, 2023",
    category: "Engineering Insights",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Capacitive vs. Resistive Touch in Medical Devices",
    excerpt: "Why modern healthcare equipment is transitioning to glove-compatible projective capacitive screens.",
    date: "September 28, 2023",
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Automated Optical Inspection for Zero-Defect Manufacturing",
    excerpt: "A deep dive into how our new AOI systems guarantee 100% precision in glass touch panel production.",
    date: "September 15, 2023",
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Custom HMI Interfaces for Electric Vehicle Infrastructure",
    excerpt: "Meeting the rigorous demands of outdoor EV charging stations with high-brightness, extreme-temperature touch solutions.",
    date: "August 30, 2023",
    category: "Industry News",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80"
  }
]

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Insights & <span className="text-accent">Innovations</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore industry trends, engineering case studies, and manufacturing insights from our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:border-accent/30 transition-colors"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-bold uppercase tracking-wider rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-700 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-accent transition-colors"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full border border-black/10 text-gray-900 hover:bg-black/5 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  )
}
