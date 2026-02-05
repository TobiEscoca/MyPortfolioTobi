import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faReact, faNodeJs, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faBolt, faServer, faCloud, faWind, faBox, faLink, faBroom } from '@fortawesome/free-solid-svg-icons';

const tabs = [
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks/Libraries" },
  { id: "cloud", label: "Cloud/DevOps" },
  { id: "concepts", label: "Concepts" },
];

const itemsByTab = {
  languages: [
    { label: "C", icon: faCode },
    { label: "Python", icon: faPython },
    { label: "JavaScript", icon: faJs },
  ],
  frameworks: [
    { label: "React", icon: faReact },
    { label: "Vite", icon: faBolt },
    { label: "Node.js", icon: faNodeJs },
    { label: "Express", icon: faServer },
    { label: "TailwindCSS", icon: faWind },
  ],
  cloud: [
    { label: "Netlify", icon: faCloud },
    { label: "GitHub Actions", icon: faGithubAlt },
    { label: "Vercel", icon: faBolt },
  ],
  concepts: [
    { label: "Clean Code", icon: faBroom },
    { label: "REST APIs", icon: faLink },
    { label: "OOP", icon: faBox },
  ],
};

function Pill({ children, className = "", icon }) {
  return (
    <span
      className={`px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white shadow hover:bg-white/10 transition-all duration-200 flex items-center gap-2 ${className}`}
    >
      {icon && <FontAwesomeIcon icon={icon} className="w-4 h-4" />}
      {children}
    </span>
  );
}

export default function Skills() {
  const [active, setActive] = useState("languages");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [animateWave, setAnimateWave] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Reinicia y dispara la animación en cada cambio de pestaña
  useEffect(() => {
    if (!visible) return;
    setAnimateWave(false);
    const id = setTimeout(() => setAnimateWave(true), 50);
    return () => clearTimeout(id);
  }, [active, visible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-gradient-to-r from-indigo-700 to-blue-700 w-full py-20 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center">
          Technical Skills
        </h2>
        <p className="text-center text-white/70 mt-2">
          My experience in different kind of technologies and languages
        </p>

        <div className="mt-8 flex flex-wrap gap-3 items-center justify-center">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-200 ${
                active === t.id
                  ? "bg-white/15 border-white/30"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <div className="rounded-3xl bg-black/40 border border-white/10 p-6 backdrop-blur-md shadow-xl">
            <div className="flex flex-wrap gap-4 justify-center">
              {itemsByTab[active].map((item, index) => (
                <Pill
                  key={item.label}
                  className={`${
                    visible && animateWave
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  icon={item.icon}
                >
                  <span className="font-medium">{item.label}</span>
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
