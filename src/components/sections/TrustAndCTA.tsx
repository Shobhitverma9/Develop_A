"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Server, Headset, Lock, Send, MessageCircle } from "lucide-react";

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
        
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 text-left mt-12">
          {/* Form */}
          <form className="flex-1 w-full bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white placeholder-white/30"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-white/80">Business Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white placeholder-white/30"
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <button className="w-full h-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-3 min-h-[56px] rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 group text-sm md:text-base">
                  <Send size={18} className="group-hover:-translate-y-1 transition-transform shrink-0" />
                  <span className="text-center leading-tight">Start Conversation</span>
                </button>
                <a 
                  href="https://wa.me/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full h-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-3 min-h-[56px] rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 group text-sm md:text-base"
                >
                  <MessageCircle size={18} className="group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-center leading-tight">WhatsApp</span>
                </a>
              </div>
            </div>
          </form>

          {/* Contextual Testimonial */}
          <div className="flex-1 w-full bg-primary/10 backdrop-blur-md p-8 rounded-3xl border border-primary/20 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 21L16.411 14.182C16.411 14.182 14.288 14.182 14.288 10.636C14.288 7.09091 16.411 3 20.658 3V6.54545C19.596 6.54545 18.534 7.09091 18.534 8.72727C18.534 10.3636 21.72 10.3636 21.72 14.182C21.72 18 18.534 21 18.534 21H14.017ZM3 21L5.394 14.182C5.394 14.182 3.271 14.182 3.271 10.636C3.271 7.09091 5.394 3 9.641 3V6.54545C8.579 6.54545 7.517 7.09091 7.517 8.72727C7.517 10.3636 10.703 10.3636 10.703 14.182C10.703 18 7.517 21 7.517 21H3Z" />
              </svg>
            </div>
            <div className="flex gap-1 text-yellow-500 mb-8 relative z-10">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed mb-8 relative z-10">
              "We didn't just get a beautiful website. We got a scalable infrastructure that has completely transformed how our agency handles new business."
            </p>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xl text-primary border border-primary/30">
                S
              </div>
              <div>
                <h4 className="font-bold text-white">Sarah Jenkins</h4>
                <p className="text-white/60 text-sm">Director of Operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
