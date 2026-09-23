"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, PackageCheck } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: "Tariq H.",
      role: "Dry Fruit Merchant (Dubai, UAE)",
      text: "Sourcing Fandoghi and Akbari pistachios directly from Pistachio Home has completely eliminated moisture issues. The size grading is consistent across every container."
    },
    {
      name: "Anil K.",
      role: "Wholesale Spice & Nuts Importer (India)",
      text: "The Ahmad Aghaei pistachios arrived with zero aflatoxin issues and pristine shell opening. Bypassing middleman traders saved us over 12% on our FCL shipments."
    },
    {
      name: "Sami M.",
      role: "Food Distribution Manager (Turkey)",
      text: "Pistachio Home provides clear lab analysis papers and phytosanitary certificates for every single batch of Kalleh Ghouchi pistachios. Customs clearance was seamless."
    },
    {
      name: "Viktor P.",
      role: "Confectionery Supplier (Germany)",
      text: "Outstanding green peeled pistachio kernels for our chocolate manufacturing. Finding a supplier with strict quality control and vacuum export packaging is vital."
    }
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="py-16 bg-[#051813] text-[#F4F0E6] border-y border-[#1A4337] relative z-10 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full space-y-10">

        {/* HEADER */}
        <div className="text-center space-y-2">
        
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#F4F0E6]">
            Trusted by Pistachio Importers Worldwide
          </h2>
          <p className="text-xs sm:text-sm font-medium text-[#F4F0E6]/70 max-w-xl mx-auto">
            Verified feedback from wholesale partners across UAE, India, Turkey, and Europe.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative max-w-3xl mx-auto w-full">
          <m.div layout className="w-full bg-[#133A2E] rounded-3xl border border-[#1A4337] shadow-2xl relative overflow-hidden p-6 sm:p-10">
            <Quote size={80} className="absolute -bottom-4 -right-4 text-[#C5922E]/10 pointer-events-none transform -rotate-12" />

            <AnimatePresence mode="wait">
              <m.div
                key={activeIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col justify-between text-left space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-[#C5922E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#C5922E" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[#F4F0E6] font-medium leading-relaxed italic border-l-2 border-[#C5922E] pl-4">
                    "{reviews[activeIndex].text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1A4337] flex items-center justify-between w-full">
                  <div>
                    <h4 className="text-[#F4F0E6] text-xs sm:text-sm font-black uppercase tracking-wide">
                      {reviews[activeIndex].name}
                    </h4>
                    <p className="text-[#C5922E] text-xs font-bold mt-0.5">
                      {reviews[activeIndex].role}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#C5922E]/40 bg-[#C5922E]/15 flex items-center justify-center text-[#C5922E] shrink-0">
                    <PackageCheck size={14} />
                  </div>
                </div>
              </m.div>
            </AnimatePresence>
          </m.div>

          {/* CONTROLS */}
          <div className="flex justify-center items-center gap-4 mt-6 w-full">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-[#133A2E] border border-[#1A4337] text-[#F4F0E6]/70 hover:text-[#C5922E] transition-all shadow-sm"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all ${i === activeIndex ? "w-6 bg-[#C5922E]" : "w-1.5 bg-[#133A2E]"}`} />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-[#133A2E] border border-[#1A4337] text-[#F4F0E6]/70 hover:text-[#C5922E] transition-all shadow-sm"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}