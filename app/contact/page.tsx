'use client';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  ChevronDown,
  Building2,
  Clock,
  Globe
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Official Management Posters / Profiles
  const teamMembers = [
    {
      id: 'ali-fathi',
      name: 'Ali Fathi Nasab',
      persianName: 'علی فتحی نسب',
      role: 'Managing Director (مدیرعامل)',
      subTitle: 'Former Manager of Bank Keshavrazi (Khurasan Razavi)',
      image: '/ali.webp',
      phone: '+98 915 598 8780',
      badge: 'Executive Leadership'
    },
    {
      id: 'hossein-fathi',
      name: 'Hossein Fathi Nasab',
      persianName: 'حسین فتحی نسب',
      role: 'Export Manager (کارشناس صادرات)',
      subTitle: 'International Logistics & B2B Trade Specialist',
      image: '/hossain.webp',
      phone: '+98 912 532 3142',
      badge: 'Export Operations'
    },
    {
      id: 'naser-haji',
      name: 'Naser Haji Abadi',
      persianName: 'Naser Haji Abadi (ناصر حاجی آبادی)',
      role: 'Sales Specialist (کارشناس فروش)',
      subTitle: 'Domestic & Regional Market Supply',
      image: '/farsi.webp',
      phone: '+98 915 371 3610',
      badge: 'Domestic Sales'
    }
  ];

  const faqs = [
    {
      q: 'What is the Minimum Order Quantity (MOQ) for export?',
      a: 'Our standard MOQ is one 20ft Full Container Load (FCL), which accommodates approximately 14 to 16 Metric Tons depending on product variety and vacuum packaging specifications.'
    },
    {
      q: 'How do you handle Aflatoxin testing for European imports?',
      a: 'Every export batch is sampled in accordance with ISO/EU protocols and tested via HPLC in accredited laboratories. Official Phytosanitary Certificates and Certificate of Analysis (COA) specifying B1 and Total Aflatoxin levels are provided with each shipment.'
    },
    {
      q: 'Which Incoterms and payment terms are supported?',
      a: 'We primarily quote on FOB Bandar Abbas, CIF destination port, or CFR terms. Payment methods include Wire Transfer (T/T), Irrevocable Letter of Credit (L/C), and milestone-based commercial arrangements.'
    }
  ];

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. UNIFIED HERO SECTION */}
   <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-16 md:py-16 border-b border-[#1A4337]">
  {/* Background Image & Dark Overlay */}
  <div className="absolute inset-0 z-0">
    <Image
      src="https://images.unsplash.com/photo-1756749442845-4973b7cede48?auto=format&fit=crop&w=1920&q=100"
      alt="Pistachio Home Executive Communication & Trade Office"
      fill
      priority
      unoptimized
      className="object-cover object-center opacity-40 -scale-x-100"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B22]/90 via-[#0B2B22]/60 to-transparent" />
  </div>

  {/* Hero Content */}
  <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
    <div className="max-w-3xl space-y-7 text-left">
   

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight">
        <span className="text-[#F4F0E6]">CONTACT OUR </span>
        <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">EXECUTIVE TEAM</span>
      </h1>

      <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed">
        Directly connect with our board directors, export representatives, and sales managers for instant price quotes and supply agreements.
      </p>

      <div className="pt-2">
        <a
          href="#team"
          className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
        >
          <span>VIEW EXECUTIVE DIRECTORY</span>
          <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
        </a>
      </div>
    </div>
  </div>
</section>

      {/* 2. MANAGEMENT POSTERS SECTION (INCREASED HEIGHT CARDS) */}
      <section className="py-20 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#F4F0E6] tracking-tight">
              Management &amp; Key Representatives
            </h2>
            <p className="text-xs text-[#C5922E] font-medium dir-rtl">
              خانه پسته - هیئت مدیره و کارشناسان ارشد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-[#0B2B22] border border-[#1A4337] rounded-3xl overflow-hidden hover:border-[#C5922E]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                {/* Poster Container - Height increased to h-[480px] for full poster display */}
                <div className="relative h-[480px] w-full bg-[#0B2B22] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority
                    className="object-contain object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-[#0B2B22]/90 text-[#C5922E] border border-[#1A4337] px-3 py-1 rounded-full backdrop-blur-md">
                      {member.badge}
                    </span>
                  </div>
                </div>

                {/* Card Info & Actions */}
                <div className="p-6 space-y-4 bg-[#0B2B22] border-t border-[#1A4337]">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-black text-[#F4F0E6]">{member.name}</h3>
                      <span className="text-xs text-[#C5922E] font-bold dir-rtl">{member.persianName}</span>
                    </div>
                    <p className="text-xs font-bold text-[#C5922E] tracking-wider uppercase">{member.role}</p>
                    <p className="text-[11px] text-[#F4F0E6]/60 leading-relaxed">{member.subTitle}</p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <a
                      href={`tel:${member.phone}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#133A2E] hover:bg-[#C5922E] text-[#F4F0E6] hover:text-[#0B2B22] border border-[#1A4337] font-bold text-xs py-3 rounded-xl transition-all duration-300"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C5922E] group-hover:text-[#0B2B22]" />
                      <span>{member.phone}</span>
                    </a>

                    <a
                      href={`https://wa.me/${member.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0B2B22] hover:bg-[#133A2E] text-[#C5922E] border border-[#1A4337] font-bold text-xs py-2.5 rounded-xl transition-all duration-300"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-[#C5922E]" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HEAD OFFICE DETAILS & FORM */}
      <section className="py-20 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#C5922E]">Official Headquarters</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#F4F0E6] mt-1 tracking-tight">
                Head Office &amp; Address
              </h2>
              <p className="text-xs text-[#F4F0E6]/70 mt-2 leading-relaxed">
                Sabzevar, Pasdaran Ave, End of Pasdaran 5, Building 7, 2nd Floor
                <br />
                <span className="dir-rtl inline-block mt-1">سبزوار - خیابان پاسداران - انتهای پاسداران ۵ - ساختمان هفت - طبقه دوم</span>
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-[#133A2E] border border-[#1A4337] p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#C5922E] uppercase tracking-wider">Office Location</h3>
                  <p className="text-sm font-semibold text-[#F4F0E6] mt-0.5">Sabzevar, Razavi Khorasan, Iran</p>
                </div>
              </div>

              <div className="bg-[#133A2E] border border-[#1A4337] p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#C5922E] uppercase tracking-wider">Email Support</h3>
                  <p className="text-sm font-semibold text-[#F4F0E6] mt-0.5">info@pistachiohome.com</p>
                  <p className="text-[11px] text-[#F4F0E6]/60">ali_fathinasab@yahoo.com</p>
                </div>
              </div>

              <div className="bg-[#133A2E] border border-[#1A4337] p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#C5922E] uppercase tracking-wider">Working Hours</h3>
                  <p className="text-sm font-semibold text-[#F4F0E6] mt-0.5">Saturday – Thursday: 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-[#133A2E] border border-[#1A4337] rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="mb-6 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#C5922E]">Direct Communication</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#F4F0E6]">Send Us a Message</h2>
              <p className="text-xs text-[#F4F0E6]/70 dir-rtl">
                انتقادات و پیشنهادات خود را با ما در میان بگذارید
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#0B2B22] border border-[#C5922E] rounded-2xl p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-[#C5922E] text-[#0B2B22] rounded-full flex items-center justify-center mx-auto font-black text-xl">
                  ✓
                </div>
                <h3 className="text-xl font-black text-[#F4F0E6]">Message Delivered!</h3>
                <p className="text-xs text-[#F4F0E6]/80 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to Pistachio Home. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#C5922E] underline uppercase tracking-wider pt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Full Name (نام و نام خانوادگی) *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ali Reza"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] rounded-xl px-4 py-3 text-xs text-[#F4F0E6] outline-none transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Email (ایمیل) *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] rounded-xl px-4 py-3 text-xs text-[#F4F0E6] outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Phone (شماره تماس)</label>
                    <input
                      type="text"
                      placeholder="+98..."
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] rounded-xl px-4 py-3 text-xs text-[#F4F0E6] outline-none transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Subject (موضوع پیام)</label>
                    <input
                      type="text"
                      placeholder="Export Inquiry / Order"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] rounded-xl px-4 py-3 text-xs text-[#F4F0E6] outline-none transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Message (متن پیام)</label>
                  <textarea
                    rows={4}
                    placeholder="Write your inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] rounded-xl px-4 py-3 text-xs text-[#F4F0E6] outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20"
                >
                  <Send className="w-4 h-4 fill-[#0B2B22]" />
                  <span>Send Message (ارسال پیام)</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-20 bg-[#133A2E]">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#F4F0E6]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-[#0B2B22] border border-[#1A4337] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#F4F0E6] hover:text-[#C5922E] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#C5922E] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-0 text-xs text-[#F4F0E6]/70 leading-relaxed border-t border-[#1A4337]/50">
                    <p className="mt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}