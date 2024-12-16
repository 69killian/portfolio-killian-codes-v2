"use client";
import React from 'react';
import Testimonials from '../components/Testimonials';
import Hero from '../components/Hero';
import Service from '../components/Service';
import Particles from '@/components/ui/particles';


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