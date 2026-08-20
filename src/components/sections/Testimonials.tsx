"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    content: [
      "I can't believe how simple it is to work with Mould. So many features out of the box and an amazing team behind it.",
      "Client is happy, client's clients are onboarded and happy \uD83E\uDD42 special thanks to the team for helping throughout the process \uD83D\uDE4F"
    ],
    author: {
      name: "Alessia Sannazzaro",
      title: "Code & Wander",
      avatar: "https://i.pravatar.cc/100?img=1"
    }
  },
  {
    id: 2,
    content: [
      "We're loving Mould. We've walked away from expensive bloated SaaS subscriptions, and have replaced them entirely.",
      "Our team can now focus on developing our core value offering, rather than wasting time building table-stakes features, and we don't need experts in each tool to get value from them."
    ],
    author: {
      name: "Bryan Watson",
      title: "Founder and CEO, Ovida",
      avatar: "https://i.pravatar.cc/100?img=11"
    }
  },
  {
    id: 3,
    content: [
      "Thinking about launching a complex web app or automated system?",
      "Mould is your team.",
      "A CRM, payments, subscriptions, email automation, gated content, segmentation, etc... Mould builds great features and functionality at an extremely fair price."
    ],
    author: {
      name: "Justin Welsh",
      title: "Creator and Solopreneur",
      avatar: "https://i.pravatar.cc/100?img=12"
    }
  }
];

export function Testimonials() {
  return (
    <section id="Testimonials" className="w-full bg-[#fafafa] py-16 md:py-20 relative font-sans">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Massive Centered Quote Headline */}
        <div className="flex justify-center mb-8 md:mb-10">
          <h2 
            className="max-w-4xl text-center text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-[#2d1b2e]"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            "Everything you need to build custom software without the overhead..."
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="bg-white rounded-2xl border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.02)] p-6 lg:p-8 flex flex-col h-full"
            >
              
              {/* Testimonial Text Paragraphs */}
              <div className="flex-1 space-y-4 mb-8">
                {testimonial.content.map((paragraph, index) => (
                  <p key={index} className="text-[#2d1b2e]/80 text-[15px] leading-[1.6]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Author Block */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-black/[0.04]">
                <img
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="w-12 h-12 rounded-full object-cover bg-gray-100 shrink-0"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-[#2d1b2e] text-[15px]">
                    {testimonial.author.name}
                  </span>
                  <span className="text-[#2d1b2e]/50 text-[13px]">
                    {testimonial.author.title}
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
