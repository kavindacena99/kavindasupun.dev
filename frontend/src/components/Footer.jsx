import { iconMap } from "./iconMap";

export default function Footer({ name, role, navItems, socialLinks }) {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl text-[var(--color-text)]">{name}</p>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">{role}</p>
          <p className="mt-4 text-sm text-[var(--color-text-soft)]">
            © {new Date().getFullYear()} {name}. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <a
                key={item.sectionId}
                href={item.href}
                className="text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-accent)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
