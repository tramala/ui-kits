import React from "react";
import { IconButton } from "../../components/core/IconButton.jsx";

const Logo = () => (
  <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
    <img src="../../assets/logo-isotipo.svg" alt="" width="30" height="30" />
    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.01em", fontSize: 22, lineHeight: 1 }}>
      <span style={{ color: "var(--hueso-050)" }}>TRAMA</span><span style={{ color: "var(--tierra-500)" }}>LATIERRA</span>
    </span>
  </a>
);

const Menu = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M3 6h18M3 12h18M3 18h18"/></svg>);

/** Barra de navegación superior del sitio del realizador. */
export function SiteHeader({ active = "Obra" }) {
  const links = ["Obra", "Foto", "Sobre", "Contacto"];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px var(--gutter)", background: "color-mix(in oklab, var(--carbon-950) 82%, transparent)", backdropFilter: "blur(10px)", borderBottom: "var(--border-w) solid var(--border)" }}>
      <Logo />
      <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
        {links.map((l) => (
          <a key={l} href="#" style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-sm)", fontWeight: 600, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: l === active ? "var(--tierra-400)" : "var(--text-muted)", borderBottom: l === active ? "2px solid var(--tierra-500)" : "2px solid transparent", paddingBottom: 3 }}>{l}</a>
        ))}
        <span className="tlt-burger" style={{ display: "none" }}><IconButton label="Menú"><Menu/></IconButton></span>
      </nav>
    </header>
  );
}

/** Pie de página con contacto y eslogan. */
export function SiteFooter() {
  return (
    <footer style={{ borderTop: "var(--border-w) solid var(--border)", padding: "var(--space-8) var(--gutter) var(--space-7)", background: "var(--carbon-900)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
        <div>
          <Logo />
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--ocre-400)", marginTop: 16 }}>— inestable acción audiovisual</p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <div>
            <p className="t-label" style={{ marginBottom: 12 }}>Contacto</p>
            <p style={{ color: "var(--text)", margin: "0 0 6px" }}>hola@tramalatierra.com.ar</p>
            <p style={{ color: "var(--text-muted)", margin: 0 }}>Juan Alaimes</p>
          </div>
          <div>
            <p className="t-label" style={{ marginBottom: 12 }}>Redes</p>
            {["Instagram", "Vimeo", "YouTube"].map((s) => (
              <p key={s} style={{ margin: "0 0 6px" }}><a href="#">{s}</a></p>
            ))}
          </div>
        </div>
      </div>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", color: "var(--text-faint)", marginTop: 48 }}>© 2026 TRAMALATIERRA · Realización audiovisual · Diseño · Fotografía</p>
    </footer>
  );
}
