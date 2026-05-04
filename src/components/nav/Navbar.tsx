"use client";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { t } from "@/lib/translations";
import LangDropdown from "@/components/ui/LangDropdown";
import ThemeToggle  from "@/components/ui/ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  const { lang, theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: t.nav_work[lang],    href: "#work"    },
    { label: t.nav_about[lang],   href: "#about"   },
    { label: t.nav_contact[lang], href: "#contact" },
  ];

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50, width: "100%",
      borderBottom: "0.5px solid var(--border)",
      
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      background: theme === "dark" ? "rgba(13,17,23,0.85)" : "rgba(240,244,248,0.85)",
      transition: "background 0.4s ease, border-color 0.4s ease",
    }}>
      <nav style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 1rem",
        height: "52px", display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: "1rem",
      }}>
        
        <a href="#" aria-label="Início" style={{ flexShrink: 0, textDecoration: 'none'} }>
          <Image src='/logo/logo.svg' alt='Logo Pedro' width={25} height={30}style={{ paddingTop: '1px', transform: 'translateY(4px)'}}></Image>
          
          
          
        </a>

        {/* Links desktop — ocultos no mobile via .desktop-nav */}
        <ul className="desktop-nav" style={{
          display: "none", gap: "1.75rem", listStyle: "none",
        }}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{
                fontFamily: "'Space Mono',monospace", fontSize: "0.5rem",
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "var(--text-secondary)", textDecoration: "none",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <LangDropdown />
          <ThemeToggle />
          <button className="mobile-btn" onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu" style={{
              background: "transparent", border: "0.5px solid var(--border-hover)",
              borderRadius: "2px", padding: "5px 7px", cursor: "pointer",
              color: "var(--text-secondary)", fontFamily: "'Space Mono',monospace", fontSize: "10px",
            }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          borderTop: "0.5px solid var(--border)", padding: "1rem",
          display: "flex", flexDirection: "column", gap: "0.75rem",
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "'Space Mono',monospace", fontSize: "0.5625rem",
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--text-secondary)", textDecoration: "none",
              padding: "6px 0", borderBottom: "0.5px solid var(--border)",
            }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-btn  { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
}
