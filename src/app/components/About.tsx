import React, { useEffect } from 'react'
import AboutButton from './AboutButton'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialisation avec une durée d'animation de 1 seconde
  }, []);

  return (
    <div className='flex flex-col justify-center items-center text-center pb-[150px]'>
      <AboutButton />
      <div className='mt-10'>
        <div className='font-rethink text-[15px] sm:text-[20px] md:text-[30px] lg:text-[40px] w-[400px] sm:w-[500px] md:w-[700px] lg:w-[980px] text-left line-clamp-7 text-gray-400'>
          <span 
            className='relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-rethink text-shadow z-10 overflow-hidden' 
            data-aos="fade-up"
          >
            Salut, je suis Killian
          </span>
          <span className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl' data-aos="fade-up" data-aos-delay="200">
            👋
          </span>
          <br /> <br /> 
          <span className='text-lg sm:text-xl md:text-2xl lg:text-3xl' data-aos="fade-up" data-aos-delay="400">
            Ancien Employé de la grande distribution, j&apos;ai décidé il y a 2 ans de tout quitter pour commencer le développement web, d&apos;abord grâce à une formation, avec pour objectif de devenir Freelance. Passionné par la résolution de problèmes et le design, je conçois des SaaS performants et esthétiques pour aider les entreprises à booster leur compétitivité et à se démarquer sur leur marché.
          </span>
        </div>
      </div>
    </div>
  )
}

export default About;
