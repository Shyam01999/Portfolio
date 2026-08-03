import React, { useEffect } from "react";

function Services({ setProgress }) {
  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // notifySuccess("Welcome to my portfolio app");
  }, [setProgress]);

  const services = [
    { title: "Frontend Development", desc: "Pixel-perfect, responsive UIs built with React, animations, and clean component architecture.", tags: ["React", "Tailwind", "Framer"], icon: "🖥️", color: "#00d4ff" },
    { title: "Backend Development", desc: "Robust REST APIs, authentication and scalable server-side solutions with Node & Express.", tags: ["Node.js", "Express", "MongoDB"], icon: "⚙️", color: "#a78bfa" },
    { title: "Full Stack Apps", desc: "End-to-end web apps using MERN/PERN — from database design to deployment.", tags: ["MERN", "PostgreSQL", "Docker"], icon: "🔗", color: "#34d399" },
    { title: "UI/UX Design", desc: "Clean, user-centric designs and prototypes balancing aesthetics with usability.", tags: ["Figma", "Wireframes", "Prototypes"], icon: "🎨", color: "#f97316" },
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="common-title-container" >
          <h2 className="title">My <span className='section-name'>Services</span></h2>
          <div className="bottom-line" />
          <p className="sub-tittle">What I bring to the table for your next project</p>
        </div>
        <div className="cards grid grid-three-cols">
          {services.map((s, i) => (
            <div key={i} style={{ background: "#111f35", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "1.4rem", position: "relative", overflow: "hidden", borderBottom: `2px solid ${s.color}` }}>
              <span style={{ position: "absolute", top: 10, right: 14, fontSize: 42, fontWeight: 900, color: "rgba(255,255,255,0.03)" }}>0{i + 1}</span>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: `${s.color}1a`, border: `1px solid ${s.color}33`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 14 }}>{s.icon}</div>
              <h3 style={{ color: "#fff", fontSize: 15, fontWeight: 700, marginBottom: 7 }}>{s.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 12, lineHeight: 1.7, marginBottom: 12 }}>{s.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.tags.map(t => (
                  <span key={t} style={{ fontSize: 11, padding: "3px 9px", borderRadius: 20, background: `${s.color}1a`, color: s.color, border: `1px solid ${s.color}33`, fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

}

export default Services;


