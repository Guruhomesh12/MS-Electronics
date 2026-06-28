"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Settings2, PlayCircle } from "lucide-react"

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 1.1])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image / Video Placeholder */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background z-10" />
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80" 
          alt="Advanced LCD Manufacturing" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl space-y-8"
        >
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium text-white tracking-wide uppercase">Custom LCD Display Manufacturer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.1]">
            Engineering Precision <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-accent text-glow">
              Into Every Display.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Global leaders in high-performance touch panels, optical bonding, and custom display solutions for Industrial, Medical, and Military applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button variant="default" size="lg" className="w-full sm:w-auto bg-accent text-white hover:bg-accent/90 border-0" asChild>
              <Link href="/#quote">
                Get a Custom Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10" asChild>
              <Link href="/#products">
                <Settings2 className="mr-2 w-4 h-4" />
                Explore Capabilities
              </Link>
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto text-gray-300 hover:text-white hover:bg-white/5">
              <PlayCircle className="mr-2 w-4 h-4" />
              Watch Our Process
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent z-20"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent/20 blur-[120px] z-10 pointer-events-none"></div>
    </section>
  )
}
