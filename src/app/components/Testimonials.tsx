"use client";
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sophie Martin",
    role: "CEO, TechStart",
    content: "KillianCodes a transformé notre vision en réalité. Notre nouvelle plateforme est rapide, intuitive et parfaitement adaptée à nos besoins.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100"
  },
  {
    name: "Thomas Dubois",
    role: "Fondateur, DigitalFlow",
    content: "Un vrai professionnel qui comprend les enjeux business. Le site qu'il a développé a dépassé nos attentes.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
  },
  {
    name: "Marie Lambert",
    role: "Directrice Marketing, InnovCorp",
    content: "Excellence technique et créativité au rendez-vous. Notre e-commerce n'a jamais été aussi performant.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
  }
];

export default function Testimonials() {
  return (
    <div className="py-16 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12">Ils me font confiance</h2>
      <div className="flex animate-marquee">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-none w-96 mx-4 p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex mb-3">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-gray-300">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}