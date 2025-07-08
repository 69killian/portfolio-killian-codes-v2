"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Mail, MapPin, Phone } from "lucide-react";
import SectionButton from "./SectionButton";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div id="contact" className="container mx-auto px-4 py-[150px] ">
        <div className="text-center mb-10">
          <SectionButton name="CONTACT" />
        </div>

        <h2
          data-aos="fade up"
          className="font-light text-center relative text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text text-shadow z-10 overflow-hidden mb-10"
        >
          Partant(e) ? <br />
          Travaillons ensemble.
        </h2>
        <p
          data-aos="fade up"
          className="relative text-center text-lg sm:text-xl text-white max-w-2xl mx-auto font-light z-10 text-gray-200/50 mb-10"
        >
          Je vous propose que nous discutions ensemble de votre projet, afin
          d&apos;avoir une vision d&apos;ensemble de ce que vous souhaitez.
        </p>

        {/* Information de contact centrée */}
        <div className="max-w-2xl mx-auto mb-8">
          <div
            data-aos="fade up"
            className="relative px-6 py-3 rounded-[25px] border-t-2 border-gray-300/10 text-center text-white font-semibold
            bg-gray-900 overflow-hidden shadow-md shadow-[#101010] p-1 h-[200px]"
          >
            <div
              className="absolute top-[-200px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-white opacity-20 rounded-full"
              style={{
                zIndex: 0,
                filter: "blur(80px)",
              }}
            ></div>
            <h3 className="relative text-2xl sm:text-2xl md:text-4xl lg:text-3xl font-bold bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-rethink text-shadow z-10 overflow-hidden mb-5">
              Information de Contact
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+33624499165"
                className="flex items-center text-gray-300 hover:text-white"
              >
                <Phone className="w-5 h-5 mr-3" />
                +33 6 24 49 91 65
              </a>
              <a
                href="mailto:killian.codes69@gmail.com"
                className="flex items-center text-gray-300 hover:text-white"
              >
                <Mail className="w-5 h-5 mr-3" />
                killian.codes69@gmail.com
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3" />
                Lyon, France
              </div>
            </div>
          </div>
        </div>

        {/* Calendly Embed Widget */}
        <div className="max-w-4xl mx-auto">
          <div
            data-aos="fade up"
            className="relative rounded-[25px] border-t-2 border-gray-300/10 bg-gray-900 overflow-hidden shadow-md shadow-[#101010] p-1"
          >
            <div
              className="absolute top-[-200px] left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] bg-white opacity-20 rounded-full"
              style={{
                zIndex: 0,
                filter: "blur(80px)",
              }}
            ></div>
            <div className="relative z-10 p-4">
              <iframe
                src="https://calendly.com/killiancodes?text_color=ffffff&background_color=1f2937"
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded-lg"
                title="Calendly - Réserver un rendez-vous"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
