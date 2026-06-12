import React from "react";
import { Card } from "../../components/core/Card.jsx";
import { Badge } from "../../components/core/Badge.jsx";
import { Tag } from "../../components/core/Tag.jsx";

const PROJECTS = [
  { t: "Roja tierra nuestra", year: "2024", kind: "Documental", tema: "tierra", min: "78 min", grad: "linear-gradient(150deg,#9a3818,#2e251b)" },
  { t: "Las evidencias del agua", year: "2023", kind: "Documental", tema: "agua", min: "64 min", grad: "linear-gradient(150deg,#2c4244,#15110c)" },
  { t: "El monte que marcha", year: "2022", kind: "Documental", tema: "monte", min: "52 min", grad: "linear-gradient(150deg,#2f3a24,#15110c)" },
  { t: "Escuelas fumigadas", year: "2021", kind: "Investigación", tema: "tierra", min: "41 min", grad: "linear-gradient(150deg,#a9712a,#2e251b)" },
  { t: "24 · Nora", year: "2020", kind: "Retrato", tema: "lucha", min: "33 min", grad: "linear-gradient(150deg,#7c2c12,#0e0b08)" },
  { t: "Cuaderno de campo", year: "2019", kind: "Fotografía", tema: "foto", min: "Serie", grad: "linear-gradient(150deg,#4d6b6e,#211a13)" },
];

const TEMAS = ["todos", "tierra", "agua", "monte", "lucha", "foto"];
const toneFor = { tierra: "tierra", agua: "agua", monte: "monte", lucha: "danger", foto: "ocre" };

function ProjectCard({ p }) {
  return (
    <Card interactive as="a" href="#" style={{ textDecoration: "none", display: "block" }}>
      <div className="grain" style={{ position: "relative", aspectRatio: "4 / 3", background: p.grad }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, var(--scrim), transparent 55%)" }} />
        <div style={{ position: "absolute", left: 14, top: 14 }}><Badge tone={toneFor[p.tema]}>{p.kind}</Badge></div>
        <div style={{ position: "absolute", left: 16, bottom: 14, fontFamily: "var(--font-mono)", fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--hueso-050)" }}>{p.year} · {p.min}</div>
      </div>
      <div style={{ padding: "var(--space-5)" }}>
        <h4 style={{ margin: 0, color: "var(--text-strong)" }}>{p.t}</h4>
      </div>
    </Card>
  );
}

/** Grilla de obra filtrable por tema. */
export function WorkGrid() {
  const [tema, setTema] = React.useState("todos");
  const shown = tema === "todos" ? PROJECTS : PROJECTS.filter((p) => p.tema === tema);
  return (
    <section style={{ padding: "var(--space-9) var(--gutter)" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 36 }}>
        <div>
          <p className="t-label" style={{ marginBottom: 12 }}>Obra · 2019–2024</p>
          <h2 style={{ margin: 0 }}>Filmografía</h2>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {TEMAS.map((t) => (
            <Tag key={t} active={tema === t} onClick={() => setTema(t)}>{t}</Tag>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--space-6)" }}>
        {shown.map((p) => <ProjectCard key={p.t} p={p} />)}
      </div>
    </section>
  );
}
