"use client";

import { useTheme } from "@/context/ThemeContext";
import { t } from "@/lib/translations";

const EMAIL_ADDRESS = "pedrofreitas@gmail.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzlkjnz";
const GITHUB_URL = "https://github.com/pedrofreitasst";
const LINKEDIN_URL = "https://www.linkedin.com/in/pedro-de-freitas-a776711a1/";

export default function Contact() {
  const { lang } = useTheme();

  const formCopy = {
    PT: {
      title: "Mensagem direta",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      send: "Enviar mensagem",
      subject: "Contato pelo portfolio",
    },
    EN: {
      title: "Direct message",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      subject: "Portfolio contact",
    },
    ZH: {
      title: "Direct message",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      subject: "Portfolio contact",
    },
  }[lang];

  const links = [
    { label: t.contact_gh_label[lang], href: GITHUB_URL, external: true },
    { label: t.contact_li_label[lang], href: LINKEDIN_URL, external: true },
    { label: t.contact_email_label[lang], href: `mailto:${EMAIL_ADDRESS}`, external: false },
  ];

  const labelStyle = {
    display: "block",
    fontFamily: "'Space Mono',monospace",
    fontSize: "0.4375rem",
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "var(--text-tertiary)",
    marginBottom: "0.375rem",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.625rem 0.75rem",
    border: "0.5px solid var(--border)",
    borderRadius: "2px",
    background: "var(--bg)",
    color: "var(--text-primary)",
    fontFamily: "'Inter',sans-serif",
    fontSize: "0.875rem",
    outline: "none",
  };

  return (
    <section
      id="contact"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "clamp(4rem,10vh,7rem) 1rem clamp(4rem,8vh,6rem)",
      }}
    >
      <div style={{ marginBottom: "3rem" }}>
        <p
          style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "0.5625rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "0.75rem",
            opacity: 0.8,
          }}
        >
          03 - {t.contact_title[lang]}
        </p>

        <h2
          style={{
            fontFamily: "'Space Mono',monospace",
            fontWeight: 700,
            fontSize: "clamp(1.5rem,3vw,2.25rem)",
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          {t.contact_sub[lang]}
        </h2>

        <div
          style={{
            marginTop: "1rem",
            height: "1px",
            width: "60px",
            background: "linear-gradient(90deg, var(--accent), transparent)",
          }}
        />
      </div>

      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Inter',sans-serif",
              fontWeight: 300,
              fontSize: "clamp(0.875rem,1.5vw,1rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: "2rem",
              maxWidth: "400px",
            }}
          >
            {t.contact_avail[lang]}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.875rem 1rem",
                  border: "0.5px solid var(--border)",
                  borderRadius: "4px",
                  background: "var(--surface)",
                  textDecoration: "none",
                  transition: "border-color 0.2s, transform 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Mono',monospace",
                    fontSize: "0.5rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--text-tertiary)",
                    width: "60px",
                    flexShrink: 0,
                  }}
                >
                  {link.label}
                </span>

                <span style={{ width: "1px", height: "16px", background: "var(--border)", flexShrink: 0 }} />

                <span
                  style={{
                    fontFamily: "'Space Mono',monospace",
                    fontSize: "0.5625rem",
                    letterSpacing: "0.06em",
                    color: "var(--accent)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.href.replace("mailto:", "").replace("https://", "")}
                </span>

                {link.external && (
                  <span style={{ marginLeft: "auto", color: "var(--text-tertiary)", fontSize: "0.7rem" }}>-&gt;</span>
                )}
              </a>
            ))}
          </div>
        </div>

        <div
          style={{
            border: "0.5px solid var(--border)",
            borderRadius: "4px",
            padding: "1.5rem",
            background: "var(--surface)",
          }}
        >
          <p
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "0.5rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-tertiary)",
              marginBottom: "1.25rem",
            }}
          >
            {formCopy.title}
          </p>

          <form action={FORMSPREE_ENDPOINT} method="POST">
            <input type="hidden" name="_subject" value={formCopy.subject} />

            <div style={{ marginBottom: "0.875rem" }}>
              <label htmlFor="contact-name" style={labelStyle}>
                {formCopy.name}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                style={{ ...inputStyle, height: "38px" }}
              />
            </div>

            <div style={{ marginBottom: "0.875rem" }}>
              <label htmlFor="contact-email" style={labelStyle}>
                {formCopy.email}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                style={{ ...inputStyle, height: "38px" }}
              />
            </div>

            <div style={{ marginBottom: "0.875rem" }}>
              <label htmlFor="contact-message" style={labelStyle}>
                {formCopy.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              style={{
                marginTop: "1rem",
                width: "100%",
                padding: "10px",
                background: "var(--accent-dim)",
                borderRadius: "2px",
                border: "0.5px solid var(--border)",
                fontFamily: "'Space Mono',monospace",
                fontSize: "0.5625rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--accent)",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              {formCopy.send}
            </button>
          </form>
        </div>
      </div>

      <div
        style={{
          marginTop: "4rem",
          paddingTop: "1.5rem",
          borderTop: "0.5px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
          fontFamily: "'Space Mono',monospace",
          fontSize: "0.4375rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--text-tertiary)",
        }}
      >
        <span>V 1.0 - 2025</span>
        <span>Pedro Freitas - Rio de Janeiro</span>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
