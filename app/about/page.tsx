import type { Metadata } from "next";
import { aboutParagraphs, principles, site } from "@/lib/site";
import { Section } from "@/components/Section";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, a ${site.role.toLowerCase()} building SaaS products and MVPs with Next.js, React, Angular, Node.js and .NET.`,
  alternates: { canonical: "/about/" },
  openGraph: { url: `${site.url}/about/`, title: `About | ${site.name}` },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
    { "@type": "ListItem", position: 2, name: "About", item: `${site.url}/about/` },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Section as="h1" eyebrow="About" title={`A bit about ${site.firstName}`}>
        <div className="grid gap-12 md:grid-cols-[1fr_320px]">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal from="right">
            <aside className="rounded-2xl border border-line bg-elevated/60 p-6">
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-muted">Role</dt>
                  <dd className="font-semibold">{site.role}</dd>
                </div>
                <div>
                  <dt className="text-muted">Based in</dt>
                  <dd className="font-semibold">{site.location}</dd>
                </div>
                <div>
                  <dt className="text-muted">Focus</dt>
                  <dd className="font-semibold">SaaS &amp; product engineering</dd>
                </div>
                <div>
                  <dt className="text-muted">Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="font-semibold text-accent hover:underline">
                      {site.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="How I work" title="Principles">
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-line bg-elevated/60 p-6 transition hover:border-accent/50">
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Toolkit" title="Technologies">
        <SkillsGrid />
      </Section>

      <CTA />
    </>
  );
}
