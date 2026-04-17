import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon, MailIcon, MapPinIcon } from "./Icons";
import { iconMap } from "./iconMap";

export default function Contact({ content }) {
  return (
    <AnimatedSection id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-lg shadow-black/5">
            <p className="max-w-2xl text-base leading-8 text-[var(--color-text-muted)]">
              {content.availability}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:${content.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
              >
                <MailIcon className="h-4 w-4" />
                {content.email}
              </a>
              {content.socialLinks.map((link) => {
                const Icon = iconMap[link.icon];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-lg shadow-black/5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-soft)]">
                Email
              </p>
              <p className="mt-3 text-lg font-semibold text-[var(--color-text)]">{content.email}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                Best for collaboration, project conversations, and engineering opportunities.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-lg shadow-black/5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent)]">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-soft)]">
                    Location
                  </p>
                  <p className="mt-1 text-base font-semibold text-[var(--color-text)]">
                    {content.location}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--color-text-muted)]">
                Open to remote-friendly collaboration and engineering discussions around AI systems,
                backend services, and product delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
