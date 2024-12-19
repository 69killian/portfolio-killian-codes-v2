import React from 'react'
import MarqueeProject from './MarqueeProject';
import SectionButton from './SectionButton';
import GrayButton from './GrayButton';

const Projects = () => {
  return (
    <>
    <div className='pb-[150px]'>
    <div className="text-center mb-8">
          <SectionButton name="PROJETS" />
        </div>
    <h2 className="text-center relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-rethink text-shadow z-10 overflow-hidden mb-10">
        Un Échantillon De Mes Projets :
          </h2>
          <p className="relative text-center text-lg sm:text-xl text-white max-w-2xl mx-auto font-rethink z-10 text-gray-200/50 mb-10">
            Voici mes projets personnels documentés, en Open Source sur GitHub, ainsi que déployés sur Vercel. De Javascript à Laravel, je suis capable de couvrir les compétences Back-end autant que Front-end lors de mes projets.
          </p>
          <div className='text-center'>
          <GrayButton name='Voir mon profil GitHub'/>
          </div>
          <MarqueeProject/>
    </div>
          </>
  )
}

export default Projects