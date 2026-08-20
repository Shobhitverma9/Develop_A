"use client";

import { Check, User, Play, FileText, CheckCircle2, Workflow, Database, MessageSquare } from "lucide-react";

export function FeatureBento() {
  return (
    <section id="FeatureBento" className="w-full bg-gradient-to-b from-[#fdfcfb] to-[#f7f5f2] py-16 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col items-center text-center">
        <p className="text-[#2d1b2e]/60 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6">
          ALL-IN-ONE DIGITAL ARCHITECTURE
        </p>
        <h2 
          className="max-w-3xl text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.1] tracking-tight text-[#2d1b2e]"
          style={{ fontFamily: "var(--font-outfit), sans-serif" }}
        >
          Perfect for web apps, SaaS, and automations
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Web Applications (Left) */}
        <div className="bg-white rounded-[24px] border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6 flex flex-col relative overflow-hidden min-h-[400px]">
          <div className="relative z-10 mb-6">
            <h3 className="text-lg font-bold text-[#2d1b2e] mb-1">Web Applications</h3>
            <p className="text-[#2d1b2e]/60 text-xs leading-relaxed max-w-[280px]">
              Custom-built React and Next.js applications engineered for speed. Deploy flawlessly optimized infrastructure.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center w-full my-4">
             <img src="/web-app-graphic.png" alt="Web Applications" className="w-[90%] md:w-[80%] h-auto object-contain rounded-xl shadow-lg border border-black/5" />
          </div>

          <div className="mt-6 space-y-2.5 text-[#2d1b2e] text-xs font-medium">
             <div className="flex items-center gap-2"><Check size={14} strokeWidth={3} className="text-black" /> Custom Dashboards</div>
             <div className="flex items-center gap-2"><Check size={14} strokeWidth={3} className="text-black" /> Secure Authentication</div>
             <div className="flex items-center gap-2"><Check size={14} strokeWidth={3} className="text-black" /> API Integrations</div>
             <div className="flex items-center gap-2"><Check size={14} strokeWidth={3} className="text-black" /> Team Billing</div>
          </div>
        </div>

        {/* Card 2: Automation (Middle) */}
        <div className="bg-white rounded-[24px] border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6 flex flex-col relative overflow-hidden min-h-[400px]">
          <div className="relative z-10 mb-6">
            <h3 className="text-lg font-bold text-[#2d1b2e] mb-1">Automations</h3>
            <p className="text-[#2d1b2e]/60 text-xs leading-relaxed max-w-[280px]">
              All of your operations seamlessly connected. Stop jumping between tools and let code handle the busywork.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center w-full my-4">
             <img src="/auto.png" alt="Automations" className="w-[90%] md:w-[80%] h-auto object-contain rounded-xl shadow-lg border border-black/5" />
          </div>

          <div className="flex-1 flex flex-col justify-end gap-1">
            {[
              { name: "Sync Lead to CRM", status: "ACTIVE", icon: <Database size={14} className="text-gray-600" /> },
              { name: "Generate Invoice PDF", status: "ACTIVE", icon: <FileText size={14} className="text-gray-600" /> },
              { name: "Onboarding Sequence", status: "ACTIVE", icon: <Workflow size={14} className="text-gray-600" /> },
              { name: "Slack Notification", status: "ACTIVE", icon: <MessageSquare size={14} className="text-gray-600" /> },
              { name: "Database Backup", status: "ACTIVE", icon: <Database size={14} className="text-gray-600" /> }
            ].map((task, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-black/[0.04] last:border-0">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 scale-90">
                    {task.icon}
                  </div>
                  <span className="text-xs font-semibold text-[#2d1b2e]">{task.name}</span>
                </div>
                <span className="text-[8px] font-bold text-[#10b981] bg-[#d1fae5] px-2 py-0.5 rounded-full tracking-wider">
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: AI Integrations (Right) */}
        <div className="bg-white rounded-[24px] border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6 flex flex-col relative overflow-hidden min-h-[400px]">
          <div className="relative z-10 mb-6">
            <h3 className="text-lg font-bold text-[#2d1b2e] mb-1">AI Agents</h3>
            <p className="text-[#2d1b2e]/60 text-xs leading-relaxed max-w-[280px]">
              Intelligent systems that draft emails, process data, and support customers 24/7 with zero hallucinations.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center w-full my-4">
             <img src="/ai2.png" alt="AI Agents" className="w-[90%] md:w-[80%] h-auto object-contain rounded-xl shadow-lg border border-black/5" />
          </div>

          <div className="flex-1 flex flex-col justify-end gap-3">
            {[
              { title: "Monthly report generated", desc: "Sales performance summary", icon: <FileText size={12} className="text-yellow-600" />, bg: "bg-yellow-100" },
              { title: "Customer email drafted", desc: "Support ticket #4092", icon: <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />, bg: "bg-gray-100" },
              { title: "Lead scored automatically", desc: "High intent detected", icon: <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />, bg: "bg-gray-100" },
              { title: "Quote finalized", desc: "Sent to client dashboard", icon: <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />, bg: "bg-gray-100" }
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-start gap-2">
                  <div className={`w-4 h-4 mt-0.5 rounded-full ${log.bg} flex items-center justify-center shrink-0 scale-90`}>
                    {log.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-[#2d1b2e] leading-tight">{log.title}</span>
                    <span className="text-[10px] text-[#2d1b2e]/50 mt-0.5">{log.desc}</span>
                  </div>
                </div>
                <span className="text-[8px] font-medium text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full shrink-0 uppercase">
                  Read
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
