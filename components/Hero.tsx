"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { orbitTech, site } from "@/lib/site";
import { Typewriter } from "./Typewriter";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated/60 px-3 py-1 text-xs font-medium text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {site.availability}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">{site.firstName}</span>.
            <br />
            I build{" "}
            <Typewriter
              words={["SaaS products", "MVPs that ship", "fast web apps", "cloud-native APIs"]}
              className="text-gradient"
            />
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact/"
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
            >
              Let&apos;s work together
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/experience/"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
            >
              View experience
            </Link>
            <div className="ml-1 flex items-center gap-2">
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
              >
                <GithubIcon />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent"
              >
                <LinkedinIcon />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <Orbit />
      </div>
    </section>
  );
}

/** Tech nodes orbiting a glowing core. Two rings, opposite directions. */
function Orbit() {
  const inner = orbitTech.slice(0, 4);
  const outer = orbitTech.slice(4);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mx-auto aspect-square w-full max-w-[420px]"
      aria-hidden
    >
      {/* Rings */}
      <div className="ring-spin absolute inset-[18%] rounded-full border border-dashed border-line" />
      <div className="ring-spin-reverse absolute inset-0 rounded-full border border-dashed border-line" />

      {/* Core */}
      <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 shadow-[0_0_80px_var(--glow)]">
        <span className="font-display text-3xl font-bold text-white">{site.firstName[0]}</span>
      </div>

      {/* Inner ring, clockwise */}
      {inner.map((t, i) => (
        <Node key={t} label={t} start={(360 / inner.length) * i} radius="32%" duration="28s" />
      ))}
      {/* Outer ring, anticlockwise */}
      {outer.map((t, i) => (
        <Node key={t} label={t} start={(360 / outer.length) * i + 45} radius="50%" duration="44s" reverse />
      ))}
    </motion.div>
  );
}

function Node({
  label,
  start,
  radius,
  duration,
  reverse = false,
}: {
  label: string;
  start: number;
  radius: string;
  duration: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`orbit-node ${reverse ? "orbit-reverse" : ""}`}
      style={{ "--start": `${start}deg`, "--radius": radius, "--duration": duration } as React.CSSProperties}
    >
      <span className="orbit-label whitespace-nowrap rounded-full border border-line bg-elevated/90 px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur">
        {label}
      </span>
    </div>
  );
}
