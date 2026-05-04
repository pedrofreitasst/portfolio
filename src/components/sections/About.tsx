"use client";



import { useTheme } from "@/context/ThemeContext";
import { t } from "@/lib/translations";
import Image from "next/image";

const STACK = [
  {
    category: { PT: "Frontend", EN: "Frontend", ZH: "前端" },
    items: ["React", "Next.js", "TypeScript", "HTML/CSS"],
  },
  {
    category: { PT: "Backend", EN: "Backend", ZH: "后端" },
    items: ["Node.js", "Express", "MongoDB","Springboot","Laravel","Django"],
  },
  {
    category: { PT: "Ferramentas", EN: "Tools", ZH: "工具" },
    items: ["Git", "Figma", "Photoshop", "VS Code"],
  },
  {
    category: { PT: "Em progresso", EN: "In progress", ZH: "学习中" },
    items: ["LangChain", "Docker", "AWS", "LLM Integration", "AI -Powered Automation", "Prompt Engineering"],
  },
] as const;

export default function About() {
  const { lang, theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="about" style={{

      background: "var(--bg-secondary)",
      transition: "background 0.4s ease",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto",
        padding: "clamp(4rem,10vh,7rem) 1rem",
      }}>

        {/*CABEÇALHO*/}
        <div style={{ marginBottom: "3rem" }}>
          <p style={{
            fontFamily: "'Space Mono',monospace", fontSize: "0.5625rem",
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--accent)", marginBottom: "0.75rem", opacity: 0.8,
          }}>02 — {t.about_title[lang]}</p>

          <h2 style={{
            fontFamily: "'Space Mono',monospace", fontWeight: 700,
            fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}>{t.about_intro[lang]}</h2>

          <div style={{ marginTop: "1rem", height: "1px", width: "60px",
            background: "linear-gradient(90deg, var(--accent), transparent)" }} />
        </div>

        {/*GRID: BIO + STACK*/}
        <div className="about-grid" style={{
          display: "grid", gridTemplateColumns: "1fr",
          gap: "3rem", alignItems: "start",
        }}>

          {/* BIO */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              
            </div>
           

            
            <p style={{
              fontFamily: "'Inter',sans-serif", fontWeight: 300,
              fontSize: "clamp(0.875rem,1.5vw,1rem)", color: "var(--text-secondary)",
              lineHeight: 1.8, whiteSpace: "pre-line",
              maxWidth: "520px",
            }}>{t.about_body[lang]}</p>
          </div>

          {/* STACK */}
          <div>
            <p style={{
              fontFamily: "'Space Mono',monospace", fontSize: "0.5625rem",
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--text-tertiary)", marginBottom: "1.25rem",
            }}>{t.about_stack_title[lang]}</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {STACK.map(group => (
                <div key={group.category.EN}>
                  {/* Nome da categoria */}
                  <p style={{
                    fontFamily: "'Space Mono',monospace", fontSize: "0.5rem",
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "var(--accent)", marginBottom: "0.5rem", opacity: 0.7,
                  }}>{group.category[lang]}</p>

                  {/* Itens da categoria como tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {group.items.map(item => (
                      <span key={item} style={{
                        fontFamily: "'Space Mono',monospace", fontSize: "0.5rem",
                        letterSpacing: "0.1em",
                        padding: "4px 8px", borderRadius: "2px",
                        border: "0.5px solid var(--border)",
                        color: "var(--text-secondary)",
                        background: "var(--surface)",
                        
                        fontStyle: group.category.EN === "In progress" ? "italic" : "normal",
                      }}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 3fr 2fr !important; }
        }
      `}</style>
    </section>
  );
}
