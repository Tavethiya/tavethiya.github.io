import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Section } from "@/components/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { CTA } from "@/components/CTA";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Experience",
  description: `Work history of ${site.name}: full-stack roles building SaaS platforms and MVPs with Next.js, React, Angular, Node.js, .NET, AWS and Azure.`,
  alternates: { canonical: "/experience/" },
  openGraph: { url: `${site.url}/experience/`, title: `Experience | ${site.name}` },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
    { "@type": "ListItem", position: 2, name: "Experience", item: `${site.url}/experience/` },
  ],
};

export default function ExperiencePage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Section
        as="h1"
        eyebrow="Experience"
        title="Where I've worked"
        intro="Roles, what I owned, and what shipped. Most recent first."
      >
        <ExperienceTimeline />
      </Section>
      <CTA />
    </>
  );
}
