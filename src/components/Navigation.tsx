"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Work", href: "#Showcase" },
    { name: "Services", href: "#FeatureBento" },
    { name: "Contact", href: "#TrustAndCTA" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled 
            ? "bg-background/80 backdrop-blur-md border-border/50 py-4 shadow-sm" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src={scrolled ? "/mouldNav.png" : "/mouldNavinverted.png"} 
              alt="Mould Logo" 
              className="h-12 w-auto object-contain transition-all duration-300" 
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    scrolled 
                      ? 'text-[#2d1b2e]/60 hover:text-[#2d1b2e]' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button 
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new Event('open-contact'));
              }}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all active:scale-95 group border ${
                scrolled 
                  ? 'border-black/20 hover:border-black/40 text-black/90 hover:text-black' 
                  : 'border-white/20 hover:border-white/40 text-white/90 hover:text-white'
              }`}
            >
              Demo
              <svg className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 -mr-2 transition-colors duration-300 ${
              scrolled ? 'text-[#2d1b2e]' : 'text-white'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center pt-20">
          <div className="flex flex-col items-center gap-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-2xl font-bold text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#TrustAndCTA" 
              className="mt-4 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Project
            </a>
          </div>
        </div>
      )}
    </>
  );
}
