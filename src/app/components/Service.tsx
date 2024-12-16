import React from 'react'
import { Code2, Rocket, Database } from 'lucide-react';

const Service = () => {
  return (
    <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Mes Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 hover:scale-105 transition-transform duration-300">
            <Code2 className="w-12 h-12 mb-4 text-gray-300" />
            <h3 className="text-xl font-bold mb-4">Développement Next.js</h3>
            <p className="text-gray-400">Applications web modernes et performantes avec React et Next.js</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 hover:scale-105 transition-transform duration-300">
            <Database className="w-12 h-12 mb-4 text-gray-300" />
            <h3 className="text-xl font-bold mb-4">Solutions PHP</h3>
            <p className="text-gray-400">Applications robustes et évolutives avec PHP moderne</p>
          </div>
          <div className="p-6 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 hover:scale-105 transition-transform duration-300">
            <Rocket className="w-12 h-12 mb-4 text-gray-300" />
            <h3 className="text-xl font-bold mb-4">Optimisation</h3>
            <p className="text-gray-400">Amélioration des performances et de l&apos;expérience utilisateur</p>
          </div>
        </div>
      </section>
  )
}

export default Service