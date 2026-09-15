import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Wildcat from "../projects/wildcat";
import AnimatedSection from "./AnimatedSection";
import { ArrowUpRightIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

function ArchitectureDoc({ project }) {
  if (project.architecture) {
    return <Wildcat />;
  }

  return null;
}

function ArchitectureModal({ title, onClose, children }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const previousFocus = document.activeElement;
    const appRoot = document.getElementById("root");
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    if (appRoot) appRoot.inert = true;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (appRoot) appRoot.inert = false;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      className="glass-modal fixed inset-0 z-[100] flex flex-col"
    >
      <div className="modal-toolbar">
        <div className="min-w-0">
          <p id={titleId} className="truncate text-sm font-semibold text-[var(--color-text)]">
            {title}
          </p>
          <p id={descriptionId} className="mt-0.5 text-xs text-[var(--color-text-soft)]">
            Interactive system architecture document
          </p>
        </div>
        <button ref={closeButtonRef} type="button" onClick={onClose} className="glass-button px-4 py-2">
          Close <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">{children}</div>
    </div>
  );
}

function ProjectCard({ project, onOpenArchitecture }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className={`project-card ${project.featured ? "project-card--featured" : ""}`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="project-label">{project.category}</span>
          <span className="status-label">{project.status}</span>
          {project.privacy ? <span className="status-label">{project.privacy}</span> : null}
        </div>
        {project.featured ? <span className="featured-mark">Featured</span> : null}
      </div>

      <h3 className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-[-0.035em] text-[var(--color-text)] sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--color-text-muted)]">
        {project.summary}
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <p className="detail-label">The problem</p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">{project.problem}</p>
        </div>
        <div>
          <p className="detail-label">The system</p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">{project.solution}</p>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {project.engineeringHighlights.map((highlight) => (
          <span key={highlight} className="engineering-tag">{highlight}</span>
        ))}
      </div>

      {isExpanded ? (
        <div className="mt-7 border-t border-[var(--color-border)] pt-6">
          <p className="detail-label">My engineering contribution</p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">{project.contribution}</p>
          <div className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
            {project.stack.map((tech) => <span key={tech} className="tech-pill">{tech}</span>)}
          </div>
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => setIsExpanded((value) => !value)} className="glass-button px-4 py-2.5" aria-expanded={isExpanded}>
          {isExpanded ? "Show less" : "Engineering details"}
        </button>
        {project.links.github ? (
          <a href={project.links.github} target="_blank" rel="noreferrer" className="text-link">
            GitHub <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        ) : null}
        {project.architecture ? (
          <button type="button" onClick={() => onOpenArchitecture(project)} className="architecture-trigger">
            Explore Architecture <ArrowUpRightIcon className="h-4 w-4" />
          </button>
        ) : null}
      </div>
    </article>
  );
}

export default function Projects({ content }) {
  const [activeProject, setActiveProject] = useState(null);
  const closeDoc = useCallback(() => setActiveProject(null), []);

  return (
    <AnimatedSection id="projects" className="section-shell">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        <div className="grid gap-6 lg:grid-cols-2">
          {content.items.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpenArchitecture={setActiveProject}
            />
          ))}
        </div>
      </div>

      {activeProject
        ? createPortal(
            <ArchitectureModal title={activeProject.title} onClose={closeDoc}>
              <ArchitectureDoc project={activeProject} />
            </ArchitectureModal>,
            document.body,
          )
        : null}
    </AnimatedSection>
  );
}
