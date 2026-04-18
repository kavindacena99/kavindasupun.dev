import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

function readStoredTheme() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getPreferredTheme() {
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "dark";
  }
}

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "dark";
  }

  const savedTheme = readStoredTheme();
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return getPreferredTheme();
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore storage failures so theme persistence cannot break rendering.
    }
  }, [theme]);

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme: () => {
      setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
    },
  };
}
