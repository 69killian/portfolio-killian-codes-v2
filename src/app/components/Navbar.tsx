"use client";
import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
import GrayButton from './GrayButton';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full">
      <div className="px-6 py-4 md:px-12 md:py-5 font-rethink">
        <ul className="flex items-center justify-between w-full">
          {/* Logo à gauche (caché sur les petits écrans) */}
          <li className="hidden md:flex">
            <Link href="/" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Image 
                src="/logoportfolio2.png" 
                alt="Logo Portfolio" 
                width={90} 
                height={60} 
                className="md:w-[100px] md:h-[70px]" 
                style={{ objectFit: 'contain' }} 
              />
            </Link>
          </li>

          {/* Menu au centre */}
          <div className="relative flex justify-center items-center mx-auto bg-gray-900/30 backdrop-blur-md shadow-lg rounded-full py-2 px-6 md:py-3 md:px-8">
            {/* Ajout du dégradé autour du container */}
            <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-b from-transparent via-white/10 to-gray-400/70">
              <div className="bg-gray-900/60 backdrop-blur-md shadow-lg rounded-full w-full h-full"></div>
            </div>

            {/* Contenu du menu */}
            <div className="relative flex items-center space-x-5 md:space-x-8">
              <li className="border-r border-gray-500/30 pr-5 md:pr-6">
                <Link href="#home" className="flex items-center text-gray-300 hover:text-white transition-colors text-base md:text-lg">
                  <span>Accueil</span>
                </Link>
              </li>
              <li className="border-r border-gray-500/30 pr-5 md:pr-6">
                <Link href="#pricing" className="flex items-center text-gray-300 hover:text-white transition-colors text-base md:text-lg">
                  <span>Tarifs</span>
                </Link>
              </li>
              <li>
                <Link href="#faq" className="flex items-center text-gray-300 hover:text-white transition-colors text-base md:text-lg">
                  <span>FAQ</span>
                </Link>
              </li>
            </div>
          </div>

          {/* Contact à droite */}
          <li className="mt-1 md:mt-0">
            <Link href="#contact" className="flex items-center text-gray-300 hover:text-white transition-colors text-base md:text-lg">
              <GrayButton name="Contact" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
