import { useEffect, useState } from "react";
import "./App.css";
import "./styles/style.css";
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
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  const theme = useSelector((state) => state.themeReducer.theme);
  const [themecolor, setThemeColor] = useState(theme)

  useEffect(() => {
    document.body.className = theme;
    setThemeColor(theme === "light" ? "var(--brand-color)" : "var(--menu-color)");
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <LoadingBar
          color={themecolor}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<Header setProgress={setProgress} />}>
            <Route path="/" element={<Home setProgress={setProgress} />} />
            <Route path="home" element={<Home setProgress={setProgress} />} />
            <Route path="about" element={<About setProgress={setProgress} />} />
            <Route path="skills" element={<Skills setProgress={setProgress} />}/>
            <Route path="projects" element={<Projects setProgress={setProgress} />} />
            <Route path="services" element={<Services setProgress={setProgress} />}/>
            <Route path="contact" element={<Contact setProgress={setProgress} />}
            />
            <Route path="*" element={<NotFound setProgress={setProgress} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
