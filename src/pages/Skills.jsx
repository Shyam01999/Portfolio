import React, { useEffect } from "react";
import { backend, devops, frontend, others } from "../constant/skillsData";

function Skills({ setProgress }) {
  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // notifySuccess("Welcome to my portfolio app");
  }, [setProgress]);

  const SkillCard = ({ logo, name }) => (
    <div className="skill">
      <div className="skill-icon">
        <img src={logo} alt={name} />
      </div>
      <span className="skill-name">{name}</span>
    </div>
  );

  // ✅ FIX 3: reusable section renderer
  const SkillSection = ({ title, skills }) => (
    <div className="skill-category">
      <h3 className="category-title">{title}</h3>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillCard key={skill.id} logo={skill.logo} name={skill.name} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/*Skills Section*/}
      <section className="skills-section">
        <div className="container ">
          <div className="common-title-container">
            <h2 className="title">My <span className='section-name'>Skills</span></h2>
            <div className="bottom-line" />
            <p className="sub-tittle">I leverage cutting-edge technologies to transform your ideas into innovative, high-performance web solutions that engage and inspire your customers. 🚀</p>
          </div>
          <div className="cards grid grid-two-cols">
            <SkillSection title="Frontend" skills={frontend} />
            <SkillSection title="Backend" skills={backend} />
            <SkillSection title="Devops" skills={devops} />
            <SkillSection title="Others" skills={others} />
          </div>
        </div>
      </section>
    </>
  );
}

export default React.memo(Skills);
