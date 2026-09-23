'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Download, Sparkles, ShieldCheck, Ship, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#051813] text-[#EFECE6] overflow-hidden py-16 lg:py-18 border-b border-[#1A4337]">
      
      {/* BACKGROUND IMAGE WITH SUBTLE OVERLAY & GRADIENT */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1756749442845-4973b7cede48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBpc3RhY2hpbyUyMHBsYW50c3xlbnwwfHwwfHx8MA%3D%3D"
          alt="International Export Logistics Background"
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-50"
        />
        {/* Deep Green Gradient to keep text crisp & readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#051813] via-[#051813]/90 to-[#051813]/70" />
      </div>

      {/* BACKGROUND GLOW ANIMATIONS */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#C5922E]/10 rounded-full blur-[140px] pointer-events-none animate-pulse z-0" />
      <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-[#133A2E]/50 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5922E_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: HEADLINE & ACTIONS (6 COLS) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
        

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-[#EFECE6]">
              Premium Grade <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5922E] via-[#E2B755] to-amber-200 drop-shadow-sm">
                Iranian Pistachios &amp; Nuts Bulk Supply
              </span>
            </h1>

            {/* Sub-headline Paragraph */}
            <p className="text-[#EFECE6]/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Direct B2B supplier of authentic Akbari, Fandoghi, Kaleh Ghouchi, and Ahmad Aghaei pistachios under Pistachio Home. Supplying container loads with certified sorting for Middle East, Europe, CIS, and global wholesale markets.
            </p>

            {/* CTA Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1 w-full">
              <a
                href="#rfq"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#C5922E]/15 hover:shadow-[#C5922E]/30 transform active:scale-95"
              >
                <span>Request B2B Quote</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#133A2E]/80 hover:bg-[#1A4337] border border-[#1A4337] hover:border-[#C5922E]/40 text-[#EFECE6] px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-md"
              >
                <Download className="w-4 h-4 text-[#C5922E]" />
                <span>Export Catalog Specs</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: DISPLAY WITH GLOW EFFECT (6 COLS) */}
          <div className="lg:col-span-6 flex items-center justify-center relative w-full">
            
            {/* Glowing Backdrop behind Image */}
            <div className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-[#C5922E]/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative w-full max-w-lg lg:max-w-none h-[320px] sm:h-[400px] lg:h-[460px] flex items-center justify-center">
              <Image
                src="/hero.png"
                alt="Pistachio Home Iranian Premium Pistachio Export"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center lg:object-right drop-shadow-[0_20px_30px_rgba(197,146,46,0.25)] hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}