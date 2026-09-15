import { motion as Motion, useReducedMotion } from "framer-motion";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MapPinIcon } from "./Icons";

const reveal = (reduceMotion, delay) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: reduceMotion ? { duration: 0 } : { duration: 0.55, delay, ease: "easeOut" },
});

export default function Hero({ profile, contact }) {
  const reduceMotion = useReducedMotion();
  const githubLink = contact.socialLinks.find((link) => link.label === "GitHub")?.href;
  const linkedInLink = contact.socialLinks.find((link) => link.label === "LinkedIn")?.href;

  return (
    <section id="home" className="scroll-mt-28 px-5 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <div>
          <Motion.div {...reveal(reduceMotion, 0)} className="flex flex-wrap items-center gap-3">
            <span className="glass-pill">{profile.roleIndicator}</span>
            <span className="availability-pill">
              <span className="availability-dot" aria-hidden="true" />
              Selected freelance projects
            </span>
          </Motion.div>

          <Motion.h1
            {...reveal(reduceMotion, 0.08)}
            className="mt-7 max-w-4xl font-display text-[clamp(2.8rem,7vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[var(--color-text)]"
          >
            {profile.name}
          </Motion.h1>

          <Motion.p
            {...reveal(reduceMotion, 0.16)}
            className="mt-7 max-w-3xl text-xl font-medium leading-8 tracking-[-0.02em] text-[var(--color-accent-strong)] sm:text-2xl sm:leading-9"
          >
            {profile.headline}
          </Motion.p>

          <Motion.p
            {...reveal(reduceMotion, 0.24)}
            className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg"
          >
            {profile.summary}
          </Motion.p>

          <Motion.p {...reveal(reduceMotion, 0.3)} className="mt-5 text-sm font-medium text-[var(--color-text-soft)]">
            {profile.availability}
          </Motion.p>

          <Motion.div {...reveal(reduceMotion, 0.36)} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="button-primary">
              View Projects
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a href={`mailto:${contact.email}?subject=Project%20discussion`} className="glass-button">
              Discuss a Project
            </a>
          </Motion.div>

          <Motion.div {...reveal(reduceMotion, 0.42)} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            {githubLink ? (
              <a href={githubLink} target="_blank" rel="noreferrer" className="text-link">
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
            ) : null}
            {linkedInLink ? (
              <a href={linkedInLink} target="_blank" rel="noreferrer" className="text-link">
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            ) : null}
          </Motion.div>
        </div>

        <Motion.aside {...reveal(reduceMotion, 0.18)} className="hero-portrait-card">
          <div className="portrait-frame">
            <img
              src={profile.portrait}
              alt={`Portrait of ${profile.name}`}
              width="720"
              height="960"
              fetchPriority="high"
              className="h-full w-full object-cover object-[center_24%]"
            />
          </div>

          <div className="relative mt-5">
            <p className="font-display text-xl font-semibold text-[var(--color-text)]">{profile.positioning}</p>
            <div className="mt-3 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <MapPinIcon className="h-4 w-4 text-[var(--color-accent)]" />
              Based in {profile.location}
            </div>
            <dl className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {profile.quickFacts.map((fact) => (
                <div key={fact.label} className="fact-row">
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Motion.aside>
      </div>
    </section>
  );
}
