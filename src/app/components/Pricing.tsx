"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { Phone, CheckCircle } from 'lucide-react';
import MarqueeTech from './MarqueeTech';
import SectionButton from '../components/SectionButton';
import Particles from '@/components/ui/particles';

export default function Pricing() {
    useEffect(() => {
        AOS.init({duration: 1000});
    },[]);

  return (
    <>
      <div id="pricing" data-aos='fade up' className="container mx-auto px-4 py-16 pb-[150px]">
      <div className='text-center mb-10'>
      <SectionButton name='TARIFS'/>
      </div>
      
       <h2 data-aos='fade up' className="text-center relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-light text-shadow z-10 overflow-hidden mb-10">
        Deux plans, Deux Options, <br />Adaptées à Vos Besoins.
          </h2>
          <p data-aos='fade up' className="relative font-light text-center text-lg sm:text-xl text-white max-w-2xl mx-auto z-10 text-gray-200/50 mb-10">
          Afin de correspondre à vos envies personnelles, veuillez retrouver les plans de paiement que je propose pour mes services.
      </p>

      
        <div data-aos='fade up' className="flex font-rethink flex-col sm:flex-col md:flex-col lg:flex-row gap-8 max-w-4xl mx-auto items-start justify-center">
          <div data-aos='fade up' id='pricing1'
            className=" relative flex-none w-[400px] sm:w-[400px] md:w-[480px] lg:w-[480px] mx-auto p-6 bg-gray-900 overflow-hidden rounded-[35px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10"
          >
            <div
              className="absolute top-[-150px] left-2/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-white opacity-20 rounded-full"
              style={{
                zIndex: 0,
                filter: "blur(80px)",
              }}
            ></div>
            
            <h3 data-aos='fade up' className="text-2xl font-bold mb-4">Landing Page Sur Mesure</h3>
            <h3 className="text-2xl font-bold mb-4">997€</h3>
            <p className="text-gray-400 mb-6">Vous bénéficierez d&apos;une landing page au design original et soigné, pensée pour atteindre vos objectifs.</p>
            <a href="tel:+33600000000" className=" block w-full py-3 px-6 bg-gray-700 hover:bg-gray-800 text-center transition-colors duration-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10">
              <Phone className="inline-block w-5 h-5 mr-2" />
              Appelez-moi
            </a>
            <h3 className="text-1xl font-bold mb-0 mt-6">Avantages</h3>
            <h4 className="text-[14px] text-gray-400 mb-6">Le plan Sur Mesure Inclu :</h4>
            <ul className="space-y-4 mb-8 mt-3">
              <li className="flex items-center"><CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" /> Maquette Personnalisée </li>
              <li className="flex items-center"><CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" /> Conception d&apos;interface UI </li>
              <li className="flex items-center"><CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" /> Design responsive </li>
              <li className="flex items-center"><CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" /> Animations et transitions fluides </li>
              <li className="flex items-center"><CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" /> Intégration de Formulaires (inscription, contact) </li>
              <li className="flex items-center"><CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" /> Système d&apos;authentification </li>
              <li className="flex items-center"><CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" /> Intégration de Stripe (souscription) </li>
              <li className="flex items-center"><CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" /> Livraison en 2/3 semaines </li>
            </ul>
          </div>

            <div data-aos='fade up' id='pricing2'
                className="relative flex-none w-[400px] sm:w-[550px] md:w-[600px] lg:w-[600px] xl:w-[600px] mx-auto p-6 bg-gray-900 overflow-hidden rounded-[35px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10"
                style={{
                    boxShadow: "0 4px 40px rgba(255, 255, 255, 0.1)", // Ombre blanche avec un flou important
                }}
            >
                {/* Particles avec un z-index bas pour être derrière les autres éléments */}
                <div className="absolute inset-0 z-0">
                    <Particles />
                </div>
                
                {/* Effet de flou */}
                <div
                    className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-white opacity-20 rounded-full"
                    style={{
                        zIndex: 0,
                        filter: "blur(80px)",
                    }}
                ></div>
                
                {/* Titre principal */}
                <h3 data-aos='fade up' className="relative text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-rethink text-shadow z-10 overflow-hidden">
                    Service Aux <br /> Entreprises
                </h3>
                
                {/* Sous-titre */}
                <h3 className="my-4 relative text-1xl sm:text-1xl md:text-2xl lg:text-2xl font-bold bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-rethink text-shadow z-10 overflow-hidden">
                    ≈ 350€/TJM
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6">
                    Ce plan est idéal pour les Entreprises qui recherchent des compétences Full-Stack, avec les technologies modernes comme NextJS et MongoDB ou PostGreSQL.
                </p>
                
                {/* Bouton avec z-index supérieur pour être accessible */}
                <a
                    href="tel:+33600000000"
                    className="relative z-10 block w-full py-3 px-6 bg-gray-700 hover:bg-gray-800 text-center transition-colors duration-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10"
                >
                    <Phone className="inline-block w-5 h-5 mr-2" />
                    Demander mon devis
                </a>
                
                {/* Avantages */}
                <h3 className="text-1xl font-bold mb-0 mt-6">Avantages</h3>
                <h4 className="text-[14px] text-gray-400 mb-6">Le plan Entreprise Inclu :</h4>
                <ul className="space-y-4 mb-8 mt-3">
                    <li className="flex items-center">
                        <CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
                        Analyse des besoins de l&apos;Entreprise
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
                        maquettes interactives, architecture UI
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
                        Stratégies, CTA, SEO
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
                        Design 100% Reponsive
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
                        Animations et transitions fluides
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
                        Intégration de Formulaires (inscription, contact)
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
                        Intégration de Stripe (souscription)
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
                        Système d&apos;authentification
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
                        Dashboard Administrateur Full Stack
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
                        Tracking et Analytics
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
                        Déploiement
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
                        Livraison selon la durée du contrat 
                    </li>
                    <li className="flex items-center">
                        <CheckCircle className="w-7 h-7 mr-2 text-gray-300 bg-gray-900 rounded-[17px] p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
                        Support Post Livraison
                    </li>
                    <div className="pt-10">
                        <MarqueeTech />
                    </div>
                </ul>
            </div>

          </div>
      </div>
    </>
  );
}
