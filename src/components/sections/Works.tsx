"use client";


import { useTheme } from "@/context/ThemeContext";
import { t } from "@/lib/translations";


const PROJECTS = [
  {
    id: 1,
    title: "Projeto 01",
    description: {
      PT: "Placeholder.",
      EN: "Placeholder.",
      ZH: "占位符。",
    },
    tags: ["Next.js", "TypeScript", "UX"],
    live: "",    
    github: "",  
    wip: false,
  },
  {
    id: 2,
    title: "Projeto 02",
    description: {
      PT: "Placeholder",
      EN: "Placeholder",
      ZH: "占位符。",
    },
    tags: ["Node.js", "MongoDB", "API"],
    live: "", github: "", wip: false,
  },
  {
    id: 3,
    title: "Placeholder",
    description: {
      PT: "Placeholder",
      EN: "Placeholder",
      ZH: "占位符。",
    },
    tags: ["TypeScript", "Node.js", "LangChain"],
    live: "", github: "https://github.com/pedrofreitasst", wip: true,
  },
] as const;


function tagColor(tag: string): string {
  const aiTags = ["LangChain", "AI", "LLM", "RAG"];
  if (aiTags.some(t => tag.includes(t))) return "var(--coral)";
  return "var(--accent)";
}

export default function Works() {
  const { lang } = useTheme();

  return (
    <section id="work" style={{
      maxWidth: "1200px", margin: "0 auto",
      padding: "clamp(4rem,10vh,7rem) 1rem",
    }}>

      {/*CABEÇALHO DA SEÇÃO*/}
      <div style={{ marginBottom: "3rem" }}>
        
        <p style={{
          fontFamily: "'Space Mono',monospace", fontSize: "0.5625rem",
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "var(--accent)", marginBottom: "0.75rem", opacity: 0.8,
        }}>01 — {t.works_title[lang]}</p>

        <h2 style={{
          fontFamily: "'Space Mono',monospace", fontWeight: 700,
          fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "var(--text-primary)",
          letterSpacing: "-0.02em",
        }}>{t.works_sub[lang]}</h2>

    
        <div style={{
          marginTop: "1rem", height: "1px", width: "60px",
          background: "linear-gradient(90deg, var(--accent), transparent)",
        }} />
      </div>

      
    </section>
  );
}


function ProjectCard({ project, lang }: {
  project: typeof PROJECTS[number];
  lang: "PT" | "EN" | "ZH";
}) {
  const desc = project.description[lang];

  return (
    <div style={{
      border: "0.5px solid var(--border)",
      borderRadius: "4px",
      padding: "1.5rem",
      background: "var(--surface)",
   
      transition: "border-color 0.2s, transform 0.2s",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border-hover)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
        <h3 style={{
          fontFamily: "'Space Mono',monospace", fontWeight: 700,
          fontSize: "0.9375rem", color: "var(--text-primary)",
          letterSpacing: "-0.01em",
        }}>{project.title}</h3>

        {project.wip && (
       
          <span style={{
            fontFamily: "'Space Mono',monospace", fontSize: "0.4375rem",
            letterSpacing: "0.15em", textTransform: "uppercase",
            padding: "2px 6px", borderRadius: "2px", flexShrink: 0,
            background: "var(--accent-dim)", color: "var(--accent)",
            border: "0.5px solid var(--accent)",
          }}>WIP</span>
        )}
      </div>

 
      <p style={{
        fontFamily: "'Inter',sans-serif", fontWeight: 300,
        fontSize: "0.875rem", color: "var(--text-secondary)",
        lineHeight: 1.65, flex: 1,
      }}>{desc}</p>

      {/* Tags de tecnologia */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: "'Space Mono',monospace", fontSize: "0.4375rem",
            letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "3px 7px", borderRadius: "2px",
            border: `0.5px solid ${tagColor(tag)}`,
            color: tagColor(tag),
            background: "transparent",
          }}>{tag}</span>
        ))}
      </div>

 
      {(project.live || project.github) && (
        <div style={{ display: "flex", gap: "0.75rem", paddingTop: "0.5rem",
          borderTop: "0.5px solid var(--border)" }}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "'Space Mono',monospace", fontSize: "0.5rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--accent)", textDecoration: "none",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >Live ↗</a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "'Space Mono',monospace", fontSize: "0.5rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--text-secondary)", textDecoration: "none",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >GitHub ↗</a>
          )}
        </div>
      )}
    </div>
  );
}
