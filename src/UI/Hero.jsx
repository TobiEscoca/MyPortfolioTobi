import React, { useState } from "react";

export const Hero = () => {
  const [hoveredElement, setHoveredElement] = useState(null);

  const GridItem = ({ children, className, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    // Calcular la sombra basada en la posición del mouse
    const getShadowStyle = () => {
      if (!isHovered) return {};

      const rect = { width: 200, height: 200 }; // Tamaño aproximado del elemento
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = mousePos.x - centerX;
      const deltaY = mousePos.y - centerY;

      // Normalizar para crear sombra direccional
      const shadowX = (deltaX / centerX) * 15;
      const shadowY = (deltaY / centerY) * 15;

      return {
        boxShadow: `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.4)`,
        transform: `translateZ(0)`,
      };
    };

    return (
      <div
        className={`${className} transition-all duration-300 ease-out cursor-pointer`}
        style={getShadowStyle()}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-cols-6 grid-rows-5 gap-4 p-8 h-screen">
        <GridItem className="col-span-3 row-span-2 bg-white rounded-2xl flex items-center pl-4 gap-4 border-1 border-black-500">
          <img
            src={"/public/yo_logo.png"}
            alt="Bitmoji pulgar arriba toby"
            className="w-50 h-50"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Toby</h1>
            <p className="text-sm text-black-500">
              I’m passionate about code and creativity, with JavaScript as my
              main language and React as my favorite place to bring ideas to
              life. I’m currently studying for a University Technical Degree in
              Programming at UTN, combining formal education with hands-on
              projects that help me grow every day as a developer.
            </p>
          </div>
        </GridItem>
        <GridItem className="row-span-2 col-start-4 bg-black rounded-2xl flex items-center justify-center">
          <img src="/public/github_remove_bg.png" alt="github" />
        </GridItem>
        <GridItem className="col-span-2 row-span-2 col-start-5 bg-red-500 rounded-2xl">
          3
        </GridItem>
        <GridItem className="row-span-2 row-start-3 bg-yellow-500 rounded-2xl">
          4
        </GridItem>
        <GridItem className="row-span-2 row-start-3 bg-blue-500 rounded-2xl">
          5
        </GridItem>
        <GridItem className="col-span-4 row-span-2 row-start-3 bg-green-500 rounded-2xl">
          6
        </GridItem>
        <GridItem className="col-span-3 row-start-5 bg-purple-500 rounded-2xl">
          7
        </GridItem>
        <GridItem className="col-span-3 col-start-4 row-start-5 bg-pink-500 rounded-2xl">
          8
        </GridItem>
      </div>
    </>
  );
};
