import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { BriefcaseIcon } from "./Icons";

export default function Experience({ content }) {
  return (
    <AnimatedSection id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {content.roles.map((role) => (
            <article
              key={role.title}
              className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-lg shadow-black/5"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                    {role.phase}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-[var(--color-text)]">{role.title}</h3>
                </div>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-3 text-[var(--color-accent)]">
                  <BriefcaseIcon className="h-5 w-5" />
                </div>
              </div>

              <p className="text-base leading-7 text-[var(--color-text-muted)]">{role.summary}</p>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-[var(--color-text-muted)]">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
