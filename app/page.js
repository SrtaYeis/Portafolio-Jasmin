"use client";
import { useState, useEffect, useCallback } from "react";
import { perfil, sobreMi, proyectos, skills, blandas, datos, contacto } from "../data/content";

// ── Carrusel de imágenes por proyecto ──────────────────────────────────────
function ProjectCarousel({ imagenes, nombre, color }) {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState(null); // "left" | "right"
  const total = imagenes.length;

  const go = useCallback(
    (dir) => {
      setAnimDir(dir);
      setCurrent((c) => (dir === "right" ? (c + 1) % total : (c - 1 + total) % total));
    },
    [total]
  );

  // Auto-advance each 4 s
  useEffect(() => {
    if (total <= 1) return;
    const t = setInterval(() => go("right"), 4000);
    return () => clearInterval(t);
  }, [go, total]);

  return (
    <div className="carousel">
      <div className="carousel-track" style={{ "--color": color }}>
        <img
          key={current}
          src={imagenes[current]}
          alt={`Captura ${current + 1} de ${nombre}`}
          className={`carousel-img ${animDir ? "slide-in-" + animDir : ""}`}
        />
      </div>

      {total > 1 && (
        <>
          <button
            className="car-btn car-btn-left"
            aria-label="Imagen anterior"
            onClick={() => go("left")}
          >
            ‹
          </button>
          <button
            className="car-btn car-btn-right"
            aria-label="Imagen siguiente"
            onClick={() => go("right")}
          >
            ›
          </button>
          <div className="car-dots">
            {imagenes.map((_, i) => (
              <button
                key={i}
                className={`car-dot ${i === current ? "active" : ""}`}
                aria-label={`Ir a imagen ${i + 1}`}
                onClick={() => {
                  setAnimDir(i > current ? "right" : "left");
                  setCurrent(i);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── Página principal ────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">{perfil.corto}</a>
        <nav>
          <a href="#proyectos">Proyectos</a>
          <a href="#skills">Skills</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main id="top">
        {/* ── Hero with background blobs ── */}
        <div className="hero-wrapper">
          {/* Blobs */}
          <div className="blob blob-1" aria-hidden="true" />
          <div className="blob blob-2" aria-hidden="true" />
          <div className="blob blob-3" aria-hidden="true" />
          <div className="blob blob-4" aria-hidden="true" />
          {/* Geometric shapes */}
          <div className="deco-shapes" aria-hidden="true">
            <div className="deco-circle deco-circle-1" />
            <div className="deco-circle deco-circle-2" />
            <div className="deco-circle deco-circle-3" />
            <div className="deco-sq deco-sq-1" />
            <div className="deco-sq deco-sq-2" />
          </div>

          <section className="hero">
            <div className="hero-text">
              <p className="role">{perfil.rol}</p>
              <h1>{perfil.titular}</h1>
              <p className="lead">{sobreMi}</p>
              <div className="cta">
                <a className="btn btn-main" href="#proyectos">Ver mis proyectos</a>
                <a className="btn" href="#contacto">Contáctame</a>
              </div>
            </div>
            <div className="hero-photo">
              <img src={perfil.foto} alt={`Foto de ${perfil.corto}`} />
              <div className="badge" aria-hidden="true">Disponible para prácticas</div>
            </div>
          </section>
        </div>

        {/* ── Marquee ── */}
        <div className="marquee" aria-hidden="true">
          <div>{[0, 1].map((k) => <span key={k}>Java ✺ C# ✺ Python ✺ Scrum ✺ Vue.js ✺ Flutter ✺ .NET ✺ SQL ✺ C++ ✺ </span>)}</div>
        </div>

        {/* ── Proyectos ── */}
        <div className="section-wrap">
        <section id="proyectos" className="section">
          <h2>Proyectos destacados</h2>
          <div className="projects">
            {proyectos.map((p, i) => (
              <article
                key={p.nombre}
                className={`project ${i % 2 ? "flip" : ""}`}
                style={{ "--c": p.color }}
              >
                <div className="project-img">
                  <ProjectCarousel
                    imagenes={p.imagenes || (p.imagen ? [p.imagen] : ["/proyecto.svg"])}
                    nombre={p.nombre}
                    color={p.color}
                  />
                </div>
                <div className="project-body">
                  <h3>{p.nombre}</h3>
                  <p className="tipo">{p.tipo}</p>
                  <p>{p.descripcion}</p>
                  <p><strong>Mi aporte:</strong> {p.logro}</p>
                  <ul className="tags">{p.tecnologias.map((t) => <li key={t}>{t}</li>)}</ul>
                  {p.enlace && <a className="btn" href={p.enlace} target="_blank" rel="noreferrer">Ver proyecto</a>}
                </div>
              </article>
            ))}
          </div>
        </section>
        </div>

        {/* ── Skills ── */}
        {/* Íconos por categoría — ajusta si agregas más grupos en content.js */}
        <div className="section-wrap">
        <section id="skills" className="section">
          <h2>Conocimientos técnicos</h2>
          <div className="skills">
            {skills.map((g, i) => {
              const icons = ["🖥️", "🌐", "🗄️", "🚀", "⚙️"];
              return (
                <div key={g.titulo} className="skill-group" style={{ "--c": g.color }}>
                  <div className="skill-head">
                    <span className="skill-icon">{icons[i] ?? "✦"}</span>
                    <div className="skill-head-text">
                      <h3>{g.titulo}</h3>
                      <span className="skill-count">{g.items.length} habilidades</span>
                    </div>
                  </div>
                  <ul>
                    {g.items.map((s) => (
                      <li key={s} style={{ "--c": g.color }}>{s}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
        </div>

        {/* ── Blandas ── */}
        <div className="section-wrap">
        <section className="section soft">
          <h2>Habilidades interpersonales</h2>
          <div className="soft-inner">
            <div className="soft-left">
              <ul className="stickers">{blandas.map((b) => <li key={b}>{b}</li>)}</ul>
              <div className="facts">
                <div><h3>Educación</h3><p><strong>{datos.educacion.titulo}</strong><br />{datos.educacion.detalle}</p></div>
                <div><h3>Idiomas</h3><p>{datos.idiomas.map((l) => <span key={l.nombre}><strong>{l.nombre}</strong>: {l.nivel}<br /></span>)}</p></div>
              </div>
            </div>
            <div className="soft-photo">
              <img src="/assets/trabajo en grupo.png" alt="Trabajo en equipo" />
            </div>
          </div>
        </section>
        </div>

        {/* ── Contacto ── */}
        <div className="section-wrap">
        <section id="contacto" className="section contact">
          <h2>Conversemos</h2>
          <p className="lead">Estoy abierta a oportunidades de prácticas y colaboración profesional.</p>
          <a className="mail" href={`mailto:${contacto.correo}`}>{contacto.correo}</a>
          <p className="links">
            <a href={`tel:${contacto.telefono.replace(/\s/g, "")}`}>{contacto.telefono}</a>
            <a href={contacto.github} target="_blank" rel="noreferrer">GitHub</a>
            <span>{contacto.ubicacion}</span>
          </p>
        </section>
        </div>
      </main>

      <footer className="foot">© {new Date().getFullYear()} {perfil.nombre}</footer>
    </>
  );
}
