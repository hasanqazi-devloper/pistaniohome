'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowDown, 
  Ship, 
  Truck, 
  Globe2, 
  FileText, 
  Anchor, 
  Box, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  ArrowUpRight, 
  Download,
  ShieldAlert
} from 'lucide-react';

export default function ExportPage() {
  const incoterms = [
    {
      code: 'FOB',
      title: 'Free On Board',
      desc: 'We handle inland transportation, customs export clearance, and loading onto the vessel at origin port.'
    },
    {
      code: 'CIF',
      title: 'Cost, Insurance & Freight',
      desc: 'Complete coverage including marine insurance and maritime freight charges paid up to your destination port.'
    },
    {
      code: 'CFR',
      title: 'Cost and Freight',
      desc: 'Freight paid to destination port. Buyer arranges local marine transit insurance coverage.'
    },
    {
      code: 'EXW',
      title: 'Ex Works',
      desc: 'Bulk goods made ready at our Northern processing facility for buyer-managed pickup and carrier dispatch.'
    }
  ];

  const shippingDocs = [
    'Official Phytosanitary Certificate',
    'Certificate of Origin (Chamber of Commerce)',
    'Commercial Invoice & Packing List',
    'Clean Bill of Lading (B/L)',
    'Batch Certificate of Analysis (COA)',
    'Non-GMO & Radiation-Free Declaration'
  ];

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-16 md:py-16 border-b border-[#1A4337]">
        {/* Background Image & Overlay Gradients */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
            alt="Export Logistics Container Ship"
            fill
            priority
            className="object-cover object-center opacity-20 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B22] via-[#0B2B22]/90 to-[#0B2B22]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-[#0B2B22]/80" />
        </div>

        {/* Ambient Brand Glow Effects */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5922E]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#1A4337]/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-7 text-left">

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              <span className="text-[#F4F0E6]">EXPORT &amp; </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">LOGISTICS.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Seamless Freight Dispatch &amp; Global Trade Fulfillment
            </h2>

            {/* Paragraph */}
            <p className="text-[#F4F0E6]/80 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Equipped for high-volume B2B supply chains with climate-controlled reefer shipping, complete phytosanitary documentation, and flexible FOB/CIF Incoterms.
            </p>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="#incoterms"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>VIEW SHIPPING TERMS</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INCOTERMS SUPPORT GRID */}
      <section id="incoterms" className="py-20 md:py-28 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
              TRADE TERMS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Supported Incoterms (2020)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {incoterms.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <div className="text-2xl font-black text-[#C5922E] tracking-wider">{item.code}</div>
                <h3 className="text-base font-bold text-[#F4F0E6]">{item.title}</h3>
                <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CONTAINER LOAD & PACKAGING SPECS (TABLE) */}
      <section className="py-20 md:py-28 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
              CONTAINER CAPACITY &amp; PACKAGING
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Standard Export Shipping Capacities
            </h2>
          </div>

          {/* Table Container */}
          <div className="bg-[#133A2E] border border-[#1A4337] rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0B2B22] text-[#C5922E] uppercase font-black tracking-wider border-b border-[#1A4337]">
                  <tr>
                    <th className="p-5 sm:p-6">Container Type</th>
                    <th className="p-5 sm:p-6">Master Packaging</th>
                    <th className="p-5 sm:p-6">Net Freight Weight</th>
                    <th className="p-5 sm:p-6">Temperature Setting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A4337] text-[#F4F0E6]/80 font-medium">
                  <tr className="hover:bg-[#0B2B22]/40 transition">
                    <td className="p-5 sm:p-6 font-bold text-[#F4F0E6]">20ft FCL Container</td>
                    <td className="p-5 sm:p-6">10kg Food-Grade Master Cartons</td>
                    <td className="p-5 sm:p-6 text-[#C5922E] font-bold">12 to 14 Metric Tons</td>
                    <td className="p-5 sm:p-6">+2°C to +5°C (Controlled Reefer)</td>
                  </tr>
                  <tr className="hover:bg-[#0B2B22]/40 transition">
                    <td className="p-5 sm:p-6 font-bold text-[#F4F0E6]">40ft High Cube Reefer</td>
                    <td className="p-5 sm:p-6">10kg Vacuum Sealed Inner Polybags</td>
                    <td className="p-5 sm:p-6 text-[#C5922E] font-bold">24 to 26 Metric Tons</td>
                    <td className="p-5 sm:p-6">0°C to +4°C (Humidity Controlled)</td>
                  </tr>
                  <tr className="hover:bg-[#0B2B22]/40 transition">
                    <td className="p-5 sm:p-6 font-bold text-[#F4F0E6]">LCL Air Freight (Samples)</td>
                    <td className="p-5 sm:p-6">5kg Custom Sample Boxes</td>
                    <td className="p-5 sm:p-6 text-[#C5922E] font-bold">100kg to 1,000kg</td>
                    <td className="p-5 sm:p-6">Ambient Thermal Foil Wrapped</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 4. DOCUMENTATION & CUSTOMS COMPLIANCE */}
      <section className="py-20 md:py-28 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: CONTENT */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full">
              <FileText className="w-4 h-4" />
              <span>CUSTOMS COMPLIANCE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              100% Guaranteed Clearance &amp; Zero Port Friction
            </h2>
            
            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed font-normal">
              Every shipment is backed by a full set of international export documentation carefully audited before vessel departure to ensure smooth import clearance across GCC, European, and Asian ports.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {shippingDocs.map((doc, idx) => (
                <div key={idx} className="p-3.5 bg-[#0B2B22] border border-[#1A4337] rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C5922E] shrink-0" />
                  <span className="text-xs font-bold text-[#F4F0E6]">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="lg:col-span-6 relative h-80 sm:h-[450px] rounded-3xl overflow-hidden border border-[#1A4337] bg-[#0B2B22] shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80"
              alt="Port Logistics Container Terminal"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0B2B22]/90 border border-[#1A4337] rounded-2xl backdrop-blur-md">
              <h3 className="text-base font-bold text-[#F4F0E6]">Port of Origin: Bandar Abbas &amp; Chabahar</h3>
              <p className="text-xs text-[#F4F0E6]/70 mt-1">
                Direct maritime shipping corridors to Dubai (Jebel Ali), Qingdao, Hamburg, and Rotterdam.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION (FREIGHT QUOTE) */}
      <section className="py-24 md:py-32 bg-[#0B2B22] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5922E]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
            FREIGHT ESTIMATION &amp; QUOTE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4F0E6] tracking-tight leading-tight">
            Request Freight Rates to Your Port
          </h2>

          <p className="text-[#F4F0E6]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Provide your target destination port and required tonnage to receive a binding FOB or CIF price quote within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-[#C5922E]/20 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 fill-[#0B2B22]" />
              <span>WhatsApp Logistics Team</span>
            </a>

            <a
              href="mailto:export@toska-organic.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#133A2E] hover:bg-[#1A4337] border border-[#1A4337] text-[#F4F0E6] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition"
            >
              <span>Email Port Destination Specs</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5922E]" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}