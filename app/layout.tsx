import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Spotlight } from "@/components/Spotlight";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0d14" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  sameAs: [site.social.github, site.social.linkedin],
  knowsAbout: ["Next.js", "React", "Angular", "TypeScript", "Node.js", ".NET", "AWS", "Azure"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  author: { "@type": "Person", name: site.name, url: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${grotesk.variable} h-full antialiased`}>
      <body className="bg-grid flex min-h-full flex-col">
        <ThemeProvider>
          <Spotlight />
          <Header />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <JsonLd data={[personSchema, websiteSchema]} />
      </body>
    </html>
  );
}
