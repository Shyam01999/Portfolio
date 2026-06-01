import React from 'react'
import { educationData } from '../constant/educationData';

function Education() {
  return (
    <section id="education" className='education-section'>
      <div className='container'>

        <div className="common-title-container">
          <h2 className="title" >My <span className='section-name'>Education</span></h2>
          <div className="bottom-line" />
        </div>

        <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
          <div style={{
            position: "absolute", 
            left: "50%", 
            top: 0, 
            bottom: 0,
            width:2, 
            background: "rgba(0,212,255,0.3)",
            transform: "translateX(-50%)"
          }} />

          {educationData.map((item, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: i % 2 === 0 ? "flex-end" : "flex-start",
              paddingRight: i % 2 === 0 ? "calc(50% + 32px)" : 0,
              paddingLeft: i % 2 !== 0 ? "calc(50% + 32px)" : 0,
              marginBottom: "2.5rem",
              position: "relative",
            }}>
              <div style={{
                position: "absolute", 
                left: "50%", 
                top: 22,
                width: 14, 
                height: 14, 
                background: "#00d4ff",
                borderRadius: "50%", 
                transform: "translateX(-50%)",
                border: "2px solid #0d1b2e", 
                boxShadow: "0 0 0 3px rgba(0,212,255,0.25)"
              }} />
              <div style={{
                background: "#162032", border: "1px solid rgba(0,212,255,0.18)",
                borderRadius: 12, padding: "1.2rem 1.4rem", maxWidth: 500, width: "100%"
              }}>
                <div style={{ fontSize: 12, color: "#00d4ff", fontWeight: 600, marginBottom: 6 }}>{item.year}</div>
                <h3 style={{ color: "#fff", fontSize: 15, margin: "0 0 4px" }}>{item.degree}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8 }}>{item.institute}</p>
                <span style={{
                  background: "rgba(0,212,255,0.12)", color: "#00d4ff",
                  fontSize: 11, padding: "3px 10px", borderRadius: 20,
                  border: "1px solid rgba(0,212,255,0.25)"
                }}>{item.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}

export default Education