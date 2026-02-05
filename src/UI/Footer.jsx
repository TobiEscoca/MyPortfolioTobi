import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Redes Sociales */}
          <div className="flex items-center gap-4">
            <span className="text-white/70 text-sm">Sígueme:</span>
            <div className="flex gap-3">
              <a
                href="https://github.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </a>
              <a
                href="mailto:tu-email@ejemplo.com"
                className="text-white/60 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors duration-200"
                aria-label="X"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Derechos Reservados */}
          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Tobias Escoca. Todos los derechos
              reservados.
            </p>
            <p className="text-white/40 text-xs mt-1">
              Desarrollado con React y Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
