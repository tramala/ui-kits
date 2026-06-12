import React from "react";
import { Badge } from "../../components/core/Badge.jsx";
import { IconButton } from "../../components/core/IconButton.jsx";
import { Button } from "../../components/core/Button.jsx";

const Play = () => (<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>);
const Sound = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5zM16 9a4 4 0 010 6"/></svg>);
const Full = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6"/></svg>);

/** Reproductor del documental: fotograma + controles de video. */
export function PlayerHero({ onPlay }) {
  return (
    <section style={{ padding: "var(--space-8) var(--gutter) var(--space-6)" }}>
      <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 18, alignItems: "center" }}>
          <Badge tone="tierra">Documental</Badge>
          <Badge tone="ocre" outline>2024</Badge>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-faint)" }}>78 min · 16:9 · color</span>
        </div>
        <h1 style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)", margin: "0 0 28px" }}>Roja tierra nuestra</h1>

        <div className="grain" style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: "var(--radius-md)", overflow: "hidden", border: "var(--border-w) solid var(--border-strong)", background: "linear-gradient(155deg,#9a3818,#2e251b 60%,#0e0b08)" }}>
          <div style={{ position: "absolute", inset: 0, filter: "var(--img-warm)", background: "radial-gradient(110% 80% at 65% 25%, #c98a3c, transparent 50%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
            <button onClick={onPlay} aria-label="Reproducir" style={{ width: 88, height: 88, borderRadius: "var(--radius-pill)", border: "var(--border-w-2) solid #fff", background: "color-mix(in oklab, var(--tierra-500) 70%, transparent)", color: "#fff", display: "grid", placeItems: "center", cursor: "pointer", backdropFilter: "blur(2px)" }}>
              <Play />
            </button>
          </div>
          {/* barra de control */}
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "20px 18px 14px", background: "linear-gradient(to top, var(--carbon-950), transparent)", display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ color: "#fff", display: "inline-flex" }}><IconButton label="Reproducir" variant="ghost" style={{ color: "#fff" }}><Play/></IconButton></span>
            <div style={{ flex: 1, height: 4, borderRadius: 2, background: "color-mix(in oklab, #fff 25%, transparent)", position: "relative" }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "22%", background: "var(--tierra-500)", borderRadius: 2 }} />
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#fff" }}>00:17:04 / 01:18:22</span>
            <span style={{ color: "#fff" }}><IconButton label="Sonido" variant="ghost" style={{ color: "#fff" }}><Sound/></IconButton></span>
            <span style={{ color: "#fff" }}><IconButton label="Pantalla completa" variant="ghost" style={{ color: "#fff" }}><Full/></IconButton></span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
          <Button variant="primary" leftIcon={<Play/>} onClick={onPlay}>Ver completo</Button>
          <Button variant="outline">Descargar prensa</Button>
        </div>
      </div>
    </section>
  );
}
