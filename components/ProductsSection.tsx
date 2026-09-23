"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

const products = [
  {
    id: "akbari",
    name: "Akbari Pistachio",
    type: "Super Long Grade",
    ounces: "20/22 - 22/24",
    image: "/p1.png",
  },
  {
    id: "ahmad-aghaei",
    name: "Ahmad Aghaei",
    type: "Long Grade",
    ounces: "22/24 - 24/26",
    image: "/p2.png",
  },
  {
    id: "fandoghi",
    name: "Fandoghi Pistachio",
    type: "Round Grade",
    ounces: "28/30 - 30/32",
    image: "/p3.png",
  },
  {
    id: "kalleh-ghouchi",
    name: "Kalleh Ghouchi",
    type: "Jumbo Grade",
    ounces: "20/22 - 22/24",
    image: "/p4.png",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-[#051813] text-[#EFECE6] border-b border-[#1A4337] relative overflow-hidden">
      
      {/* BACKGROUND GLOW ACCENTS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C5922E]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-16 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          {/* <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#C5922E] bg-[#C5922E]/10 border border-[#C5922E]/30 px-4 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            Premium Export Catalog
          </div> */}
          <h2 className="text-3xl md:text-5xl font-black text-[#EFECE6] tracking-tight">
            Select Pistachio Variety
          </h2>
          <p className="text-[#EFECE6]/70 text-xs md:text-sm font-medium">
            Hover over any grade to inspect export specifications & request bulk quotes.
          </p>
        </div>

        {/* 3D FLOATING PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="group relative h-[320px] bg-gradient-to-b from-[#0B2B22] to-[#08221B] border border-[#1A4337] hover:border-[#C5922E] rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 shadow-2xl hover:shadow-[0_20px_40px_rgba(197,146,46,0.2)] overflow-hidden cursor-pointer"
            >
              {/* TOP BADGE */}
              {/* <div className="flex justify-between items-center z-10">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#C5922E] bg-[#C5922E]/10 border border-[#C5922E]/30 px-2.5 py-1 rounded-lg backdrop-blur-md">
                  {item.ounces}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#C5922E] shadow-[0_0_8px_#C5922E]" />
              </div> */}

              {/* FLOATING PNG CONTAINER WITH BACKDROP PEDESTAL GLOW */}
              <div className="relative w-full h-48 flex items-center justify-center my-auto">
                {/* RADIAL GOLD GLOW BEHIND IMAGE */}
                <div className="absolute w-32 h-32 bg-[#C5922E]/20 rounded-full blur-2xl group-hover:bg-[#C5922E]/35 transition-all duration-500" />
                
                {/* PODIUM SHADOW */}
                <div className="absolute bottom-2 w-28 h-4 bg-black/40 rounded-[100%] blur-md group-hover:scale-125 group-hover:bg-black/60 transition-all duration-500" />

                <div className="relative w-44 h-44 transition-transform duration-700 ease-out group-hover:scale-115 group-hover:-translate-y-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.7)]"
                  />
                </div>
              </div>

              {/* CARD FOOTER & HOVER ACTION */}
              <div className="w-full text-center space-y-3 z-10">
                <div>
                  {/* <span className="text-[10px] font-extrabold text-[#C5922E] uppercase tracking-widest block opacity-80">
                    {item.type}
                  </span> */}
                  <h3 className="text-xl font-black text-[#EFECE6] group-hover:text-[#C5922E] transition-colors">
                    {item.name}
                  </h3>
                </div>

                {/* HOVER SLIDE-UP CTA */}
                <a
                  href="#rfq"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#C5922E] hover:bg-[#B38226] text-[#051813] py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-lg transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <span>Inquire Bulk Quote</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}