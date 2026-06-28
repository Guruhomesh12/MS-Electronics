"use client"

import * as React from "react"
import { motion } from "framer-motion"

const industries = [
  { name: "Avionics", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80" },
  { name: "Military & Defense", image: "https://images.unsplash.com/photo-1579624584288-51ce54f15d2f?auto=format&fit=crop&w=800&q=80" },
  { name: "Medical", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80" },
  { name: "Industrial", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
  { name: "Marine", image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80" },
  { name: "Digital Signage", image: "https://images.unsplash.com/photo-1552826458-18e3881fa6a4?auto=format&fit=crop&w=800&q=80" },
]

export function Industries() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">Served</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg"
          >
            Delivering robust, custom-engineered display solutions tailored to the unique demands of specialized sectors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${industry.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-accent/80 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-white font-bold text-2xl md:text-3xl mb-2 group-hover:translate-y-[-10px] transition-transform duration-500">
                  {industry.name}
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white/90 text-sm font-medium">
                    Discover specialized solutions engineered for the {industry.name} sector.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
