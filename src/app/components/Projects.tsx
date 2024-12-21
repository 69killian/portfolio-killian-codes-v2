"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MarqueeProject from './MarqueeProject';
import SectionButton from './SectionButton';
import GrayButton from './GrayButton';
import Link from 'next/link';


const Projects = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);

  return (
    <>
    <div id='projects' data-aos="fade-up" className='pb-[150px]'>
    <div className="text-center mb-8">
          <SectionButton name="PROJETS" />
        </div>
    <h2 data-aos="fade-up" className="text-center relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-rethink text-shadow z-10 overflow-hidden mb-10">
        Un Échantillon De Mes Projets :
          </h2>
          <p data-aos="fade-up" className="relative text-center text-md sm:text-xl text-white max-w-2xl mx-auto font-rethink z-10 text-gray-200/50 mb-10">
            Voici mes projets personnels documentés, en Open Source sur GitHub, ainsi que déployés sur Vercel. De Javascript à Laravel, je suis capable de couvrir les compétences Back-end autant que Front-end lors de mes projets.
          </p>
          <div  className='text-center'>
          <Link 
            target="_blank" 
            data-aos="fade-up" 
            href="https://github.com/69killian" 
            className="text-center"
            >
            <GrayButton name="Voir mon profil GitHub" />
           </Link>

          </div>
          <MarqueeProject/>
    </div>
          </>
  )
}

export default Projects