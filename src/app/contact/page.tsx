"use client";

import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-100">
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-100 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contactez-moi</h1>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Informations de contact</h2>
              <div className="space-y-4">
                <a href="tel:+33600000000" className="flex items-center text-gray-300 hover:text-white">
                  <Phone className="w-5 h-5 mr-3" />
                  +33 6 00 00 00 00
                </a>
                <a href="mailto:contact@killiancodes.dev" className="flex items-center text-gray-300 hover:text-white">
                  <Mail className="w-5 h-5 mr-3" />
                  contact@killiancodes.dev
                </a>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3" />
                  Paris, France
                </div>
              </div>
            </div>
          </div>

          <form className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg">
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
    </div>
    </div>
    </>
  );
}