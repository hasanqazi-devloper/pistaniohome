'use client';

import React from 'react';
import { ShieldCheck, Award, FileCheck2, Truck } from 'lucide-react';

export default function WhyChooseUsSection() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: "100% Pure Rafsanjan Origin",
      desc: "Direct supply from premium Kerman orchards with zero blending or mixed origins."
    },
    {
      icon: FileCheck2,
      title: "EU & GCC Compliant COA",
      desc: "Every container shipped includes batch-specific Lab Analysis & Phytosanitary Certificate."
    },
    {
      icon: Award,
      title: "Strict Moisture Control",
      desc: "Sun-dried and machine-processed under 5% moisture threshold to guarantee shelf freshness."
    },
    {
      icon: Truck,
      title: "Bandar Abbas Direct FOB",
      desc: "Streamlined port logistics with real-time tracking from dispatch to vessel loading."
    }
  ];

  return (
    <section className="bg-[#133A2E] text-[#F4F0E6] py-16 px-4 md:px-8 border-b border-[#1A4337] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
      
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F4F0E6]">
            Export-Grade Quality Standards
          </h2>
          <p className="text-xs sm:text-sm text-[#F4F0E6]/70 font-medium">
            Designed to meet the exact specifications of international food distributors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-[#051813] border border-[#1A4337] p-6 rounded-2xl space-y-3 hover:border-[#C5922E] transition-all"
              >
                <div className="p-3 bg-[#0B2B22] border border-[#1A4337] text-[#C5922E] rounded-xl w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#F4F0E6]">{item.title}</h3>
                <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}