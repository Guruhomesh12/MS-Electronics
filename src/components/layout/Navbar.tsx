"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Products", href: "/#products" },
  { name: "Process", href: "/#process" },
  { name: "Gallery", href: "/gallery" },
  { name: "Downloads", href: "/downloads" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "glass py-4 shadow-lg border-white/10"
          : "bg-transparent py-6 border-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 z-50 relative group">
          <div className="bg-white p-1.5 rounded-sm shadow-md">
            <img src="/logo.png" alt="MS Electronics Logo" className="h-9 w-auto object-contain" />
          </div>
          <span className="text-3xl md:text-4xl font-extrabold tracking-wider text-white group-hover:text-glow transition-all duration-300">
            Electronics
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                pathname === link.href ? "text-accent" : "text-gray-300"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" size="sm" className="bg-accent text-white hover:bg-accent/90 border-0" asChild>
            <Link href="/#quote">Request Quote</Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 relative p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center space-y-8 transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-bold text-gray-300 hover:text-accent transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Button variant="default" size="lg" className="bg-accent text-white hover:bg-accent/90 border-0" asChild onClick={() => setMobileMenuOpen(false)}>
          <Link href="/#quote">Request Quote</Link>
        </Button>
      </div>
    </header>
  )
}
