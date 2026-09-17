'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Search,
  Filter,
  ShieldCheck,
  FileCheck,
  Package,
  ArrowDown,
  MessageSquare,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  Download
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  grade: string;
  moisture: string;
  packaging: string;
  origin: string;
  image: string;
  description: string;
  badge: string;
}

const productsData: Product[] = [
  {
    id: '1',
    name: 'Sun-Dried Golden Plums (Aloo Bukhara)',
    category: 'dried-fruits',
    grade: 'Super Premium Grade A',
    moisture: '18% – 22%',
    packaging: '5kg / 10kg Export Cartons',
    origin: 'Mazandaran Orchards, Iran',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80',
    description: 'Naturally solar-dried without chemical additives. Soft texture, vibrant golden amber color, and balanced acidity.',
    badge: 'Top Exporter Choice'
  },
  {
    id: '2',
    name: 'Organic Black Dried Figs (Estahban)',
    category: 'dried-fruits',
    grade: 'AAA Grade (22mm+)',
    moisture: '< 15%',
    packaging: '10kg Vacuum Sealed Boxes',
    origin: 'Fars & Northern Orchards',
    image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80',
    description: 'Naturally open-mouthed, high sugar concentration, rich in fiber, and completely mold-free certified.',
    badge: 'Lab Certified'
  },
  {
    id: '3',
    name: 'Pitted Sun-Dried Apricots',
    category: 'dried-fruits',
    grade: 'Export Grade 1',
    moisture: '20% – 24%',
    packaging: '5kg Inner Polybags',
    origin: 'Northern Iran',
    image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&q=80',
    description: 'Machine-sorted, uniform sizing, zero pit fragments, perfect for industrial food processing and retail packing.',
    badge: 'High Demand'
  },
  {
    id: '4',
    name: 'Premium Dried Barberries (Zereshk)',
    category: 'specialty',
    grade: 'Pofaki Grade A',
    moisture: '14% – 16%',
    packaging: '10kg Master Cartons',
    origin: 'Khorasan Orchards',
    image: 'https://images.unsplash.com/photo-1589135763402-99d8636134b2?auto=format&fit=crop&q=80',
    description: 'Air-dried under shade to maintain deep ruby color and tart flavor profile. COA verified pesticide-free.',
    badge: 'Shade Dried'
  }
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION */}
     

    {/* PRODUCTS HERO SECTION */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-16 md:py-16 border-b border-[#1A4337]">
        {/* Background Image & Overlay Gradients */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80"
            alt="Organic Dried Fruit Products Background"
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
              <span className="text-[#F4F0E6]">OUR </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">PRODUCTS.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Export-Grade Organic Dried Produce &amp; Bulk Solutions
            </h2>

            {/* Paragraph */}
            <p className="text-[#F4F0E6]/80 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Lab-certified, moisture-controlled, and custom-packaged organic dried fruits sourced directly from Mazandaran orchards for international wholesale procurement.
            </p>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="#catalog"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>EXPLORE CATALOGUE</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <section className="py-8 bg-[#133A2E] border-b border-[#1A4337] sticky top-0 z-30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${selectedCategory === 'all'
                  ? 'bg-[#C5922E] text-[#0B2B22] shadow-lg shadow-[#C5922E]/20'
                  : 'bg-[#0B2B22] text-[#F4F0E6]/70 hover:text-[#F4F0E6] border border-[#1A4337]'
                }`}
            >
              All Products
            </button>
            <button
              onClick={() => setSelectedCategory('dried-fruits')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${selectedCategory === 'dried-fruits'
                  ? 'bg-[#C5922E] text-[#0B2B22] shadow-lg shadow-[#C5922E]/20'
                  : 'bg-[#0B2B22] text-[#F4F0E6]/70 hover:text-[#F4F0E6] border border-[#1A4337]'
                }`}
            >
              Sun-Dried Fruits
            </button>
            <button
              onClick={() => setSelectedCategory('specialty')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${selectedCategory === 'specialty'
                  ? 'bg-[#C5922E] text-[#0B2B22] shadow-lg shadow-[#C5922E]/20'
                  : 'bg-[#0B2B22] text-[#F4F0E6]/70 hover:text-[#F4F0E6] border border-[#1A4337]'
                }`}
            >
              Specialty Lineup
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#C5922E] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search product, specification..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] placeholder-[#F4F0E6]/40 text-xs rounded-xl pl-10 pr-4 py-3 outline-none transition"
            />
          </div>

        </div>
      </section>

      {/* 3. PRODUCT GRID SECTION */}
      <section className="py-16 md:py-24 bg-[#0B2B22]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 space-y-4 bg-[#133A2E] rounded-3xl border border-[#1A4337]">
              <Filter className="w-12 h-12 text-[#C5922E] mx-auto opacity-50" />
              <h3 className="text-xl font-bold">No Products Found</h3>
              <p className="text-xs text-[#F4F0E6]/60">Try clearing your search query or selecting another category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    {/* Image & Badge */}
                    <div className="relative h-64 sm:h-72 w-full bg-[#0B2B22] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#133A2E] via-transparent to-transparent" />

                      <div className="absolute top-4 left-4 bg-[#0B2B22]/90 border border-[#C5922E]/40 px-3 py-1 rounded-full text-[10px] font-black text-[#C5922E] uppercase tracking-wider backdrop-blur-md">
                        {product.badge}
                      </div>
                    </div>

                    {/* Product Specs Content */}
                    <div className="p-6 sm:p-8 space-y-6">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black tracking-widest text-[#C5922E] uppercase block">
                          Origin: {product.origin}
                        </span>
                        <h2 className="text-2xl font-black text-[#F4F0E6] tracking-tight">
                          {product.name}
                        </h2>
                        <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Technical Specs Table */}
                      <div className="bg-[#0B2B22] border border-[#1A4337] rounded-2xl p-4 space-y-2.5 text-xs">
                        <div className="flex items-center justify-between border-b border-[#1A4337] pb-2">
                          <span className="text-[#F4F0E6]/60">Quality Grade:</span>
                          <span className="font-bold text-[#F4F0E6]">{product.grade}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-[#1A4337] pb-2">
                          <span className="text-[#F4F0E6]/60">Moisture Control:</span>
                          <span className="font-bold text-[#C5922E]">{product.moisture}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#F4F0E6]/60">Export Packaging:</span>
                          <span className="font-bold text-[#F4F0E6]">{product.packaging}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions & RFQ CTA */}
                  <div className="p-6 sm:p-8 pt-0 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition shadow-lg shadow-[#C5922E]/10"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Request Sample</span>
                    </a>

                    <a
                      href="#rfq"
                      className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 bg-[#0B2B22] hover:bg-[#1A4337] border border-[#1A4337] text-[#F4F0E6] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition"
                    >
                      <span>Get FOB Quotation</span>
                      <ChevronRight className="w-4 h-4 text-[#C5922E]" />
                    </a>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 4. COMPLIANCE & COA DOWNLOAD BANNER */}
      <section className="py-16 bg-[#133A2E] border-t border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-[#C5922E] text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Lab Verification Assurance</span>
            </div>
            <h3 className="text-2xl font-black text-[#F4F0E6]">
              Need Official COA &amp; Technical Datasheets?
            </h3>
            <p className="text-xs text-[#F4F0E6]/70 max-w-xl">
              Download our complete product laboratory analysis reports, moisture testing protocols, and phytosanitary compliance documents.
            </p>
          </div>

          <a
            href="mailto:export@toska-organic.com"
            className="inline-flex items-center gap-2.5 bg-[#0B2B22] hover:bg-[#1A4337] border border-[#C5922E]/40 text-[#F4F0E6] font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-xl transition shadow-xl"
          >
            <Download className="w-4 h-4 text-[#C5922E]" />
            <span>Download Spec Sheets (PDF)</span>
          </a>
        </div>
      </section>

      {/* 5. GENERAL RFQ SECTION */}
      <section id="rfq" className="py-24 bg-[#0B2B22] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full inline-block">
            WHOLESALE PROCUREMENT
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4F0E6] tracking-tight">
            Custom Bulk Quotation &amp; Private Labeling
          </h2>

          <p className="text-[#F4F0E6]/80 text-sm max-w-xl mx-auto leading-relaxed">
            Specify your destination port, required packaging dimensions, and tonnage for a binding FOB/CIF price quote within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-[#C5922E]/20 transition"
            >
              <MessageSquare className="w-4 h-4 fill-[#0B2B22]" />
              <span>Direct WhatsApp Inquiry</span>
            </a>

            <a
              href="mailto:export@toska-organic.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#133A2E] hover:bg-[#1A4337] border border-[#1A4337] text-[#F4F0E6] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition"
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