import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about a SaaS product, MVP or web application.`,
  alternates: { canonical: "/contact/" },
  openGraph: { url: `${site.url}/contact/`, title: `Contact | ${site.name}` },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${site.url}/contact/` },
  ],
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "WhatsApp", value: "+91 90334 04261", href: site.social.whatsapp, Icon: WhatsappIcon },
  { label: "LinkedIn", value: "mahesh-tavethiya", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", value: site.handle, href: site.social.github, Icon: GithubIcon },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <Section
        as="h1"
        eyebrow="Contact"
        title="Let's build something"
        intro="Tell me what you're working on. I reply within a day with honest feedback on scope, timeline and the right stack."
      >
        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map(({ label, value, href, Icon }, i) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-elevated/60 p-5 transition hover:border-accent"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="block font-semibold group-hover:text-accent">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-muted">Usually respond within 24 hours.</p>
        </Reveal>
      </Section>
    </>
  );
}
