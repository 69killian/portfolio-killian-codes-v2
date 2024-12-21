"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import Particles from '@/components/ui/particles';
import Image from 'next/image';
import LogoPortfolio2 from '../../../public/logoportfolio2.png';
import Link from 'next/link';

const Footer = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

  return (
    <footer className="relative border-t border-gray-900 overflow-hidden text-gray-300 mt-[150px] py-[130px] px-6 font-rethink pt-[150px]">
      {/* Particles */}
      <div className="absolute inset-0 z-0 mt-[-150px] overflow-hidden pointer-events-none">
        <Particles />
      </div>


      <div
    className="absolute overflow-hidden top-[-450px] right-1/4 transform translate-x-1/2
 transform -translate-x-1/2 rotate-[70deg] w-[30px] h-[1200px] rounded-full"
    style={{
        zIndex: 0,
        filter: "blur(40px)",
        overflow: "hidden",
        background: "linear-gradient(to bottom, rgba(0, 229, 255, 0.5), rgba(255, 136, 0, 0.3), rgba(0, 255, 234, 0.2))",
    }}
></div>
<div 
    className="absolute overflow-hidden top-[-250px] right-1/4 transform translate-x-1/2 rotate-[50deg] w-[10px] h-[1200px] rounded-full"
    style={{
        zIndex: 0,
        filter: "blur(20px)",
        overflow: "hidden",
        background: "linear-gradient(to bottom, rgba(0, 255, 76, 0.5), rgba(255, 238, 0, 0.3), rgba(0, 255, 8, 0.2))",
    }}
></div>
<div 
    className="absolute overflow-hidden top-[-250px] right-1/4 transform translate-x-1/2 rotate-[50deg] w-[10px] h-[1200px] rounded-full"
    style={{
        zIndex: 0,
        filter: "blur(20px)",
        overflow: "hidden",
        background: "linear-gradient(to bottom, rgba(0, 255, 76, 0.5), rgba(255, 238, 0, 0.3), rgba(0, 255, 8, 0.2))",
    }}
></div>
<div 
    className="absolute overflow-hidden top-[-350px] right-1/4 transform translate-x-1/2 rotate-[60deg] w-[10px] h-[1200px] rounded-full"
    style={{
        zIndex: 0,
        filter: "blur(20px)",
        overflow: "hidden",
        background: "linear-gradient(to bottom, rgba(255, 230, 0, 0.5), rgba(0, 255, 89, 0.3), rgba(0, 55, 255, 0.2))",
    }}
></div>
<div 
                    className=" absolute overflow-hidden  top-[-300] right-[0%] transform translate-x-1/2 w-[500px] h-[500px] bg-white/50 opacity-20 rounded-full"
                    style={{
                        zIndex: 0,
                        filter: "blur(500px)",
                    }}
                ></div>


      {/* Contenu du footer */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
        {/* Section gauche */}
        <div>
          <Image data-aos='fade up' src={LogoPortfolio2} alt="LogoPortfolio2" height={0} width={250} />
          <p data-aos='fade up' className="text-gray-400">
            Rencontrez un professionnel capable de donner vie à vos réalisations personnelles, afin de subjuguer vos clients et augmenter vos revenus.
          </p>
        </div>

        {/* Section Products */}
        <div data-aos="fade up">
                    <h3 className="text-white text-xl font-semibold mb-4">Produits</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#pricing1" className="hover:text-white">
                                Landing Page Sur Mesure
                            </Link>
                        </li>
                        <li>
                            <Link href="#pricing2" className="hover:text-white">
                                Service aux Entreprises
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Section Community */}
                <div data-aos="fade up">
                    <h3 className="text-white text-xl font-semibold mb-4">Communauté</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link target="_blank" href="https://www.spikes.dev/" className="hover:text-white">
                                Spikes
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href="https://www.linkedin.com/in/killian-marty-557b78334/" className="hover:text-white">
                                LinkedIn
                            </Link>
                        </li>
                        <li>
                            <Link target="_blank" href="https://github.com/69killian" className="hover:text-white">
                                GitHub
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Section About */}
                <div data-aos="fade up">
                    <h3 className="text-white text-xl font-semibold mb-4">À propos</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#about" className="hover:text-white">
                                À propos
                            </Link>
                        </li>
                        <li>
                            <Link href="#services" className="hover:text-white">
                                Mes Services
                            </Link>
                        </li>
                        <li>
                            <Link href="#projects" className="hover:text-white">
                                Mes Projets
                            </Link>
                        </li>
                        <li>
                            <Link href="#testimonials" className="hover:text-white">
                                Avis
                            </Link>
                        </li>
                        <li>
                            <Link href="#pricing" className="hover:text-white">
                                Tarifs
                            </Link>
                        </li>
                        <li>
                            <Link href="#faq" className="hover:text-white">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact" className="hover:text-white">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div data-aos="fade up" className="mt-10 text-center pt-6">
                <p className="text-gray-400">
                    &copy; {new Date().getFullYear()} Tous droits réservés. KillianCodes.
                </p>
            </div>
    </footer>
  );
};

export default Footer;
