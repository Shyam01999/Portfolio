import React, { useEffect } from "react";

function Projects({ setProgress }) {

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // notifySuccess("Welcome to my portfolio app");
  }, [setProgress]);

  const projects = [
    { title: "E-Commerce Platform", desc: "Full-stack shopping app with cart, payments, admin dashboard and JWT auth.", tech: ["React", "Node.js", "MongoDB", "Stripe"], color: "#00d4ff", featured: true, demo: "#", github: "#" },
    { title: "Real-Time Chat App", desc: "Socket.io powered chat with rooms, online indicators and notifications.", tech: ["React", "Socket.io", "Express"], color: "#a78bfa", featured: false, demo: "#", github: "#" },
    { title: "Task Management App", desc: "Kanban-style tracker with drag-and-drop, deadlines and team features.", tech: ["React", "PostgreSQL", "REST API"], color: "#34d399", featured: false, demo: "#", github: "#" },
  ];

  return (
    <section id="projects" style={{ background: "#0d1b2e", padding: "3.5rem 2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2.8rem" }}>
        <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "#fff" }}>
          My <span style={{ color: "#00d4ff" }}>Projects</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 8 }}>Things I've built that I'm proud of</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18, maxWidth: 760, margin: "0 auto" }}>
        {projects.map((p, i) => (
          <div key={i} style={{ background: "#111f35", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ height: 120, background: "#0a2540", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              {p.featured && <span style={{ position: "absolute", top: 10, left: 10, background: "#00d4ff", color: "#0b1628", fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 20 }}>Featured</span>}
              <div style={{ fontSize: 40, opacity: 0.5, color: p.color }}>📁</div>
            </div>
            <div style={{ padding: "1.1rem 1.2rem" }}>
              <h3 style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginBottom: 5 }}>{p.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.42)", fontSize: 12, lineHeight: 1.6, marginBottom: 10 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 10 }}>
                {p.tech.map(t => <span key={t} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: `${p.color}0d`, color: p.color, border: `1px solid ${p.color}2a`, fontWeight: 600 }}>{t}</span>)}
              </div>
              <div style={{ display: "flex", gap: 12, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 10 }}>
                <a href={p.demo} style={{ color: "#00d4ff", fontSize: 12, fontWeight: 600, textDecoration: "none" }}>Live Demo ↗</a>
                <a href={p.github} style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, fontWeight: 600, textDecoration: "none" }}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button style={{ background: "transparent", border: "1px solid #00d4ff", color: "#00d4ff", borderRadius: 8, padding: "10px 28px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>View All Projects →</button>
      </div>
    </section>
  );
}

export default Projects;

