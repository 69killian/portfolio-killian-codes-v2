import React from 'react';
import Particles from '@/components/ui/particles';
import Image from 'next/image';
import LogoPortfolio2 from '../../../public/logoportfolio2.png';

const Footer = () => {
  return (
    <footer className="relative border-t border-gray-900 overflow-hidden text-gray-300 mt-[150px] py-[130px] px-6 font-rethink pt-[150px]">
      {/* Particles */}
      <div className="absolute inset-0 z-0 mt-[-150px] overflow-hidden pointer-events-none">
        <Particles />
      </div>
      <div
    className="absolute overflow-hidden top-[-400px] right-[200] transform -translate-x-1/2 rotate-[70deg] w-[30px] h-[1200px] rounded-full"
    style={{
        zIndex: 0,
        filter: "blur(40px)",
        overflow: "hidden",
        background: "linear-gradient(to bottom, rgba(0, 229, 255, 0.5), rgba(255, 136, 0, 0.3), rgba(0, 255, 234, 0.2))",
    }}
></div>
<div
    className="absolute overflow-hidden top-[-200px] right-[200] transform -translate-x-1/2 rotate-[50deg] w-[10px] h-[1200px] rounded-full"
    style={{
        zIndex: 0,
        filter: "blur(20px)",
        overflow: "hidden",
        background: "linear-gradient(to bottom, rgba(0, 255, 76, 0.5), rgba(255, 238, 0, 0.3), rgba(0, 255, 8, 0.2))",
    }}
></div>
<div
    className="absolute overflow-hidden top-[-200px] right-[200] transform -translate-x-1/2 rotate-[50deg] w-[10px] h-[1200px] rounded-full"
    style={{
        zIndex: 0,
        filter: "blur(20px)",
        overflow: "hidden",
        background: "linear-gradient(to bottom, rgba(0, 255, 76, 0.5), rgba(255, 238, 0, 0.3), rgba(0, 255, 8, 0.2))",
    }}
></div>
<div
    className="absolute overflow-hidden top-[-300px] right-[200] transform -translate-x-1/2 rotate-[60deg] w-[10px] h-[1200px] rounded-full"
    style={{
        zIndex: 0,
        filter: "blur(20px)",
        overflow: "hidden",
        background: "linear-gradient(to bottom, rgba(255, 230, 0, 0.5), rgba(0, 255, 89, 0.3), rgba(0, 55, 255, 0.2))",
    }}
></div>
<div
                    className=" absolute overflow-hidden top-[00px] right-[-600] top-[-150] transform -translate-x-1/2 w-[500px] h-[500px] bg-white/50 opacity-20 rounded-full"
                    style={{
                        zIndex: 0,
                        filter: "blur(500px)",
                    }}
                ></div>



      {/* Contenu du footer */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
        {/* Section gauche */}
        <div>
          <Image src={LogoPortfolio2} alt="LogoPortfolio2" height={0} width={250} />
          <p className="text-gray-400">
            Rencontrez un professionnel capable de donner vie à vos réalisations personnelles, afin de subjuguer vos clients et augmenter vos revenus.
          </p>
        </div>

        {/* Section Products */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Produits</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Landing Page Sur Mesure
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Service aux Entreprises
              </a>
            </li>
          </ul>
        </div>

        {/* Section Community */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Communaté</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
              Spikes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Linkedin
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Section About */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Mon Histoire
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Mes Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Mes Projets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Avis
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Tarifs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Faq
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center pt-6">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Tous droits réservés. KillianCodes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
