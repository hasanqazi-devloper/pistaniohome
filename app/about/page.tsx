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
  Scale
} from 'lucide-react';

export default function AboutPage() {
  const steps = [
    { num: '01', title: 'Orchard Harvest & Selection', desc: 'Hand-harvested premium pistachios directly sourced from prime orchards in Rafsanjan & Kerman.' },
    { num: '02', title: 'Laser Sorting & Mechanical Sizing', desc: 'Precision optical color sorting and ounce calibration (20/22, 28/30) at our central facility.' },
    { num: '03', title: 'Moisture Calibration & Roasting', desc: 'Strict moisture index control preserving natural crunchiness, rich oil content, and freshness.' },
    { num: '04', title: 'Aflatoxin & Phytosanitary COA', desc: 'Comprehensive lab testing, zero-aflatoxin verification, and official phytosanitary inspection.' },
    { num: '05', title: 'Direct Sea & Land Logistics', desc: 'Vacuum-sealed packaging and container dispatch directly via Southern Iranian export ports.' },
  ];

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION (Pistachio Garden Background) */}
    {/* 1. HERO SECTION (100% Clear Background Image) */}
<section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-20 md:py-18 border-b border-[#1A4337]">
  
  {/* BACKGROUND IMAGE CONTAINER */}
  <div className="absolute inset-0 z-0">
    <Image
      src="https://images.unsplash.com/photo-1756749442845-4973b7cede48?auto=format&fit=crop&w=1920&q=100"
      alt="Iranian Pistachio Orchard"
      fill
      priority
      unoptimized // Direct source file render karega bina Next.js compression ke
      className="object-cover object-center opacity-40 -scale-x-100"
    />
    
    {/* Soft subtle left gradient to keep text readable without darkening the image */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B22]/85 via-[#0B2B22]/50 to-transparent" />
  </div>

  {/* CONTENT CONTAINER */}
  <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
    <div className="max-w-3xl space-y-7 text-left">

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">
        <span className="text-[#F4F0E6]">ABOUT </span>
        <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">PISTACHIO HOME.</span>
      </h1>

      <p className="text-[#F4F0E6]/90 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
        Connecting global wholesale buyers directly to Iran’s most celebrated pistachio orchards through rigorous laboratory grading, batch traceability, and zero-middleman container logistics.
      </p>

      <div className="pt-2">
        <a
          href="#story"
          className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
        >
          <span>EXPLORE OUR HERITAGE</span>
          <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
        </a>
      </div>
    </div>
  </div>
</section>

      {/* 2. OUR STORY & ORIGIN */}
    <section id="story" className="py-16 md:py-18 bg-[#133A2E] border-b border-[#1A4337] relative">
  <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    
    {/* LEFT: JUST CLEAR PNG IMAGE */}
    <div className="lg:col-span-6 relative h-80 sm:h-[450px] w-full flex items-center justify-center">
      <Image
        src="/about.png"
        alt="Rafsanjan Processing Facility"
        fill
        priority
        className="object-contain object-center drop-shadow-none"
      />
    </div>

    {/* RIGHT: CONTENT */}
    <div className="lg:col-span-6 space-y-6">
      <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
        Eliminating Supply Chain Risks for Overseas Importers
      </h2>
      
      <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed font-normal">
        Pistachio Home was established to address quality inconsistency and price speculation in global nut exports. By operating dedicated sizing lines and humidity-controlled storage in Rafsanjan, we deliver 100% lab-verified Iranian pistachios directly to bulk buyers worldwide without broker inflated margins.
      </p>

      <div className="p-4 bg-[#0B2B22] border-l-4 border-[#C5922E] rounded-r-xl space-y-1 border border-[#1A4337]">
        <p className="text-xs font-bold text-[#C5922E] uppercase tracking-wider">Export Varieties</p>
        <p className="text-xs text-[#F4F0E6]/80">
          Akbari (Super Long), Ahmad Aghaei (Long), Kaleh Ghouchi (Jumbo), Fandoghi (Round), and Premium Green Kernel Fractions.
        </p>
      </div>
    </div>

  </div>
</section>

    {/* 3. TAILORED EXPORT SOLUTIONS */}
<section className="py-16 md:py-18 bg-[#0B2B22] border-b border-[#1A4337]">
  <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    
    {/* LEFT: CONTENT */}
    <div className="lg:col-span-6 space-y-6">
 
      
      <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
        Tailored Export Solutions for Global Procurement Teams
      </h2>
      
      <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed font-normal">
        We streamline wholesale procurement for snack manufacturers, re-packers, and commercial importers. Pistachio Home offers end-to-end lot traceability, pre-shipment laboratory samples, and flexible private-label or bulk carton options.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        <div className="p-3.5 bg-[#133A2E] border border-[#1A4337] rounded-xl flex items-center gap-3">
          <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
          <span className="text-xs font-bold text-[#F4F0E6]">Vacuum Bags &amp; 10kg/25kg Cartons</span>
        </div>
        <div className="p-3.5 bg-[#133A2E] border border-[#1A4337] rounded-xl flex items-center gap-3">
          <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
          <span className="text-xs font-bold text-[#F4F0E6]">Flexible LC &amp; TT Payment Terms</span>
        </div>
      </div>
    </div>

    {/* RIGHT: JUST CLEAR PNG IMAGE */}
    <div className="lg:col-span-6 relative h-80 sm:h-[450px] w-full flex items-center justify-center">
      <Image
        src="/hero.png"
        alt="B2B Pistachio Wholesale Partner"
        fill
        priority
        className="object-contain object-center drop-shadow-none"
      />
    </div>

  </div>
</section>

      {/* 4. CORE CAPABILITIES */}
      <section className="py-16 md:py-20 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
          
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Engineered for High-Volume International Supply
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#133A2E] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Direct Facility Sourcing</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Direct orchard contracts eliminate intermediate trade markups for maximum buyer profitability.
              </p>
            </div>

            <div className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#133A2E] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <ThermometerSnowflake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Climate-Controlled Storage</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Low-temperature warehousing prevents lipid oxidation, maintaining color, taste, and shell brightness.
              </p>
            </div>

            <div className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#133A2E] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Precision Calibration</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Optical defect elimination, mechanical size grading, and certified moisture index testing.
              </p>
            </div>

            <div className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#133A2E] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Zero-Aflatoxin Standards</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Certified Phytosanitary documentation, Certificate of Origin, and accredited laboratory COA included.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. WORKFLOW TIMELINE */}
      <section className="py-16 md:py-20 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
        
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Orchard-To-Port Supply Chain Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/40 p-6 rounded-2xl space-y-3 transition-all">
                <span className="text-3xl font-black text-[#C5922E] block">{step.num}</span>
                <h3 className="text-sm font-bold text-[#F4F0E6]">{step.title}</h3>
                <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. QUALITY ASSURANCE & CERTIFICATIONS */}
      <section className="py-16 md:py-20 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 bg-[#0B2B22] border border-[#1A4337] p-8 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5922E]/10 rounded-full blur-3xl pointer-events-none" />
            <ShieldCheck className="w-16 h-16 text-[#C5922E] mx-auto" />
            <div>
              <h3 className="text-xl font-black text-[#F4F0E6] uppercase tracking-tight">Export Quality Guarantee</h3>
              <p className="text-xs text-[#F4F0E6]/70 mt-2 leading-relaxed">
                Full documentation provided to ensure smooth customs clearance at European, Asian, and Middle Eastern ports.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
        
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Strict European &amp; International Food Safety Compliance
            </h2>

            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed">
              Every shipment leaving Pistachio Home is subject to laser sorting, moisture standardization, and laboratory aflatoxin verification prior to container loading and sealing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-[#0B2B22] border border-[#1A4337] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Calibrated Moisture (&lt;5%)</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0B2B22] border border-[#1A4337] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Grade A Ounce Uniformity</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0B2B22] border border-[#1A4337] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Zero Chemically Bleached Shells</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0B2B22] border border-[#1A4337] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Official COA &amp; Lab Certified</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. GLOBAL LOGISTICS */}
      <section className="py-16 md:py-20 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
        
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Container Dispatch &amp; Incoterms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#133A2E] border border-[#1A4337] p-6 rounded-2xl space-y-3">
              <Ship className="w-8 h-8 text-[#C5922E]" />
              <h3 className="text-base font-bold text-[#F4F0E6]">Flexible Incoterms</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                FOB Bandar Abbas, CIF, and CFR quotation terms tailored for corporate purchasing teams.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] p-6 rounded-2xl space-y-3">
              <PackageCheck className="w-8 h-8 text-[#C5922E]" />
              <h3 className="text-base font-bold text-[#F4F0E6]">Sealed Export Packaging</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Vacuum-sealed inner bags, modified atmosphere liners, and reinforced export cartons.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] p-6 rounded-2xl space-y-3">
              <Globe2 className="w-8 h-8 text-[#C5922E]" />
              <h3 className="text-base font-bold text-[#F4F0E6]">Worldwide Freight Corridors</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Direct container vessel dispatch to Europe, Eurasia, the Middle East, and East Asia.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. CALL TO ACTION (RFQ) */}
      <section id="rfq" className="py-16 md:py-20 bg-[#133A2E] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5922E]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
       

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4F0E6] tracking-tight leading-tight">
            Ready to Source Lab-Certified Premium Pistachios?
          </h2>

          <p className="text-[#F4F0E6]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Request verified sample packages or get a customized FOB/CIF wholesale quotation within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-[#C5922E]/20 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 fill-[#0B2B22]" />
              <span>WhatsApp Quick Connect</span>
            </a>

            <a
              href="mailto:export@pistachiohome.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B2B22] hover:bg-[#133A2E] border border-[#1A4337] text-[#F4F0E6] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition"
            >
              <span>Email Request</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5922E]" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}