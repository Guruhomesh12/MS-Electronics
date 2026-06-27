"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"
import { ArrowRight, Monitor, Settings, Zap, ShieldCheck, Activity, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "Capacitive Touch Panels",
    description: "Multi-touch, high-durability panels for modern interactive interfaces.",
    icon: Monitor,
  },
  {
    title: "Glass Touch Panels",
    description: "Premium edge-to-edge glass designs with anti-glare and anti-fingerprint coatings.",
    icon: ShieldCheck,
  },
  {
    title: "Membrane Switches",
    description: "Reliable tactile feedback for harsh industrial environments.",
    icon: Settings,
  },
  {
    title: "Industrial HMI Panels",
    description: "Ruggedized interfaces designed to withstand extreme temperatures and vibration.",
    icon: Cpu,
  },
  {
    title: "Medical Touch Panels",
    description: "Anti-microbial, glove-compatible screens for healthcare equipment.",
    icon: Activity,
  },
  {
    title: "Automotive Touch Panels",
    description: "High-brightness displays with extreme reliability for vehicular applications.",
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
    <section id="products" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-accent/5 rounded-[100%] blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Engineered for <span className="text-accent">Every Industry</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto"
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
                className="group relative glass-card p-1 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,240,255,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
                <div className="relative h-full bg-white/80 rounded-[14px] p-8 flex flex-col items-start gap-6 border border-black/5 group-hover:border-accent/30 transition-colors duration-500">
                  <div className="p-3 rounded-lg bg-black/5 group-hover:bg-accent/10 transition-colors duration-500">
                    <Icon className="w-8 h-8 text-gray-900 group-hover:text-accent transition-colors duration-500" />
                  </div>
                  <div className="space-y-3 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-glow transition-all duration-300">{product.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
                  </div>
                  <Button variant="link" className="px-0 text-gray-700 group-hover:text-accent transition-colors duration-300">
                    Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button variant="outline" size="lg" className="px-8 group">
            View All Products
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
