"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They didn't just build a website, they engineered a system that completely automated our lead qualification. We're closing 30% more deals with the same team size.",
    author: "Rahul M.",
    role: "Director of Operations",
    company: "ISKCON",
    metric: "+30% Close Rate",
  },
  {
    quote: "The patient portal they developed replaced three separate outdated systems we were using. It's secure, fast, and the patients actually love using it.",
    author: "Dr. Sharma",
    role: "Chief Medical Officer",
    company: "HealthConnect",
    metric: "40% Time Saved",
  },
  {
    quote: "Mould understood our business better than some of our own employees. Their architecture scales effortlessly.",
    author: "Aditi V.",
    role: "Founder",
    company: "EventCore",
    metric: "0 Downtime",
  },
];

export function Testimonials() {
  return (
    <section id="Testimonials" className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Built for <span className="text-primary">businesses that rely on software.</span>
        </h2>
      </div>

      <div className="flex overflow-hidden">
        <motion.div 
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {/* First Set */}
          <div className="flex gap-6 pr-6">
            {testimonials.map((test, i) => (
              <TestimonialCard key={`first-${i}`} test={test} />
            ))}
          </div>
          {/* Second Set (Duplicate for seamless loop) */}
          <div className="flex gap-6 pr-6">
            {testimonials.map((test, i) => (
              <TestimonialCard key={`second-${i}`} test={test} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ test }: { test: any }) {
  return (
    <div className="w-[85vw] md:w-[480px] bg-white border border-border p-6 md:p-8 rounded-3xl shadow-sm flex flex-col justify-between shrink-0 hover:-translate-y-1 transition-transform duration-300">
      <div>
        <Quote className="text-primary/20 mb-4" size={32} />
        <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90">
          "{test.quote}"
        </p>
      </div>

      <div className="mt-8 flex items-end justify-between border-t border-border/50 pt-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground text-sm">
            {test.author.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-foreground text-sm">{test.author}</h4>
            <p className="text-xs text-muted-foreground">{test.role}, {test.company}</p>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Impact</p>
          <p className="font-bold text-primary text-sm">{test.metric}</p>
        </div>
      </div>
    </div>
  );
}
