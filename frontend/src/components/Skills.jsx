import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { iconMap } from "./iconMap";

export default function Skills({ content }) {
  return (
    <AnimatedSection id="skills" className="section-shell">
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
                className="quiet-panel p-7"
              >
                <div className="flex items-center gap-4">
                  <div className="glass-icon">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">{group.title}</h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="tech-pill"
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
