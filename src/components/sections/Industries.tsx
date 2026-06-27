"use client"

import * as React from "react"
import { motion } from "framer-motion"

const industries = [
  { name: "Medical", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" },
  { name: "Industrial Automation", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
  { name: "Automotive", image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=800&q=80" },
  { name: "Defense", image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?auto=format&fit=crop&w=800&q=80" },
  { name: "Marine", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80" },
  { name: "Smart Home", image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80" },
]

export function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Industries <span className="text-accent">Served</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Note: In a real app, use next/image. Using standard img for quick prototyping as requested placeholder */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${industry.image})` }}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-gray-900 font-bold text-lg md:text-2xl text-center group-hover:scale-110 transition-transform duration-500 text-glow">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
