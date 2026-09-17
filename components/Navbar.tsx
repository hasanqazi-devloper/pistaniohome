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
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#051813]/95 backdrop-blur-xl border-b border-[#1A4337] shadow-2xl py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">

        {/* BRAND LOGO / NAME */}
        <Link href="/" className="flex items-center group py-1 shrink-0">
          <div className="relative flex items-center transition-transform duration-300 group-hover:scale-[1.02]">
            <Image
              src="/navbar.png"
              alt="TOSKA Organic Logo"
              width={200}
              height={70}
              quality={100}
              unoptimized
              className="h-10 md:h-12 w-auto object-contain drop-shadow-md brightness-105 contrast-105"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAV LINKS (SHORT & COMPACT) */}
        <nav className="hidden lg:flex items-center gap-5 bg-[#133A2E]/90 border border-[#1A4337] rounded-full px-5 py-1.5 shadow-inner backdrop-blur-md">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-wider text-[#EFECE6]/80 hover:text-[#C5922E] transition-colors relative group py-1"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5922E] group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>
          <Link
            href="/about"
            className="text-xs font-bold uppercase tracking-wider text-[#EFECE6]/80 hover:text-[#C5922E] transition-colors relative group py-1"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5922E] group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>
          <Link
            href="/products"
            className="text-xs font-bold uppercase tracking-wider text-[#EFECE6]/80 hover:text-[#C5922E] transition-colors relative group py-1"
          >
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5922E] group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>

          <Link
            href="/quality"
            className="text-xs font-bold uppercase tracking-wider text-[#EFECE6]/80 hover:text-[#C5922E] transition-colors relative group py-1"
          >
            Quality
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5922E] group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>

          <Link
            href="/export"
            className="text-xs font-bold uppercase tracking-wider text-[#EFECE6]/80 hover:text-[#C5922E] transition-colors relative group py-1"
          >
            Export
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5922E] group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>

          <Link
            href="/contact"
            className="text-xs font-bold uppercase tracking-wider text-[#EFECE6]/80 hover:text-[#C5922E] transition-colors relative group py-1"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5922E] group-hover:w-full transition-all duration-300 rounded-full" />
          </Link>
        </nav>

        {/* ACTION BUTTONS & LANGUAGE SWITCHER */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          {/* LANGUAGE TOGGLE */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-bold text-[#C5922E] bg-[#C5922E]/10 border border-[#C5922E]/30 px-2.5 py-1.5 rounded-xl hover:bg-[#C5922E]/20 transition cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-[#C5922E]" />
            <span>{lang}</span>
          </button>

          {/* WHATSAPP ACTION */}
          <a
            href="https://wa.me/989128194737"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-[#EFECE6] bg-[#133A2E] border border-[#1A4337] px-3 py-1.5 rounded-xl hover:border-[#C5922E]/50 transition shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#C5922E]" />
            <span>WhatsApp</span>
          </a>

          {/* RFQ CTA BUTTON */}
          <a
            href="#rfq"
            className="relative inline-flex items-center gap-1 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-xl shadow-lg shadow-[#C5922E]/20 transition-all transform hover:scale-[1.02] active:scale-95 whitespace-nowrap"
          >
            <span>Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white bg-[#133A2E] rounded-xl border border-[#1A4337] hover:border-[#C5922E]/50 transition cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-[#C5922E]" /> : <Menu className="w-5 h-5 text-[#EFECE6]" />}
        </button>

      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B2B22]/98 backdrop-blur-2xl border-b border-[#1A4337] px-6 py-6 space-y-5 animate-in slide-in-from-top duration-300 shadow-2xl">
          <nav className="flex flex-col space-y-4 text-xs font-black uppercase tracking-wider text-[#EFECE6]/80">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5922E] transition"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5922E] transition"
            >
              Products
            </Link>
            <Link
              href="/quality"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5922E] transition"
            >
              Quality
            </Link>
            <Link
              href="/export"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5922E] transition"
            >
              Export
            </Link>
            <Link
              href="#rfq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#C5922E] transition"
            >
              Contact
            </Link>
          </nav>

          <div className="pt-4 border-t border-[#1A4337] space-y-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 w-full text-xs font-bold text-[#C5922E] bg-[#C5922E]/10 border border-[#C5922E]/20 py-2 rounded-xl"
            >
              <Globe className="w-4 h-4" />
              <span>Language: {lang}</span>
            </button>

            <a
              href="https://wa.me/989128194737"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-xs font-bold text-[#EFECE6] bg-[#133A2E] border border-[#1A4337] py-2.5 rounded-xl"
            >
              <MessageSquare className="w-4 h-4 text-[#C5922E]" />
              <span>WhatsApp (+98 912 819 4737)</span>
            </a>

            <a
              href="#rfq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] text-xs font-black uppercase tracking-wider py-3 rounded-xl shadow-md"
            >
              <span>Get Quote</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}