import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { GraduationIcon } from "./Icons";

export default function Education({ content }) {
  return (
    <AnimatedSection id="education" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {content.items.map((item) => (
            <article
              key={item.degree}
              className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-lg shadow-black/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-soft)]">
                    {item.status}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-[var(--color-text)]">{item.degree}</h3>
                  <p className="mt-2 text-base font-medium text-[var(--color-accent)]">
                    {item.institution}
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent)]">
                  <GraduationIcon className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-[var(--color-text-muted)]">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
