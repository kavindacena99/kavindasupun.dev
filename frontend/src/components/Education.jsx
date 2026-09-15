import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { GraduationIcon } from "./Icons";

export default function Education({ content }) {
  return (
    <AnimatedSection id="education" className="section-shell">
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
              className="quiet-panel p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="status-label">
                    {item.status}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-[var(--color-text)]">{item.degree}</h3>
                  <p className="mt-2 text-base font-medium text-[var(--color-accent)]">
                    {item.institution}
                  </p>
                </div>
                <div className="glass-icon">
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
