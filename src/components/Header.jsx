import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_THEME } from "../redux/actionTypes/theme.actionTypes";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

function Header({ setProgress }) {
  const theme = useSelector((state) => state.themeReducer.theme);

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
    // notifySuccess("Welcome to my portfolio app");
  }, [setProgress]);

  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const dispatch = useDispatch();
  const routes = [

    {
      path: "about",
      name: "About",
    },
    {
      path: "skills",
      name: "Skills",
    },
    {
      path: "projects",
      name: "Projects",
    },
    {
      path: "services",
      name: "Services",
    },
    {
      path: "education",
      name: "Education",
    },
    {
      path: "contact",
      name: "Contact",
    },
  ];

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const scrollTo = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState({}, "", `#${id}`);
      setActiveSection(id);
    }

    setMenu(false);
  };


  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     {
  //       threshold: 0.6,
  //     }
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   return () => observer.disconnect();
  // }, []);


  return (
    <>
      <header className={`header ${theme === "light" ? "light" : "dark"}`}>
        <div className="container section-header">
          <div className={`logo-brand ${theme === "light" ? "light" : "dark"}`}>
            <NavLink to="/">
              <h2>
                Shyam <span>Sundar Sahoo</span>
              </h2>
            </NavLink>
          </div>
          <div className={`nav-container`}>
            <nav>
              <ul className={`navbar ${theme === "light" ? "light" : "dark"}`}>
                {routes.map((item, index) => {
                  return (
                    // <li key={index}>
                    //   <NavLink to={item.path}>{item.name}</NavLink>
                    // </li>

                    <li key={index}>
                      <a
                        onClick={() => scrollTo(item.path)}
                        className={activeSection === item.path ? "active" : ""}
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div
              className={`mode-container ${theme === "light" ? "light" : "dark"
                }`}
            >
              <span className="menu-icon" onClick={toggleMenu}>
                <LuMenu />
              </span>
              {menu && (
                <div
                  className={`menu-container ${theme === "light" ? "light" : "dark"
                    }`}
                >
                  <div>
                    <span className="cross-icon" onClick={toggleMenu}>
                      <RxCross2 />
                    </span>
                  </div>
                  <div>
                    <ul
                      className={`menu-navbar ${theme === "light" ? "light" : "dark"
                        }`}
                    >
                      {routes.map((item, index) => {
                        return (
                          // <li key={index}>
                          //   <NavLink to={item.path}>{item.name}</NavLink>
                          // </li>

                          <li key={index}>
                            <a
                              onClick={() => scrollTo(item.path)}
                              className={activeSection === item.path ? "active" : ""}
                            >
                              {item.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
              <span onClick={toggleTheme} className="sun-icon">
                {theme === "light" ? <IoMoon /> : <IoIosSunny />}
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
