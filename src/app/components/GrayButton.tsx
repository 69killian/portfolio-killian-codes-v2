"use client";
import React from 'react';

const GrayButton = ({ name }: { name: string }) => {
  return (
    <div className=" relative inline-flex justify-center items-center bg-gray-900/30 backdrop-blur-md shadow-lg rounded-full 
      w-[129px] h-[40px] font-rethink mb-1
       sm:h-[40px] lg:w-auto lg:h-[46px] lg:px-6 lg:text-lg text-sm cursor-pointer group">

      {/* Effet de dégradé visible par défaut, invisible au survol */}
      <div className="group-hover:bg-gray-400/60 transition-all duration-300 ease-in-out absolute inset-0 rounded-full p-[1px] bg-gradient-to-b from-transparent via-white/10 to-gray-400/70 transition-all duration-300 group-hover:bg-gray-500/50">
        <div className="bg-gray-900/60 backdrop-blur-md shadow-lg rounded-full w-full h-full group-hover:bg-gray-900/50 transition-all duration-300 ease-in-out"></div>
      </div>

      {/* Contenu du bouton */}
      <div className="relative text-white font-medium leading-none lg:text-lg text-sm">
        {name}
      </div>
    </div>
  );
};

export default GrayButton;
