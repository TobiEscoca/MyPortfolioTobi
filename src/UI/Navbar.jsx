import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50">
      <nav
        className="
          flex items-center justify-between gap-5
          bg-white/3 backdrop-blur-md border border-transparent
          rounded-2xl px-6 py-3
          text-white shadow-lg
        "
      >
        <div className="flex justify-start items-center">
          {/* LOGO o Nombre */}
          <img
            src="/public/Logos/Logo_gradient.png"
            alt="Logo profesional de Tobías Escoca"
            className="w-10 h-10"
          />
          <span className="text-base">Tobías Dev</span>
        </div>
        {/* Links */}

        <div className="flex justify-end gap-3 font-bold text-sm pl-12 pr-12 transition-all duration-300">
          <button className="button-nav">
            <a href="#about" className="decoration-none">
              About
            </a>
          </button>
          <button className="button-nav">
            <a href="#experience" className="decoration-none">
              Experience
            </a>
          </button>
          <button className="button-nav">
            <a href="#projects" className="decoration-none">
              Projects
            </a>
          </button>

          <button className="button-nav">
            <a href="#contact" className="decoration-none">
              Contact
            </a>
          </button>
        </div>

        <div>
          {/* Botón de modo oscuro/luz (opcional) */}
          <button
            className="p-2 rounded-full hover:bg-white/20"
            aria-label="Cambiar tema"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" role="img">
              <use
                href="/sprite.svg#moon-light"
                xlinkHref="/sprite.svg#moon-light"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
