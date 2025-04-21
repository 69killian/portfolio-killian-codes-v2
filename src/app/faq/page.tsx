"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";

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
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-100">
    
    <Navbar/>
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">FAQ</h1>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
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
                <div className="px-6 pb-4 text-gray-400">{faq.answer}</div>
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
