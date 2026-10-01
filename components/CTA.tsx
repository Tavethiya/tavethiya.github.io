import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-elevated/60 p-10 text-center md:p-16">
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-accent to-accent-2 opacity-20 blur-3xl"
          />
          <h2 className="relative font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Have a product to build?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-muted">
            Tell me about it. I reply within a day with honest feedback on scope, timeline and the right stack.
          </p>
          <Link
            href="/contact/"
            className="group relative mt-8 inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
          >
            Start a conversation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
