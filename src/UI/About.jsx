import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faGraduationCap, faLanguage, faCode } from '@fortawesome/free-solid-svg-icons';

const FACTS = [
  { icon: faLocationDot, label: "Rosario / Carcarañá, Santa Fe, Argentina" },
  { icon: faGraduationCap, label: "Tec. Universitaria en Programación · UTN" },
  { icon: faLanguage, label: "Español nativo · English fluent" },
  { icon: faCode, label: "Full Stack Developer" },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 text-slate-900 dark:text-white scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center font-display">About me</h2>
        <p className="text-center text-slate-600 dark:text-white/70 mt-2">
          Who I am and what I do
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-slate-700 dark:text-white/85 leading-relaxed">
            <p>
              Hi! I'm Tobías, a Full Stack Developer from Carcarañá, Santa Fe,
              Argentina. I'm finishing my Tecnicatura Universitaria en
              Programación at UTN and I love turning ideas into fast, clean and
              useful web applications.
            </p>
            <p>
              I enjoy working across the whole stack — from database design and
              server logic to polished, responsive interfaces. I build with
              React, Node.js and Python, always aiming for best practices and
              maintainable code.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {FACTS.map((fact) => (
                <span
                  key={fact.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-700 dark:text-white/85 shadow-sm"
                >
                  <FontAwesomeIcon
                    icon={fact.icon}
                    className="w-4 h-4 text-indigo-600 dark:text-indigo-400"
                  />
                  {fact.label}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-semibold font-display">Education</h3>
            <div className="mt-4 space-y-4">
              <div>
                <div className="font-medium">Tecnicatura Universitaria en Programación</div>
                <div className="text-sm text-slate-500 dark:text-white/70">
                  National Technology University (UTN) · finishing (2024–2026)
                </div>
              </div>
              <div>
                <div className="font-medium">Full Stack Development</div>
                <div className="text-sm text-slate-500 dark:text-white/70">
                  Self-taught + university projects
                </div>
              </div>
            </div>

            <a href={`${import.meta.env.BASE_URL}Tobias_Escoca_CV_dev.pdf`} download className="no-underline">
              <button className="mt-6 button-hero button-hero-primary">
                Download my CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
