import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sophie Martin",
    role: "CEO, TechStart",
    content: "Notre nouvelle plateforme est rapide, intuitive et parfaitement adaptée à nos besoins.",
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
  },
  {
    name: "Sophie Martin",
    role: "CEO, TechStart",
    content: "Notre nouvelle plateforme est rapide, intuitive et parfaitement adaptée à nos besoins.",
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
    <div className="overflow-hidden font-rethink">
      <div className="flex animate-marquee-reversed">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            style={{
              "--background": "17 24 39",
              "--highlight": "156 156 156",
              "--bg-color": "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
              "--border-color": `linear-gradient(160deg, rgb(var(--highlight)) 0%, rgb(var(--highlight) / 0.3) 33.33%, rgb(var(--highlight) / 0.14) 66.67%, rgb(var(--highlight) / 0.1) 100%)`,
            } as React.CSSProperties}
            className="flex-none w-72 mx-4 p-6 flex-col rounded-[20px] border border-transparent text-left 
            [background:padding-box_var(--bg-color),border-box_var(--border-color)] 
            shadow-[inset_0px_-4px_1px_0px_rgba(8,12,23,0.2)] relative overflow-hidden"
          >
            <div
              className="absolute top-[-210px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-white opacity-20 rounded-full"
              style={{
                zIndex: 0,
                filter: "blur(80px)",
              }}
            ></div>
            {/* Stars at top-left */}
            <div className="absolute top-4 left-5 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500 bg-gray-800 rounded-full p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10" />
              ))}
            </div>
            {/* Comment in the center, aligned left */}
            <p className="text-gray-300 text-left text-[15px] mt-5 mb-10">{testimonial.content}</p>
            {/* Profile photo and name on bottom left */}
            <div className="absolute bottom-4 left-6 flex items-center ">
              <div className='bg-gray-800 rounded-full p-1 shadow-md shadow-[#101010] border-t-1 border-gray-300/10 mr-4'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full "
              />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-sm">{testimonial.name}</h3>
                <p className="text-gray-400 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
