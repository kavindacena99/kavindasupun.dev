import AnimatedSection from "./AnimatedSection";
import { ArrowUpRightIcon, MailIcon, MapPinIcon } from "./Icons";
import { iconMap } from "./iconMap";

export default function Contact({ content }) {
  return (
    <AnimatedSection id="contact" className="px-5 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20">
      <div className="contact-panel mx-auto max-w-6xl">
        <div className="relative max-w-4xl">
          <span className="section-kicker">{content.eyebrow}</span>
          <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-[-0.045em] text-[var(--color-text)] sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            {content.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={`mailto:${content.email}?subject=Project%20discussion`} className="button-primary">
              <MailIcon className="h-4 w-4" />
              Discuss a Project
            </a>
            {content.socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="glass-button">
                  <Icon className="h-4 w-4" />
                  {link.label}
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[var(--color-text-soft)]">
            <a href={`mailto:${content.email}`} className="text-link">{content.email}</a>
            <span className="inline-flex items-center gap-2">
              <MapPinIcon className="h-4 w-4" /> {content.location}
            </span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
