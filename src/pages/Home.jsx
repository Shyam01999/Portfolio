import React, { useEffect } from "react";
import { notifySuccess } from "../constant/toastAlerts";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profileImage from "../../public/images/profile_image.jpg";
import { useSelector } from "react-redux";
import resume from "../../public/images/Shyam Resume.pdf";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

function Home() {
  const theme = useSelector((state) => state.themeReducer.theme);

  useEffect(() => {
    notifySuccess("Welcome to my portfolio app");
  }, []);

  const designations = [
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "MERN Stack Developer",
    "Full Stack Developer",
  ];

  const [text] = useTypewriter({
    words: designations,
    loop: 0, // Infinite loop
    delaySpeed: 2000,
  });

  return (
    <>
      {/*Home Section*/}
      <section className="hero-section">
        <div className="container grid grid-two-cols">
          <div
            className={`hero-content ${theme === "light" ? "light" : "dark"}`}
          >
            <p className="intro-greet">Hello My name is</p>
            <p className="name">Shyam Sundar Sahoo</p>
            <p className="designation">
              {text}
              <Cursor />
            </p>
            <p className="description">
              A Skilled web developer having 2 years of hands on experience on
              frontend and backend developement who craft captivating user
              experience with code. My passion for innovation drives my quest
              for pixel perfect designs.
            </p>

            <div className="button-container">
              <a
                href="https://wa.me/9337757671"
                target="_blank"
                rel="noopener noreferrer"
                className={`commonBtn ${theme === "light" ? "light" : "dark"}`}
              >
                Let's talk
              </a>
              <a
                href={resume}
                download
                className={`commonBtn ${theme === "light" ? "light" : "dark"}`}
              >
                Download CV
              </a>
            </div>
            <div className="socialmedia-container">
              <a
                href="https://www.facebook.com/login/"
                target="blank"
                className="socialmedia-icon fb"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/?hl=en"
                target="blank"
                className="socialmedia-icon Instagram"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://web.whatsapp.com/"
                target="blank"
                className="socialmedia-icon whatapp"
              >
                <FaWhatsappSquare />
              </a>
              <a
                href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ATuJsjxZG_EXDqxCgE3PA1zIfdLutExmd1dTaT6LdyyBm9isGyhfe58scA1RW-6HTpKuE8TtKQ1oEg&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-133768631%3A1709663265753499&theme=mn"
                target="blank"
                className="socialmedia-icon gmail"
              >
                {/* <IoIosMail /> */}
              </a>
              <a
                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&fromSignIn=true&trk=cold_join_sign_in"
                target="blank"
                className="socialmedia-icon linkedin"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div
              className={`hero-image--cotainer ${
                theme === "light" ? "light" : "dark"
              }`}
            >
              <img src={profileImage} alt="Image not available" width="50%" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
