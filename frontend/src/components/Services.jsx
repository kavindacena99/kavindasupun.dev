import AnimatedSection from "./AnimatedSection";
import EngineeringPrinciples from "./EngineeringPrinciples";
import SectionHeading from "./SectionHeading";
import { iconMap } from "./iconMap";

export default function Services({ content }) {
  return (
    <AnimatedSection id="services" className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.items.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <article
                key={service.title}
                className={`service-card ${index === 2 ? "service-card--accent" : ""}`}
              >
                <div className="glass-icon">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-[var(--color-text)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>

        <EngineeringPrinciples content={content.principles} />
      </div>
    </AnimatedSection>
  );
}
