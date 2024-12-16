"use client";
import React from 'react';

const GrayButton = ({ name }: { name: string }) => {
  return (
    <div className="relative inline-flex justify-center items-center bg-gray-900/30 backdrop-blur-md shadow-lg rounded-full 
      w-[159px] h-[30px] px-6 font-rethink mb-1 
      sm:w-[159px] sm:h-[30px] lg:w-auto lg:h-[46px] lg:px-6 lg:text-lg text-sm">
      {/* Ajout du dégradé autour du container */}
      <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-b from-transparent via-white/30 to-gray-400/80">
        <div className="bg-gray-900/60 backdrop-blur-md shadow-lg rounded-full w-full h-full"></div>
      </div>

      {/* Contenu du bouton */}
      <div className="relative text-white font-medium leading-none lg:text-lg text-sm">
        {name}
      </div>
    </div>
  );
};

export default GrayButton;
