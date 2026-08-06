"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Cpu, Server, Layers } from "lucide-react";

export function Engineering() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  // Wireframe to polished transition
  const wireframeOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);
  const polishedOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const stack = [
    { name: "Next.js", icon: <Layers size={20} /> },
    { name: "TypeScript", icon: <Code2 size={20} /> },
    { name: "Node.js", icon: <Server size={20} /> },
    { name: "Docker", icon: <Cpu size={20} /> },
  ];

  return (
    <section
      ref={container}
      id="Engineering"
      className="relative min-h-[200vh] w-full flex flex-col items-center pt-24"
    >
      <motion.div
        className="sticky top-[20vh] w-full max-w-6xl px-6 flex flex-col md:flex-row items-center gap-16 z-10"
        style={{ opacity, y }}
      >
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            We don't build pages.<br />
            <span className="text-primary">We engineer systems.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-lg">
            Building software that scales requires real architecture. We replace repetitive work with intelligent, interconnected digital ecosystems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {stack.map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border text-sm font-medium shadow-sm">
                <span className="text-primary">{item.icon}</span>
                {item.name}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full relative h-[400px] perspective-[1000px]">
          {/* Animated 3D Window container */}
          <motion.div
            className="w-full h-full relative preserve-3d"
            style={{
              rotateY: useTransform(scrollYProgress, [0, 1], [20, -10]),
              rotateX: 10,
            }}
          >
            {/* Wireframe Version */}
            <motion.div
              className="absolute inset-0 bg-white border-2 border-dashed border-muted-foreground/30 rounded-xl p-6 flex flex-col gap-4"
              style={{ opacity: wireframeOpacity }}
            >
              <div className="flex justify-between items-center border-b border-dashed border-muted-foreground/20 pb-4">
                <div className="w-32 h-6 bg-muted rounded"></div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-muted rounded-full"></div>
                  <div className="w-8 h-8 bg-muted rounded-full"></div>
                </div>
              </div>
              <div className="flex gap-4 flex-1">
                <div className="w-1/4 h-full bg-muted rounded"></div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="w-full h-32 bg-muted rounded"></div>
                  <div className="w-full flex-1 bg-muted rounded"></div>
                </div>
              </div>
            </motion.div>

            {/* Polished Version */}
            <motion.div
              className="absolute inset-0 bg-white rounded-xl shadow-2xl overflow-hidden border border-border/50 flex flex-col"
              style={{ opacity: polishedOpacity }}
            >
              {/* Fake Dashboard UI */}
              <div className="h-14 border-b border-border flex items-center px-6 justify-between bg-gray-50/50">
                <div className="font-bold text-primary flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-primary text-white flex items-center justify-center text-xs">U</div>
                  Dashboard
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-sm">A</div>
                </div>
              </div>
              <div className="flex flex-1">
                <div className="w-1/4 border-r border-border p-4 space-y-3 bg-gray-50/30">
                  <div className="h-8 rounded bg-primary/10 w-full"></div>
                  <div className="h-8 rounded hover:bg-muted w-full transition-colors"></div>
                  <div className="h-8 rounded hover:bg-muted w-full transition-colors"></div>
                </div>
                <div className="flex-1 p-6 space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-24 rounded-lg bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-4">
                      <div className="text-sm text-muted-foreground">Revenue</div>
                      <div className="text-2xl font-bold mt-2">$24,500</div>
                    </div>
                    <div className="h-24 rounded-lg border border-border p-4 shadow-sm">
                      <div className="text-sm text-muted-foreground">Active Users</div>
                      <div className="text-2xl font-bold mt-2">1,204</div>
                    </div>
                    <div className="h-24 rounded-lg border border-border p-4 shadow-sm">
                      <div className="text-sm text-muted-foreground">Conversion</div>
                      <div className="text-2xl font-bold mt-2">8.4%</div>
                    </div>
                  </div>
                  <div className="h-48 rounded-lg border border-border bg-gray-50/50 flex items-end justify-between p-4 gap-2">
                    {/* Fake Chart Bars */}
                    {[40, 70, 45, 90, 65, 110, 85].map((height, i) => (
                      <motion.div
                        key={i}
                        className="w-full bg-primary/20 rounded-t-sm"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
