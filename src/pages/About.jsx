import React, { useEffect } from "react";
import profileImage from "../../public/images/profile_image.jpg";
import { useSelector } from "react-redux";

function About({ setProgress }) {
  const theme = useSelector((state) => state.themeReducer.theme);

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // notifySuccess("Welcome to my portfolio app");
  }, [setProgress]);

  return (
    <section className="about-section">
      <div className="container grid grid-two-cols">
        <div className="hero-image">
          <div
            className={`hero-image--cotainer ${
              theme === "light" ? "light" : "dark"
            }`}
          >
            <img src={profileImage} alt="Image not available" width="50%" />
          </div>
        </div>
        <div
          className={`about-content ${theme === "light" ? "light" : "dark"}`}
        >
          <h2 className="title">About Me</h2>
          <p className="description">
            Dedicated web developer with a creative flair for developing
            interactive and virtually appealing websites committed to delivering
            exceptional user experience through innovative and cutting edge
            technology. I have a diverse background in web development, working
            with various technologies and frameworks to build high-quality,
            user-friendly websites and applications.
          </p>
          <ul className="listitem">
            <li>
              1. Develop and maintain web applications using the MERN stack
            </li>
            <li>
              2. Collaborate with cross-functional teams to define, design, and
              innovate new features.
            </li>
            <li>3. Write efficient, reusable, and testable code.</li>
            <li>
              4. Crafting websites, with top-notch optimization and responsive
              across multiple screens.
            </li>
            <li>
              5. Stay up-to-date with industry best practices and technologies.
            </li>
          </ul>
          <div className="button-container">
            <a
              href="https://wa.me/9337757671"
              target="_blank"
              rel="noopener noreferrer"
              className={`commonBtn ${theme === "light" ? "light" : "dark"}`}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
