"use client";
import React, { useEffect } from "react";
import { Button } from "./Button";
import GrayButton from "./GrayButton";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";



const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  
  return (
    <header id='home' data-aos="fade-up" className="relative container mx-auto px-4 py-[200px] sm:py-[90px] md:py-[100px] lg:py-[150px] text-center">
      {/* Contenu du Hero */}
      <h1 data-aos="fade-up" className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-rethink text-shadow z-10 overflow-hidden">
        Je Délivre Des SaaS <br /> à Croissance Exponentielle.
      </h1>
      <p data-aos="fade-up" className="relative text-lg sm:text-xl text-white max-w-2xl mx-auto font-rethink z-10 text-gray-200/50">
        Transformez votre vision en réalité avec des solutions web <br /> performantes et sur mesure
      </p>
      <div data-aos="fade-up" className="flex flex-wrap justify-center items-center gap-3 mb-6">
        {/* Boutons alignés */}
        <Link href="/mon-cv.pdf" download>
          <Button name="Télécharger mon CV" />
        </Link>
        <div className="mt-1">
        <Link href="#contact" className="flex items-center text-gray-300 hover:text-white transition-colors text-base md:text-lg">
              <GrayButton name="Travailler avec moi" />
            </Link>
        </div>
      </div>

      
    </header>
  );
};

export default Hero;
