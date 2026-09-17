"use client";

import React from "react";
import { CheckCircle2, XCircle, ShieldAlert, Award } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="py-16 bg-[#133A2E] text-[#F4F0E6] border-y border-[#1A4337]">
      <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
         
          <h2 className="text-2xl md:text-3xl font-black text-[#F4F0E6] tracking-tight">
            Traditional Exporters vs. TOSKA Organic
          </h2>
          <p className="text-[#F4F0E6]/70 text-xs font-medium">
            Compare middleman risk with TOSKA Organic direct Mazandaran processing &amp; lab standards.
          </p>
        </div>

        {/* COMPARISON CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* TRADITIONAL BROKER RISK */}
          <div className="bg-[#0B2B22]/70 border border-rose-500/30 rounded-2xl p-6 shadow-md flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-3">
                <h3 className="text-base font-bold text-[#F4F0E6] flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-rose-400" />
                  Unverified Middleman Sourcing
                </h3>
                <span className="text-[10px] font-black uppercase text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2 py-0.5 rounded">
                  High Risk
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#F4F0E6]/70 font-medium">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Uncontrolled moisture causing mold during sea/land transit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Inconsistent fruit grading—mixing lower grade raisins in bulk cartons.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Customs holds at Iraq border or Indian ports due to missing lab tests.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* TOSKA ORGANIC PROTOCOL */}
          <div className="bg-[#1A4337] border-2 border-[#C5922E] rounded-2xl p-6 shadow-xl relative flex flex-col justify-between space-y-4">
            <div className="absolute top-0 right-0 bg-[#C5922E] text-[#0B2B22] text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-bl-xl">
              DIRECT MAZANDARAN EXPORT
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-[#C5922E]/30 pb-3">
                <h3 className="text-base font-bold text-[#F4F0E6] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C5922E]" />
                  TOSKA Organic Guarantee
                </h3>
                <span className="text-[10px] font-black uppercase text-[#C5922E] bg-[#C5922E]/10 border border-[#C5922E]/30 px-2 py-0.5 rounded">
                  Guaranteed Quality
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#F4F0E6] font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                  <span>Calibrated moisture testing (15%–18%) &amp; certified lab analysis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                  <span>Double hand-sorting for Sun-Dried Plums &amp; Kashmar Green Raisins.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                  <span>5-layer heavy export cartons + complete Phytosanitary export docs.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}