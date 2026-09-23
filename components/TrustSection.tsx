'use client';

import React from 'react';
import { Check, X, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-[#FAF5E8] text-[#0B2B22] border-b border-[#E6DBBF]">
      <div className="max-w-5xl mx-auto space-y-8">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
    
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2B22]">
            Traditional Exporters vs. Pistachio Home
          </h2>
          <p className="text-xs sm:text-sm text-[#0B2B22]/70 font-medium">
            How we eliminate middleman risks and deliver guaranteed Rafsanjan quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* TRADITIONAL EXPORTERS */}
          <div className="bg-[#FFFFFF] border border-[#E2D5B8] p-6 rounded-3xl shadow-sm space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#E2D5B8] pb-3">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                <ShieldAlert className="w-4 h-4" />
                <span>Traditional Middlemen</span>
              </div>
              <span className="text-[10px] bg-red-100 text-red-800 font-black px-2.5 py-0.5 rounded-full uppercase">
                High Risk
              </span>
            </div>
            
            <ul className="space-y-3 text-xs text-[#0B2B22]/80 font-medium">
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Unpredictable moisture levels causing mold during ocean transit.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Multiple broker markups adding up to 15% unnecessary costs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Risk of EU/GCC customs rejection due to inconsistent lab COAs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Mixed batch shipments leading to non-uniform kernel sizes.</span>
              </li>
            </ul>
          </div>

          {/* PISTACHIO HOME */}
          <div className="bg-[#0B2B22] text-[#F4F0E6] border border-[#C5922E] p-6 rounded-3xl shadow-xl space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#1A4337] pb-3">
              <div className="flex items-center gap-2 text-[#C5922E] font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Pistachio Home Supply</span>
              </div>
              <span className="text-[10px] bg-[#C5922E] text-[#0B2B22] font-black px-2.5 py-0.5 rounded-full uppercase">
                Direct &amp; Safe
              </span>
            </div>

            <ul className="space-y-3 text-xs text-[#F4F0E6]/90 font-medium">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                <span>100% Rafsanjan orchard origin with strict moisture indexing (&lt;5%).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                <span>Direct farm-to-container pipeline with zero middleman markups.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                <span>SGS lab certified zero-aflatoxin guarantee for international customs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                <span>Laser-sorted mechanical sizing for uniform ounce count per batch.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}