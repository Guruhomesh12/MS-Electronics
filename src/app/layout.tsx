import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingMenu } from "@/components/layout/FloatingMenu";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Touch Panels | Custom Manufacturing Excellence",
  description: "World-class Custom Touch Panels manufactured with high-precision CNC dispensing technology. Premium engineering for Industrial, Medical, Automotive, and OEM Applications.",
  keywords: ["Custom Touch Panels", "Industrial Touch Panels", "Glass Touch Panels", "Capacitive Touch Panels", "OEM Touch Panels", "Control Panels", "HMI Panels", "Touch Panel Manufacturer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark antialiased scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground flex flex-col selection:bg-accent selection:text-accent-foreground">
        {/* Floating Background Elements */}
        <div className="fixed inset-0 z-[-1] bg-slate-50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <Navbar />
        <main className="flex-grow flex flex-col relative z-0">
          {children}
        </main>
        <Footer />
        <FloatingMenu />
      </body>
    </html>
  );
}
