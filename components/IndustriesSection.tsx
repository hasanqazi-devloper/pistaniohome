'use client';

import React from 'react';
import { ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';

export default function SupplyChainHighlights() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-[#FAF5E8] border-b border-[#E6DBBF] relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* LEFT CONTENT SIDE */}
        <div className="md:col-span-7 space-y-4">
      
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2B22]">
            Eliminating Supply Chain Risks For Importers
          </h2>
          <p className="text-xs sm:text-sm text-[#0B2B22]/80 leading-relaxed">
            We mitigate international transit risks through rigorous lab inspections, moisture barrier packaging, and direct vessel loading from Southern Iranian ports.
          </p>

          <div className="space-y-3 pt-2">
            {[
              "Guaranteed aflatoxin & moisture test report prior to loading.",
              "Vacuum-sealed poly bag inner lining to preserve freshness.",
              "Direct FOB / CIF container booking without broker delays."
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-[#0B2B22] font-semibold">
                <CheckCircle className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#rfq"
              className="inline-flex items-center gap-2 bg-[#0B2B22] hover:bg-[#133A2E] text-[#F4F0E6] text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md"
            >
              <span>Get Risk-Free Quote</span>
              <ArrowRight className="w-4 h-4 text-[#C5922E]" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: PURE TRANSPARENT PNG (NO CARD BACKGROUND) */}
        <div className="md:col-span-5 relative flex items-center justify-center">
          {/* Gentle Soft Radial Shadow Under PNG */}
          <div className="absolute bottom-2 w-3/4 h-8 bg-[#0B2B22]/10 rounded-full blur-xl pointer-events-none" />

          {/* Transparent PNG Image */}
          <div className="relative z-10 w-full max-w-[340px] sm:max-w-[400px]">
            <img
              src="/about.png" // Isukat ti transparent PNG path-mo ditoy
              alt="Iranian Pistachios Transparent"
              className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}