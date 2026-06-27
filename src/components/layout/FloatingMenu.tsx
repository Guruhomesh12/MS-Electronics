"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Phone, Mail, FileText, MapPin, MessageCircle } from "lucide-react"

const actions = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919246288140", color: "hover:text-green-500" },
  { icon: Phone, label: "Call Us", href: "tel:+919246288140", color: "hover:text-blue-500" },
  { icon: Mail, label: "Email Us", href: "mailto:#", color: "hover:text-red-400" },
  { icon: FileText, label: "Request Quote", href: "/#quote", color: "hover:text-accent" },
  { icon: MapPin, label: "Navigate", href: "/contact", color: "hover:text-yellow-400" },
]

export function FloatingMenu() {
  const [isVisible, setIsVisible] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)
  const [isExpanded, setIsExpanded] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsExpanded(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div
      className={cn(
        "fixed right-6 bottom-6 z-50 transition-all duration-500 ease-in-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className={cn(
          "flex flex-col-reverse items-end gap-3 transition-all duration-300",
          isExpanded ? "mb-4" : "mb-0"
        )}
      >
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <a
              key={action.label}
              href={action.href}
              className={cn(
                "group relative flex items-center justify-center w-12 h-12 rounded-full glass-card hover:bg-black/5 transition-all duration-300",
                isExpanded
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-10 opacity-0 scale-50 pointer-events-none absolute bottom-0 right-0",
                action.color
              )}
              style={{
                transitionDelay: isExpanded ? `${(actions.length - index) * 50}ms` : "0ms",
              }}
            >
              <Icon size={20} />
              
              {/* Tooltip */}
              <span className="absolute right-14 px-3 py-1.5 rounded-md glass text-xs font-medium text-gray-900 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
                {action.label}
              </span>
            </a>
          )
        })}
      </div>

      {/* Main Trigger Button */}
      <button
        className={cn(
          "relative flex items-center justify-center px-6 h-14 rounded-full bg-accent text-accent-foreground shadow-[0_0_20px_rgba(0,113,227,0.4)] hover:shadow-[0_0_30px_rgba(0,113,227,0.6)] hover:scale-105 transition-all duration-300 z-10 font-medium"
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="sr-only">Quick Actions</span>
        {isExpanded ? (
          <span className="flex items-center">
            <span className="text-xl leading-none rotate-45 relative top-[-1px]">+</span>
          </span>
        ) : (
          <span className="flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact
          </span>
        )}
      </button>
    </div>
  )
}
