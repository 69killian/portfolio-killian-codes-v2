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
    <div className="overflow-x-hidden items-center justify-center flex">
      {/* Images défilantes organisées en colonnes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-10 gap-8 items-center justify-center text-center">
        {[
          { src: stripint, alt: "Stripint, Intégration Stripe", link: "https://github.com/69killian/landing-page-stripe-subscription" },
          { src: arcadia, alt: "Arcadia, Zoo de Bretagne", link: "https://github.com/69killian/Arcadia-Zoo" },
          { src: shoesea, alt: "Shoesea, Site de chaussures en ligne", link: "https://github.com/69killian/Shoes-ecommerce-tailwind" },
          { src: portfolio, alt: "Portfolio Personnel", link: "https://github.com/69killian/portfolio-killian-codes-v2" },
          { src: pricing, alt: "Pricing Cards Challenge", link: "https://github.com/69killian/modern-landing-page-pricing-vuejs" },
          { src: cards, alt: "Cards Product", link: "https://github.com/69killian/product-cards-spikes-challenge-react" },
        ].map((image, index) => (
          <div key={index} className="relative group">
            {/* Envelopper l'image avec un lien */}
            
              {/* Image avec transition */}
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={280}
                className="rounded-[20px] object-cover bg-gray-800 p-2 shadow-lg shadow-[#101010] border-t-2 border-gray-300/10 transition-all duration-300 group-hover:opacity-70"
              />
            
            {/* Texte qui s'affiche au hover */}
            <a href={image.link} target="_blank" rel="noopener noreferrer">
            <div className="w-full absolute inset-0 flex rounded-[20px] items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
              <span className="text-white text-lg font-semibold">{image.alt}</span>
            </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeProject;
