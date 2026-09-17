'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Leaf, CheckCircle2, ArrowUpRight, Award, Globe2 } from 'lucide-react';

export default function DirectSourcing() {
  const highlights = [
    "Direct sourcing from top organic orchards in Northern Iran.",
    "Modern sorting and packaging facilities in Mazandaran.",
    "Lab-certified moisture control and zero chemical additives.",
    "Zero middleman markup, ensuring competitive wholesale container rates."
  ];

  return (
    <section id="about-sourcing" className="py-16 bg-[#133A2E] text-[#F4F0E6] border-y border-[#1A4337] relative z-10 w-full overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#C5922E]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#C5922E]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">

        {/* MAIN ABOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* LEFT: CLIENT PICTURE & FLOATING CARD */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#1A4337] bg-[#0B2B22] shadow-2xl group">
              
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4E35AQG-fVnU1Z-ccQ/profile-framedphoto-shrink_800_800/B4EZ_598L3HYAY-/0/1786605192548?e=1790262000&v=beta&t=57WWsTo54_ew_Xzh1Rd1Ydn_CJ5JzCIVH4sIBna_8hM"
                  alt="Yasser garjiNattaj - TOSKA Organic Founder"
                  fill
                  className="object-cover object-top filter contrast-[1.05] grayscale-[10%] group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-transparent opacity-90" />
              </div>

              {/* FLOATING OVERLAY CARD */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0B2B22]/95 backdrop-blur-md border border-[#C5922E]/30 p-4 rounded-2xl space-y-1 shadow-lg">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black text-[#F4F0E6]">Yasser garjiNattaj</h4>
                  <span className="text-[10px] font-bold text-[#C5922E] bg-[#C5922E]/10 border border-[#C5922E]/30 px-2 py-0.5 rounded">
                    Founder &amp; Director
                  </span>
                </div>
                <p className="text-[11px] text-[#F4F0E6]/70 leading-normal">
                  "Dedicated to delivering authentic, lab-certified Iranian organic dried fruits globally."
                </p>
              </div>

              <div className="absolute top-4 right-4 bg-[#0B2B22]/80 backdrop-blur-md p-3 rounded-2xl border border-[#1A4337] text-[#C5922E]">
                <Leaf className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* RIGHT: HEADINGS, STORY, STATS & HIGHLIGHTS */}
      {/* RIGHT: CLEAN EDITORIAL CONTENT (NO CARDS) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* HEADER */}
            <div className="space-y-2">
              <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-[#C5922E]" /> Direct Sourcing &amp; Quality Control
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#F4F0E6] leading-tight">
                Eliminating Supply Chain Risks for Global Importers
              </h2>
            </div>

            {/* STORY PARAGRAPH */}
            <p className="text-xs sm:text-sm font-medium text-[#F4F0E6]/80 leading-relaxed">
              At TOSKA Organic, we bridge Northern Iran's fertile organic orchards directly with international wholesale buyers. By controlling processing, lab grading, and export packaging at our Mazandaran facility, we eliminate middleman markups and guarantee batch consistency.
            </p>

            {/* VALUE BULLETS (CLEAN LIST - NO CARD BOXES) */}
            <div className="space-y-3 pt-2">
              {highlights.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#F4F0E6]/90 font-medium leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* CERTIFICATION FOOTNOTE */}
            <div className="flex items-center gap-2 text-xs text-[#F4F0E6]/60 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#C5922E] shrink-0" />
              <span>Phytosanitary &amp; Official Lab Analysis Certified</span>
            </div>

            {/* ACTION CALLOUT (2 BUTTONS) */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Primary CTA */}
              <a
                href="#rfq"
                className="bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 uppercase tracking-wider active:scale-[0.98]"
              >
                <span>Request Sample Batch</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#specs"
                className="bg-[#0B2B22] hover:bg-[#133A2E] text-[#F4F0E6] border border-[#1A4337] hover:border-[#C5922E]/50 font-bold text-xs px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Download Lab Specs</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}