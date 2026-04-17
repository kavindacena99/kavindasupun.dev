import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { iconMap } from "./iconMap";

export default function Skills({ content }) {
  return (
    <AnimatedSection id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.groups.map((group) => {
            const Icon = iconMap[group.icon];

            return (
              <article
                key={group.title}
                className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-lg shadow-black/5"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl text-[var(--color-text)]">{group.title}</h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-2 text-sm text-[var(--color-text-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
