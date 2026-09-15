export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const wrapperClass =
    align === "center"
      ? "mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center sm:mb-14"
      : "mb-12 flex max-w-3xl flex-col gap-4 sm:mb-14";

  return (
    <div className={wrapperClass}>
      {eyebrow ? (
        <span className="section-kicker">
          {eyebrow}
        </span>
      ) : null}

      <div className="space-y-3">
        <h2 className="font-display text-3xl font-semibold tracking-[-0.035em] text-[var(--color-text)] sm:text-4xl lg:text-[2.7rem] lg:leading-tight">
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
