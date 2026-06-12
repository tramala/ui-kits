import React from "react";
import { Badge } from "../../components/core/Badge.jsx";
import { Button } from "../../components/core/Button.jsx";

const Play = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>);

/**
 * Hero de portada a sangre: foto (placeholder duotono), scrim,
 * titular de afiche y obra destacada.
 */
export function Hero() {
  return (
    <section className="grain" style={{ position: "relative", minHeight: "78vh", display: "flex", alignItems: "flex-end", overflow: "hidden", borderBottom: "var(--border-w) solid var(--border)" }}>
      {/* placeholder de imagen — reemplazar por fotograma real */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 70% 10%, #c98a3c 0%, transparent 45%), linear-gradient(155deg, #7c2c12 0%, #2e251b 55%, #0e0b08 100%)", filter: "var(--img-warm)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--carbon-950) 4%, transparent 55%), linear-gradient(to right, var(--scrim-soft), transparent 60%)" }} />
      <div style={{ position: "relative", padding: "var(--gutter)", paddingBottom: "var(--space-8)", maxWidth: 980 }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
          <Badge tone="tierra">Documental</Badge>
          <Badge tone="ocre" outline>2024 · 78 min</Badge>
        </div>
        <h1 style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)", margin: 0, color: "#fff", maxWidth: "14ch" }}>Roja tierra nuestra</h1>
        <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "var(--text-xl)", color: "var(--hueso-050)", maxWidth: "42ch", marginTop: 20 }}>
          Un territorio que se camina, se filma y se vuelve a contar. La imagen como forma de estar presente.
        </p>
        <div style={{ display: "flex", gap: 14, marginTop: 32, alignItems: "center", flexWrap: "wrap" }}>
          <Button variant="primary" size="lg" leftIcon={<Play/>}>Ver tráiler</Button>
          <Button variant="outline" size="lg">Ficha del proyecto</Button>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--ocre-300)" }}>00:00 / 02:14</span>
        </div>
      </div>
    </section>
  );
}
