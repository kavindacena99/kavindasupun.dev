import SectionHeading from "./SectionHeading";

export default function EngineeringPrinciples({ content }) {
  return (
    <div className="mt-20">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {content.items.map((principle) => (
          <article key={principle.number} className="principle-card">
            <div className="flex items-start justify-between gap-5">
              <span className="font-display text-4xl font-semibold tracking-[-0.06em] text-[var(--color-accent)]">
                {principle.number}
              </span>
              <span className="h-px flex-1 bg-[var(--color-border)]" aria-hidden="true" />
            </div>
            <h3 className="mt-7 font-display text-2xl font-semibold text-[var(--color-text)]">
              {principle.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
              {principle.description}
            </p>
            <ul className="mt-6 space-y-3" aria-label={`${principle.title} priorities`}>
              {principle.details.map((detail) => (
                <li key={detail} className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
