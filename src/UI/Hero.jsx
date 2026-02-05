import React from "react";

export const Hero = () => {
  return (
    <section
      id="about"
      className=" text-white flex flex-col items-center justify-center pt-8"
    >
      <div className="flex justify-center items-center p-15 w-full max-w-6xl">
        <main className="mt-32 text-start flex-col pr-6 align-baseline gap-8">
          <div className="gap-2 ">
            <article className="flex items-baseline gap-2">
              <h1 className="text-5xl font-bold leading-none">Tobías Escoca</h1>
              <svg
                className="w-8 h-8 fill-current text-blue-500 "
                viewBox="0 0 24 24"
                role="img"
              >
                <use
                  href="/sprite.svg#verified"
                  xlinkHref="/sprite.svg#verified"
                />
              </svg>
            </article>

            <h2 className="text-2xl">Full Stack Developer</h2>
          </div>
          <p className="pt-4 max-w-xl text-white/90">
            I build fast and elegant web experiences with a focus on quality,
            performance, and best practices.
          </p>
          <div className="pt-4 flex items-center">
            <a href="https://github.com/TobiEscoca" target="blank">
              <button
                className="button-hero bg-black  flex items-center gap-2 cursor-pointer
              transition-all duration-300 hover:bg-gradient-to-r from-indigo-700 to-blue-700"
              >
                <svg className="w-3 h-3 0" viewBox="0 0 24 24" role="img">
                  <use
                    href="/sprite.svg#github"
                    xlinkHref="/sprite.svg#github"
                  />
                </svg>
                Github
              </button>
            </a>

            <button className="button-hero bg-green-700">Download my CV</button>
          </div>
        </main>
        <img
          src="/public/mi_foto.webp"
          alt="Cara Tobías Escoca"
          className="w-80 rounded-full ml-20 object-cover drop-shadow-xl drop-shadow-white"
        />
      </div>
    </section>
  );
};
