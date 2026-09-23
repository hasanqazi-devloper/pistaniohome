'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, MessageSquare, Globe } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'FA' | 'AR'>('EN');

  const toggleLanguage = () => {
    if (lang === 'EN') setLang('FA');
    else if (lang === 'FA') setLang('AR');
    else setLang('EN');
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#051813]/95 backdrop-blur-xl border-b border-[#1A4337] shadow-2xl py-3.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* 1. BRAND LOGO & BRANDING */}
        <Link href="/" className="flex items-center gap-3.5 group shrink-0">
          <div className="relative flex items-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Pistachio Home Logo"
              width={200}
              height={70}
              quality={100}
              unoptimized
              className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_12px_rgba(197,146,46,0.25)] brightness-110 contrast-105"
              priority
            />
          </div>

          {/* <div className="hidden sm:flex flex-col justify-center border-l-2 border-[#C5922E]/40 pl-3.5 py-0.5">
            <div className="flex items-center gap-2">
              <span className="text-base md:text-lg font-black tracking-[0.2em] uppercase leading-none text-[#EFECE6] group-hover:text-[#C5922E] transition-colors">
                PISTACHIO <span className="text-[#C5922E] drop-shadow-[0_0_8px_rgba(197,146,46,0.4)]">HOME</span>
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5922E] shadow-[0_0_6px_#C5922E] animate-pulse" />
              <span className="text-[9px] font-bold tracking-[0.18em] text-[#EFECE6]/70 uppercase">
                Premium B2B Export
              </span>
            </div>
          </div> */}
        </Link>

        {/* 2. DESKTOP NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-6 bg-[#133A2E]/90 border border-[#1A4337] rounded-full px-6 py-2 shadow-inner backdrop-blur-md">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Products', path: '/products' },
            { name: 'Blog', path: '/blog' },
            { name: 'Quality', path: '/quality' },
            { name: 'Export', path: '/export' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-xs font-bold uppercase tracking-wider text-[#EFECE6]/85 hover:text-[#C5922E] transition-colors relative group py-0.5"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5922E] group-hover:w-full transition-all duration-300 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* 3. DESKTOP ACTION BUTTONS */}
        <div className="hidden md:flex items-center gap-2.5 shrink-0">
          {/* LANGUAGE SWITCHER */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-xs font-bold text-[#C5922E] bg-[#C5922E]/10 border border-[#C5922E]/30 px-3 py-2 rounded-xl hover:bg-[#C5922E]/20 transition cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-[#C5922E]" />
            <span>{lang}</span>
          </button>

          {/* WHATSAPP CTA */}
          <a
            href="https://wa.me/989125323122"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-[#EFECE6] bg-[#133A2E] border border-[#1A4337] px-3.5 py-2 rounded-xl hover:border-[#C5922E]/50 transition shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#C5922E]" />
            <span>WhatsApp</span>
          </a>

          {/* RFQ QUOTE CTA */}
          <a
            href="#rfq"
            className="relative inline-flex items-center gap-1 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl shadow-lg shadow-[#C5922E]/20 transition-all transform hover:scale-[1.02] active:scale-95 whitespace-nowrap"
          >
            <span>Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* 4. MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white bg-[#133A2E] rounded-xl border border-[#1A4337] hover:border-[#C5922E]/50 transition cursor-pointer shrink-0"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#C5922E]" /> : <Menu className="w-5 h-5 text-[#EFECE6]" />}
        </button>

      </div>

      {/* 5. MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#051813]/98 backdrop-blur-2xl border-b border-[#1A4337] px-6 py-6 space-y-5 animate-in slide-in-from-top duration-300 shadow-2xl">
          <nav className="flex flex-col space-y-3.5 text-xs font-black uppercase tracking-wider text-[#EFECE6]/85">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Products', path: '/products' },
              { name: 'Blog', path: '/blog' },
              { name: 'Quality', path: '/quality' },
              { name: 'Export', path: '/export' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C5922E] transition-colors py-1 border-b border-[#1A4337]/40"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="pt-2 border-t border-[#1A4337] space-y-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 w-full text-xs font-bold text-[#C5922E] bg-[#C5922E]/10 border border-[#C5922E]/20 py-2.5 rounded-xl"
            >
              <Globe className="w-4 h-4" />
              <span>Language: {lang}</span>
            </button>

            <a
              href="https://wa.me/989125323122"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-xs font-bold text-[#EFECE6] bg-[#133A2E] border border-[#1A4337] py-2.5 rounded-xl"
            >
              <MessageSquare className="w-4 h-4 text-[#C5922E]" />
              <span>WhatsApp Direct Desk</span>
            </a>

            <a
              href="#rfq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] text-xs font-black uppercase tracking-wider py-3 rounded-xl shadow-md"
            >
              <span>Get Bulk Quote</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}