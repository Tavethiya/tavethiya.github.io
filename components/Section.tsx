import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  as?: "h1" | "h2";
};

export function Section({ id, eyebrow, title, intro, children, as = "h2" }: Props) {
  const Heading = as;
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <Reveal>
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>}
        <Heading className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</Heading>
        {intro && <p className="mt-4 max-w-2xl text-lg text-muted">{intro}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
