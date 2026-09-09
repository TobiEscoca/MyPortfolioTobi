import React from "react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden text-slate-900 dark:text-white flex flex-col items-center justify-center pt-32 pb-16 px-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-violet-500/10 dark:bg-violet-500/20 blur-3xl"
      />

      <div className="relative flex flex-col-reverse md:flex-row justify-center items-center w-full max-w-5xl gap-10 md:gap-14">
        <main className="text-start flex-col align-baseline gap-8">
          <div className="gap-2">
            <article className="flex items-baseline gap-2">
              <h1 className="text-4xl sm:text-5xl font-bold leading-none font-display">
                Tobías Escoca
              </h1>
              <svg
                className="w-8 h-8 fill-current text-indigo-500"
                viewBox="0 0 24 24"
                role="img"
              >
                <use href={`${import.meta.env.BASE_URL}sprite.svg#verified`} />
              </svg>
            </article>

            <h2 className="text-xl sm:text-2xl mt-2 font-display">
              Full Stack Developer
            </h2>
          </div>
          <p className="pt-4 max-w-xl text-slate-700 dark:text-white/90">
            I build fast and elegant web experiences with a focus on quality,
            performance, and best practices.
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <a
              href={`${import.meta.env.BASE_URL}Tobias_Escoca_CV_dev.pdf`}
              download
              className="no-underline"
            >
              <button className="button-hero button-hero-primary">
                Download my CV
              </button>
            </a>

            <a
              href="https://github.com/TobiEscoca"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <button className="button-hero button-hero-secondary">
                <svg className="w-4 h-4" viewBox="0 0 24 24" role="img">
                  <use href={`${import.meta.env.BASE_URL}sprite.svg#github`} />
                </svg>
                GitHub
              </button>
            </a>
          </div>
        </main>
        <img
          src={`${import.meta.env.BASE_URL}Logos/foto_para_cv_nuevo_fondo.jpg`}
          alt="Cara Tobías Escoca"
          className="w-48 sm:w-64 md:w-80 rounded-full object-cover drop-shadow-xl ring-4 ring-white dark:ring-slate-800"
        />
      </div>
    </section>
  );
};
