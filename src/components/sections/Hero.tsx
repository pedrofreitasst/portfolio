"use client";
import { useTheme } from "@/context/ThemeContext";
import { t } from "@/lib/translations";

export default function Hero() {
  const { theme, lang } = useTheme();
  const isDark = theme === "dark";

  return (
    <section style={{
      position: "relative",
      minHeight: "calc(100svh - 52px)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>

    
      <div style={{ position: "absolute", inset: 0, opacity: isDark ? 1 : 0,
        transition: "opacity 0.6s ease", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-80px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle,rgba(141,255,212,0.07) 0%,transparent 65%)" }} />
        <PixelCluster />
      </div>

   
      <div style={{ position: "absolute", inset: 0, opacity: isDark ? 0 : 1,
        transition: "opacity 0.6s ease", pointerEvents: "none" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(141,180,210,0.13) 1px,transparent 1px),linear-gradient(90deg,rgba(141,180,210,0.13) 1px,transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
        <div style={{
          position: "absolute", top: "-60px", right: "-60px",
          width: "320px", height: "320px",
          borderRadius: "63% 37% 54% 46%/55% 48% 52% 45%",
          background: "rgba(214,228,237,0.5)",
          animation: "blobMorph 12s ease-in-out infinite",
        }} />
      </div>


      <div style={{
        position:      "absolute",
        inset:         0,
        opacity:       isDark ? 1 : 0,  // dark=visível, light=invisível
        transition:    "opacity 0.6s ease",
        pointerEvents: "none",
        overflow:      "hidden",
        display:       "flex",
        justifyContent:"center",
        alignItems:    "flex-start",
        zIndex:        1,
      }}>
        <pre style={{
          fontFamily: "'Space Mono', monospace",
          fontSize:   "clamp(0.22rem, 0.45vw, 0.38rem)",
          lineHeight: 1.25,
          color:      "var(--accent)",
          opacity:    0.7,
          userSelect: "none",
          whiteSpace: "pre",
          marginTop:  "-1rem",
        }}>
{`                                                   ++#######+++                   ++++++++---   
                                                  ++#######+++-                  +++++++++--    
                                                 ++########++-                  ++++++++++-     
                                                 +########++-                  -+++++++++--     
                                                +########++-                  ++++++++++--      
                                               +########++-                  +++++++++++-           
                                              ++#++#+#+++-     ---          +++++++++++-            
                                             +++++++++++- ---------       -+++++++++++-             
                                            +++++++++++------------      -+++++++++++-              
                                           -++++++++++---++++++---      -+++++++++++-               
                                           +++++++++---+++++++++--     -++++++++++--                
                                          +++++------+++++++++++-     --+++++++++--                 
                                         -+++------ +++++++++++-    ---++++++++---                  
                                        --+------- -++#+#++++++    ---++++++-----                   
                                       ---------- ++#######+++-   ----+---------                    
                                      ------ --- ++########++-    -------------       
                               -      ----    -  +########++-    ---- --------   ---  
                              --                +#########+-            -----  ------ 
                             ---               +#########++             ---  -------- 
                            ----              +#########++              --  -+++----- 
                           -----             +#########++                 -++++++---- 
                          -+----            +#########++                 ++++++++---  
                         -+----            +#########++                 ++++++++---   
                         ++----           +#########++                +++++++++---    
                        +++----          +#########+-                +++++++++--      
                       -+++---           +########++                ++####+++--       
                      -+++----          +#######+++               ++#####++-- 
                     +++++----        ++########+-              ++######++-      
                   -++++------       ++####++##+-             ++######++--    
                  ++##++-- ---      ++####+++##+             ++#####+++-      
                 ++##++--  --      +#####++-+#++           ++######++-     
                ++##++--  --      +#####++-++++          ++######++-     
               ++##++-------     +#####++-++#++         +######++-      
               +##+--------     #####++-+++##+        ++######+-                  
              ++#+- -------     +##++-++++##+       ++######++-                     
             ++#+-  ------      +##+ -++###+       +#######++-                     
             ++#+-  -- ++-     ###+ -++++++-      ########++-                               
            +++++---+--+-     +###+--+++##+      +#######+++                                 
            +++++-++- ++-     ##+++++++ ##+      ######++++-                                 
            +++++-++- ++      ##+++++++ ##+     +######++++                                   
            +++#+-++- +-     +#++#++#+++#+      ####+##+++-                                    
            ++++++++  -      +#++#++#+ ##+     +###+###++--                                      
              ++-+++         +++#++##+        +###+ ###++-                                        
             +++ ++          - +#++#+        +###+ +###+-+                                        
                                ++ -         +##+++####+++                                      
                                            +#++  +###+++                                     
                                             ++ -+##++++                                          
                                 --          -+++##+#++                                             
                                --     ---++#####++#++- ..                                          
                               ---    -----+++++++++------                                          
                              ----   - ---       --------                                           
                             -----  -- ---       -+-------                                          
                             ++--- --- ++       +++++-----                                          
                             ++-+--+- ++-      ++++-++---                                           
                            +++++-++- ++-      ++++++++--                                           
                            ++-++-++- ++      +#++ ++++-                                            
                             -+++-++         ++++- +#++--                                           
                              +++++-        ++++- +##+++-                                           
                               +            ++++ ++##+++                                            
                                            +++ ++##+++                                             
                                               -###+++                                              
                                          -+++####+#+                                               
                                         ++###++++++                                                
                                         -+--+++++-`}
        </pre>
      </div>


      <div style={{
        flex: 1, maxWidth: "1200px", width: "100%", margin: "0 auto",
        padding: "clamp(3rem,10vh,6rem) 1rem 2rem",
        display: "flex", flexDirection: "column", justifyContent: "center",
        position: "relative", zIndex: 2,
      }}>
        <div className="hero-grid" style={{
          display: "grid", gridTemplateColumns: "1fr", gap: "2rem", alignItems: "center",
        }}>


          <div>
            <p style={{
              fontFamily: "'Space Mono',monospace", fontSize: "clamp(0.75rem,1.5vw,0.625rem)",
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--accent)", marginBottom: "1.25rem", opacity: 0.8,
            }}>{t.hero_available[lang]}</p>

            <h1 style={{
              fontFamily: "'Space Mono',monospace", fontWeight: 700,
              fontSize: "clamp(2.75rem,5vw,4.25rem)", lineHeight: 1.1,
              letterSpacing: "-0.02em", color: "var(--text-primary)",
              marginBottom: "1.25rem",
            }}>
              {t.hero_h1_line1[lang]}<br />
              <span style={{ color: "var(--accent)" }}>{t.hero_h1_line2[lang]}</span><br />
            </h1>

            <p style={{
              fontFamily: "'Inter',sans-serif", fontWeight: 300,
              fontSize: "clamp(0.9rem,1.5vw,0.9375rem)", color: "var(--text-secondary)",
              lineHeight: 1.65, marginBottom: "2rem", maxWidth: "400px",
            }}>{t.hero_sub[lang]}</p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="#work" style={{
                fontFamily: "'Space Mono',monospace", fontSize: "0.5625rem",
                letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "10px 20px", borderRadius: "2px",
                background: "var(--accent)", color: isDark ? "#0D1117" : "#fff",
                textDecoration: "none", fontWeight: 700, transition: "transform 0.15s",
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >{t.hero_cta_work[lang]}</a>

              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: "'Space Mono',monospace", fontSize: "0.5625rem",
                letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "10px 20px", borderRadius: "2px",
                background: "transparent", color: "var(--text-secondary)",
                border: "0.5px solid var(--border-hover)", textDecoration: "none",
                transition: "color 0.2s, border-color 0.2s, transform 0.15s",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border-hover)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >{t.hero_cta_resume[lang]}</a>
            </div>
          </div>


          <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            width: "100%", maxWidth: "380px", margin: "0 auto",
            position: "relative", minHeight: "280px",
          }}>


            <div style={{ opacity: isDark ? 0 : 1, transition: "opacity 0.5s", position: "absolute" }}>
              <PixelMatrixIcon />
            </div>


            

          </div>
        </div>
      </div>

      {/* STATUS BAR */}
      <div style={{
        borderTop: "0.5px solid var(--border)", padding: "7px 1rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontFamily: "'Space Mono',monospace", fontSize: "0.5rem",
        letterSpacing: "0.14em", textTransform: "uppercase",
        color: "var(--text-tertiary)", flexWrap: "wrap", gap: "0.5rem",
        position: "relative", zIndex: 2,
      }}>
        <span>V 1.0 · 2025-PF-RJ</span>
        <span>{isDark ? t.status_dark[lang] : t.status_light[lang]}</span>
        <span>{t.status_loc[lang]}</span>
      </div>

      <style>{`
        @keyframes blobMorph {
          0%   { border-radius: 63% 37% 54% 46%/55% 48% 52% 45%; }
          33%  { border-radius: 40% 60% 37% 63%/48% 60% 40% 52%; }
          66%  { border-radius: 55% 45% 62% 38%/40% 55% 45% 60%; }
          100% { border-radius: 63% 37% 54% 46%/55% 48% 52% 45%; }
        }
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function PixelCluster() {
  return (
    <div style={{ position: "absolute", bottom: "40px", right: "1rem",
      display: "grid", gridTemplateColumns: "repeat(5,7px)", gap: "3px", opacity: 0.2 }}>
      {[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1].map((on, i) => (
        <div key={i} style={{ width: "7px", height: "7px", borderRadius: "1px",
          background: on ? "#8DFFD4" : "transparent",
          border: on ? "none" : "0.5px solid rgba(141,255,212,0.3)" }} />
      ))}
    </div>
  );
}

function PixelMatrixIcon() {
  const grid = [[1,0,1,0,1],[0,1,0,1,0],[1,0,1,0,1],[0,1,0,0,1],[1,0,0,1,0]];
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
      {grid.map((row, ri) => row.map((on, ci) => (
        <rect key={`${ri}-${ci}`} x={70+ci*18} y={70+ri*18} width={12} height={12}
          fill={on ? "rgba(13,122,106,0.3)" : "transparent"}
          stroke="rgba(13,122,106,0.4)" strokeWidth={0.5} />
      )))}
      <line x1="76" y1="162" x2="76" y2="190" stroke="rgba(13,122,106,0.12)" strokeWidth="0.5" strokeDasharray="3 3"/>
      <line x1="148" y1="162" x2="148" y2="180" stroke="rgba(13,122,106,0.12)" strokeWidth="0.5" strokeDasharray="3 3"/>
      <circle cx="76" cy="192" r="2.5" fill="rgba(13,122,106,0.25)"/>
      <circle cx="148" cy="182" r="2.5" fill="rgba(13,122,106,0.18)"/>
      <rect x="62" y="62" width="96" height="96" stroke="rgba(13,122,106,0.15)" strokeWidth="0.5" strokeDasharray="4 4"/>
    </svg>
  );
}


