"use client";
import React, { useEffect } from "react";
import { Button } from "./Button";
import GrayButton from "./GrayButton";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialisation avec une durée d'animation de 1 seconde
  }, []);
  
  return (
    <header data-aos="fade-up" className="relative container mx-auto px-4 py-[200px] sm:py-[90px] md:py-[100px] lg:py-[150px] text-center">
      {/* Contenu du Hero */}
      <h1 data-aos="fade-up" className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-rethink text-shadow z-10 overflow-hidden">
        Je Délivre Des SaaS <br /> à Croissance Exponentielle.
      </h1>
      <p data-aos="fade-up" className="relative text-lg sm:text-xl text-white max-w-2xl mx-auto font-rethink z-10 text-gray-200/50">
        Transformez votre vision en réalité avec des solutions web <br /> performantes et sur mesure
      </p>
      <div data-aos="fade-up" className="flex flex-wrap justify-center items-center gap-3 mb-6">
        {/* Boutons alignés */}
        <Button name="Télécharger mon CV" />
        <div className="mt-1">
          <GrayButton name="Travailler avec moi" />
        </div>
      </div>

      
    </header>
  );
};

export default Hero;
