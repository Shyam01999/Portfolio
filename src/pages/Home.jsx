import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profileImage from "../../public/images/Shyam_Photo_3.png";
import { useSelector } from "react-redux";
import resume from "../../public/documents/Shyam_Software_Developer_4+YOE_Resume.pdf";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
// import { FaFacebook, FaInstagramSquare, FaWhatsappSquare, FaLinkedin } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";

function Home({ setProgress }) {
  const theme = useSelector((state) => state.themeReducer.theme);

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // notifySuccess("Welcome to my portfolio app");
  }, [setProgress]);

  const designations = [
    "Web Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "MERN Stack Engineer",
    "PERN Stack Engineer",
    "Full Stack Developer",
    "DevOps Engineer"
  ];

  const summary = `A passionate Full Stack Engineer with 4+ years of experience building end-to-end web applications using the MERN & PERN stack. I specialize in developing robust backends, intuitive frontends, and turning complex problems into clean, efficient solutions.`;

  const socialLinks = [
    {
      id: 1,
      href: "https://www.facebook.com/shyamsundar.sahoo.161?rdid=9Elh1TLUCTjeWbqv&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DppWWXNqn%2F#",
      icon: <FaFacebook />,
      className: "fb",
    },
    {
      id: 2,
      href: "https://www.instagram.com/shyam_sundar.08/",
      icon: <FaInstagramSquare />,
      className: "instagram",
    },
    {
      id: 3,
      href: "https://wa.me/919337757671",
      icon: <FaWhatsappSquare />,
      className: "whatsapp",
    },
    {
      id: 4,
      href: "mailto:shyamsundarsahooo1998@gmail.com",
      icon: <IoIosMail />,
      className: "gmail",
    },
    {
      id: 5,
      href: "https://www.linkedin.com/in/shyamsundarsahoo/",
      icon: <FaLinkedin />,
      className: "linkedin",
    },
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
          <div className={`hero-content ${theme === "light" ? "light" : "dark"}`} >
            <p className="intro-greet">Hello My name is</p>
            <p className="name">Shyam Sundar Sahoo</p>
            <p className="designation">
              {text}
              <Cursor />
            </p>
            <p className="description">
              {summary}
            </p>

            <div className="button-container">
              <a
                href="https://wa.me/919337757671"
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
              {/* <a
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
               
              </a>
              <a
                href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&fromSignIn=true&trk=cold_join_sign_in"
                target="blank"
                className="socialmedia-icon linkedin"
              >
                <FaLinkedin />
              </a> */}

              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`socialmedia-icon ${social.className}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="hero-image">
            <div
              className={`hero-image--cotainer ${theme === "light" ? "light" : "dark"
                }`}
            >
              <img src={profileImage} alt="Image not available" width="50%" />
            </div>
          </div>
        </div>
      </section >
    </>
  );
}

export default Home;
