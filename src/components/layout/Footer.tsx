import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-12 md:py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <Link href="/" className="flex items-center space-x-3 z-50 relative group">
            <div className="bg-white p-1.5 rounded-sm shadow-md">
              <img src="/logo.png" alt="MS Electronics Logo" className="h-7 w-auto object-contain" />
            </div>
            <span className="text-2xl font-extrabold tracking-wider text-white group-hover:text-glow transition-all duration-300">
              MS <span className="text-accent">Electronics</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 max-w-xs mt-2">
            Premium Custom Touch Panels engineered for industrial, medical, automotive, and OEM applications globally.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-4 tracking-wide">Products</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/products/capacitive" className="hover:text-accent transition-colors">Capacitive Touch Panels</Link></li>
            <li><Link href="/products/glass" className="hover:text-accent transition-colors">Glass Touch Panels</Link></li>
            <li><Link href="/products/membrane" className="hover:text-accent transition-colors">Membrane Switches</Link></li>
            <li><Link href="/products/hmi" className="hover:text-accent transition-colors">Industrial HMI Panels</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-4 tracking-wide">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            <li><Link href="/downloads" className="hover:text-accent transition-colors">Downloads Center</Link></li>
            <li><Link href="/blog" className="hover:text-accent transition-colors">Insights & News</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-white mb-4 tracking-wide">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: siva@mselectronicscompany.com</li>
            <li>Phone: +91 9246288140</li>
            <li className="pt-2">
              <Link href="/contact" className="text-accent hover:underline">
                View on Google Maps
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} MS Electronics. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
