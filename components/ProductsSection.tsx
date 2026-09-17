'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle, Package, Sparkles, Scale, Award, Sun } from 'lucide-react';

const products = [
  {
    id: 'plums',
    title: 'Sun-Dried Plums (آلو آفتابی)',
    subtitle: 'Golden Stew Plum • Grade A',
    image: 'https://images.pexels.com/photos/5155702/pexels-photo-5155702.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Sun,
    badge: 'Flagship Export Item',
    desc: 'Sweet & tangy sun-dried plums sourced directly from Mazandaran orchards. Perfect for stewing and bulk packaging.',
    specs: [
      { label: 'Moisture', value: '16% – 18%' },
      { label: 'Packaging', value: '5kg / 10kg Carton' },
      { label: 'Type', value: 'Sun-Dried' },
    ],
    bestFor: 'Iraq, India, GCC & European Food Importers',
  },
  {
    id: 'kashmar-raisins',
    title: 'Kashmar Green Raisins (کشمش سبز)',
    subtitle: 'Long Type • Naturally Sweet',
    image: 'https://images.pexels.com/photos/31717524/pexels-photo-31717524.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Sparkles,
    badge: 'High Bulk Demand',
    desc: 'Slender, dark green naturally dried raisins with paper-thin skin. Renowned for rich aroma and zero additive sugar.',
    specs: [
      { label: 'Moisture', value: '< 15%' },
      { label: 'Grade', value: 'Super Long' },
      { label: 'Shelf Life', value: '24 Months' },
    ],
    bestFor: 'Wholesale Snack Distributors & South Asia',
  },
  {
    id: 'uzbek-raisins',
    title: 'Uzbek Black Raisins (کشمش مویز)',
    subtitle: 'Jumbo Seedless • Dark Purple',
    image: 'https://images.pexels.com/photos/17877978/pexels-photo-17877978.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Scale,
    badge: 'Gourmet Organic',
    desc: 'Large seedless dark raisins packed with natural minerals and rich sweetness. Ideal for premium retail packaging.',
    specs: [
      { label: 'Moisture', value: '14% – 16%' },
      { label: 'Type', value: 'Seedless XL' },
      { label: 'Packaging', value: '5kg Bulk Carton' },
    ],
    bestFor: 'Confectionery, Bakeries & Retail Networks',
  },
  {
    id: 'barberries',
    title: 'Red Barberries (زرشک پفکی)',
    subtitle: 'Puffy Grade • Bright Ruby Red',
    image: 'https://images.pexels.com/photos/31779629/pexels-photo-31779629.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Package,
    badge: 'Premium Culinary Export',
    desc: 'Air-dried puffy barberries with intensely vivid red color and balanced sourness. Kept in cold storage.',
    specs: [
      { label: 'Moisture', value: '< 15%' },
      { label: 'Origin', value: 'Iran Organic' },
      { label: 'Shipment', value: 'Air / Sea Freight' },
    ],
    bestFor: 'Gourmet Spice Merchants & Middle East',
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="relative bg-[#051813] text-[#F4F0E6] py-16 md:py-16 px-4 md:px-12 border-b border-[#1A4337] overflow-hidden">
      
      {/* BACKGROUND AMBIENT ACCENT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#C5922E]/10 blur-[140px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
        
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#F4F0E6] leading-tight">
            Premium TOSKA Organic Products
          </h2>
          <p className="text-[#F4F0E6]/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Sourced directly, machine-cleaned, and carton-packed at our processing center in Mazandaran.
          </p>
        </div>

        {/* PRODUCTS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {products.map((prod) => {
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                className="group relative bg-[#133A2E] rounded-3xl border border-[#1A4337] hover:border-[#C5922E] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5922E] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30" />

                <div>
                  <div className="relative h-64 w-full overflow-hidden bg-[#0B2B22]">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      quality={80}
                      loading={prod.id === 'plums' ? 'eager' : 'lazy'}
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-105"
                      priority={prod.id === 'plums'}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#133A2E] via-[#0B2B22]/40 to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-20">
                      <span className="bg-[#0B2B22]/90 backdrop-blur-md text-[#C5922E] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-[#C5922E]/40 shadow-md">
                        {prod.badge}
                      </span>
                      <div className="p-2 bg-[#0B2B22]/90 backdrop-blur-md rounded-full text-[#C5922E] border border-[#1A4337] shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 z-20 space-y-0.5">
                      <h3 className="text-lg font-black text-[#F4F0E6] group-hover:text-[#C5922E] transition-colors drop-shadow">
                        {prod.title}
                      </h3>
                      <p className="text-[11px] text-[#C5922E] font-bold drop-shadow-sm">
                        {prod.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 space-y-4">
                    <p className="text-xs text-[#F4F0E6]/70 leading-relaxed font-normal">
                      {prod.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {prod.specs.map((spec, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] font-medium text-[#F4F0E6]/90 bg-[#0B2B22] border border-[#1A4337] px-2.5 py-1 rounded-lg flex items-center gap-1"
                        >
                          <span className="text-[#F4F0E6]/50">{spec.label}:</span>
                          <strong className="text-[#C5922E] font-bold">{spec.value}</strong>
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#F4F0E6]/80 bg-[#0B2B22]/60 p-2.5 rounded-xl border border-[#1A4337]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C5922E] shrink-0" />
                      <span className="truncate text-[11px]">
                        Target: <strong className="text-[#F4F0E6] font-bold">{prod.bestFor}</strong>
                      </span>
                    </div>

                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href="#rfq"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95"
                  >
                    <span>Request Sample / Quote</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}