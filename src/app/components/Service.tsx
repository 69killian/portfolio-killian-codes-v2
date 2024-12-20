"use client";
import React, { useEffect } from "react";
import SectionButton from "./SectionButton";
import { CSSProperties } from "react";
import Terminal from "../../../public/terminal.png";
import DataBase from "../../../public/database.png";
import Image from "next/image";
import Figma from "../../../public/figma.png";
import NumberTicker from "@/components/ui/number-ticker";
import MarqueeTech from "./MarqueeTech";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialisation avec une durée d'animation de 1 seconde
  }, []);

  return (
    <>
      <section id="services" className="container mx-auto px-4 pb-[210px] font-rethink">
        <div className="text-start mb-8" data-aos="fade-up">
          <SectionButton name="MES SERVICES" />
        </div>

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between pb-[50px]"
          data-aos="fade-up"
        >
          <h2 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-rethink text-shadow z-10 overflow-hidden">
            Là Où Vos Idées Rencontrent
            <br /> L’Excellence Technique.
          </h2>

          {/* Glass effect container */}
          <div
            className="relative w-full md:w-1/2 h-64 mt-8 md:mt-0 p-6 rounded-3xl bg-gradient-to-b from-white/20 to-gray-400/10 backdrop-blur-xl border border-gray-200/30 shadow-lg"
            style={{
              backgroundImage: `
                radial-gradient(circle at top, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.2)) 
              `,
            }}
            data-aos="fade-up"
          >
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-white opacity-20 rounded-full blur-2xl "></div>
            <div className="absolute top-12 right-12 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 rounded-full blur-lg"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                Une Expertise qui Va au-delà des Standards
              </h3>
              <p className="text-gray-300 text-sm">
                Avec une approche centrée sur l&apos;utilisateur, je conçois des applications performantes, esthétiques, et adaptées à vos besoins.
              </p>
              <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"></p>
              <div className="pt-[120px]">
                <MarqueeTech />
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up">
          <span className="text-[20px]">+</span>
          <NumberTicker
            value={20}
            suffix=" Projets Réalisés"
            direction="up"
            delay={1}
            className="text-[20px] text-white"
            decimalPlaces={0}
          />
          <br />
          <span className="text-[20px]">+</span>
          <NumberTicker
            value={4}
            suffix=" Clients Satisfaits"
            direction="up"
            delay={1}
            className="text-[20px] text-white"
            decimalPlaces={0}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div
            style={{
              "--background": "17 24 39",
              "--highlight": "156 156 156",
              "--bg-color":
                "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
              "--border-color": `linear-gradient(160deg,
                rgb(var(--highlight)) 0%,
                rgb(var(--highlight) / 0.3) 33.33%,
                rgb(var(--highlight) / 0.14) 66.67%,
                rgb(var(--highlight) / 0.1) 100%)`,
            } as CSSProperties}
            className="flex aspect-[2/1] w-full max-w-md flex-col rounded-[30px] border border-transparent p-8 text-left text-center 
            [background:padding-box_var(--bg-color),border-box_var(--border-color)] 
            shadow-[inset_0px_-4px_1px_0px_rgba(8,12,23,0.2)] relative overflow-hidden"
            data-aos="fade-up"
          >
            <div
              className="absolute top-[-210px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-white opacity-20 rounded-full"
              style={{
                zIndex: 0,
                filter: "blur(80px)",
              }}
            ></div>
            <Image
              src={Terminal}
              alt="Terminal Image"
              width={30}
              height={200}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <h3 className="text-xl font-bold mb-4">Analyse de projet</h3>
            <p className="text-gray-400">
              - Compréhension des besoins métier du client (problèmes,
              objectifs, utilisateurs cibles) <br />- Rédaction d’un cahier des
              charges technique et fonctionnel
            </p>
          </div>

          <div
            style={{
              "--background": "17 24 39",
              "--highlight": "156 156 156",
              "--bg-color":
                "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
              "--border-color": `linear-gradient(160deg,
                rgb(var(--highlight)) 0%,
                rgb(var(--highlight) / 0.3) 33.33%,
                rgb(var(--highlight) / 0.14) 66.67%,
                rgb(var(--highlight) / 0.1) 100%)`,
            } as CSSProperties}
            className="flex aspect-[2/1] w-full max-w-md flex-col rounded-[30px] border border-transparent p-8 text-left text-center 
            [background:padding-box_var(--bg-color),border-box_var(--border-color)] 
            shadow-[inset_0px_-4px_1px_0px_rgba(8,12,23,0.2)] relative overflow-hidden"
            data-aos="fade-up"
          >
            <div
              className="absolute top-[-210px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-white opacity-20 rounded-full"
              style={{
                zIndex: 0,
                filter: "blur(80px)",
              }}
            ></div>
            <Image
              src={Figma}
              alt="Figma Image"
              width={30}
              height={200}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <h3 className="text-xl font-bold mb-4">Intégration de Maquettes</h3>
            <p className="text-gray-400">
              - Réalisation de wireframes et prototypes <br />- Validation des
              maquettes par le client avant le développement
            </p>
          </div>

          <div
            style={{
              "--background": "17 24 39",
              "--highlight": "156 156 156",
              "--bg-color":
                "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
              "--border-color": `linear-gradient(160deg,
                rgb(var(--highlight)) 0%,
                rgb(var(--highlight) / 0.3) 33.33%,
                rgb(var(--highlight) / 0.14) 66.67%,
                rgb(var(--highlight) / 0.1) 100%)`,
            } as CSSProperties}
            className="flex aspect-[2/1] w-full max-w-md flex-col rounded-[30px] border border-transparent p-8 text-left text-center 
            [background:padding-box_var(--bg-color),border-box_var(--border-color)] 
            shadow-[inset_0px_-4px_1px_0px_rgba(8,12,23,0.2)] relative overflow-hidden"
            data-aos="fade-up"
          >
            <div
              className="absolute top-[-210px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-white opacity-20 rounded-full"
              style={{
                zIndex: 0,
                filter: "blur(80px)",
              }}
            ></div>
            <Image
              src={DataBase}
              alt="Database Image"
              width={30}
              height={200}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <h3 className="text-xl font-bold mb-4">Développement full-stack</h3>
            <p className="text-gray-400">
              - Construction des API selon le choix de stack <br />- Travail de
              fond sur les performances et le SEO
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
