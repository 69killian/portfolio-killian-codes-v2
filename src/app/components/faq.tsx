"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionButton from '../components/SectionButton';

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quelle est votre approche du développement web ?",
      answer:
        "Je privilégie une approche centrée sur la performance et l'expérience utilisateur. Chaque projet est développé avec les meilleures pratiques actuelles, en utilisant des technologies modernes comme Next.js et PHP pour créer des solutions robustes et évolutives.",
    },
    {
      question: "Combien de temps faut-il pour réaliser une landing page ?",
      answer:
        "Le délai typique pour une landing page sur mesure est de 2 à 3 semaines, incluant les phases de conception, développement et révisions. Ce délai peut varier selon la complexité du projet.",
    },
    {
      question: "Proposez-vous un support après la mise en ligne ?",
      answer:
        "Oui, je propose un support technique et des mises à jour pendant 3 mois après le lancement. Des contrats de maintenance à plus long terme sont également disponibles.",
    },
     {
      question: "Quelle est votre approche du développement web ?",
      answer:
        "Je privilégie une approche centrée sur la performance et l'expérience utilisateur. Chaque projet est développé avec les meilleures pratiques actuelles, en utilisant des technologies modernes comme Next.js et PHP pour créer des solutions robustes et évolutives.",
    },
    {
      question: "Combien de temps faut-il pour réaliser une landing page ?",
      answer:
        "Le délai typique pour une landing page sur mesure est de 2 à 3 semaines, incluant les phases de conception, développement et révisions. Ce délai peut varier selon la complexité du projet.",
    },
    {
      question: "Proposez-vous un support après la mise en ligne ?",
      answer:
        "Oui, je propose un support technique et des mises à jour pendant 3 mois après le lancement. Des contrats de maintenance à plus long terme sont également disponibles.",
    },
  ];

  useEffect(() => {
    AOS.init({duration: 1000});
  },[]);

  return (
    <>
      <div data-aos='fade up' className="pt-24 font-rethink pb-[150px]">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-start justify-between">
          {/* Titre à gauche */}
          <div className="w-full md:w-2/3 pr-8 mb-10">
          <div className="mb-10">
            <SectionButton name='FAQ'/>
            </div>
            <h2 data-aos='fade up' className="relative text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-rethink text-shadow z-10 overflow-hidden">
              Toutes Les Réponses Dont Vous Avez Besoin.
            </h2>
            <p data-aos='fade up' className="relative text-lg sm:text-xl text-white max-w-2xl mx-auto font-rethink z-10 text-gray-200/50">
              Que vous soyez à la recherche d&apos;aide pour une commande, ou de solutions à vos questions fréquentes, cette section est conçue pour vous fournir des informations claires et complètes.
            </p>
          </div>
          
          {/* FAQ à droite */}
          <div data-aos='fade up' className="w-full md:w-2/3">
            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div data-aos='fade up'
                  key={index}
                  style={{
                    "--background": "17 24 39", // Couleur de fond dynamique
                    "--highlight": "156 156 156", // Couleur de surbrillance dynamique
                    "--bg-color": "linear-gradient(rgb(var(--background)), rgb(var(--background)))", // Gradient de fond
                    "--border-color": `linear-gradient(160deg, rgb(var(--highlight)) 0%, rgb(var(--highlight) / 0.3) 33.33%, rgb(var(--highlight) / 0.14) 66.67%, rgb(var(--highlight) / 0.1) 100%)`, // Gradient de bord
                  } as React.CSSProperties}
                  className="relative px-6 py-3 rounded-lg border border-transparent text-center text-white font-semibold
                  [background:padding-box_var(--bg-color),border-box_var(--border-color)]
                  shadow-[inset_0px_-4px_1px_0px_rgba(8,12,23,0.2)] overflow-hidden"
                >
                  <div
                    className="absolute top-[-200px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-white opacity-20 rounded-full"
                    style={{
                      zIndex: 0,
                      filter: "blur(80px)",
                    }}
                  ></div>
                  <button
                    className="w-full px-6 py-2 text-left flex justify-between items-center relative z-10"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 pb-4 text-gray-400 relative z-10">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
