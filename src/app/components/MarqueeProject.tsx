import React from 'react';
import Image from 'next/image';
import stripint from "../../../public/black.png";
import arcadia from "../../../public/arcadia.png";
import shoesea from "../../../public/shoesea.png";
import portfolio from "../../../public/portfolio.png";
import pricing from "../../../public/pricing.png";
import cards from "../../../public/cards.png";

const MarqueeProject = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Images défilantes en dessous des boutons */}
      <div className="flex animate-marquee-projects space-x-8">
        {[
          { src: stripint, alt: "Stripint" },
          { src: arcadia, alt: "Arcadia" },
          { src: shoesea, alt: "Shoesea" },
          { src: portfolio, alt: "Portfolio" },
          { src: pricing, alt: "Pricing" },
          { src: cards, alt: "Cards" },
        ].map((image, index) => (
          <div key={index} className="relative group">
            {/* Image avec transition */}
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={24}
              className="rounded-md object-contain bg-gray-800 p-2 shadow-lg shadow-[#101010] border-t-2 border-gray-300/10 transition-all duration-300 group-hover:opacity-70"
            />
            {/* Texte qui s'affiche au hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <span className="text-white text-lg font-semibold">Voir ce Projet</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeProject;
