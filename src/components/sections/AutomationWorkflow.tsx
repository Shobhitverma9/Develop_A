"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserPlus, 
  Database, 
  Bot, 
  MessageCircle, 
  Mail, 
  FileText, 
  CreditCard, 
  PieChart,
  ArrowRight,
  Pause,
  Play,
  Bell,
  MessageSquare,
  Globe
} from "lucide-react";

const steps = [
  { id: "lead", icon: <UserPlus />, title: "Lead Arrives", desc: "User fills out a form on the website." },
  { id: "crm", icon: <Database />, title: "CRM Entry", desc: "Data is securely logged in the central database." },
  { id: "ai", icon: <Bot />, title: "AI Qualification", desc: "AI analyzes the lead to determine intent and priority." },
  { id: "whatsapp", icon: <MessageCircle />, title: "WhatsApp Outreach", desc: "Automated personalized greeting sent via WhatsApp." },
  { id: "email", icon: <Mail />, title: "Email Sequence", desc: "Lead is added to a tailored drip campaign." },
  { id: "invoice", icon: <FileText />, title: "Auto Invoice", desc: "Upon agreement, an invoice is generated instantly." },
  { id: "payment", icon: <CreditCard />, title: "Payment Collection", desc: "Secure payment processing and reconciliation." },
  { id: "analytics", icon: <PieChart />, title: "Analytics Sync", desc: "Dashboard updates with new revenue metrics." },
];

export function AutomationWorkflow() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section id="AutomationWorkflow" className="min-h-screen py-32 bg-[#111111] text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            We replace manual work with <br />
            <span className="text-primary">intelligent automation.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any node to see how our engineered workflows save hundreds of hours per month.
          </p>

          {/* Solved Chaos Row */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 opacity-60">
            <div className="px-4 py-2 bg-white/5 border border-red-500/20 text-red-400 rounded-full flex items-center gap-2 text-sm line-through decoration-red-400/50">
              <Bell size={14} /> Missed lead notification
            </div>
            <div className="px-4 py-2 bg-white/5 border border-red-500/20 text-red-400 rounded-full flex items-center gap-2 text-sm line-through decoration-red-400/50">
              <MessageSquare size={14} /> WhatsApp unread
            </div>
            <div className="px-4 py-2 bg-white/5 border border-red-500/20 text-red-400 rounded-full flex items-center gap-2 text-sm line-through decoration-red-400/50">
              <FileText size={14} /> Invoice pending
            </div>
            <div className="px-4 py-2 bg-white/5 border border-red-500/20 text-red-400 rounded-full flex items-center gap-2 text-sm line-through decoration-red-400/50">
              <Globe size={14} /> Website downtime
            </div>
          </div>
          
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="mt-8 mx-auto flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            <span className="font-medium text-sm">{isPlaying ? "Pause Automation" : "Resume Automation"}</span>
          </button>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          {/* Animated Connecting Line */}
          <div className="absolute top-8 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden md:block rounded-full overflow-hidden z-0">
             <motion.div 
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: isPlaying ? "100%" : "0%" }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
             />
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-between gap-y-12 relative z-10">
            {steps.map((step, index) => (
              <WorkflowNode 
                key={step.id}
                step={step}
                index={index}
                isActive={activeStep === index}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
                isPlaying={isPlaying}
                total={steps.length}
              />
            ))}
          </div>
        </div>

        <AnimatePresence>
          {activeStep !== null && (
            <motion.div 
              className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-6">
                {steps[activeStep].icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{steps[activeStep].title}</h3>
              <p className="text-muted-foreground text-lg">{steps[activeStep].desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function WorkflowNode({ step, index, isActive, onClick, isPlaying, total }: any) {
  return (
    <div className="flex flex-col items-center relative group cursor-pointer" onClick={onClick}>
      <motion.div 
        className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 relative z-10 ring-[6px] ring-[#111111]
          ${isActive ? 'bg-primary text-white shadow-[0_0_30px_rgba(15,98,254,0.5)]' : 'bg-[#1f1f1f] text-white hover:bg-[#2a2a2a]'}
        `}
        animate={isPlaying ? {
          scale: [1, 1.2, 1],
          boxShadow: ["0px 0px 0px rgba(15,98,254,0)", "0px 0px 40px rgba(15,98,254,0.8)", "0px 0px 0px rgba(15,98,254,0)"]
        } : {}}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 7,
          delay: (8 / total) * index
        }}
      >
        {step.icon}
      </motion.div>
      <div className="mt-4 font-semibold text-sm text-center max-w-[100px] leading-tight">
        {step.title}
      </div>
    </div>
  );
}
