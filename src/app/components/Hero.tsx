"use client";
import React from "react";
import { Button } from "./Button";
import GrayButton from "./GrayButton";

const Hero = () => {
  return (
    <header className="relative container mx-auto px-4 py-[150px] text-center">
      {/* Contenu du Hero */}
      <h1 className="relative text-7xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-rethink text-shadow z-10">
        Je Délivre Des SaaS <br /> à Croissance Exponentielle.
      </h1>
      <p className="relative text-1xl text-white max-w-2xl mx-auto font-rethink z-10 text-gray-100/60">
        Transformez votre vision en réalité avec des solutions web <br /> performantes et sur mesure
      </p>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {/* Boutons alignés */}
        <Button name="Téléchargez mon CV" />
        <GrayButton name="Travaillez avec moi"/>
      </div>
    </header>
  );
};

export default Hero;
