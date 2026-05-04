"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Theme = "dark" | "light";
export type Lang  = "PT" | "EN" | "ZH";

interface ThemeContextType {
  theme:       Theme;
  lang:        Lang;
  toggleTheme: () => void;
  setLang:     (l: Lang) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang,  setLang]  = useState<Lang>("PT");


  useEffect(() => {
    const saved = localStorage.getItem("pf-theme") as Theme | null;
    if (saved) apply(saved);
  }, []);

  function apply(t: Theme) {
    setTheme(t);

    document.documentElement.classList.toggle("light", t === "light");
    localStorage.setItem("pf-theme", t);
  }

  return (
    <ThemeContext.Provider value={{ theme, lang, toggleTheme: () => apply(theme === "dark" ? "light" : "dark"), setLang }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
