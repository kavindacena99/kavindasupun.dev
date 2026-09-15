import { iconMap } from "./iconMap";

export default function Footer({ name, role, navItems, socialLinks, email }) {
  return (
    <footer className="border-t border-[var(--color-border)] px-5 py-9 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-[var(--color-text)]">{name}</p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{role}</p>
          <p className="mt-4 text-sm text-[var(--color-text-soft)]">
            © {new Date().getFullYear()} {name}. Built with React, Vite &amp; thoughtful engineering.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer navigation">
            {navItems.map((item) => (
              <a key={item.sectionId} href={item.href} className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent-strong)]">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${email}`} className="text-link">Email</a>
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="text-link">
                  <Icon className="h-4 w-4" /> {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
