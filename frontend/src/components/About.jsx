import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function About({ content }) {
  return (
    <AnimatedSection id="about" className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="glass-card p-7 sm:p-9">
            <div className="space-y-5 text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="quiet-panel p-7 sm:p-9">
            <p className="section-kicker">What guides the work</p>
            <h3 className="mt-4 font-display text-2xl font-semibold text-[var(--color-text)]">
              Useful technology, applied with care.
            </h3>
            <div className="mt-7 flex flex-wrap gap-2">
              {content.values.map((value) => (
                <span key={value} className="glass-pill">
                  {value}
                </span>
              ))}
            </div>
            <p className="mt-7 text-sm leading-7 text-[var(--color-text-muted)]">
              {content.philosophy}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
