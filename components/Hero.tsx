"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { site } from "@/lib/site";
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
      <div className="mx-auto max-w-3xl px-4 pb-20 pt-16 text-center sm:px-6 md:pb-28 md:pt-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-elevated/60 px-3 py-1 text-xs font-medium text-muted backdrop-blur"
          >
            {site.role}
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

          <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
      </div>
    </section>
  );
}
