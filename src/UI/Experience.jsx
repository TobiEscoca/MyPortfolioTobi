import React from "react";
import portfolio_py from "../assets/portfolio_py.jpg";
import dolarcito_py from "../assets/dolarcito_py.jpg";
import codeando_py from "../assets/codeando_py.jpeg";

const EXPERIENCES = [
  {
    image:portfolio_py,
    period: "September 2024 – November 2024 ",
    title: "E-commerce Burger Shop",
    company: "Proyect for National Technology University",
    bullets: [
      "Integrated frontend and backend, optimizing the data flow between layers and improving efficiency by ensuring a seamless communication across the application.",
      "Implemented validations and error handling to increase reliability, resulting in a smoother and more consistent user experience.",
      "Designed and developed a dynamic, interactive interface with JavaScript, keeping the codebase clean and scalable through an organized structure.",
      "I Worked with 4+ technologies (Python, JavaScript, HTML, CSS) to cover the full stack, from server-side logic to user-facing components.",
      "Prepared the project for future deployment by applying best practices in architecture and performance, making it ready for a production environment.",
    ],
  },
  {
    image:portfolio_py,
    period: "August 2025 – October 2025",
    title: "Professional portfolio",
    company: "Personal proyects",
    bullets: [
      "Developed a personal portfolio using React and Vite, optimizing load speed and efficiency within the development environment.",
      "Implemented Tailwind CSS to design a 100% responsive interface, achieving a clean, modern, and maintainable user experience.",
      "Optimized icon usage by integrating SVGs through sprites with IDs, reducing resource consumption and improving performance.",
      "Applied frontend best practices to enhance usability and deliver a consistent user experience across multiple devices.",
    ],
  },
  {
    image:codeando_py,
    period: "september 2025 – November 2025",
    title: "CODEando course seller website",
    company: "Proyect for National Technology University",
    bullets: [
      "Developed a personal portfolio using React and Vite, optimizing load speed and efficiency within the development environment.",
      "Implemented Tailwind CSS to design a 100% responsive interface, achieving a clean, modern, and maintainable user experience.",
      "Optimized icon usage by integrating SVGs through sprites with IDs, reducing resource consumption and improving performance.",
      "Applied frontend best practices to enhance usability and deliver a consistent user experience across multiple devices.",
    ],
  },

  {
    image:dolarcito_py,
    period: "september 2025 – November 2025",
    title: "Dolarcito currency exchange app",
    company: "Personal proyects",
    bullets: [
      "Developed a personal portfolio using React and Vite, optimizing load speed and efficiency within the development environment.",
      "Implemented Tailwind CSS to design a 100% responsive interface, achieving a clean, modern, and maintainable user experience.",
      "Optimized icon usage by integrating SVGs through sprites with IDs, reducing resource consumption and improving performance.",
      "Applied frontend best practices to enhance usability and deliver a consistent user experience across multiple devices.",
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center">
          Experience / Projects
        </h2>
        <p className="text-center text-white/70 mt-2">
          My personal and professional experience in programming
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl transition-all transition-300 hover:shadow-2xl hover:bg-white/10 hover:border-white/20 cursor-pointer"
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="text-sm text-white/70">{exp.period}</div>
              <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
              <div className="text-white/80">{exp.company}</div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
