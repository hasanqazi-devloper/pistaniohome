"use client";

import React from "react";

export default function HeritageStory() {
  const steps = [
    { 
      num: "01", 
      title: "Orchard Collection", 
      desc: "Direct harvesting of fresh plums, grapes, and barberries from partner orchards across Mazandaran." 
    },
    { 
      num: "02", 
      title: "Sun-Drying & Calibrated Moisture", 
      desc: "Traditional sun-drying controlled carefully to retain 15%–18% ideal moisture without chemical residues." 
    },
    { 
      num: "03", 
      title: "Double-Stage Sorting & Sizing", 
      desc: "Mechanical calibration and meticulous hand-sorting to remove stems, damaged fruits, and debris." 
    },
    { 
      num: "04", 
      title: "Lab Inspection & Packaging", 
      desc: "Official lab COA verification followed by packing in heavy-duty 5kg & 10kg 5-layer export cartons." 
    },
    { 
      num: "05", 
      title: "Border & Port Dispatch", 
      desc: "Seamless customs clearance and dispatch toward Iraq, India, GCC, and European destinations." 
    },
  ];

  return (
    <section className="py-16 md:py-16 bg-[#133A2E] text-[#F4F0E6] border-y border-[#1A4337] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-16 space-y-12 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
       
          <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
            Our 5-Step Orchard-To-Port Workflow
          </h2>
          <p className="text-[#F4F0E6]/70 text-sm font-medium">
            End-to-end quality control from Mazandaran processing facilities to your port.
          </p>
        </div>

        {/* WORKFLOW CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-[#0B2B22] border border-[#1A4337] p-6 rounded-2xl shadow-md space-y-3 hover:border-[#C5922E] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[#C5922E] block">{step.num}</span>
                <span className="w-2 h-2 rounded-full bg-[#1A4337]" />
              </div>
              <h3 className="text-sm font-black text-[#F4F0E6]">{step.title}</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed font-normal">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}