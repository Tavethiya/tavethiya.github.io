import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.role}. {site.availability}.</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-fg">
              {item.label}
            </Link>
          ))}
        </nav>

        <ul className="flex items-center gap-3">
          <li>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition hover:border-accent hover:text-accent"
            >
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition hover:border-accent hover:text-accent"
            >
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition hover:border-accent hover:text-accent"
            >
              <Mail size={18} />
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Built with Next.js, deployed on GitHub Pages.
      </div>
    </footer>
  );
}
