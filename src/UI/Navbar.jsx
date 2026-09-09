import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = LINKS.map((link) =>
      document.getElementById(link.href.slice(1))
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href) =>
    `button-nav no-underline ${
      active === href.slice(1)
        ? "text-indigo-600 dark:text-indigo-400"
        : "text-slate-700 dark:text-white"
    }`;

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <nav
        className="
          flex items-center justify-between gap-5
          bg-slate-100/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/40 dark:border-slate-700/40
          rounded-2xl px-6 py-3
          text-slate-900 dark:text-white shadow-lg
        "
      >
        <a href="#home" className="flex justify-start items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}Logos/Logo_gradient.png`}
            alt="Logo profesional de Tobías Escoca"
            className="w-10 h-10"
          />
          <span className="text-base font-semibold font-display">Tobías Dev</span>
        </a>

        <div className="hidden md:flex justify-end gap-3 font-bold text-sm">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-slate-700/50 transition-colors duration-200 cursor-pointer"
            aria-label={`Activar tema ${theme === "dark" ? "claro" : "oscuro"}`}
            title={`Tema actual: ${theme}`}
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="text-lg" />
          </button>

          <button
            onClick={() => setOpen((current) => !current)}
            className="md:hidden p-2 rounded-full hover:bg-white/20 dark:hover:bg-slate-700/50 transition-colors duration-200 cursor-pointer"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} className="text-lg" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden mt-2 flex flex-col gap-1 bg-slate-100/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/40 dark:border-slate-700/40 rounded-2xl px-6 py-4 shadow-lg">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-2 font-bold text-sm no-underline hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 ${
                active === link.href.slice(1)
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-slate-700 dark:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
