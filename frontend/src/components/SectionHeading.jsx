export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const wrapperClass =
    align === "center"
      ? "mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center"
      : "mb-12 flex max-w-3xl flex-col gap-4";

  return (
    <div className={wrapperClass}>
      {eyebrow ? (
        <span className="inline-flex w-fit items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-soft)]">
          {eyebrow}
        </span>
      ) : null}

      <div className="space-y-3">
        <h2 className="font-display text-3xl tracking-tight text-[var(--color-text)] sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
