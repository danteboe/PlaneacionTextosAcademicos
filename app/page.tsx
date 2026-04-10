"use client";

import { useEffect, useMemo, useState } from "react";
import { slides } from "./slides";

export default function Home() {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const current = slides[index];
  const phase = index < 2 ? "Exploración" : index < 8 ? "Concepto" : index < 14 ? "Desarrollo" : "Cierre";

  const progress = useMemo(() => ((index + 1) / total) * 100, [index, total]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        setIndex((prev) => Math.min(prev + 1, total - 1));
      }
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        setIndex((prev) => Math.max(prev - 1, 0));
      }
      if (event.key === "Home") {
        setIndex(0);
      }
      if (event.key === "End") {
        setIndex(total - 1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [total]);

  return (
    <main className="deck-shell" data-phase={phase.toLowerCase()}>
      <div className="noise" />
      <section className="slide-card" role="region" aria-live="polite">
        <header className="slide-head">
          <div className="tag">Planeación textual</div>
          <div className="phase-chip">{phase}</div>
          <div className="counter">
            {index + 1}/{total}
          </div>
        </header>

        <div className="title-block">
          <h1>{current.title}</h1>
          {current.subtitle ? <h2>{current.subtitle}</h2> : null}
          {current.visual ? <div className="visual-hint">{current.visual}</div> : null}
        </div>

        <div className="content-grid">
          {current.bullets ? (
            <section className="panel panel-bullets">
              <h3>Ideas clave</h3>
              <ul>
                {current.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {current.code ? (
            <section className="panel panel-code">
              <h3>Ejemplo</h3>
              <pre><code>{current.code}</code></pre>
            </section>
          ) : null}

          {current.timeline ? (
            <section className="panel panel-timeline">
              <h3>Secuencia</h3>
              <div className="timeline">
                {current.timeline.map((block) => (
                  <article key={`${block.time}-${block.activity}`}>
                    <p className="time">{block.time}</p>
                    <p>{block.activity}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

        </div>


        <footer className="controls">
          <button onClick={() => setIndex((prev) => Math.max(prev - 1, 0))} disabled={index === 0}>
            Anterior
          </button>
          <button onClick={() => setIndex((prev) => Math.min(prev + 1, total - 1))} disabled={index === total - 1}>
            Siguiente
          </button>
        </footer>
      </section>

      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <p className="kbd-hint">Navega con flechas izquierda/derecha o teclas A/D</p>
    </main>
  );
}
