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
    { name: "Services", href: "#Services" },
    { name: "Process", href: "#ProcessTimeline" },
    { name: "Outcomes", href: "#Showcase" },
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
            <img src="/mouldNav.png" alt="Mould Logo" className="h-12 w-auto object-contain" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a 
              href="#TrustAndCTA" 
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-foreground p-2 -mr-2"
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
