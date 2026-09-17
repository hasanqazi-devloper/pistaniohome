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
  Sprout,
  Check,
  Award,
  Scale,
  Building2,
  Users2
} from 'lucide-react';

export default function AboutPage() {
  const steps = [
    { num: '01', title: 'Orchard Harvest & Selection', desc: 'Hand-picked organic fruits sourced directly from prime orchards in Northern Iran (Mazandaran & Guilan).' },
    { num: '02', title: 'Lab Grading & Sorting', desc: 'Rigorous calibration, washing, and optical defect sorting at our central Mazandaran processing plant.' },
    { num: '03', title: 'Solar Drying & Moisture Calibration', desc: 'Standardized moisture control preserving fruit softness, natural sugars, and zero additives.' },
    { num: '04', title: 'Phytosanitary & COA Inspection', desc: 'Government lab testing, pesticide residue verification, and phytosanitary certificate issuance.' },
    { num: '05', title: 'Global Container Logistics', desc: 'Sealed export packaging and sea/land freight dispatch directly to international wholesale buyers.' },
  ];

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-16 md:py-16 border-b border-[#1A4337]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
            alt="Organic Orchards Background"
            fill
            priority
            className="object-cover object-center opacity-20 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B22] via-[#0B2B22]/90 to-[#0B2B22]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-[#0B2B22]/80" />
        </div>

        <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5922E]/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#1A4337]/40 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-7 text-left">
        

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none uppercase">
              <span className="text-[#F4F0E6]">ABOUT </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">US.</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Direct Sourcing &amp; Organic Processing for Global Importers
            </h2>

            <p className="text-[#F4F0E6]/80 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Bridging Northern Iran's fertile orchards directly with international B2B buyers through controlled processing, batch grading, and zero-middleman export logistics.
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

      {/* 2. COMPANY OVERVIEW & ORIGIN (LEFT IMAGE, RIGHT CONTENT) */}
      <section id="story" className="py-16 md:py-16 bg-[#133A2E] border-b border-[#1A4337] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: IMAGE */}
          <div className="lg:col-span-6 relative h-80 sm:h-[450px] rounded-3xl overflow-hidden border border-[#1A4337] bg-[#0B2B22] shadow-2xl group">
            <Image
              src="/fav.png"
              alt="TOSKA Processing Facility Mazandaran"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0B2B22]/90 border border-[#1A4337] rounded-2xl backdrop-blur-md">
              <h3 className="text-base font-bold text-[#F4F0E6]">Mazandaran Processing Hub</h3>
              <p className="text-xs text-[#F4F0E6]/70 mt-1">
                Direct orchard aggregation, cold storage, and export packaging under one roof.
              </p>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-6 space-y-6">
         
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Eliminating Supply Chain Risks for Overseas Buyers
            </h2>
            
            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed font-normal">
              TOSKA Organic was founded to solve consistency and pricing transparency issues in agricultural exports. By owning our sorting lines and moisture calibration units in Mazandaran, we deliver 100% additive-free dried fruits directly to global importers without middleman markups.
            </p>

            <div className="p-4 bg-[#0B2B22] border-l-4 border-[#C5922E] rounded-r-xl space-y-1 border border-[#1A4337]">
              <p className="text-xs font-bold text-[#C5922E] uppercase tracking-wider">Primary Lineup</p>
              <p className="text-xs text-[#F4F0E6]/80">
                Sun-Dried Plums, Organic Figs, Dried Apricots, and Premium Grade Freeze-Dried Fruit Fractions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CLIENT & PARTNERSHIP PHILOSOPHY (LEFT IMAGE, RIGHT CONTENT) */}
      <section className="py-20 md:py-28 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: IMAGE */}
          <div className="lg:col-span-6 relative h-80 sm:h-[450px] rounded-3xl overflow-hidden border border-[#1A4337] bg-[#133A2E] shadow-2xl group">
            <Image
              src="/hero.png"
              alt="B2B Wholesale Procurement Partner"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0B2B22]/90 border border-[#1A4337] rounded-2xl backdrop-blur-md">
              <h3 className="text-base font-bold text-[#F4F0E6]">B2B Buyer Centricity</h3>
              <p className="text-xs text-[#F4F0E6]/70 mt-1">
                Custom packaging specs and guaranteed FOB/CIF delivery terms tailored for wholesale distributors.
              </p>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-6 space-y-6">
          
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Tailored Export Solutions for Global Procurement Teams
            </h2>
            
            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed font-normal">
              We understand the challenges faced by international food manufacturers, wholesale packers, and supermarkets. TOSKA Organic ensures complete lot traceability, sample verification before bulk shipment, and custom private-label packaging options.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-[#133A2E] border border-[#1A4337] rounded-xl flex items-center gap-3">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Custom Retail &amp; Bulk Boxes</span>
              </div>
              <div className="p-3.5 bg-[#133A2E] border border-[#1A4337] rounded-xl flex items-center gap-3">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Flexible LC / TT Terms</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CORE CAPABILITIES */}
      <section className="py-16 md:py-16 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
          
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Built for High-Volume International Trade
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#133A2E] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Direct Factory Control</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Zero middleman brokers ensuring maximum margin advantage for our buyers.
              </p>
            </div>

            <div className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#133A2E] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <ThermometerSnowflake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Cold Chain Storage</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Climate-controlled storage preventing moisture loss, fruit sticking, or color darkening.
              </p>
            </div>

            <div className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#133A2E] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Lab Calibrated Quality</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Scientific moisture testing, sizing grading, and pesticide residue verification.
              </p>
            </div>

            <div className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-[#133A2E] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Full Export Compliance</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Complete Phytosanitary Papers, Certificate of Origin, and Lab COA included.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. WORKFLOW TIMELINE */}
      <section className="py-16 md:py-16 bg-[#0B2B22] border-b border-[#1A4337]">
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

      {/* 6. QUALITY ASSURANCE & LAB STANDARDS (LEFT IMAGE, RIGHT CONTENT) */}
      <section className="py-16 md:py-16 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: LAB GUARANTEE BOX / IMAGE */}
          <div className="lg:col-span-5 bg-[#0B2B22] border border-[#1A4337] p-8 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5922E]/10 rounded-full blur-3xl pointer-events-none" />
            <ShieldCheck className="w-16 h-16 text-[#C5922E] mx-auto" />
            <div>
              <h3 className="text-xl font-black text-[#F4F0E6] uppercase tracking-tight">Export Guarantee</h3>
              <p className="text-xs text-[#F4F0E6]/70 mt-2 leading-relaxed">
                Full documentation provided to guarantee frictionless customs clearance at European, Eurasian, and Middle Eastern destination ports.
              </p>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-7 space-y-6">
         
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Complying with Strict European &amp; International Standards
            </h2>

            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed">
              Bulk organic exports require precise quality control. Every TOSKA batch undergoes optical sorting, moisture standardization, and laboratory verification before container sealing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 bg-[#0B2B22] border border-[#1A4337] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Calibrated Moisture Levels</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0B2B22] border border-[#1A4337] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Grade A Uniform Sizing</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0B2B22] border border-[#1A4337] p-3.5 rounded-xl">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Zero Additives or Preservatives</span>
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
      <section className="py-16 md:py-16 bg-[#0B2B22] border-b border-[#1A4337]">
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
                FOB, CIF, and CFR rates tailored for corporate procurement teams.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] p-6 rounded-2xl space-y-3">
              <PackageCheck className="w-8 h-8 text-[#C5922E]" />
              <h3 className="text-base font-bold text-[#F4F0E6]">Export Packaging</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Bulk cartons, modified atmosphere packaging, and vacuum-sealed bags.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] p-6 rounded-2xl space-y-3">
              <Globe2 className="w-8 h-8 text-[#C5922E]" />
              <h3 className="text-base font-bold text-[#F4F0E6]">Global Corridors</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Reliable shipments to Europe, Middle East, Asia, and CIS countries.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 8. CALL TO ACTION (RFQ) */}
      <section id="rfq" className="py-16 md:py-16 bg-[#133A2E] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5922E]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
       

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4F0E6] tracking-tight leading-tight">
            Ready to Source Certified Organic Produce?
          </h2>

          <p className="text-[#F4F0E6]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Request sample packages or get a customized FOB/CIF wholesale quotation within 24 hours.
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
              href="mailto:export@toska-organic.com"
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