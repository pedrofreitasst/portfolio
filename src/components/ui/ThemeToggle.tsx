"use client";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      style={{
        position: "relative", width: "44px", height: "22px",
        borderRadius: "11px", background: "transparent",
        border: "0.5px solid var(--accent)",
        cursor: "pointer", padding: 0, flexShrink: 0,
        transition: "border-color 0.35s",
      }}
    >
      <span style={{
        position: "absolute", top: "2px",

        left: isDark ? "2px" : "22px",
        width: "16px", height: "16px", borderRadius: "50%",
        background: "var(--accent)",

        transition: "left 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        display: "block",
      }} />
    </button>
  );
}
