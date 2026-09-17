'use client';

import React, { useState } from 'react';
import { Clock, ShieldCheck, FileText, Send, CheckCircle, Leaf } from 'lucide-react';

export default function RFQSection() {
  const [incoterm, setIncoterm] = useState('FOB');
  const [productType, setProductType] = useState('Sun-Dried Plums');
  const [containerQty, setContainerQty] = useState('1 x 20ft Container');

  return (
    <section id="rfq" className="relative bg-[#051813] text-[#F4F0E6] py-16 md:py-16 px-4 md:px-16 border-b border-[#1A4337] overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(#C5922E_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#C5922E]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto space-y-12">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
    
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#F4F0E6] leading-tight">
            Request Container Pricing (FOB / CIF)
          </h2>
          <p className="text-[#F4F0E6]/70 text-xs md:text-sm font-medium max-w-xl mx-auto leading-relaxed">
            Get official commercial quotation from TOSKA Organic. Verified Proforma Invoice and Lab Analysis Report included.
          </p>
        </div>

        {/* MAIN CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-6 bg-[#133A2E] border border-[#1A4337] p-6 md:p-8 rounded-3xl shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black text-[#C5922E] uppercase tracking-widest block mb-1">
                  Excellence Guaranteed
                </span>
                <h3 className="text-xl md:text-2xl font-black text-[#F4F0E6]">
                  TOSKA Organic Standards
                </h3>
              </div>

              <div className="space-y-5 border-y border-[#1A4337] py-6">

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#C5922E]/10 text-[#C5922E] rounded-xl border border-[#C5922E]/20 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F4F0E6] text-xs">Fast-Track Quote</h4>
                    <p className="text-[11px] text-[#F4F0E6]/60 mt-0.5 leading-normal">Official Proforma Invoice issued within hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#C5922E]/10 text-[#C5922E] rounded-xl border border-[#C5922E]/20 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F4F0E6] text-xs">Certified Documents</h4>
                    <p className="text-[11px] text-[#F4F0E6]/60 mt-0.5 leading-normal">Phytosanitary, Certificate of Origin &amp; Lab Analysis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#C5922E]/10 text-[#C5922E] rounded-xl border border-[#C5922E]/20 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#F4F0E6] text-xs">Flexible Terms</h4>
                    <p className="text-[11px] text-[#F4F0E6]/60 mt-0.5 leading-normal">Transparent T/T and border transfer options.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-[#0B2B22] border border-[#1A4337] p-4 rounded-2xl flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#C5922E]" />
                <span className="text-xs font-bold text-[#F4F0E6]">Direct Mazandaran Processor</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 bg-[#133A2E] border border-[#1A4337] p-6 md:p-8 rounded-3xl shadow-xl space-y-6">

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">

              <div className="space-y-2">
                <label className="text-xs font-black text-[#F4F0E6]/80 uppercase tracking-wider block">
                  1. Shipping Term (Incoterms 2020)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['FOB (Northern Border / Port)', 'CIF (Destination Port)'].map((term) => {
                    const termKey = term.split(' ')[0];
                    const isSelected = incoterm === termKey;
                    return (
                      <button
                        type="button"
                        key={term}
                        onClick={() => setIncoterm(termKey)}
                        className={`p-3.5 text-xs font-bold rounded-xl border transition-all text-left flex items-center justify-between ${isSelected
                            ? 'bg-[#C5922E] text-[#0B2B22] border-[#E2B755] font-black shadow-lg shadow-[#C5922E]/20'
                            : 'bg-[#0B2B22] border-[#1A4337] text-[#F4F0E6]/80 hover:border-[#C5922E]/40'
                          }`}
                      >
                        <span>{term}</span>
                        {isSelected && (
                          <CheckCircle className="w-4 h-4 text-[#0B2B22] fill-current" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#F4F0E6]/80">Product Selection</label>
                  <select
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    className="w-full bg-[#0B2B22] border border-[#1A4337] rounded-xl px-3.5 py-3 text-xs text-[#F4F0E6] font-medium focus:outline-none focus:border-[#C5922E] transition-colors"
                  >
                    <option>Sun-Dried Stew Plums (Grade A)</option>
                    <option>Kashmar Green Raisins (Long Type)</option>
                    <option>Uzbek Black Raisins (Jumbo Seedless)</option>
                    <option>Red Barberries (Zereshk Puffy)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#F4F0E6]/80">Target Order Volume</label>
                  <select
                    value={containerQty}
                    onChange={(e) => setContainerQty(e.target.value)}
                    className="w-full bg-[#0B2B22] border border-[#1A4337] rounded-xl px-3.5 py-3 text-xs text-[#F4F0E6] font-medium focus:outline-none focus:border-[#C5922E] transition-colors"
                  >
                    <option>1 x 20ft Container (Trial Batch)</option>
                    <option>1 x 40ft Container (Standard FCL)</option>
                    <option>2 - 5 x 40ft Containers (Monthly Contract)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#F4F0E6]/80">Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Al-Nour Organic Trading LLC"
                    className="w-full bg-[#0B2B22] border border-[#1A4337] rounded-xl px-3.5 py-3 text-xs text-[#F4F0E6] font-medium focus:outline-none focus:border-[#C5922E] transition-colors placeholder:text-[#F4F0E6]/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#F4F0E6]/80">Destination Port / Border</label>
                  <input
                    type="text"
                    placeholder="e.g. Umm Qasr / Jebel Ali / Nhava Sheva"
                    className="w-full bg-[#0B2B22] border border-[#1A4337] rounded-xl px-3.5 py-3 text-xs text-[#F4F0E6] font-medium focus:outline-none focus:border-[#C5922E] transition-colors placeholder:text-[#F4F0E6]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#F4F0E6]/80">Work Email</label>
                  <input
                    type="email"
                    placeholder="import@company.com"
                    className="w-full bg-[#0B2B22] border border-[#1A4337] rounded-xl px-3.5 py-3 text-xs text-[#F4F0E6] font-medium focus:outline-none focus:border-[#C5922E] transition-colors placeholder:text-[#F4F0E6]/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#F4F0E6]/80">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+964 770 000 0000"
                    className="w-full bg-[#0B2B22] border border-[#1A4337] rounded-xl px-3.5 py-3 text-xs text-[#F4F0E6] font-medium focus:outline-none focus:border-[#C5922E] transition-colors placeholder:text-[#F4F0E6]/40"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-[11px] sm:text-xs md:text-sm px-4 py-3.5 sm:py-4 rounded-xl shadow-lg transition-all uppercase tracking-wider flex items-center justify-center gap-2 mt-2 cursor-pointer active:scale-[0.98] select-none"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span className="text-center">Submit RFQ &amp; Request Proforma Invoice</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}