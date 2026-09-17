'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ArrowDown, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Send, 
  CheckCircle2, 
  Globe, 
  Building2,
  Sparkles
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    product: 'Dried Plums (Aloo Bukhara)',
    quantity: '20ft FCL Container',
    destinationPort: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-16 md:py-16 border-b border-[#1A4337]">
        {/* Background Image & Overlay Gradients */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80"
            alt="Global Trade Contact Background"
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
              <span className="text-[#F4F0E6]">GET IN </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">TOUCH.</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Direct B2B Wholesale &amp; Custom Export Inquiries
            </h2>

            {/* Paragraph */}
            <p className="text-[#F4F0E6]/80 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Connect directly with our export logistics team for FOB/CIF freight quotations, custom packaging specifications, or sample dispatch requests.
            </p>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="#rfq-form"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>SUBMIT B2B INQUIRY</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 2. DIRECT CONTACT CHANNELS GRID */}
      <section className="py-16 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-3 transition-all">
            <div className="p-3 bg-[#133A2E] border border-[#1A4337] rounded-xl w-fit text-[#C5922E]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#F4F0E6]">Instant WhatsApp Sales</h3>
            <p className="text-xs text-[#F4F0E6]/70">Fastest response for sample orders and quick FOB rates.</p>
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-xs font-black text-[#C5922E] hover:underline pt-1"
            >
              +98 912 000 0000 &rarr;
            </a>
          </div>

          <div className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-3 transition-all">
            <div className="p-3 bg-[#133A2E] border border-[#1A4337] rounded-xl w-fit text-[#C5922E]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#F4F0E6]">Official Export Email</h3>
            <p className="text-xs text-[#F4F0E6]/70">Send official purchase orders (PO) and lab requirements.</p>
            <a 
              href="mailto:export@toska-organic.com" 
              className="inline-block text-xs font-black text-[#C5922E] hover:underline pt-1"
            >
              export@toska-organic.com &rarr;
            </a>
          </div>

          <div className="bg-[#0B2B22] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-3 transition-all">
            <div className="p-3 bg-[#133A2E] border border-[#1A4337] rounded-xl w-fit text-[#C5922E]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#F4F0E6]">Export Office Hours</h3>
            <p className="text-xs text-[#F4F0E6]/70">Saturday – Thursday: 08:00 AM – 18:00 PM (GMT+3.5)</p>
            <span className="inline-block text-xs font-black text-[#C5922E] pt-1">
              24/7 Priority Mail Monitor
            </span>
          </div>

        </div>
      </section>

      {/* 3. FORM & LOCATION SECTION */}
      <section id="rfq-form" className="py-20 md:py-28 bg-[#0B2B22]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: RFQ FORM */}
          <div className="lg:col-span-7 bg-[#133A2E] border border-[#1A4337] p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6">
            <div className="space-y-2">
              <span className="text-[#C5922E] text-xs font-black tracking-widest uppercase block">
                DIRECT RFQ / QUOTATION FORM
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#F4F0E6]">
                Request Commercial Quotation
              </h2>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#0B2B22] border border-[#C5922E]/40 rounded-2xl text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#C5922E] mx-auto" />
                <h3 className="text-xl font-bold text-[#F4F0E6]">Quotation Request Received</h3>
                <p className="text-xs text-[#F4F0E6]/70 leading-relaxed max-w-md mx-auto">
                  Our export desk is evaluating your destination port and quantity requirements. An official proforma or quotation will be sent within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#C5922E] text-[#0B2B22] font-black text-xs uppercase px-6 py-3 rounded-xl hover:bg-[#B38226] transition"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alexander Wright"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] p-3.5 rounded-xl outline-none transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Company / Trading Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Global Foods Trading GmbH"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] p-3.5 rounded-xl outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Business Email *</label>
                    <input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] p-3.5 rounded-xl outline-none transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      placeholder="+49 170 0000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] p-3.5 rounded-xl outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Required Product</label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({...formData, product: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] p-3.5 rounded-xl outline-none transition"
                    >
                      <option>Sun-Dried Golden Plums (Aloo Bukhara)</option>
                      <option>Organic Black Dried Figs</option>
                      <option>Pitted Sun-Dried Apricots</option>
                      <option>Dried Barberries (Zereshk)</option>
                      <option>Multiple Lineup / Mixed Container</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Order Volume / Freight Size</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] p-3.5 rounded-xl outline-none transition"
                    >
                      <option>20ft FCL Container (12-14 MT)</option>
                      <option>40ft High Cube Reefer (24-26 MT)</option>
                      <option>LCL Air Freight / Sample Order</option>
                      <option>Custom Tonnage Contract</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Destination Port &amp; Country *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Port of Hamburg (Germany) or Jebel Ali (Dubai)"
                    value={formData.destinationPort}
                    onChange={(e) => setFormData({...formData, destinationPort: e.target.value})}
                    className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] p-3.5 rounded-xl outline-none transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Specific Requirements / Packaging Notes</label>
                  <textarea
                    rows={4}
                    placeholder="Mention custom inner polybag weights, target CIF price, or required certifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] text-[#F4F0E6] p-3.5 rounded-xl outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider py-4 rounded-xl transition shadow-xl shadow-[#C5922E]/10"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Official RFQ</span>
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: FACILITY LOCATIONS */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-[#C5922E] text-xs font-black tracking-widest uppercase bg-[#133A2E] border border-[#1A4337] px-3.5 py-1.5 rounded-full">
                <Globe className="w-4 h-4" />
                <span>OPERATIONAL HUBS</span>
              </div>

              <h3 className="text-2xl font-black text-[#F4F0E6] tracking-tight">
                Processing Facilities &amp; Trade Offices
              </h3>

              <div className="space-y-4 text-xs">
                {/* Location Card 1 */}
                <div className="bg-[#133A2E] border border-[#1A4337] p-5 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-[#C5922E] font-bold">
                    <Building2 className="w-4 h-4" />
                    <span>Northern Processing &amp; Cold Storage</span>
                  </div>
                  <p className="text-[#F4F0E6]/70 leading-relaxed">
                    Mazandaran Industrial Zone, Northern Orchards Belt, Iran
                  </p>
                  <p className="text-[10px] text-[#F4F0E6]/50">
                    Primary sorting, solar drying, optical grading, and 0°C cold preservation.
                  </p>
                </div>

                {/* Location Card 2 */}
                <div className="bg-[#133A2E] border border-[#1A4337] p-5 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-[#C5922E] font-bold">
                    <MapPin className="w-4 h-4" />
                    <span>Commercial Export &amp; Customs Desk</span>
                  </div>
                  <p className="text-[#F4F0E6]/70 leading-relaxed">
                    Bandar Abbas Port Free Zone &amp; Tehran Trade Tower
                  </p>
                  <p className="text-[10px] text-[#F4F0E6]/50">
                    Container stuffing, phytosanitary clearance, and bill of lading issuance.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Quick WhatsApp Banner */}
            <div className="bg-gradient-to-r from-[#133A2E] to-[#0B2B22] border border-[#C5922E]/40 p-6 rounded-2xl space-y-3">
              <span className="text-[10px] font-black text-[#C5922E] uppercase tracking-widest block">
                URGENT CONTAINER PROCUREMENT?
              </span>
              <p className="text-xs text-[#F4F0E6]/80 leading-relaxed">
                Connect directly with our Chief Commercial Officer via WhatsApp for immediate stock availability and live FOB pricing.
              </p>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C5922E] text-[#0B2B22] font-black text-xs uppercase px-5 py-2.5 rounded-xl hover:bg-[#B38226] transition"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-[#0B2B22]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}