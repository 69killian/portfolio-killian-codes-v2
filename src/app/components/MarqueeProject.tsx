"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { CSSProperties, useEffect } from "react";
import admina from "../../../public/admina.png";
import stripint from "../../../public/black.png";
import gitify from "../../../public/gitify.png";
import invoiceSync from "../../../public/invoice-sync.png";
import modea from "../../../public/modea.png";
import trackhub from "../../../public/trackhub.png";

const MarqueeProject = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      src: gitify,
      alt: "Gitify",
      title: "Gitify",
      description: "Challenges GitHub interactifs",
      link: "https://warmhearted-imagine-949567.framer.app/",
      tags: ["React", "GitHub API", "Framer"],
      featured: true,
    },
    {
      src: trackhub,
      alt: "TrackHub",
      title: "TrackHub",
      description: "Dashboard de suivi d'habitudes personnalisé",
      link: "https://track-hub-seven.vercel.app/",
      tags: ["Next.js", "Dashboard", "Analytics"],
      featured: true,
    },
    {
      src: invoiceSync,
      alt: "InvoiceSync",
      title: "InvoiceSync",
      description: "Application de facturation en ligne",
      link: "https://invoice-sync-lilac.vercel.app/",
      tags: ["ASP.NET", "React", "PostgreSQL"],
    },
    {
      src: admina,
      alt: "Admina",
      title: "Admina",
      description: "Interface d'administration moderne",
      link: "https://just-branding-655225.framer.app/",
      tags: ["Admin", "UI/UX", "Branding"],
    },
    {
      src: stripint,
      alt: "Stripint",
      title: "Stripint",
      description: "Intégration complète Stripe avec abonnements",
      link: "https://landing-page-stripe-subscription-two.vercel.app/",
      tags: ["Stripe", "Payment", "SaaS"],
    },
    {
      src: modea,
      alt: "Modea",
      title: "Modea Store",
      description: "E-commerce full-stack moderne",
      link: "https://modea-e-commerce-full-stack-app-store.vercel.app/",
      tags: ["E-commerce", "Full-Stack", "React"],
      featured: true,
    },
  ];

  return (
    <div className="overflow-hidden py-16 px-4 font-rethink">
      <div className="max-w-7xl mx-auto">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={
                {
                  "--background": "17 24 39",
                  "--highlight": "156 156 156",
                  "--bg-color":
                    "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
                  "--border-color": `linear-gradient(160deg,
                  rgb(var(--highlight)) 0%,
                  rgb(var(--highlight) / 0.3) 33.33%,
                  rgb(var(--highlight) / 0.14) 66.67%,
                  rgb(var(--highlight) / 0.1) 100%)`,
                } as CSSProperties
              }
              className={`group relative overflow-hidden rounded-[30px] border border-transparent 
              [background:padding-box_var(--bg-color),border-box_var(--border-color)] 
              shadow-[inset_0px_-4px_1px_0px_rgba(8,12,23,0.2)] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5 ${
                project.featured ? "lg:col-span-1 md:row-span-1" : ""
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full font-rethink">
                    Featured
                  </span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4 relative z-10">
                {/* Title and Description */}
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text mb-2 group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-200/70 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-gray-800/50 text-gray-200/80 px-2 py-1 rounded-md border border-gray-700/50 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn relative inline-flex items-center gap-2 text-gray-200/70 hover:text-white font-rethink font-medium transition-all duration-300 border-b border-gray-600/50 hover:border-white/70 pb-1"
                >
                  <span>Voir le projet</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </a>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeProject;
