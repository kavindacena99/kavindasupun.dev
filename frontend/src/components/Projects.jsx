import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { ArrowUpRightIcon } from "./Icons";

export default function Projects({ content }) {
  return (
    <AnimatedSection id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {content.items.map((project, index) => (
            <article
              key={project.title}
              className={`overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 shadow-lg shadow-black/5 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      {project.category}
                    </span>
                    {project.featured ? (
                      <span className="inline-flex rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-soft)]">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-[var(--color-text)] sm:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.links.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      GitHub
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  ) : null}
                  {project.links.demo ? (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      Live Demo
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--color-text-muted)]">
                {project.summary}
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-soft)]">
                    Problem / context
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                    {project.problem}
                  </p>
                </div>
                <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-soft)]">
                    My implementation focus
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                    {project.focus}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
