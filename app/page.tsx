import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { highlights, site } from "@/lib/site";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SkillsGrid, SkillsMarquee } from "@/components/SkillsGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsMarquee />

      <Section eyebrow="What I do" title="Product engineering, end to end" intro={`${site.firstName} works across the whole stack so founders get one accountable engineer instead of a hand-off chain.`}>
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-line bg-elevated/60 p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-[0_10px_40px_-10px_var(--glow)]">
                <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-semibold">{h.title}</h3>
                <p className="mt-2 text-muted">{h.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Toolkit" title="Technologies I ship with">
        <SkillsGrid />
      </Section>

      <Section eyebrow="Experience" title="Recent roles">
        <ExperienceTimeline limit={2} />
        <Reveal className="mt-8">
          <Link href="/experience/" className="group inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Full experience
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Section>

      <CTA />
    </>
  );
}
