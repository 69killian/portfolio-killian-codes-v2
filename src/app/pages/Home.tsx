"use client";
import React from 'react';
import Testimonials from '../components/Testimonials';
import Hero from '../components/Hero';
import Service from '../components/Service';
import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('@/components/ui/particles'), {
  ssr: false, // Disable server-side rendering for this component
});


export default function Home() {
  return (
    <div className="pt-24">
        <div className="absolute inset-0 z-0 py-[120px]">
        <Particles />
      </div>
      {/* Hero Section */}
      <Hero/>

      {/* Services Section */}
      <Service/>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}