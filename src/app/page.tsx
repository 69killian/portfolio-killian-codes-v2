"use client"; // Utilisation de React côté client

import { useEffect } from 'react';
import Testimonials from './components/Testimonials';
import TestimonialsReversed from './components/TestimonialsReversed';
import Hero from './components/Hero';
import Service from './components/Service';
import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import About from './components/About';
import './index.css';
import FAQ from './components/faq';
import Contact from './components/Contact';

// Chargement dynamique de Particles sans SSR
const Particles = dynamic(() => import('@/components/ui/particles'), {
  ssr: false,
});

export default function Index() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Rethink+Sans:wght@400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Fonction de nettoyage pour supprimer le lien quand le composant est démonté
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-100">
      {/* Arrière-plan avec particules */}
      <div className="absolute inset-0 z-0 py-[80px]">
        <Particles />
      </div>

      {/* Contenu principal */}
      <div className="pt-24">
        {/* Section Hero */}
        <Hero />

        <About/>

        {/* Section Services */}
        <Service />

        {/* Section Testimonials */}
        <Testimonials />

        <TestimonialsReversed />

        <FAQ/>

        <Contact/>
      </div>
    </div>
    </>
  );
}
