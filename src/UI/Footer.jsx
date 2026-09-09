import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/TobiEscoca",
    icon: faGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tobias-escoca/",
    icon: faLinkedin,
  },
  {
    label: "Email",
    href: "mailto:tobiasescoca@gmail.com",
    icon: faEnvelope,
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-gray-900 border-t border-slate-200 dark:border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-slate-600 dark:text-white/70 text-sm">Sígueme:</span>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                  aria-label={label}
                >
                  <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-slate-600 dark:text-white/60 text-sm">
              © {new Date().getFullYear()} Tobias Escoca. Todos los derechos
              reservados.
            </p>
            <p className="text-slate-400 dark:text-white/40 text-xs mt-1">
              Desarrollado con React y Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
