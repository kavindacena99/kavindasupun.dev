import { useState } from "react";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./Icons";

export default function Navbar({ brand, navItems, activeSection, isDark, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto max-w-6xl rounded-full border border-[var(--color-border)] bg-[var(--color-nav)] px-4 py-3 shadow-lg shadow-black/5 backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-tight text-[var(--color-text)] sm:text-xl"
          >
            {brand}
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive = item.sectionId === activeSection;

              return (
                <a
                  key={item.sectionId}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                      : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] text-[var(--color-text)] lg:hidden"
              onClick={() => setIsOpen((currentValue) => !currentValue)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="mt-4 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-3 lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => {
                const isActive = item.sectionId === activeSection;

                return (
                  <a
                    key={item.sectionId}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                        : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
