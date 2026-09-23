'use client';

import React, { useState } from 'react';
import {
  Ship,
  Package,
  Scale,
  Truck,
  RotateCcw,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function LogisticsEstimator() {
  const [cargoWeightKg, setCargoWeightKg] = useState<number>(5000);
  const [boxWeightKg, setBoxWeightKg] = useState<number>(10);
  const [containerType, setContainerType] = useState<'20ft' | '40ft'>('20ft');

  // Calculations
  const totalBoxes = Math.floor(cargoWeightKg / (boxWeightKg || 1));
  const containerLimitKg = containerType === '20ft' ? 20000 : 26000;
  const fillPercentage = Math.min(100, Math.round((cargoWeightKg / containerLimitKg) * 100));
  const containersNeeded = Math.ceil(cargoWeightKg / containerLimitKg);

  const handleReset = () => {
    setCargoWeightKg(5000);
    setBoxWeightKg(10);
    setContainerType('20ft');
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-[#0B2B22] text-[#F4F0E6] border-b border-[#1A4337] relative overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-[#C5922E]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">

        {/* MAIN HEADING */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#1A4337] pb-4">
          <div className="space-y-1.5">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#F4F0E6] mt-1">
              Shipment &amp; Container Calculator
            </h2>
          </div>

          <button
            onClick={handleReset}
            className="self-start sm:self-auto flex items-center gap-1.5 text-xs font-semibold text-[#F4F0E6]/70 hover:text-[#C5922E] bg-[#133A2E] border border-[#1A4337] px-3 py-2 rounded-xl transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#C5922E]" />
            <span>Reset Form</span>
          </button>
        </div>

        {/* MAIN CARD */}
        <div className="bg-[#133A2E] border border-[#1A4337] rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden">

          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5922E] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

            {/* CONTROLS */}
            <div className="md:col-span-6 space-y-4 border-b md:border-b-0 md:border-r border-[#1A4337] pb-6 md:pb-0 md:pr-6">

              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs sm:text-sm">
                  <label className="font-bold text-[#F4F0E6]">1. Total Weight</label>
                  <span className="text-[#C5922E] font-black text-base">{cargoWeightKg.toLocaleString()} kg</span>
                </div>
                <input
                  type="number"
                  value={cargoWeightKg}
                  onChange={(e) => setCargoWeightKg(Number(e.target.value))}
                  className="w-full bg-[#0B2B22] border border-[#1A4337] rounded-xl px-3.5 py-2 text-sm font-bold text-[#F4F0E6] focus:outline-none focus:border-[#C5922E]"
                  placeholder="Enter weight in KG"
                />
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={cargoWeightKg}
                  onChange={(e) => setCargoWeightKg(Number(e.target.value))}
                  className="w-full accent-[#C5922E] cursor-pointer h-1.5 bg-[#0B2B22] rounded-lg"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-[#F4F0E6] block">2. Carton Packaging</label>
                <div className="grid grid-cols-3 gap-2">
                  {[5, 10, 20].map((kg) => (
                    <button
                      key={kg}
                      onClick={() => setBoxWeightKg(kg)}
                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                        boxWeightKg === kg
                          ? 'bg-[#C5922E] border-[#C5922E] text-[#0B2B22] shadow-md'
                          : 'bg-[#0B2B22] border-[#1A4337] text-[#F4F0E6]/70 hover:text-[#F4F0E6]'
                      }`}
                    >
                      {kg} kg Box
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-[#F4F0E6] block">3. Container Size</label>
                <div className="grid grid-cols-2 gap-2">
                  {(['20ft', '40ft'] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setContainerType(type)}
                      className={`py-2 text-xs font-bold rounded-xl border flex items-center justify-center gap-2 transition-all ${
                        containerType === type
                          ? 'bg-[#C5922E] border-[#C5922E] text-[#0B2B22] shadow-md'
                          : 'bg-[#0B2B22] border-[#1A4337] text-[#F4F0E6]/70 hover:text-[#F4F0E6]'
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                      {type} Container
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* LIVE METRICS */}
            <div className="md:col-span-6 space-y-4">

              <div className="flex items-center justify-between text-xs font-bold text-[#C5922E]">
                <span className="flex items-center gap-1.5"><Scale className="w-4 h-4" /> Live Estimate</span>
                <span className="text-[10px] text-[#F4F0E6]/60 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5922E]" /> Verified Limits
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#0B2B22] border border-[#1A4337] p-3 sm:p-4 rounded-2xl">
                  <div className="flex items-center justify-between text-[#F4F0E6]/60 text-[10px] font-bold uppercase">
                    <span>Cartons</span>
                    <Package className="w-4 h-4 text-[#C5922E]" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-[#F4F0E6] mt-1">
                    {totalBoxes.toLocaleString()} <span className="text-xs text-[#F4F0E6]/60 font-normal">Boxes</span>
                  </div>
                </div>

                <div className="bg-[#0B2B22] border border-[#1A4337] p-3 sm:p-4 rounded-2xl">
                  <div className="flex items-center justify-between text-[#F4F0E6]/60 text-[10px] font-bold uppercase">
                    <span>Containers</span>
                    <Ship className="w-4 h-4 text-[#C5922E]" />
                  </div>
                  <div className="text-lg sm:text-xl font-black text-[#C5922E] mt-1">
                    {containersNeeded} <span className="text-xs text-[#F4F0E6]/60 font-normal">x {containerType}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0B2B22] border border-[#1A4337] p-3.5 rounded-2xl space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-[#F4F0E6]/70">Container Capacity</span>
                  <span className="text-[#C5922E]">{fillPercentage}% Full</span>
                </div>
                <div className="w-full bg-[#133A2E] h-2.5 rounded-full overflow-hidden border border-[#1A4337]">
                  <div
                    className="h-full bg-[#C5922E] transition-all duration-300 rounded-full"
                    style={{ width: `${fillPercentage}%` }}
                  />
                </div>
              </div>

              <a
                href="#rfq"
                className="w-full bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs sm:text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg uppercase tracking-wider active:scale-[0.98]"
              >
                <span>Get Freight Quote For This Order</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}