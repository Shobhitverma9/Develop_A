"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Workflow,
  Cpu,
  Box,
  Cloud,
  ArrowRight,
  Server,
  Check,
  ChevronDown,
  Gauge,
  Database,
  Mail,
  FileText,
} from "lucide-react";
import { Counter, Eyebrow, Frame, Pane, StatusPill } from "@/components/ui/rhyme";

type Service = {
  id: string;
  title: string;
  tagline: string;
  icon: React.ReactNode;
  desc: string;
  deliverables: string[];
  visual: React.ReactNode;
};

/* Mock-UI primitives. Every illustration is built from these three so the
   five panels read as screenshots of one product family. */
const Chrome = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full max-w-[420px] overflow-hidden rounded-xl bg-ink-raised hairline-dark">{children}</div>
);

const Bar = ({ w, dim = false }: { w: string; dim?: boolean }) => (
  <div className={`h-2 rounded-full ${dim ? "bg-paper-4" : "bg-paper-12"}`} style={{ width: w }} />
);

const Node = ({
  icon,
  label,
  tone = "neutral",
}: {
  icon: React.ReactNode;
  label: string;
  tone?: "neutral" | "accent";
}) => (
  <div className="flex flex-col items-center gap-2">
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-inner bg-ink-raised ${
        tone === "accent" ? "text-primary shadow-[0_0_0_1px] shadow-primary/40" : "text-paper-40 hairline-dark"
      }`}
    >
      {icon}
    </div>
    <span className="text-[10px] uppercase tracking-[0.14em] text-paper-24">{label}</span>
  </div>
);

const services: Service[] = [
  {
    id: "web",
    title: "Web Experiences",
    tagline: "Look like the obvious choice",
    icon: <Box size={20} />,
    desc: "Premium, high-performance websites engineered to convert. We build digital flagships that communicate trust instantly and position you as the premium choice in your market.",
    deliverables: ["Conversion-first design system", "Core Web Vitals budget", "CMS your team can actually use"],
    visual: (
      <Chrome>
        <div className="flex h-8 items-center gap-1.5 bg-paper-2 px-3">
          <div className="h-2 w-2 rounded-full bg-paper-12" />
          <div className="h-2 w-2 rounded-full bg-paper-12" />
          <div className="h-2 w-2 rounded-full bg-paper-12" />
          <div className="ml-3 h-3 w-full max-w-[140px] rounded-full bg-paper-4" />
        </div>
        <div className="flex flex-col gap-3 p-5">
          <div className="h-3 w-20 rounded-full bg-primary/40" />
          <Bar w="85%" />
          <Bar w="60%" dim />
          <div className="flex items-center gap-3 pt-2">
            <div className="h-7 w-24 rounded-full bg-primary" />
            <div className="h-7 w-20 rounded-full hairline-dark" />
          </div>
          <StatusPill tone="dark" className="mt-2 self-start">
            <Gauge size={12} />
            Performance budget enforced
          </StatusPill>
        </div>
      </Chrome>
    ),
  },
  {
    id: "automation",
    title: "Business Automation",
    tagline: "Stop paying people to copy-paste",
    icon: <Workflow size={20} />,
    desc: "Replace repetitive manual tasks with intelligent systems. Connect your CRM, marketing, and operations into a single seamless data pipeline that works 24/7.",
    deliverables: ["CRM + ops system integration", "Owned pipelines, no per-task fees", "Failure alerts and audit trail"],
    visual: (
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
        <div className="flex items-center gap-3 sm:contents">
          <Node icon={<Mail size={22} />} label="Trigger" />
          <div className="flex items-center gap-1">
            <span className="hidden h-px w-5 bg-gradient-to-r from-transparent to-primary/50 sm:block" />
            <ArrowRight size={14} className="text-primary" />
          </div>
          <Node icon={<Workflow size={22} />} label="Engine" tone="accent" />
        </div>
        <div className="flex items-center gap-1">
          <span className="hidden h-px w-5 bg-gradient-to-r from-primary/50 to-transparent sm:block" />
          <ArrowRight size={14} className="rotate-90 text-paper-24 sm:rotate-0" />
        </div>
        <div className="flex flex-col gap-2">
          {[
            { icon: <FileText size={13} />, label: "Invoice" },
            { icon: <Database size={13} />, label: "CRM sync" },
            { icon: <Mail size={13} />, label: "Follow-up" },
          ].map((row) => (
            <div
              key={row.label}
              className="flex items-center gap-2 rounded-full bg-ink-raised px-3 py-1.5 text-paper-64 hairline-dark"
            >
              {row.icon}
              <span className="text-[10px] tracking-wide">{row.label}</span>
              <Check size={11} className="ml-auto text-emerald-400" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "internal",
    title: "Internal Software",
    tagline: "Scale output, not headcount",
    icon: <Code2 size={20} />,
    desc: "Custom portals and dashboards built for your team. Scale operations without scaling headcount by giving your team exactly the tools they need to perform.",
    deliverables: ["Role-based portals and dashboards", "Single source of truth for ops", "Built to replace stacked SaaS seats"],
    visual: (
      <Chrome>
        <div className="flex flex-col gap-5 p-5">
          <div className="flex items-center justify-between border-b border-paper-4 pb-3">
            <Bar w="88px" />
            <div className="h-7 w-7 rounded-full bg-paper-4" />
          </div>
          <div className="flex gap-4">
            <div className="flex w-[38%] flex-col justify-center rounded-xl bg-emerald-500/10 p-3 shadow-[0_0_0_1px] shadow-emerald-500/25">
              <span className="text-2xl font-bold leading-none text-emerald-300">84%</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.14em] text-emerald-300/60">On time</span>
            </div>
            <div className="flex h-[70px] flex-1 items-end gap-1.5">
              {[38, 55, 30, 72, 48, 88, 64].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i === 5 ? "bg-primary" : "bg-paper-12"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Bar w="100%" dim />
            <Bar w="70%" dim />
          </div>
        </div>
      </Chrome>
    ),
  },
  {
    id: "ai",
    title: "AI Integration",
    tagline: "AI that does a job, not a demo",
    icon: <Cpu size={20} />,
    desc: "Leverage LLMs and machine learning to qualify leads, analyze data, and automate customer support. Turn AI from a buzzword into a tangible business asset.",
    deliverables: ["Lead qualification and routing", "Support deflection with handoff", "Grounded on your own data"],
    visual: (
      <Chrome>
        <div className="flex flex-col gap-3 p-5">
          <div className="max-w-[80%] self-start rounded-2xl rounded-tl-sm bg-paper-8 px-3.5 py-2 text-[11px] leading-relaxed text-paper-64">
            Do you handle migrations off a legacy ERP?
          </div>
          <div className="flex items-center gap-2 self-end">
            <span className="text-[10px] uppercase tracking-[0.14em] text-primary/70">Agent</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary shadow-[0_0_0_1px] shadow-primary/30">
              <Cpu size={12} />
            </div>
          </div>
          <div className="max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-primary px-3.5 py-2 text-[11px] leading-relaxed text-white">
            Yes. Routing you to the platform team.
          </div>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {["Qualified", "Enterprise", "Routed"].map((tag) => (
              <StatusPill key={tag} tone="dark" className="px-2 py-0.5 text-[10px]">
                {tag}
              </StatusPill>
            ))}
          </div>
        </div>
      </Chrome>
    ),
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    tagline: "Boring, in the best way",
    icon: <Cloud size={20} />,
    desc: "Robust, scalable, and secure backend architectures using modern cloud native technologies. We build systems designed to handle million-user spikes.",
    deliverables: ["Autoscaling, cost-aware architecture", "Monitoring and alerting from day one", "Infrastructure as code, fully handed over"],
    visual: (
      <div className="flex flex-col items-center">
        <Node icon={<Cloud size={22} />} label="Edge" tone="accent" />
        <div className="h-6 w-px bg-gradient-to-b from-primary/50 to-paper-8" />
        <div className="relative flex gap-6">
          <span className="absolute -top-px left-[27px] right-[27px] h-px bg-paper-8" />
          {["eu", "us", "ap"].map((region) => (
            <div key={region} className="flex flex-col items-center">
              <span className="h-3 w-px bg-paper-8" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-raised text-paper-40 hairline-dark">
                <Server size={18} />
              </div>
              <span className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-paper-24">{region}</span>
            </div>
          ))}
        </div>
        <StatusPill tone="dark" className="mt-5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          All regions healthy
        </StatusPill>
      </div>
    ),
  },
];

function PanelBody({ service }: { service: Service }) {
  return (
    <>
      {/* Inner pane: radius = frame radius minus the 8px inset. */}
      <Pane
        tone="dark"
        className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden px-4 sm:aspect-[16/9]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(var(--paper-2)_1px,transparent_1px),linear-gradient(90deg,var(--paper-2)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative z-10 scale-90 sm:scale-100 lg:scale-110">{service.visual}</div>
      </Pane>

      <div className="px-2 pb-2 pt-7 sm:px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{service.tagline}</p>
        <h4 className="mt-2.5 text-2xl font-bold tracking-[-0.02em]">{service.title}</h4>
        {/* Reserved heights keep the panel a constant size as tabs change. */}
        <p className="mt-3 max-w-xl leading-relaxed text-paper-40 lg:min-h-[78px]">{service.desc}</p>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:min-h-[50px]">
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-paper-64">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check size={11} strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const last = services.length - 1;
    let next: number | null = null;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = activeTab === last ? 0 : activeTab + 1;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = activeTab === 0 ? last : activeTab - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;

    if (next !== null) {
      e.preventDefault();
      setActiveTab(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section id="Services" className="w-full bg-ink py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow tone="dark">Capabilities</Eyebrow>
            <h2 className="mt-6 text-4xl font-bold leading-[1.08] tracking-[-0.02em] md:text-5xl">
              Everything you need to ship,
              <br className="hidden sm:block" /> <span className="text-paper-40">automate, and scale.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg text-paper-40">
              Five disciplines, one accountable team. Pick the outcome you&rsquo;re after and see exactly what we
              deliver.
            </p>
          </div>

          <a
            href="#TrustAndCTA"
            className="group hidden shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-paper-64 hairline-dark transition-colors hover:text-white lg:inline-flex"
          >
            Book a Demo
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Desktop: vertical tabs + panel */}
        <div className="hidden grid-cols-12 gap-12 lg:grid">
          <div
            role="tablist"
            aria-label="Capabilities"
            aria-orientation="vertical"
            onKeyDown={handleKeyDown}
            className="col-span-5 flex flex-col"
          >
            {services.map((service, index) => {
              const isActive = activeTab === index;

              return (
                <button
                  key={service.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  role="tab"
                  id={`cap-tab-${service.id}`}
                  aria-selected={isActive}
                  aria-controls={`cap-panel-${service.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(index)}
                  className="group relative w-full border-b border-paper-8 px-5 py-6 text-left outline-none transition-colors first:border-t focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                >
                  {isActive && (
                    <motion.span
                      layoutId="capActiveSurface"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      className="absolute inset-0 bg-paper-4"
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="capActiveRail"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      className="absolute bottom-0 left-0 top-0 w-[3px] bg-primary"
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-4">
                    <Counter value={index + 1} active={isActive} tone="dark" />
                    <span className={`transition-colors ${isActive ? "text-white" : "text-paper-24 group-hover:text-paper-64"}`}>
                      {service.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-xl font-bold tracking-[-0.01em] transition-colors ${
                          isActive ? "text-white" : "text-paper-40 group-hover:text-paper-64"
                        }`}
                      >
                        {service.title}
                      </span>
                      <span
                        className={`block text-sm transition-colors ${
                          isActive ? "text-paper-40" : "text-paper-24"
                        }`}
                      >
                        {service.tagline}
                      </span>
                    </span>
                    <ArrowRight
                      size={16}
                      className={`shrink-0 transition-all ${
                        isActive ? "text-primary opacity-100" : "text-paper-24 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="col-span-7">
            <Frame tone="dark" className="min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={services[activeTab].id}
                  role="tabpanel"
                  id={`cap-panel-${services[activeTab].id}`}
                  aria-labelledby={`cap-tab-${services[activeTab].id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <PanelBody service={services[activeTab]} />
                </motion.div>
              </AnimatePresence>
            </Frame>
          </div>
        </div>

        {/* Mobile / tablet: accordion so the answer sits under the question */}
        <div className="flex flex-col border-t border-paper-8 lg:hidden">
          {services.map((service, index) => {
            const isOpen = activeTab === index;

            return (
              <div key={service.id} className="border-b border-paper-8">
                <button
                  onClick={() => setActiveTab(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`cap-acc-${service.id}`}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <Counter value={index + 1} active={isOpen} tone="dark" />
                  <span className={isOpen ? "text-white" : "text-paper-40"}>{service.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-lg font-bold tracking-[-0.01em] ${isOpen ? "text-white" : "text-paper-64"}`}>
                      {service.title}
                    </span>
                    <span className="block text-sm text-paper-24">{service.tagline}</span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-paper-40 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`cap-acc-${service.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <Frame tone="dark" className="mb-8">
                        <PanelBody service={service} />
                      </Frame>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Section-level next step */}
        <Frame
          tone="dark"
          className="mt-14 flex flex-col items-start gap-5 p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xl font-bold tracking-[-0.01em]">Not sure which one you need?</p>
            <p className="mt-1 text-paper-40">
              Tell us the bottleneck. We&rsquo;ll tell you what we&rsquo;d build and what it costs.
            </p>
          </div>
          <a
            href="#TrustAndCTA"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-white shadow-lg shadow-primary/20 transition-transform active:scale-95"
          >
            Book a Demo
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </Frame>
      </div>
    </section>
  );
}
