"use client";
import { useState, useRef, useEffect } from "react";
import { useTheme, Lang } from "@/context/ThemeContext";

const LANGS: { code: Lang; label: string; dot: string }[] = [
  { code: "PT", label: "PT — Português", dot: "#8DFFD4" },
  { code: "EN", label: "EN — English",   dot: "#D6E4ED" },
  { code: "ZH", label: "ZH — 中文",      dot: "#B0B8C0" },

];

export default function LangDropdown() {
  const { lang, setLang } = useTheme();
  const [open, setOpen]   = useState(false);
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button onClick={() => setOpen(o => !o)} style={{
        fontFamily: "'Space Mono',monospace", fontSize: "0.5rem",
        letterSpacing: "0.14em", textTransform: "uppercase",
        padding: "5px 10px", borderRadius: "2px",
        border: "0.5px solid var(--border-hover)", background: "transparent",
        color: "var(--text-secondary)", cursor: "pointer",
        display: "flex", alignItems: "center", gap: "6px",
        transition: "border-color 0.2s, color 0.2s", whiteSpace: "nowrap",
      }}>
        {lang}
        <span style={{ fontSize: "7px", transition: "transform 0.2s", display: "inline-block",
          transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", right: 0,
          minWidth: "130px", background: "var(--surface)",
          border: "0.5px solid var(--border-hover)", borderRadius: "4px",
          overflow: "hidden", zIndex: 100,
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
        }}>
          {LANGS.map(({ code, label, dot }) => (
            <button key={code}
              onClick={() => { setLang(code); setOpen(false); }}
              style={{
                width: "100%", textAlign: "left",
                fontFamily: "'Space Mono',monospace", fontSize: "0.5rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "8px 12px",
                background: lang === code ? "var(--accent-dim)" : "transparent",
                color: lang === code ? "var(--accent)" : "var(--text-secondary)",
                border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", gap: "8px",
                transition: "background 0.15s",
              }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%",
                background: dot, flexShrink: 0 }} />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
