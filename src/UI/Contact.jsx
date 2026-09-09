import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "tobiasescoca@gmail.com",
    href: "mailto:tobiasescoca@gmail.com",
    icon: faEnvelope,
  },
  {
    label: "GitHub",
    value: "github.com/TobiEscoca",
    href: "https://github.com/TobiEscoca",
    icon: faGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tobias-escoca",
    href: "https://www.linkedin.com/in/tobias-escoca/",
    icon: faLinkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 text-slate-900 dark:text-white scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center font-display">Contact</h2>
        <p className="text-center text-slate-600 dark:text-white/70 mt-2">
          Let's work together — reach out through any of these channels
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CONTACT_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold">{item.label}</div>
                <div className="text-sm text-slate-500 dark:text-white/70 truncate">
                  {item.value}
                </div>
              </div>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="w-4 h-4 text-slate-400 dark:text-white/40 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200"
              />
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://tobiescoca.github.io/Contactme/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-200"
          >
            Or use my contact form
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
