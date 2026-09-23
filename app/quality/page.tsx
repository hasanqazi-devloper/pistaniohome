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
  Sparkles,
  Microscope,
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';

export default function QualityPage() {
  const qualityPillars = [
    {
      num: '01',
      title: 'Zero-Aflatoxin Protocol',
      desc: 'Rigorous multi-stage sampling verified by accredited third-party laboratories to meet strict European and Asian safety thresholds.'
    },
    {
      num: '02',
      title: 'Optical & Laser Sorting',
      desc: 'High-speed monochrome and color sorting channels automatically detect and discard shell deformities, cracks, and color variations.'
    },
    {
      num: '03',
      title: 'Moisture Calibration',
      desc: 'Controlled low-heat drying maintaining internal humidity strictly below 5% to prevent mold growth and extend shelf life.'
    },
    {
      num: '04',
      title: 'Batch Traceability',
      desc: 'Every exported container is tagged with a unique batch number linked directly to its orchard source and lab inspection report.'
    }
  ];

  const labCertifications = [
    { title: 'Phytosanitary Certificate', desc: 'Issued by national agricultural authorities confirming pest and pathogen-free status.' },
    { title: 'Certificate of Analysis (COA)', desc: 'Detailed lab breakdown of moisture content, aflatoxin levels (B1, B2, G1, G2), and purity.' },
    { title: 'Certificate of Origin', desc: 'Official documentation confirming authentic Iranian Rafsanjan origins.' },
    { title: 'Fumigation & Inspection Certificate', desc: 'Container-level treatment verification for seamless customs clearance at destination ports.' }
  ];

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION (Quality & Lab Background) */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-20 md:py-18 border-b border-[#1A4337]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1756749442845-4973b7cede48?auto=format&fit=crop&w=1920&q=100"
            alt="Pistachio Quality Control Lab"
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
              <span className="text-[#F4F0E6]">QUALITY </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">ASSURANCE & STANDARDS.</span>
            </h1>

            <p className="text-[#F4F0E6]/90 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Uncompromising laboratory testing, automated optical sorting, and international compliance protocols ensuring every batch meets global food safety standards.
            </p>

            <div className="pt-2">
              <a
                href="#standards"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>EXPLORE TESTING STANDARDS</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUALITY CONTROL OVERVIEW */}
      <section id="standards" className="py-16 md:py-18 bg-[#133A2E] border-b border-[#1A4337] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: CLEAR PNG SHOWCASE */}
          <div className="lg:col-span-6 relative h-80 sm:h-[450px] w-full flex items-center justify-center">
            <Image
              src="/about.png"
              alt="Laboratory Certified Iranian Pistachios"
              fill
              priority
              className="object-contain object-center drop-shadow-none"
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Precision Grading & Zero-Tolerance Safety Protocol
            </h2>
            
            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed font-normal">
              At Pistachio Home, quality control starts before harvest. We implement strict moisture monitoring in orchards and process every lot through advanced mechanical sizing, optical color sorting, and laboratory aflatoxin screenings.
            </p>

            <div className="p-4 bg-[#0B2B22] border-l-4 border-[#C5922E] rounded-r-xl space-y-1 border border-[#1A4337]">
              <p className="text-xs font-bold text-[#C5922E] uppercase tracking-wider">Aflatoxin Control Guarantee</p>
              <p className="text-xs text-[#F4F0E6]/80">
                Every batch undergoes HPLC (High-Performance Liquid Chromatography) testing to guarantee compliance with EU B1 & Total Aflatoxin limit regulations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FOUR PILLARS OF QUALITY */}
      <section className="py-16 md:py-20 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Four Stages of Quality Control
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityPillars.map((item, idx) => (
              <div key={idx} className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-3 transition-all duration-300">
                <span className="text-3xl font-black text-[#C5922E] block">{item.num}</span>
                <h3 className="text-base font-bold text-[#F4F0E6]">{item.title}</h3>
                <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. TECHNICAL PARAMETERS TABLE */}
      <section className="py-16 md:py-18 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: CONTENT & SPECIFICATIONS */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Export Grade Technical Specifications
            </h2>
            
            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed font-normal">
              We provide precise analytical parameters to ensure consistency for wholesale distributors, roasters, and food manufacturing applications.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 bg-[#0B2B22] border border-[#1A4337] rounded-xl flex items-center justify-between">
                <span className="text-xs font-bold text-[#F4F0E6]">Moisture Level</span>
                <span className="text-xs font-bold text-[#C5922E]">Max 5.0%</span>
              </div>
              <div className="p-4 bg-[#0B2B22] border border-[#1A4337] rounded-xl flex items-center justify-between">
                <span className="text-xs font-bold text-[#F4F0E6]">Natural Open Split Shells</span>
                <span className="text-xs font-bold text-[#C5922E]">Min 95%</span>
              </div>
              <div className="p-4 bg-[#0B2B22] border border-[#1A4337] rounded-xl flex items-center justify-between">
                <span className="text-xs font-bold text-[#F4F0E6]">Foreign Material / Debris</span>
                <span className="text-xs font-bold text-[#C5922E]">Max 0.1%</span>
              </div>
              <div className="p-4 bg-[#0B2B22] border border-[#1A4337] rounded-xl flex items-center justify-between">
                <span className="text-xs font-bold text-[#F4F0E6]">Deformed / Stained Shells</span>
                <span className="text-xs font-bold text-[#C5922E]">Max 1.0%</span>
              </div>
            </div>
          </div>

          {/* RIGHT: CLEAR PNG SHOWCASE */}
          <div className="lg:col-span-6 relative h-80 sm:h-[450px] w-full flex items-center justify-center">
            <Image
              src="/hero.png"
              alt="Quality Inspected Bulk Pistachios"
              fill
              priority
              className="object-contain object-center drop-shadow-none"
            />
          </div>

        </div>
      </section>

      {/* 5. OFFICIAL CERTIFICATIONS SHOWCASE */}
      <section className="py-16 md:py-20 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Official Shipping &amp; Quality Documentation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {labCertifications.map((cert, idx) => (
              <div key={idx} className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl flex items-start gap-4 transition-all duration-300">
                <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] shrink-0">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#F4F0E6]">{cert.title}</h3>
                  <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION (RFQ / Sample Request) */}
      <section id="rfq" className="py-16 md:py-20 bg-[#133A2E] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5922E]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4F0E6] tracking-tight leading-tight">
            Need Pre-Shipment Lab Samples or COA Reports?
          </h2>

          <p className="text-[#F4F0E6]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Request official batch COA documents or receive physical laboratory samples sent directly to your corporate office before placing bulk orders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-[#C5922E]/20 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 fill-[#0B2B22]" />
              <span>Request Sample Pack</span>
            </a>

            <a
              href="mailto:quality@pistachiohome.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B2B22] hover:bg-[#133A2E] border border-[#1A4337] text-[#F4F0E6] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition"
            >
              <span>Email Quality Team</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5922E]" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}