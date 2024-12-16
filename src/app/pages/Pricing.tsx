import React from 'react';
import { Phone, Zap, CheckCircle } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Tarifs</h1>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4">Landing Page Sur Mesure</h3>
            <p className="text-gray-400 mb-6">Une page d&apos;atterrissage optimisée pour la conversion</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-gray-300" /> Design personnalisé</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-gray-300" /> Responsive design</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-gray-300" /> Optimisation SEO</li>
            </ul>
            <a href="tel:+33600000000" className="block w-full py-3 px-6 bg-gray-700 hover:bg-gray-600 rounded-lg text-center transition-colors duration-300">
              <Phone className="inline-block w-5 h-5 mr-2" />
              Appelez-moi
            </a>
          </div>
          <div className="p-8 rounded-lg bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 border-2 border-gray-500 hover:scale-105 transition-transform duration-300">
            <div className="absolute top-4 right-4 bg-gray-700 px-3 py-1 rounded-full text-sm">Premium</div>
            <h3 className="text-2xl font-bold mb-4">Services Pro Entreprises</h3>
            <p className="text-gray-400 mb-6">Solutions complètes pour votre entreprise</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-gray-300" /> Développement sur mesure</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-gray-300" /> Support dédié</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-gray-300" /> Maintenance continue</li>
            </ul>
            <a href="tel:+33600000000" className="block w-full py-3 px-6 bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 rounded-lg text-center transition-colors duration-300">
              <Zap className="inline-block w-5 h-5 mr-2" />
              Demander un devis TJM
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}