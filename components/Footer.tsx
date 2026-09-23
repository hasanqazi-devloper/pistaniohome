'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#051813] text-[#F4F0E6]/70 border-t border-[#1A4337] pt-16 pb-8 px-4 md:px-16 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1A4337]">
        
        {/* BRAND OVERVIEW */}
        <div className="space-y-4">
          <Link href="/" className="inline-block group">
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
          </Link>

          <p className="text-xs text-[#F4F0E6]/60 leading-relaxed">
            Direct Iranian pistachio grower, processor &amp; exporter from Rafsanjan orchards. Supplying premium Fandoghi, Ahmad Aghaei, Akbari, and Green Kernels globally.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/989000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C5922E]/10 text-[#C5922E] border border-[#C5922E]/30 px-3.5 py-2 rounded-xl text-xs font-semibold hover:bg-[#C5922E]/20 transition shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-[#C5922E]" />
              <span>WhatsApp Direct Desk</span>
            </a>
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div>
          <h4 className="text-[#F4F0E6] font-black text-xs uppercase tracking-widest mb-4">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <Link href="/" className="hover:text-[#C5922E] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about-sourcing" className="hover:text-[#C5922E] transition-colors">
                Direct Orchards
              </Link>
            </li>
            <li>
              <Link href="#products" className="hover:text-[#C5922E] transition-colors">
                Pistachio Catalog
              </Link>
            </li>
            <li>
              <Link href="#specs" className="hover:text-[#C5922E] transition-colors">
                Quality &amp; Lab Matrix
              </Link>
            </li>
            <li>
              <Link href="#rfq" className="hover:text-[#C5922E] transition-colors">
                Contact &amp; RFQ
              </Link>
            </li>
          </ul>
        </div>

        {/* EXPORT CATALOG */}
        <div>
          <h4 className="text-[#F4F0E6] font-black text-xs uppercase tracking-widest mb-4">
            Pistachio Grades
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li className="text-[#F4F0E6]/80 flex items-center justify-between">
              <span>Fandoghi Round</span>
              <span className="text-[10px] font-bold text-[#0B2B22] bg-[#C5922E] px-2 py-0.5 rounded">28/30</span>
            </li>
            <li className="text-[#F4F0E6]/80 flex items-center justify-between">
              <span>Ahmad Aghaei Long</span>
              <span className="text-[10px] font-bold text-[#C5922E] bg-[#C5922E]/10 border border-[#C5922E]/30 px-2 py-0.5 rounded">26/28</span>
            </li>
            <li className="text-[#F4F0E6]/80 flex items-center justify-between">
              <span>Akbari Super Long</span>
              <span className="text-[10px] font-bold text-[#F4F0E6]/60 bg-[#133A2E] border border-[#1A4337] px-2 py-0.5 rounded">20/22</span>
            </li>
            <li className="text-[#F4F0E6]/80 flex items-center justify-between">
              <span>Green Peeled Kernels</span>
              <span className="text-[10px] font-bold text-[#F4F0E6]/60 bg-[#133A2E] border border-[#1A4337] px-2 py-0.5 rounded">Grade A</span>
            </li>
          </ul>
        </div>

        {/* OPERATIONS & CONTACT */}
        <div>
          <h4 className="text-[#F4F0E6] font-black text-xs uppercase tracking-widest mb-4">
            Export Operations
          </h4>
          <ul className="space-y-3 text-xs font-medium">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
              <span>Rafsanjan Industrial Export Hub, Kerman, Iran</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#C5922E] shrink-0" />
              <a href="tel:+989000000000" className="hover:text-[#F4F0E6] transition-colors">
                +98 900 000 0000
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#C5922E] shrink-0" />
              <a href="mailto:export@pistachiohome.com" className="hover:text-[#F4F0E6] transition-colors">
                export@pistachiohome.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#F4F0E6]/50 gap-4">
        <p>© {new Date().getFullYear()} Pistachio Home. All Rights Reserved.</p>
        <div className="flex items-center gap-4">
          <span>Global Exporter: <strong className="text-[#F4F0E6]/80">Pistachio Home Trade Co.</strong></span>
          <span>|</span>
          <a href="#rfq" className="text-[#C5922E] font-bold hover:underline flex items-center gap-1">
            <span>Container RFQ</span>
            <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </footer>
  );
}