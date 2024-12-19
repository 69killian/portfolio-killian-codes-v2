"use client";

import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const dynamicStyle = {
    "--background": "17 24 39", // Couleur de fond dynamique
    "--highlight": "156 156 156", // Couleur de surbrillance dynamique
    "--bg-color": "linear-gradient(rgb(var(--background)), rgb(var(--background)))", // Gradient de fond
    "--border-color": `linear-gradient(160deg, rgb(var(--highlight)) 0%, rgb(var(--highlight) / 0.3) 33.33%, rgb(var(--highlight) / 0.14) 66.67%, rgb(var(--highlight) / 0.1) 100%)`, // Gradient de bord
  } as React.CSSProperties;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pb-[150px] font-rethink">
        <h1 className="text-4xl font-bold text-center mb-12">Contactez-moi</h1>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div
            style={dynamicStyle}
            className="relative px-6 py-3 rounded-lg border border-transparent text-center text-white font-semibold
            [background:padding-box_var(--bg-color),border-box_var(--border-color)]
            shadow-[inset_0px_-4px_1px_0px_rgba(8,12,23,0.2)] overflow-hidden h-[200px]"
          >
            <div
              className="absolute top-[-200px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-white opacity-20 rounded-full"
              style={{
                zIndex: 0,
                filter: "blur(80px)",
              }}
            ></div>
            <h2 className="text-xl font-semibold mb-4">Informations de contact</h2>
            <div className="space-y-4">
              <a href="tel:+33600000000" className="flex items-center text-gray-300 hover:text-white">
                <Phone className="w-5 h-5 mr-3" />
                +33 6 24 49 91 65
              </a>
              <a href="mailto:killian.codes69@gmail.com" className="flex items-center text-gray-300 hover:text-white">
                <Mail className="w-5 h-5 mr-3" />
                killian.codes69@gmail.com
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3" />
                Lyon, France
              </div>
            </div>
          </div>

          <form
            style={dynamicStyle}
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
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Nom</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              ></textarea>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 rounded-lg transition-colors">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
