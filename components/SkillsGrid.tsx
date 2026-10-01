import { skills } from "@/lib/site";
import { Reveal } from "./Reveal";

export function SkillsGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {skills.map((group, i) => (
        <Reveal key={group.title} delay={i * 0.08}>
          <div className="group h-full rounded-2xl border border-line bg-elevated/60 p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-[0_10px_40px_-10px_var(--glow)]">
            <h3 className="font-display text-lg font-semibold">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted transition group-hover:border-accent/40 group-hover:text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Infinite horizontal strip of every skill. */
export function SkillsMarquee() {
  const all = skills.flatMap((g) => g.items);
  const doubled = [...all, ...all];
  return (
    <div className="relative overflow-hidden border-y border-line py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul className="marquee flex w-max gap-8 whitespace-nowrap">
        {doubled.map((item, i) => (
          <li key={`${item}-${i}`} className="flex items-center gap-8 text-sm font-medium text-muted">
            {item}
            <span className="h-1 w-1 rounded-full bg-accent" />
          </li>
        ))}
      </ul>
    </div>
  );
}
