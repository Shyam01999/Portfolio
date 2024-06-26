import { useEffect, useState } from "react";
import "./App.css";
import "./styles/layout.css";
import "./styles/module.css";
import "./styles/theme.css";
import "./styles/states.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Services from "./pages/Services";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.themeReducer.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="projects" element={<Projects />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
