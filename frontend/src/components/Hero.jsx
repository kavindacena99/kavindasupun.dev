import { motion as Motion } from "framer-motion";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "./Icons";

export default function Hero({ profile, contact }) {
  const githubLink = contact.socialLinks.find((link) => link.label === "GitHub")?.href;
  const linkedInLink = contact.socialLinks.find((link) => link.label === "LinkedIn")?.href;

  return (
    <section id="home" className="scroll-mt-28 px-6 pb-20 pt-32 sm:pb-24 sm:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-soft)]"
          >
            {profile.role} based in {profile.location}
          </Motion.span>

          <Motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight text-[var(--color-text)] sm:text-6xl xl:text-7xl"
          >
            {profile.name}
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-[var(--color-accent)]"
          >
            {profile.headline}
          </Motion.p>

          <Motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg"
          >
            {profile.summary}
          </Motion.p>

          <Motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 max-w-2xl text-sm uppercase tracking-[0.24em] text-[var(--color-text-soft)]"
          >
            {profile.heroIntro}
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {profile.focusTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text-muted)]"
              >
                {tag}
              </span>
            ))}
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
            >
              View Projects
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Contact Me
            </a>
            {profile.resume.href ? (
              <a
                href={profile.resume.href}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {profile.resume.label}
              </a>
            ) : null}
          </Motion.div>

          {!profile.resume.href ? (
            <Motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-5 text-sm text-[var(--color-text-soft)]"
            >
              Resume is available on request.
            </Motion.p>
          ) : null}
        </div>

        <Motion.aside
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-xl shadow-black/5"
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[var(--color-accent-soft)] blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-4">
              <img
                src={profile.portrait}
                alt={profile.name}
                className="h-20 w-20 rounded-3xl object-cover ring-1 ring-[var(--color-border)]"
              />
              <div>
                <p className="font-display text-2xl text-[var(--color-text)]">{profile.name}</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{profile.role}</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {profile.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-soft)]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{fact.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                <MailIcon className="h-4 w-4" />
                Email
              </a>

              {githubLink ? (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              ) : null}

              {linkedInLink ? (
                <a
                  href={linkedInLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              ) : null}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4 text-sm text-[var(--color-text-muted)]">
              <MapPinIcon className="h-4 w-4 text-[var(--color-accent)]" />
              <span>Based in {profile.location}</span>
            </div>
          </div>
        </Motion.aside>
      </div>
    </section>
  );
}
