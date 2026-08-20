import { cn } from "@/lib/utils";

/**
 * Shared visual motifs. Every section should reach for these instead of
 * inventing its own label, chip or card treatment — that repetition is what
 * makes the page read as one designed system rather than a stack of pages.
 *
 * The motifs:
 *   1. One hue at fixed alpha steps (ink-* on light, paper-* on dark)
 *   2. Pill radius (999px) for every small label
 *   3. Concentric radii: rounded-frame outside, p-2, rounded-inner inside
 *   4. Hairline drawn as a ring, never a layout-affecting border
 *   5. Mono tabular counters (01, 02 / 03) as the numbering voice
 */

type Tone = "light" | "dark";

/** Section label. Understated uppercase text, not a loud colored chip. */
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        tone === "light" ? "bg-ink-4 text-ink-64" : "bg-paper-4 text-paper-64",
        className
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", tone === "light" ? "bg-primary" : "bg-primary")} />
      {children}
    </p>
  );
}

/** Concentric card: outer frame + hairline ring. Inset children with <Pane>. */
export function Frame({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-frame p-2",
        tone === "light" ? "bg-ink-2 hairline" : "bg-paper-4 hairline-dark",
        className
      )}
    >
      {children}
    </div>
  );
}

/** The inner pane of a <Frame>. Its radius is frame radius minus the inset. */
export function Pane({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-inner",
        tone === "light" ? "bg-paper hairline" : "bg-ink-deep hairline-dark",
        className
      )}
    >
      {children}
    </div>
  );
}

const statusTone = {
  positive: "bg-emerald-500/10 text-emerald-600 shadow-[0_0_0_1px] shadow-emerald-500/25",
  neutral: "bg-ink-4 text-ink-64 shadow-[0_0_0_1px] shadow-ink-8",
  negative: "bg-red-500/10 text-red-600 shadow-[0_0_0_1px] shadow-red-500/25",
} as const;

const statusToneDark = {
  positive: "bg-emerald-500/10 text-emerald-300 shadow-[0_0_0_1px] shadow-emerald-500/25",
  neutral: "bg-paper-4 text-paper-64 shadow-[0_0_0_1px] shadow-paper-12",
  negative: "bg-red-500/10 text-red-300 shadow-[0_0_0_1px] shadow-red-500/25",
} as const;

/** Small status chip. Pastel fill + same-hue ring, pill radius. */
export function StatusPill({
  children,
  status = "positive",
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  status?: keyof typeof statusTone;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide",
        tone === "light" ? statusTone[status] : statusToneDark[status],
        className
      )}
    >
      {children}
    </span>
  );
}

/** Mono tabular counter — the numbering voice shared across sections. */
export function Counter({
  value,
  total,
  active = false,
  tone = "light",
  className,
}: {
  value: number;
  total?: number;
  active?: boolean;
  tone?: Tone;
  className?: string;
}) {
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <span
      className={cn(
        "font-mono text-xs tabular-nums",
        active ? "text-primary" : tone === "light" ? "text-ink-40" : "text-paper-24",
        className
      )}
    >
      {pad(value)}
      {total !== undefined && (
        <>
          <span className={tone === "light" ? "text-ink-24" : "text-paper-12"}> / </span>
          {pad(total)}
        </>
      )}
    </span>
  );
}
