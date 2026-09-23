'use client';

import React, { useState } from 'react';
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
  Layers,
  SlidersHorizontal
} from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'IN-SHELL', 'KERNELS', 'SPECIALTY'];

  const products = [
    {
      id: 'akbari',
      category: 'IN-SHELL',
      name: 'Akbari Pistachios',
      subTitle: 'Super Long Variety',
      image: '/about.png', // Clear PNG path
      description: 'Renowned as the longest and most luxurious Iranian pistachio. Features a high opening rate and distinctive rich taste, making it top-tier for premium markets.',
      specs: {
        size: '18/20, 20/22, 22/24',
        moisture: '< 5%',
        packaging: '25kg Vacuum Bags / Cartons',
        origin: 'Rafsanjan, Kerman'
      },
      tag: 'Most Luxurious'
    },
    {
      id: 'ahmad-aghaei',
      category: 'IN-SHELL',
      name: 'Ahmad Aghaei',
      subTitle: 'Long Variety',
      image: '/p1.png', // Clear PNG path
      description: 'Famous for its bright white shell and vivid red kernel. Extremely popular in European and East Asian markets due to its elegant appearance and rich flavor profile.',
      specs: {
        size: '22/24, 24/26, 26/28',
        moisture: '< 5%',
        packaging: '10kg / 25kg Export Cartons',
        origin: 'Kerman Province'
      },
      tag: 'High Export Volume'
    },
    {
      id: 'kaleh-ghouchi',
      category: 'IN-SHELL',
      name: 'Kaleh Ghouchi',
      subTitle: 'Jumbo Variety',
      image: '/p2.png', // Clear PNG path
      description: 'A large, round pistachio with a wide natural opening and heavy kernel weight. Ideal for snack roasters seeking impressive size and texture.',
      specs: {
        size: '20/22, 22/24, 24/26',
        moisture: '< 5%',
        packaging: '25kg Vacuum Sealed Cartons',
        origin: 'Rafsanjan'
      },
      tag: 'Jumbo Size'
    },
    {
      id: 'fandoghi',
      category: 'IN-SHELL',
      name: 'Fandoghi Pistachios',
      subTitle: 'Round Variety',
      image: '/p3.png', // Clear PNG path
      description: 'The most widely cultivated Iranian pistachio with a round shape. Offers high count per weight, making it the most cost-effective choice for commercial distribution.',
      specs: {
        size: '28/30, 30/32, 32/34',
        moisture: '< 5%',
        packaging: '25kg / 50kg PP Bags',
        origin: 'Kerman'
      },
      tag: 'Best Commercial Value'
    },
    {
      id: 'green-kernel',
      category: 'KERNELS',
      name: 'Peeled Green Kernels',
      subTitle: 'Pistachio Kernels (GPEK)',
      image: '/p4.png', // Clear PNG path
      description: '100% shell-free, raw green kernels categorized from Grade A to F based on intensity of green hue. Primarily used in haute confectionery, gelato, and bakery.',
      specs: {
        size: 'Grade A to Grade F',
        moisture: '< 4.5%',
        packaging: '10kg Vacuum Bags in Cartons',
        origin: 'Rafsanjan Hub'
      },
      tag: 'Confectionery Grade'
    },
    {
      id: 'natural-kernel',
      category: 'KERNELS',
      name: 'Natural Pistachio Kernels',
      subTitle: 'Raw / Whole Kernels',
      image: '/p-bag.png', // Clear PNG path
      description: 'Extracted from naturally split or closed shell pistachios. Retains full natural oils and aroma, ideal for industrial food production, pastes, and butter.',
      specs: {
        size: 'Whole / Halves / Split',
        moisture: '< 5%',
        packaging: '10kg / 20kg Vacuum Bags',
        origin: 'Kerman'
      },
      tag: 'Industrial Food Processing'
    }
  ];

  const filteredProducts = selectedCategory === 'ALL' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION (Product Portfolio Background) */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-20 md:py-18 border-b border-[#1A4337]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1756749442845-4973b7cede48?auto=format&fit=crop&w=1920&q=100"
            alt="Iranian Pistachio Export Selection"
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
              <span className="text-[#F4F0E6]">OUR </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">PISTACHIO VARIETIES.</span>
            </h1>

            <p className="text-[#F4F0E6]/90 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Discover our complete export portfolio of raw, naturally split in-shell Iranian pistachios and premium green kernel fractions processed under strict laboratory standards.
            </p>

            <div className="pt-2">
              <a
                href="#catalog"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>VIEW EXPORT CATALOG</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER CONTROLS */}
      <section id="catalog" className="py-8 bg-[#133A2E] border-b border-[#1A4337] sticky top-0 z-30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#C5922E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F4F0E6]">Filter Category:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-black tracking-wider transition-all duration-300 ${
                  selectedCategory === cat 
                    ? 'bg-[#C5922E] text-[#0B2B22] shadow-lg shadow-[#C5922E]/20' 
                    : 'bg-[#0B2B22] text-[#F4F0E6]/80 hover:bg-[#1A4337] border border-[#1A4337]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CARDS GRID (Pistachio Clean PNG Cards) */}
      <section className="py-16 md:py-20 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-[#133A2E] border border-[#1A4337] rounded-3xl p-6 flex flex-col justify-between hover:border-[#C5922E]/50 transition-all duration-300 group relative"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4F0E6]/60">
                    {product.category}
                  </span>
                </div>

                {/* CLEAN PNG IMAGE DISPLAY CONTAINER */}
                <div className="relative h-60 w-full flex items-center justify-center my-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    className="object-contain object-center drop-shadow-none group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 mt-2">
                  <div>
                    <h3 className="text-2xl font-black text-[#F4F0E6] tracking-tight">{product.name}</h3>
                    {/* <p className="text-xs font-bold text-[#C5922E] tracking-wider uppercase">{product.subTitle}</p> */}
                  </div>

                  <p className="text-xs text-[#F4F0E6]/75 leading-relaxed font-normal">
                    {product.description}
                  </p>

                  {/* Specification Table Box */}
                  <div className="bg-[#0B2B22] border border-[#1A4337] rounded-2xl p-4 space-y-2.5 text-xs">
                    <div className="flex justify-between items-center border-b border-[#1A4337] pb-1.5">
                      <span className="text-[#F4F0E6]/60 font-medium">Available Sizes:</span>
                      <span className="font-bold text-[#F4F0E6]">{product.specs.size}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#1A4337] pb-1.5">
                      <span className="text-[#F4F0E6]/60 font-medium">Max Moisture:</span>
                      <span className="font-bold text-[#F4F0E6]">{product.specs.moisture}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#1A4337] pb-1.5">
                      <span className="text-[#F4F0E6]/60 font-medium">Export Packaging:</span>
                      <span className="font-bold text-[#F4F0E6]">{product.specs.packaging}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#F4F0E6]/60 font-medium">Origin:</span>
                      <span className="font-bold text-[#C5922E]">{product.specs.origin}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0B2B22] hover:bg-[#C5922E] text-[#F4F0E6] hover:text-[#0B2B22] border border-[#1A4337] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 group-hover:border-[#C5922E]"
                  >
                    <span>Request Quotation</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5922E] group-hover:text-[#0B2B22]" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PACKAGING & BULK SPECIFICATIONS SECTION */}
      <section className="py-16 md:py-18 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: CONTENT */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Export Standard Vacuum &amp; Bulk Container Options
            </h2>
            
            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed font-normal">
              To preserve natural crunchiness and oil density during long maritime transport, all our shipments are packaged according to buyer preferences—ranging from nitrogen-flushed vacuum foil bags to reinforced export cartons.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-[#0B2B22] border border-[#1A4337] rounded-xl flex items-center gap-3">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">10kg / 25kg Vacuum Bags</span>
              </div>
              <div className="p-3.5 bg-[#0B2B22] border border-[#1A4337] rounded-xl flex items-center gap-3">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Private Label OEM Printing</span>
              </div>
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

      {/* 5. QUALITY ASSURANCE & LAB TESTING */}
      <section className="py-16 md:py-20 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Quality Assurance &amp; Certified Parameters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300">
              <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Zero Aflatoxin Guaranteed</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Tested by accredited ISO laboratories ensuring compliance with EU and Asian strict aflatoxin thresholds.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300">
              <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <ThermometerSnowflake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Moisture Control</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Strict moisture calibration below 5% to eliminate mold growth risk during oceanic transit.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300">
              <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Optical Laser Sorting</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Automated optical sorters eliminate stained shells, closed nuts, and foreign matter.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300">
              <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Official COA &amp; Certificates</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Full Phytosanitary Certificate, Certificate of Origin, and Batch Analysis attached to every container.
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
            Ready to Order Bulk Iranian Pistachios?
          </h2>

          <p className="text-[#F4F0E6]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Get instant FOB/CIF pricing for your required variety and screen size directly from our Rafsanjan processing facility.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-[#C5922E]/20 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 fill-[#0B2B22]" />
              <span>WhatsApp Instant Quote</span>
            </a>

            <a
              href="mailto:export@pistachiohome.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B2B22] hover:bg-[#133A2E] border border-[#1A4337] text-[#F4F0E6] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition"
            >
              <span>Email Specifications</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5922E]" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}