"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Check, Zap, ArrowRight, LayoutTemplate, Sparkles, CreditCard, Mail } from "lucide-react";

export function FeatureBento() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section ref={container} id="Capabilities" className="py-32 bg-background relative overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-2xl">
          We don't just build. <br />
          <span className="text-primary">We engineer leverage.</span>
        </h2>
        <p className="mt-6 text-xl text-muted-foreground max-w-lg">
          Custom infrastructure designed to slash overhead, automate the mundane, and elevate your brand's digital presence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
        
        {/* Card 1: WhatsApp Agent (Tall) */}
        <motion.div 
          style={{ y: isMobile ? 0 : y1 }}
          className="md:row-span-2 md:col-span-1 bg-gray-50 rounded-3xl border border-border p-8 flex flex-col relative overflow-hidden group"
        >
          <div className="relative z-10 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-6">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">AI WhatsApp Agents</h3>
            <p className="text-muted-foreground">Automate emails, generate invoices, and follow up with leads directly from chat.</p>
          </div>

          {/* Mock UI */}
          <div className="flex-1 w-full bg-white rounded-2xl border border-border/50 shadow-sm p-4 flex flex-col gap-4 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border/50 pb-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">AI</div>
              <div className="text-sm font-semibold">Sales Bot</div>
            </div>
            {/* Chat Bubbles */}
            <div className="self-end bg-primary text-white text-sm py-2 px-4 rounded-2xl rounded-tr-sm max-w-[85%]">
              Hey! I need a quote for a new web app.
            </div>
            <div className="self-start bg-gray-100 text-foreground text-sm py-2 px-4 rounded-2xl rounded-tl-sm max-w-[90%] space-y-2">
              <p>Absolutely! I've analyzed your request.</p>
              <div className="flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 py-1 px-2 rounded-lg w-max">
                <Mail size={12} /> Quote emailed to client
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-green-600 bg-green-100 py-1 px-2 rounded-lg w-max">
                <CreditCard size={12} /> Deposit invoice generated
              </div>
              <p>Should I schedule a follow-up for tomorrow?</p>
            </div>
          </div>
          
          {/* Decorative background */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#25D366]/5 rounded-full blur-3xl z-0" />
        </motion.div>

        {/* Card 2: Zapier Replacement (Wide) */}
        <motion.div 
          style={{ y: isMobile ? 0 : y2 }}
          className="md:col-span-2 bg-[#111111] text-white rounded-3xl border border-white/10 p-8 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden group"
        >
          <div className="relative z-10 max-w-sm mb-8 sm:mb-0">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Kill the Zapier Tax</h3>
            <p className="text-white/60">Stop paying thousands in monthly SaaS fees. We build native, deeply integrated automated architectures where you only pay base hosting costs—no usage limits or per-task fees.</p>
          </div>

          {/* Mock UI */}
          <div className="relative z-10 flex flex-col gap-4 w-full sm:w-auto">
            {/* Before */}
            <div className="bg-white/5 border border-red-500/30 rounded-xl p-4 flex items-center justify-between gap-6 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500 relative">
              <div className="absolute inset-0 bg-red-500/10 rounded-xl" />
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-red-500 -translate-y-1/2" />
              <div className="flex -space-x-2 relative z-10">
                <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-xs font-bold border border-gray-600">Z</div>
                <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-xs font-bold border border-gray-600">M</div>
              </div>
              <div className="text-red-400 font-mono text-sm font-bold relative z-10">-$499/mo</div>
            </div>
            <div className="flex justify-center text-white/30"><ArrowRight size={16} className="rotate-90 sm:rotate-0" /></div>
            {/* After */}
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 flex items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  <Sparkles size={14} />
                </div>
                <div className="text-sm font-bold">Custom Engine</div>
              </div>
              <div className="text-primary font-mono text-sm font-bold relative z-10 whitespace-nowrap">Hosting Only</div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Web Design (Wide) */}
        <motion.div 
          style={{ y: isMobile ? 0 : y3 }}
          className="md:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-border p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden group"
        >
          <div className="relative z-10 max-w-sm flex-1 flex flex-col justify-center">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
              <LayoutTemplate size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium Web Experiences</h3>
            <p className="text-muted-foreground">We engineer visually stunning, conversion-optimized interfaces that command authority and build instant trust.</p>
          </div>

          {/* Screenshot UI */}
          <div className="flex-1 w-full relative rounded-xl border border-border shadow-2xl overflow-hidden bg-white flex flex-col group-hover:-translate-y-2 transition-transform duration-500">
            {/* Browser Chrome (Dots) */}
            <div className="bg-gray-100 border-b border-border px-4 py-3 flex items-center gap-2 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <div className="relative w-full h-full bg-gray-50 flex items-start">
              <img 
                src="/delta2.png" 
                alt="Premium Web Design Showcase" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
