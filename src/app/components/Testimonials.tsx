"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star } from "lucide-react";
import React, { useEffect } from "react";
import BorderButton from "./BorderButton";
import SectionButton from "./SectionButton";

const testimonials = [
  {
    name: "Loulou",
    role: "Entrepreneur E-commerce",
    content:
      "Killian a réalisé un site web pour mon entreprise, il a su comprendre mes besoins et m'aide à développer mon business.",
    rating: 5,
    image:
      "https://yt3.ggpht.com/mPBeNTenODH2__pJEp5zzhT9SAQYU8tor9zcArF-wM0JeaRDCPiaxfFyfSfXBJqsMk1_lc0LIQ=s176-c-k-c0x00ffffff-no-rj-mo",
  },
  {
    name: "Thomas Dubois",
    role: "Fondateur, DigitalFlow",
    content:
      "Un vrai professionnel qui comprend les enjeux business. Le site qu'il a développé a dépassé nos attentes.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Marie Lambert",
    role: "Directrice Marketing, InnovCorp",
    content:
      "Excellence technique et créativité au rendez-vous. Notre e-commerce n'a jamais été aussi performant.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Sophie Martin",
    role: "CEO, TechStart",
    content:
      "Notre nouvelle plateforme est rapide, intuitive et parfaitement adaptée à nos besoins.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Thomas Dubois",
    role: "Fondateur, DigitalFlow",
    content:
      "Un vrai professionnel qui comprend les enjeux business. Le site qu'il a développé a dépassé nos attentes.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Sky!",
    role: "Producteur de Musique",
    content:
      "Killian m'a fait un portolio spécialisé dans la musique, et le design est impressionnant, je le recommande.",
    rating: 5,
    image:
      "https://yt3.googleusercontent.com/oQcwM5vmHH6-VpPgnDqwEOhtHhjIxotYUqpgTjiXMclH93UKk4Uw2wo-oCkB4SSH_ekQAcfM6Q=s160-c-k-c0x00ffffff-no-rj",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="testimonials"
      data-aos="fade up"
      className="py-6 overflow-hidden font-rethink"
    >
      <div className="text-center mb-10">
        <SectionButton name="AVIS" />
      </div>

      <h2
        data-aos="fade up"
        className="text-center relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-rethink text-shadow z-10 overflow-hidden mb-10"
      >
        Ce Que Mes Clients <br /> Pensent De Moi
      </h2>
      <p
        data-aos="fade up"
        className="relative text-center text-lg sm:text-xl text-white max-w-2xl mx-auto font-rethink z-10 text-gray-200/50 mb-10"
      >
        De vrais témoignages, par de vrais clients, pour des résultats <br />{" "}
        qui parlent d&apos;eux-mêmes.
      </p>
      <div data-aos="fade up" className="flex justify-center mb-10">
        <BorderButton />
      </div>
      <div data-aos="fade up" className="flex animate-marquee">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            style={
              {
                "--background": "17 24 39",
                "--highlight": "156 156 156",
                "--bg-color":
                  "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
                "--border-color": `linear-gradient(160deg, rgb(var(--highlight)) 0%, rgb(var(--highlight) / 0.3) 33.33%, rgb(var(--highlight) / 0.14) 66.67%, rgb(var(--highlight) / 0.1) 100%)`,
              } as React.CSSProperties
            }
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
              {/* IMPORTANT : Hidden till I get comments from Malt */}
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="hidden w-6 h-6 text-yellow-500 fill-yellow-500 bg-gray-800 rounded-full p-1 shadow-md shadow-[#101010] border-t-2 border-gray-300/10"
                />
              ))}
            </div>
            {/* Comment in the center, aligned left */}
            {/* mt-5 instead of mt-0 when i'll get comments from Malt */}
            <p className="text-gray-300 text-left text-[15px] mt-0 mb-10">
              {testimonial.content}
            </p>
            {/* Profile photo and name on bottom left */}
            <div className="absolute bottom-4 left-6 flex items-center ">
              <div className="bg-gray-800 rounded-full p-1 shadow-md shadow-[#101010] border-t-1 border-gray-300/10 mr-4">
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
