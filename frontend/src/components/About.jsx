import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

export default function About({ content }) {
  return (
    <AnimatedSection id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-lg shadow-black/5">
            <div className="space-y-5 text-base leading-8 text-[var(--color-text-muted)]">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-lg shadow-black/5">
            <h3 className="font-display text-2xl text-[var(--color-text)]">How I approach the work</h3>
            <ul className="mt-6 space-y-4">
              {content.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-7 text-[var(--color-text-muted)]">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
