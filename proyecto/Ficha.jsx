import React from "react";

const CREDITS = [
  ["Dirección", "Juan Alaimes"],
  ["Producción", "TRAMALATIERRA"],
  ["Fotografía", "Juan Alaimes"],
  ["Montaje", "Juan Alaimes"],
  ["Sonido", "—"],
  ["Año", "2024"],
  ["Duración", "78 min"],
  ["Formato", "Digital · 4K · color"],
];

/** Sinopsis editorial + ficha técnica en mono. */
export function Ficha() {
  return (
    <section style={{ padding: "var(--space-7) var(--gutter) var(--space-9)" }}>
      <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1.6fr) minmax(0,1fr)", gap: "var(--space-8)" }}>
        <div>
          <p className="t-label" style={{ marginBottom: 14 }}>Sinopsis</p>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", lineHeight: "var(--leading-snug)", color: "var(--text-strong)", marginBottom: 20 }}>
            En el límite entre el monte y la frontera agrícola, las comunidades disputan el sentido de la tierra.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            Filmada a lo largo de tres años, la película sigue el pulso de un territorio que cambia de color con cada cosecha. Las voces no explican: acompañan. La cámara se queda donde otros pasan de largo.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            Un trabajo sobre la memoria de las luchas y la obstinación de seguir habitando lo que se intenta borrar.
          </p>
        </div>
        <div>
          <p className="t-label" style={{ marginBottom: 14 }}>Ficha técnica</p>
          <dl style={{ margin: 0 }}>
            {CREDITS.map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "10px 0", borderBottom: "var(--border-w) solid var(--border-faint)" }}>
                <dt style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-faint)" }}>{k}</dt>
                <dd style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text)", textAlign: "right" }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/** Galería de fotogramas (placeholders duotono). */
export function Stills() {
  const grads = [
    "linear-gradient(150deg,#9a3818,#2e251b)",
    "linear-gradient(150deg,#2c4244,#15110c)",
    "linear-gradient(150deg,#2f3a24,#15110c)",
    "linear-gradient(150deg,#a9712a,#211a13)",
  ];
  return (
    <section style={{ padding: "0 var(--gutter) var(--space-9)" }}>
      <div style={{ maxWidth: "var(--container-lg)", margin: "0 auto" }}>
        <p className="t-label" style={{ marginBottom: 18 }}>Fotogramas</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: "var(--space-4)" }}>
          {grads.map((g, i) => (
            <div key={i} className="grain" style={{ aspectRatio: "16 / 9", borderRadius: "var(--radius-sm)", background: g, filter: "var(--img-warm)", border: "var(--border-w) solid var(--border)" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
