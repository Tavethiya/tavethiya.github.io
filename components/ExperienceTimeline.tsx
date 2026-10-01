import { experience } from "@/lib/site";
import { Reveal } from "./Reveal";

export function ExperienceTimeline({ limit }: { limit?: number }) {
  const items = limit ? experience.slice(0, limit) : experience;
  return (
    <ol className="relative border-l border-line pl-8">
      {items.map((job, i) => (
        <li key={`${job.company}-${job.period}`} className="relative pb-12 last:pb-0">
          <span className="absolute -left-[41px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-bg">
            <span className="h-2 w-2 rounded-full bg-accent" />
          </span>
          <Reveal delay={i * 0.05} from="left">
            <article className="rounded-2xl border border-line bg-elevated/60 p-6 transition hover:border-accent/50">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold">{job.role}</h3>
                <p className="text-sm font-medium text-accent">{job.period}</p>
              </div>
              <p className="mt-1 text-sm text-muted">
                {job.company} · {job.location}
              </p>
              <p className="mt-4 text-muted">{job.summary}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <li key={s} className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
