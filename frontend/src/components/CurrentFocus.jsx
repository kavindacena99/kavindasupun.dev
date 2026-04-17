import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { iconMap } from "./iconMap";

export default function CurrentFocus({ content }) {
  return (
    <AnimatedSection id="focus" className="px-6 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <article
                key={item.title}
                className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-lg shadow-black/5"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-[var(--color-text)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
