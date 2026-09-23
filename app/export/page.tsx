'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowDown, 
  ShieldCheck, 
  ThermometerSnowflake, 
  FileCheck2, 
  Ship, 
  Globe2, 
  PackageCheck, 
  MessageSquare, 
  ArrowUpRight,
  Check,
  Award,
  Scale,
  Truck,
  Anchor,
  CreditCard,
  Container,
  Clock
} from 'lucide-react';

export default function ExportPage() {
  const incoterms = [
    {
      code: 'FOB',
      title: 'Free On Board',
      port: 'Bandar Abbas Port',
      desc: 'We handle local transportation, export customs, and loading onto your designated vessel at Southern Iranian export ports.'
    },
    {
      code: 'CIF',
      title: 'Cost, Insurance & Freight',
      port: 'Destination Ocean Port',
      desc: 'Full-service sea freight management including marine insurance coverage directly to your preferred international discharge port.'
    },
    {
      code: 'CFR',
      title: 'Cost & Freight',
      port: 'Destination Ocean Port',
      desc: 'Comprehensive ocean freight delivery coverage, allowing corporate importers to manage their own local insurance policies.'
    }
  ];

  const packagingSpecs = [
    {
      title: '25kg Vacuum Sealed Foil Bags',
      detail: 'Nitrogen-flushed inner vacuum bags packed inside corrugated export cartons to prevent oxidation during long sea routes.'
    },
    {
      title: '10kg Premium Retail Cartons',
      detail: 'Compact food-grade export boxes ideal for distribution and immediate private label repacking upon arrival.'
    },
    {
      title: '50kg Reinforced PP Bags',
      detail: 'High-durability polypropylene woven bags suited for high-volume commercial re-processors and roasters.'
    },
    {
      title: 'Custom Private Label OEM',
      detail: 'Tailored outer printing with buyer logos, barcode labels, and multilingual origin compliance details.'
    }
  ];

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION (Global Shipping Background) */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-20 md:py-18 border-b border-[#1A4337]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1756749442845-4973b7cede48?auto=format&fit=crop&w=1920&q=100"
            alt="International Export Shipping Logistics"
            fill
            priority
            unoptimized
            className="object-cover object-center opacity-40 -scale-x-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B22]/85 via-[#0B2B22]/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-7 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">
              <span className="text-[#F4F0E6]">EXPORT & </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">GLOBAL LOGISTICS.</span>
            </h1>

            <p className="text-[#F4F0E6]/90 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              End-to-end container dispatch, flexible Incoterms (FOB/CIF/CFR), vacuum packaging, and rapid customs clearance for international wholesale buyers.
            </p>

            <div className="pt-2">
              <a
                href="#terms"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>EXPLORE INCOTERMS & SHIPPING</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & CONTAINER LOGISTICS */}
      <section id="terms" className="py-16 md:py-18 bg-[#133A2E] border-b border-[#1A4337] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: CLEAR PNG SHOWCASE */}
          <div className="lg:col-span-6 relative h-80 sm:h-[450px] w-full flex items-center justify-center">
            <Image
              src="/p-bag.png"
              alt="Pistachio Export Containers"
              fill
              priority
              className="object-contain object-center drop-shadow-none"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Streamlined Freight Corridors Directly from Rafsanjan Hub
            </h2>
            
            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed font-normal">
              We ensure seamless container movement from our central storage in Rafsanjan to Southern ports like Bandar Abbas. With established shipping lines, we guarantee prompt vessel loading schedules and hassle-free transit.
            </p>

            <div className="p-4 bg-[#0B2B22] border-l-4 border-[#C5922E] rounded-r-xl space-y-1 border border-[#1A4337]">
              <p className="text-xs font-bold text-[#C5922E] uppercase tracking-wider">Container Capacity (20ft / 40ft FCL)</p>
              <p className="text-xs text-[#F4F0E6]/80">
                20ft FCL holds approx. 14 to 16 Metric Tons | 40ft FCL High-Cube holds up to 25 Metric Tons (depending on packaging specs).
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INCOTERMS & CONTRACT OPTIONS */}
      <section className="py-16 md:py-20 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Flexible Trade Terms (Incoterms 2020)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {incoterms.map((term, idx) => (
              <div key={idx} className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-[#C5922E]">{term.code}</span>
                  <Anchor className="w-6 h-6 text-[#C5922E]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F4F0E6]">{term.title}</h3>
                  <p className="text-xs font-bold text-[#C5922E] mt-0.5">{term.port}</p>
                </div>
                <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">{term.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PACKAGING OPTIONS */}
      <section className="py-16 md:py-18 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: CONTENT & PACKAGING TYPES */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Export Preservation &amp; Packaging Varieties
            </h2>
            
            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed font-normal">
              Proper packaging prevents moisture absorption and oil rancidity during sea transit. We provide multiple bulk and retail container solutions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {packagingSpecs.map((item, idx) => (
                <div key={idx} className="p-4 bg-[#0B2B22] border border-[#1A4337] rounded-xl space-y-1">
                  <p className="text-xs font-bold text-[#C5922E]">{item.title}</p>
                  <p className="text-[11px] text-[#F4F0E6]/70 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CLEAR PNG SHOWCASE */}
          <div className="lg:col-span-6 relative h-80 sm:h-[450px] w-full flex items-center justify-center">
            <Image
              src="/hero.png"
              alt="Export Packaging Solutions"
              fill
              priority
              className="object-contain object-center drop-shadow-none"
            />
          </div>

        </div>
      </section>

      {/* 5. PAYMENT & COMPLIANCE */}
      <section className="py-16 md:py-20 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Payment Methods &amp; Commercial Assurance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#133A2E] border border-[#1A4337] p-6 rounded-2xl space-y-3">
              <CreditCard className="w-8 h-8 text-[#C5922E]" />
              <h3 className="text-base font-bold text-[#F4F0E6]">Flexible Payment Terms</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Wire Transfer (T/T), Irrevocable Letter of Credit (L/C), and split deposit milestones for trusted international partners.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] p-6 rounded-2xl space-y-3">
              <FileCheck2 className="w-8 h-8 text-[#C5922E]" />
              <h3 className="text-base font-bold text-[#F4F0E6]">Complete Export File</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Commercial Invoice, Packing List, Bill of Lading (B/L), Phytosanitary Certificate, and Certificate of Origin (COO).
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] p-6 rounded-2xl space-y-3">
              <Globe2 className="w-8 h-8 text-[#C5922E]" />
              <h3 className="text-base font-bold text-[#F4F0E6]">Major Transit Corridors</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Regular direct ocean container lines to Western Europe, CIS region, Middle East hubs, and East Asian ports.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION (RFQ) */}
      <section id="rfq" className="py-16 md:py-20 bg-[#133A2E] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5922E]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4F0E6] tracking-tight leading-tight">
            Ready to Plan Your Next Container Freight Order?
          </h2>

          <p className="text-[#F4F0E6]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Get exact freight quotations and container availability directly from our export logistics office.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-[#C5922E]/20 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 fill-[#0B2B22]" />
              <span>WhatsApp Freight Desk</span>
            </a>

            <a
              href="mailto:export@pistachiohome.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B2B22] hover:bg-[#133A2E] border border-[#1A4337] text-[#F4F0E6] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition"
            >
              <span>Email Logistics Team</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5922E]" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}