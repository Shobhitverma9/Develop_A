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
    quote: "Uddhav Web Solutions understood our business better than some of our own employees. Their architecture scales effortlessly.",
    author: "Aditi V.",
    role: "Founder",
    company: "EventCore",
    metric: "0 Downtime",
  },
];

export function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="Testimonials" className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Built for <span className="text-primary">businesses that rely on software.</span>
        </h2>
      </div>

      <motion.div ref={carouselRef} className="cursor-grab active:cursor-grabbing overflow-hidden">
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className="flex gap-8 px-6 pb-8 md:px-12 w-max"
        >
          {testimonials.map((test, i) => (
            <motion.div 
              key={i}
              className="w-[85vw] md:w-[600px] bg-white border border-border p-8 md:p-12 rounded-3xl shadow-sm flex flex-col justify-between shrink-0"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <Quote className="text-primary/20 mb-6" size={48} />
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-foreground/90">
                  "{test.quote}"
                </p>
              </div>

              <div className="mt-12 flex items-end justify-between border-t border-border/50 pt-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{test.author}</h4>
                    <p className="text-sm text-muted-foreground">{test.role}, {test.company}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Impact</p>
                  <p className="font-bold text-primary">{test.metric}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
