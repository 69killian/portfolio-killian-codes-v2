"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import stripint from "../../../public/black.png";
import arcadia from "../../../public/arcadia.png";
import gitify from "../../../public/gitify.png";
import admina from "../../../public/admina.png";
import modea from "../../../public/modea.png";
import trackhub from "../../../public/trackhub.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MarqueeProject = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


  return (
    <div className="overflow-x-hidden items-center justify-center flex">
      {/* Images défilantes organisées en colonnes */}
      <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-10 gap-8 items-center justify-center text-center">
        {[
                    { src: gitify, alt: "Gitify, Challenges GitHub", link: "https://warmhearted-imagine-949567.framer.app/" },
                    { src: trackhub, alt: "TrackHub, Dashboard de suivi d'habitudes", link: "https://track-hub-seven.vercel.app/" },
                    { src: stripint, alt: "Stripint, Intégration Stripe", link: "https://landing-page-stripe-subscription-two.vercel.app/" },
                    { src: admina, alt: "Admina", link: "https://just-branding-655225.framer.app/" },
                    { src: arcadia, alt: "Arcadia, Zoo de Bretagne", link: "https://github.com/69killian/Arcadia-Zoo" },
                    { src: modea, alt: "Modea", link: "https://modea-e-commerce-full-stack-app-store.vercel.app/" },
        ].map((image, index) => (
          <div key={index} data-aos="fade-up" className="relative group">
            {/* Envelopper l'image avec un lien */}
            
              {/* Image avec transition */}
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={280}
                data-aos="fade-up"
                className="rounded-[20px] object-cover bg-gray-800 p-2 shadow-lg shadow-[#101010] border-t-2 border-gray-300/10 transition-all duration-300 group-hover:opacity-70"
              />
            
            {/* Texte qui s'affiche au hover */}
            <a href={image.link} target="_blank" rel="noopener noreferrer">
            <div className="w-full absolute inset-0 flex rounded-[20px] items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <span className="text-white text-lg font-semibold">{image.alt}</span>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeProject;