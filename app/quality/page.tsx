'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowDown, 
  ShieldCheck, 
  FileCheck2, 
  ThermometerSnowflake, 
  Scale, 
  Check, 
  Award, 
  Microscope, 
  Bug, 
  Sparkles,
  MessageSquare,
  ArrowUpRight,
  Download
} from 'lucide-react';

export default function QualityPage() {
  const testingProtocols = [
    {
      icon: <Microscope className="w-6 h-6 text-[#C5922E]" />,
      title: 'Pesticide Residue Analysis',
      desc: 'GC-MS/MS lab screening ensuring zero synthetic chemical residues to pass strict EU and USDA organic export tolerances.'
    },
    {
      icon: <Scale className="w-6 h-6 text-[#C5922E]" />,
      title: 'Calibrated Moisture Control',
      desc: 'Precision hydrometer testing maintaining 18%–22% moisture for soft plums and <15% for dry fruit varieties.'
    },
    {
      icon: <Bug className="w-6 h-6 text-[#C5922E]" />,
      title: 'Aflatoxin & Mold Inspection',
      desc: 'HPLC optical testing verifying 0% mycotoxin, aflatoxin, and fungal spore infestation prior to container sealing.'
    },
    {
      icon: <ThermometerSnowflake className="w-6 h-6 text-[#C5922E]" />,
      title: 'Cold Storage Preservation',
      desc: 'Unbroken 0°C to 5°C cold chain preventing natural sugar crystallization, skin darkening, and product sticking.'
    }
  ];

  const qualitySteps = [
    { num: '01', title: 'Grove-Level Raw Sorting', desc: 'Hand selection at Mazandaran orchards to discard undersized or bruised fresh fruits.' },
    { num: '02', title: 'Triple Wash & Optical Grading', desc: 'Sanitized water washing and high-precision laser sorting for uniform color and size.' },
    { num: '03', title: 'Solar Drying & Moisture Lock', desc: 'Controlled solar drying cycles maintaining natural fruit tenderness without sulfur dioxide.' },
    { num: '04', title: 'Independent Lab COA', desc: 'Third-party accredited laboratory testing for microbial and heavy metal parameters.' },
    { num: '05', title: 'Phytosanitary & Port Clearance', desc: 'Official government phytosanitary inspection and sealed reefer container dispatch.' }
  ];

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-16 md:py-16 border-b border-[#1A4337]">
        {/* Background Image & Overlay Gradients */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
            alt="Organic Processing Quality Background"
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
              <span className="text-[#F4F0E6]">QUALITY </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">STANDARDS.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Lab-Certified Integrity &amp; Frictionless Import Compliance
            </h2>

            {/* Paragraph */}
            <p className="text-[#F4F0E6]/80 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              From orchard harvest to container loading, every batch of TOSKA produce undergoes rigorous laboratory testing, moisture standardization, and phytosanitary verification.
            </p>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="#standards"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>VERIFY LAB PROTOCOLS</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. LAB TESTING PROTOCOLS GRID */}
      <section id="standards" className="py-20 md:py-28 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
              LAB TESTING PROTOCOLS
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Zero Chemical Defect Policy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingProtocols.map((protocol, idx) => (
              <div 
                key={idx} 
                className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <div className="p-3 bg-[#133A2E] border border-[#1A4337] rounded-xl w-fit">
                  {protocol.icon}
                </div>
                <h3 className="text-base font-bold text-[#F4F0E6]">{protocol.title}</h3>
                <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">{protocol.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. QUALITY CONTROL & FACILITY (LEFT IMAGE, RIGHT CONTENT) */}
      <section className="py-20 md:py-28 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: IMAGE */}
          <div className="lg:col-span-6 relative h-80 sm:h-[450px] rounded-3xl overflow-hidden border border-[#1A4337] bg-[#133A2E] shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              alt="TOSKA Laboratory Quality Testing"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#0B2B22]/90 border border-[#1A4337] rounded-2xl backdrop-blur-md">
              <h3 className="text-base font-bold text-[#F4F0E6]">In-House Batch Verification</h3>
              <p className="text-xs text-[#F4F0E6]/70 mt-1">
                Calibrated testing before bulk sealing ensures zero customs delays at destination ports.
              </p>
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span>EXPORT CERTIFICATION</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Guaranteed Compliance for EU, Middle East &amp; Asian Markets
            </h2>
            
            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed font-normal">
              We understand that food safety regulations differ across global trade zones. TOSKA Organic issues batch-specific Certificate of Analysis (COA), Phytosanitary papers, and Non-GMO certifications for every container dispatch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-[#133A2E] border border-[#1A4337] rounded-xl flex items-center gap-3">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">100% Additive Free</span>
              </div>
              <div className="p-3.5 bg-[#133A2E] border border-[#1A4337] rounded-xl flex items-center gap-3">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Official COA Included</span>
              </div>
              <div className="p-3.5 bg-[#133A2E] border border-[#1A4337] rounded-xl flex items-center gap-3">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Zero Pest Infestation</span>
              </div>
              <div className="p-3.5 bg-[#133A2E] border border-[#1A4337] rounded-xl flex items-center gap-3">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Heavy Metal Free</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. QUALITY ASSURANCE TIMELINE */}
      <section className="py-20 md:py-28 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
              5-STAGE QUALITY TIMELINE
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Rigorous Quality Control at Every Stage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {qualitySteps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/40 p-6 rounded-2xl space-y-3 transition-all shadow-xl"
              >
                <span className="text-3xl font-black text-[#C5922E] block">{step.num}</span>
                <h3 className="text-sm font-bold text-[#F4F0E6]">{step.title}</h3>
                <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. DOWNLOAD SPEC SHEETS BANNER */}
      <section className="py-16 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 bg-[#133A2E] border border-[#1A4337] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5922E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 text-[#C5922E] text-xs font-black uppercase tracking-wider">
              <FileCheck2 className="w-4 h-4" />
              <span>Technical Data Documents</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#F4F0E6]">
              Request Batch Quality Audit Reports
            </h3>
            <p className="text-xs sm:text-sm text-[#F4F0E6]/70 max-w-xl">
              Download our standardized moisture analysis sheets, pesticide laboratory reports, and export compliance specifications.
            </p>
          </div>

          <a
            href="mailto:quality@toska-organic.com"
            className="inline-flex items-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition shadow-xl shadow-[#C5922E]/20 relative z-10 shrink-0"
          >
            <Download className="w-4 h-4 text-[#0B2B22]" />
            <span>Download Lab Datasheets</span>
          </a>
        </div>
      </section>

      {/* 6. CALL TO ACTION (RFQ) */}
      <section id="rfq" className="py-24 md:py-32 bg-[#133A2E] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5922E]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#0B2B22] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
            WHOLESALE SAMPLE REQUEST
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4F0E6] tracking-tight leading-tight">
            Verify Our Product Quality Firsthand
          </h2>

          <p className="text-[#F4F0E6]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Order a sample package with full laboratory COA documentation shipped via express courier directly to your procurement office.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-[#C5922E]/20 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 fill-[#0B2B22]" />
              <span>WhatsApp Sample Request</span>
            </a>

            <a
              href="mailto:export@toska-organic.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B2B22] hover:bg-[#133A2E] border border-[#1A4337] text-[#F4F0E6] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition"
            >
              <span>Email Official RFQ</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5922E]" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}