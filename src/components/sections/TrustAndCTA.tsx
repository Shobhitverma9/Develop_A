"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Server, Headset, Lock, Send } from "lucide-react";

export function TrustAndCTA() {
  const trustFeatures = [
    { icon: <Server size={24} />, title: "Scalable Infrastructure", desc: "Built on AWS and Vercel for 99.9% uptime." },
    { icon: <ShieldCheck size={24} />, title: "Enterprise Security", desc: "Data encrypted at rest and in transit." },
    { icon: <Lock size={24} />, title: "Compliance Ready", desc: "Adhering to strict data privacy regulations." },
    { icon: <Headset size={24} />, title: "Dedicated Support", desc: "Direct channel to the engineers who built it." },
  ];

  return (
    <section id="TrustAndCTA" className="relative bg-[#111111] text-white pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 mb-32 border-b border-white/10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {trustFeatures.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                {feature.icon}
              </div>
              <h4 className="font-bold text-xl">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Let's build something <br />
          <span className="text-primary">extraordinary.</span>
        </motion.h2>
        
        <p className="text-xl text-muted-foreground mb-12">
          I don't just want a website. I want these people to build my business.
        </p>

        <form className="w-full max-w-lg mx-auto bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-left">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">Name</label>
              <input 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white placeholder-white/30"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">Business Email</label>
              <input 
                type="email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white placeholder-white/30"
                placeholder="john@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">What are we engineering?</label>
              <textarea 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white placeholder-white/30 min-h-[120px]"
                placeholder="Briefly describe your goals..."
              />
            </div>
            
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 group">
              Start the Conversation
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
