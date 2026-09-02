"use client";

import { useEffect, useState } from "react";

type Theme = "light-theme" | "dark-theme";

export default function ThemeSwitch() {
  const [toggleTheme, setToggleTheme] = useState<Theme>("light-theme");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("togglETHeme");
      if (stored) {
        const parsed = JSON.parse(stored) as Theme;
        if (parsed === "light-theme" || parsed === "dark-theme") {
          setToggleTheme(parsed);
        }
      }
    } catch {
      // Ignore JSON parse errors
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("togglETHeme", JSON.stringify(toggleTheme));
    document.body.classList.add(toggleTheme);
    return () => {
      document.body.classList.remove(toggleTheme);
    };
  }, [toggleTheme, mounted]);

  const handleToggle = () => {
    setToggleTheme((prev) =>
      prev === "light-theme" ? "dark-theme" : "light-theme",
    );
  };

  return (
    <>
      <nav className="switcher__tab" onClick={handleToggle}>
        <span className="switcher__btn light-mode">
          <i className="flaticon-sun" />
        </span>
        <span className="switcher__mode" />
        <span className="switcher__btn dark-mode">
          <i className="flaticon-moon" />
        </span>
      </nav>
    </>
  );
}
