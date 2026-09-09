import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./UI/Navbar";
import { Hero } from "./UI/Hero";
import About from "./UI/About";
import Skills from "./UI/Skills";
import Experience from "./UI/Experience";
import Contact from "./UI/Contact";
import Footer from "./UI/Footer";

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 scroll-smooth">
      <div className="bg-cover bg-center min-w-full">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
      </div>

      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
