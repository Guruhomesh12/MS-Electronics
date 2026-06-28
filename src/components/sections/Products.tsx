"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { ArrowRight, Monitor, Settings, Zap, ShieldCheck, Activity, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Capacitive Touch Panels",
    description: "Multi-touch, high-durability panels for modern interactive interfaces. Custom engineered for extreme environments.",
    icon: Monitor,
  },
  {
    title: "Glass Touch Panels",
    description: "Premium edge-to-edge glass designs with anti-glare, anti-reflective, and anti-fingerprint optical coatings.",
    icon: ShieldCheck,
  },
  {
    title: "Membrane Switches",
    description: "Reliable tactile feedback with fully sealed designs, perfect for harsh industrial or medical applications.",
    icon: Settings,
  },
  {
    title: "Industrial HMI Panels",
    description: "Ruggedized human-machine interfaces designed to withstand extreme temperatures, shock, and vibration.",
    icon: Cpu,
  },
  {
    title: "Medical Displays",
    description: "Anti-microbial, glove-compatible screens that meet strict healthcare equipment compliance standards.",
    icon: Activity,
  },
  {
    title: "Automotive Interfaces",
    description: "High-brightness displays with extreme reliability and extended life cycles for vehicular integration.",
    icon: Zap,
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export function Products() {
  return (
    <section id="products" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a] z-10" />
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80" 
          alt="Technology Background" 
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-accent/10 rounded-[100%] blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-4"
          >
            <span className="text-xs font-semibold text-accent tracking-widest uppercase">Our Products</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-400">Every Industry</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            From rugged industrial environments to sterile medical facilities, our custom hardware solutions perform flawlessly.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => {
            const Icon = product.icon
            return (
              <motion.div 
                key={product.title} 
                variants={itemVariants}
                className="group relative h-full glass-panel rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Glow Effect behind the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                
                <div className="relative h-full p-8 flex flex-col items-start gap-6 z-10">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 group-hover:border-accent/30 group-hover:bg-accent/10 transition-colors duration-500">
                    <Icon className="w-8 h-8 text-gray-400 group-hover:text-accent transition-colors duration-500" />
                  </div>
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {product.description}
                    </p>
                  </div>
                  <Button variant="link" className="px-0 text-white/70 group-hover:text-accent transition-colors duration-300">
                    Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                {/* Animated Border Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-700 ease-out z-20"></div>
              </motion.div>
            )
          })}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Button variant="outline" size="lg" className="px-8 group border-white/20 text-white hover:bg-white/10">
            View All Display Solutions
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
