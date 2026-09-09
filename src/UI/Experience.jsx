import React from "react";
import portfolio_py from "../assets/portfolio/portfolio_py.jpeg";
import codeando_py from "../assets/codeando/codeando_py.jpeg";
import dolarcito_py from "../assets/dolarcito/dolarcito_py.jpg";
import gestordeturnos_py from "../assets/gestordeturnos/gestordeturnos_py.png";

const EXPERIENCES = [
  {
    image: gestordeturnos_py,
    period: "September 2024 – November 2024",
    title: "Gestor de Turnos",
    github: "https://github.com/TobiEscoca/Tpi_Prog4",
    tags: ["Python", "JavaScript", "HTML", "CSS"],
    demo: "https://gestordeturnostm.netlify.app/",
    bullets: [
      "Developed an appointment management system that coordinates bookings across multiple services and providers.",
      "Designed a clean interface to create, reschedule and cancel appointments efficiently.",
      "Implemented server-side logic and data persistence to keep records consistent.",
      "Built with a full-stack approach, from database models to user-facing views.",
    ],
  },
  {
    image: portfolio_py,
    period: "August 2025 – October 2025",
    title: "Professional portfolio",
    company: "Personal proyects",
    github: "https://github.com/TobiEscoca/MyPortfolioTobi",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    bullets: [
      "Developed a personal portfolio using React and Vite, optimizing load speed and efficiency within the development environment.",
      "Implemented Tailwind CSS to design a 100% responsive interface, achieving a clean, modern, and maintainable user experience.",
      "Optimized icon usage by integrating SVGs through sprites with IDs, reducing resource consumption and improving performance.",
      "Applied frontend best practices to enhance usability and deliver a consistent user experience across multiple devices.",
    ],
  },
  {
    image: codeando_py,
    period: "september 2025 – November 2025",
    title: "CODEando course seller website",
    company: "Proyect for National Technology University",
    github: "https://github.com/TobiEscoca/Proyect_CODEando",
    tags: ["React", "Vite", "Tailwind CSS"],
    bullets: [
      "Developed a course selling website with React and Vite, optimizing load speed and efficiency within the development environment.",
      "Implemented Tailwind CSS to design a 100% responsive interface, achieving a clean, modern, and maintainable user experience.",
      "Optimized icon usage by integrating SVGs through sprites with IDs, reducing resource consumption and improving performance.",
      "Applied frontend best practices to enhance usability and deliver a consistent user experience across multiple devices.",
    ],
  },
  {
    image: dolarcito_py,
    period: "september 2025 – November 2025",
    title: "Dolarcito currency exchange app",
    company: "Personal proyects",
    github: "https://github.com/TobiEscoca/Proyect_dolarcito",
    demo: "https://dolarcito-tobiasdev.netlify.app/",
    tags: ["JavaScript", "REST APIs", "Tailwind CSS"],
    bullets: [
      "Built a currency exchange app that fetches live rates and computes conversions in real time.",
      "Implemented Tailwind CSS to design a 100% responsive interface, achieving a clean, modern, and maintainable user experience.",
      "Optimized icon usage by integrating SVGs through sprites with IDs, reducing resource consumption and improving performance.",
      "Applied frontend best practices to enhance usability and deliver a consistent user experience across multiple devices.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 px-6 text-slate-900 dark:text-white scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center font-display">
          Experience / Projects
        </h2>
        <p className="text-center text-slate-600 dark:text-white/70 mt-2">
          My personal and professional experience in programming
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.title}
              className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:-translate-y-1"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="text-sm text-slate-500 dark:text-white/70">{exp.period}</div>
              <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
              <div className="text-slate-600 dark:text-white/80">{exp.company}</div>

              {exp.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((bullet, index) => (
                  <li key={index} className="flex gap-2 text-sm text-slate-600 dark:text-white/80">
                    <span className="text-indigo-500 shrink-0 mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {exp.github && (
                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" role="img">
                      <use href={`${import.meta.env.BASE_URL}sprite.svg#github`} />
                    </svg>
                    View code
                  </a>
                </div>
              )}

              {exp.demo && (
                <div className="mt-2 flex items-center gap-2">
                  <a
                    href={exp.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" role="img">
                      <use href={`${import.meta.env.BASE_URL}sprite.svg#link`} />
                    </svg>
                    View demo
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
