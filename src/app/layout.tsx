import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/nav/Navbar";

export const metadata: Metadata = {
  title: "Pedro de Freitas",
  description: "Portfolio de Pedro Freitas. Dev fullstack · AI optimization · Graphic design · Rio de Janeiro",
  openGraph: {
    title: "Pedro Freitas",
    description: "Dev fullstack · AI optimization · Graphic design · Rio de Janeiro",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
    
    <script dangerouslySetInnerHTML={{ __html: `
      (function() {
        try {
          var saved = localStorage.getItem('pf-theme');
          var theme = saved || 'light';
          if (theme === 'light') {
            document.documentElement.classList.add('light');
          }
        } catch(e) {}
      })();
    `}} />
  </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
