'use client';

import React, { useState } from "react";
import { ShieldCheck, Clock, Award, CheckCircle2, Sparkles, ArrowRight, Shield } from "lucide-react";

export default function WhyChooseUsSection() {
  const [activeStep, setActiveStep] = useState(0);

  const points = [
    {
      step: "01",
      icon: ShieldCheck,
      title: "Quality Control",
      desc: "SGS lab tested for moisture, purity, & zero chemical residues.",
      badge: "SGS Certified",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
    },
    {
      step: "02",
      icon: Clock,
      title: "On-Time Shipping",
      desc: "Direct port dispatch ensuring guaranteed vessel arrival schedule.",
      badge: "Direct Vessel",
      img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
    },
    {
      step: "03",
      icon: Award,
      title: "Factory Rates",
      desc: "Direct producer pricing with 0% middleman markups.",
      badge: "0% Middlemen",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      step: "04",
      icon: CheckCircle2,
      title: "Custom Packaging",
      desc: "Tailored 5kg/10kg cartons, poly bags & private label branding.",
      badge: "OEM & Branding",
      img: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="h-screen max-h-screen bg-[#133A2E] text-[#F4F0E6] p-3 md:p-5 py-16 md:py-16 border-y border-[#1A4337] overflow-hidden flex flex-col justify-between relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#C5922E]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-between gap-2.5 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex items-center justify-between border-b border-[#1A4337] pb-2 shrink-0">
          <div>
          
            <h2 className="text-lg md:text-2xl font-black tracking-tight text-[#F4F0E6] mt-0.5">
              Minimizing Supply Chain Risks for Global Importers
            </h2>
          </div>
          <span className="text-[10px] text-[#C5922E] font-extrabold bg-[#133A2E] px-2.5 py-1 rounded-lg border border-[#1A4337] hidden sm:block">
            Verified B2B Export Line
          </span>
        </div>

        {/* MOBILE PICTURE PREVIEW FRAME (Visible only on Mobile) */}
        <div className="block lg:hidden h-36 w-full rounded-xl overflow-hidden border border-[#1A4337] relative shrink-0">
          <img 
            src={points[activeStep].img} 
            alt={points[activeStep].title} 
            className="w-full h-full object-cover transition-all duration-500 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-black/30" />
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
            <span className="text-xs font-black text-[#F4F0E6] bg-[#0B2B22]/90 backdrop-blur-md px-2.5 py-0.5 rounded-lg border border-[#1A4337]">
              Step {points[activeStep].step}: {points[activeStep].title}
            </span>
            <span className="text-[9px] font-bold text-[#C5922E] bg-[#0B2B22]/90 px-2 py-0.5 rounded-md border border-[#C5922E]/30">
              {points[activeStep].badge}
            </span>
          </div>
        </div>

        {/* MAIN SPLIT-VIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 min-h-0 items-center">
          
          {/* LEFT PANEL: INTERACTIVE COMPACT STEPS */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full gap-2 py-0.5">
            {points.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeStep === index;
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer p-2.5 md:p-3 rounded-xl border transition-all duration-300 flex items-center gap-3 ${
                    isActive 
                      ? "bg-[#133A2E] border-[#C5922E] shadow-lg translate-x-1" 
                      : "bg-[#133A2E]/30 border-[#1A4337] hover:bg-[#133A2E]/60"
                  }`}
                >
                  <div className={`p-2 rounded-lg border shrink-0 ${
                    isActive ? "bg-[#C5922E] text-[#0B2B22] border-[#C5922E]" : "bg-[#0B2B22] text-[#C5922E] border-[#1A4337]"
                  }`}>
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                  </div>

                  <div className="space-y-0.5 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-xs md:text-sm font-black truncate ${isActive ? "text-[#C5922E]" : "text-[#F4F0E6]"}`}>
                        {item.title}
                      </h3>
                      <span className="text-[9px] font-bold text-[#F4F0E6]/50 uppercase">{item.step}</span>
                    </div>
                    <p className="text-[#F4F0E6]/75 text-[11px] leading-snug line-clamp-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT PANEL: DESKTOP DYNAMIC IMAGE FRAME (Hidden on Mobile, Visible on LG screens) */}
          <div className="hidden lg:flex lg:col-span-6 h-full flex-col justify-between bg-[#133A2E] border border-[#1A4337] p-2.5 rounded-2xl relative overflow-hidden shadow-2xl">
            
            <div className="relative w-full h-[75%] rounded-xl overflow-hidden border border-[#1A4337] group">
              <img 
                src={points[activeStep].img} 
                alt={points[activeStep].title} 
                className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs font-black text-[#F4F0E6] bg-[#0B2B22]/80 backdrop-blur-md px-3 py-1 rounded-xl border border-[#1A4337]">
                  {points[activeStep].title}
                </span>
                <span className="text-[10px] text-[#C5922E] font-bold bg-[#0B2B22]/90 px-2.5 py-1 rounded-lg border border-[#C5922E]/40 flex items-center gap-1">
                  <Shield className="w-3 h-3 text-[#C5922E]" /> {points[activeStep].badge}
                </span>
              </div>
            </div>

            <div className="bg-[#0B2B22] border border-[#1A4337] p-2.5 rounded-xl flex items-center justify-between text-xs mt-1.5">
              <div className="space-y-0.5">
                <span className="text-[9px] text-[#C5922E] font-bold uppercase tracking-wider block">Operational Guarantee</span>
                <span className="text-xs font-bold text-[#F4F0E6]">Strict Compliance & Transparent Process</span>
              </div>
              <div className="w-7 h-7 rounded-lg bg-[#133A2E] border border-[#1A4337] flex items-center justify-center text-[#C5922E]">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM NUMERIC COUNTERS */}
        <div className="w-full bg-[#051813] border border-[#1A4337] rounded-xl p-2 shadow-lg shrink-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 text-center">
            <div className="border-r border-[#1A4337] last:border-0 p-0.5">
              <span className="block text-base md:text-xl font-black text-[#C5922E]">100%</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-wider text-[#F4F0E6]/80 font-extrabold">Natural &amp; Organic</span>
            </div>
            <div className="border-r border-[#1A4337] last:border-0 p-0.5">
              <span className="block text-base md:text-xl font-black text-[#C5922E]">24/7</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-wider text-[#F4F0E6]/80 font-extrabold">Export Assistance</span>
            </div>
            <div className="border-r border-[#1A4337] last:border-0 p-0.5">
              <span className="block text-base md:text-xl font-black text-[#C5922E]">20+</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-wider text-[#F4F0E6]/80 font-bold">Global Ports</span>
            </div>
            <div className="p-0.5">
              <span className="block text-base md:text-xl font-black text-[#C5922E]">0%</span>
              <span className="text-[8px] md:text-[9px] uppercase tracking-wider text-[#F4F0E6]/80 font-bold">Middlemen Markup</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}