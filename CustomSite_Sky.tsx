import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ChevronRight, ArrowRight, Shield, Zap, 
  Gauge, Target, Radio, Cpu, Layers, ArrowLeft, Download, Check, Copy
} from 'lucide-react';



const MinimalHero = () => (
  <section className="relative h-screen w-full flex items-center border-y border-white/5 px-8 md:px-24 overflow-hidden bg-black text-white font-mono">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover opacity-10 grayscale" alt="" />
    </div>
    <div className="grid lg:grid-cols-2 w-full max-w-[1440px] mx-auto items-end gap-24 relative z-10 mt-20">
      <div className="flex flex-col">
        <h2 className="text-[10vw] font-black leading-[0.8] mb-12 tracking-[-0.06em]">PURE <br /> LOGIC</h2>
        <p className="max-w-md text-white/40 text-lg font-light leading-relaxed mb-16 uppercase tracking-[0.2em]">
          Stripped down to the essential. The hardware, the road, and nothing else.
        </p>
        <button className="flex items-center gap-8 group">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center transition-transform hover:scale-110">
            <ArrowRight className="text-black" size={32} />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.6em]">Initialize</span>
        </button>
      </div>
    </div>
  </section>
);

const FleetGridHero = () => (
  <section className="relative h-screen w-full p-8 md:p-12 overflow-hidden bg-[#050505] text-white">
    <div className="flex justify-between items-end mb-12">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.6em] text-[#C5A47E]">The Collection</span>
        <h2 className="text-6xl font-black tracking-tighter uppercase">CURATED_FLEET</h2>
      </div>
      <button className="text-xs font-bold uppercase border-b border-[#C5A47E] text-[#C5A47E] pb-2">View All</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[60vh]">
      <div className="col-span-2 row-span-2 bg-white/5 border border-white/5 relative group overflow-hidden">
        <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
        <div className="absolute bottom-8 left-8">
           <span className="text-4xl font-black italic">GT_3_RS</span>
        </div>
      </div>
      <div className="col-span-1 bg-white/5 border border-white/5 p-8 flex flex-col justify-between">
         <span className="text-[10px] opacity-20 uppercase tracking-widest">Available</span>
         <span className="text-2xl font-bold uppercase">Aventador SVJ</span>
      </div>
      <div className="col-span-1 bg-[#C5A47E] text-black p-8 flex flex-col justify-between">
         <span className="text-[10px] font-bold uppercase tracking-widest">New Arrival</span>
         <span className="text-2xl font-bold uppercase">SF90 Stradale</span>
      </div>
      <div className="col-span-2 bg-white/5 border border-white/5 p-8 flex items-center justify-between">
         <div className="flex flex-col">
            <span className="text-[10px] opacity-20 uppercase tracking-widest">Performance</span>
            <span className="text-xl font-bold uppercase">Hybrid V12 Architecture</span>
         </div>
         <ArrowRight size={32} className="opacity-20" />
      </div>
    </div>
  </section>
);

const TestimonialHero = () => (
  <section className="relative h-screen w-full flex items-center justify-center p-24 overflow-hidden bg-[#0a0a0a] text-white">
    <div className="relative z-10 text-center max-w-5xl">
       <span className="text-7xl font-serif italic opacity-10 mb-12 block leading-none">“</span>
       <h2 className="text-6xl font-light leading-tight tracking-tight mb-20 italic">"The transition from the flight deck to the driver's seat was absolutely seamless. Precision manifested in metal."</h2>
       <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-[1px] bg-[#C5A47E]" />
          <span className="text-xs font-bold uppercase tracking-[0.8em] text-[#C5A47E]">Julian_Vane // CEO_ARCH</span>
       </div>
    </div>
  </section>
);

const TeamHero = () => (
  <section className="relative h-screen w-full p-24 overflow-hidden bg-white text-black font-sans">
    <div className="flex justify-between items-end mb-16">
      <h2 className="text-7xl font-black uppercase tracking-tighter">OPERATIONAL <br /> COMMAND.</h2>
      <p className="max-w-xs text-[10px] opacity-40 uppercase tracking-[0.4em]">The strategists behind the service.</p>
    </div>
    <div className="grid grid-cols-4 gap-8">
      {[ {n: "VANCE_H", r: "Founder / CEO"}, {n: "SARAH_L", r: "Fleet Director"}, {n: "MARC_D", r: "Tech Lead"}, {n: "ELENA_S", r: "Concierge"} ].map((m, i) => (
        <div key={i} className="flex flex-col group cursor-pointer">
           <div className="aspect-[3/4] bg-black/5 mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
           </div>
           <span className="text-xl font-bold uppercase">{m.n}</span>
           <span className="text-[10px] opacity-30 uppercase tracking-widest">{m.r}</span>
        </div>
      ))}
    </div>
  </section>
);

const SwissValues = () => (
  <section className="relative h-screen w-full bg-white text-black p-24 font-sans font-black flex items-center">
    <div className="grid grid-cols-12 gap-8 w-full uppercase">
       <div className="col-span-1 border-l-4 border-black pl-8 flex flex-col justify-between h-[400px]">
          <span className="text-xs">01</span>
          <span className="text-xs">02</span>
          <span className="text-xs">03</span>
       </div>
       <div className="col-span-11 flex flex-col gap-12">
          <div className="flex flex-col">
             <h2 className="text-9xl tracking-tighter leading-none italic">PRECISION.</h2>
             <p className="text-xs font-medium max-w-md mt-4 ml-2">Everything down to the PSI is calculated for the perfect drive.</p>
          </div>
          <div className="flex flex-col ml-24">
             <h2 className="text-9xl tracking-tighter leading-none italic">SPEED.</h2>
             <p className="text-xs font-medium max-w-md mt-4 ml-2">Not just velocity, but the speed of service and delivery.</p>
          </div>
          <div className="flex flex-col ml-48 text-[#C5A47E]">
             <h2 className="text-9xl tracking-tighter leading-none italic">PURITY.</h2>
             <p className="text-xs font-medium max-w-md mt-4 ml-2">Unfiltered experiences, no compromise on raw power.</p>
          </div>
       </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="relative h-screen w-full flex flex-col items-center justify-center bg-black text-white p-24 overflow-hidden">
     <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover" />
     </div>
     <div className="relative z-10 flex flex-col items-center gap-12 text-center">
        <h2 className="text-[12vw] font-black tracking-tighter uppercase leading-[0.8]">STOP <br /> DREAMING.</h2>
        <div className="flex gap-4">
           <button className="px-16 py-6 bg-[#C5A47E] text-black font-black uppercase text-xs tracking-[0.4em] hover:scale-105 transition-all">Secure Fleet</button>
           <button className="px-16 py-6 border border-white/20 font-black uppercase text-xs tracking-[0.4em] hover:bg-white/10 transition-all">Download App</button>
        </div>
     </div>
  </section>
);

const TimelineHero = () => (
  <section className="relative h-screen w-full p-24 bg-[#fdf200] text-black font-black italic overflow-hidden">
    <div className="flex flex-col h-full">
       <h2 className="text-9xl tracking-tighter uppercase mb-12 border-b-8 border-black pb-8">LEGACY.</h2>
       <div className="flex-1 flex gap-24 items-end overflow-hidden">
          {[
            {y: "2018", t: "Genesis", d: "Operation starts in Miami coastal region."},
            {y: "2020", t: "Expansion", d: "First V12 fleet integration completed."},
            {y: "2024", t: "Zenith", d: "Digital vault architecture deployment."}
          ].map((item, i) => (
            <div key={i} className="flex-1 flex flex-col gap-6">
               <span className="text-8xl leading-none">{item.y}</span>
               <div className="flex flex-col gap-2">
                 <span className="text-2xl uppercase">{item.t}</span>
                 <p className="text-xs not-italic max-w-xs opacity-60 font-bold uppercase">{item.d}</p>
               </div>
            </div>
          ))}
       </div>
    </div>
  </section>
);

const FashionShowcase = () => (
  <section className="relative h-screen w-full grid grid-cols-12 overflow-hidden bg-[#0a0a0a] text-white">
     <div className="col-span-5 p-24 flex flex-col justify-between border-r border-white/5 relative bg-white/5">
        <div className="flex flex-col gap-8">
           <span className="text-xl italic font-light text-[#C5A47E] mb-8">Selected Series // V.01</span>
           <h2 className="text-[10vw] font-black leading-[0.8] tracking-tighter uppercase">THE <br /> ITALIAN <br /> <span className="italic font-light text-white opacity-40">STUDY.</span></h2>
        </div>
        <button className="text-2xl font-bold italic border-b-2 border-[#C5A47E] pb-2 w-fit">Request Details</button>
     </div>
     <div className="col-span-7 relative h-full flex items-center justify-center bg-black">
        <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2670" className="h-[120%] w-full object-cover transform scale-110 grayscale" />
        <div className="absolute top-12 right-12 flex flex-col items-end gap-2">
           <span className="text-[10px] uppercase font-black tracking-[0.5em] text-[#C5A47E]">Location</span>
           <span className="text-xl font-bold uppercase italic">Miami_Design_Dist</span>
        </div>
        <div className="absolute bottom-12 right-12 p-8 border border-white/10 bg-black/40 backdrop-blur-xl">
           <span className="text-xs uppercase tracking-[0.3em] font-bold">In Stock // Immediate Departure</span>
        </div>
     </div>
  </section>
);

const BrutalistShowcase = () => (
  <section className="relative h-screen w-full p-24 overflow-hidden bg-black text-white font-black italic">
     <div className="grid grid-cols-4 grid-rows-2 h-full gap-2">
        <div className="col-span-2 row-span-2 bg-[#ffcc00] text-black p-12 flex flex-col justify-between relative group">
           <span className="text-[10px] font-bold uppercase tracking-widest">Active_Sorted</span>
           <h2 className="text-[12vw] tracking-[-0.1em] leading-none uppercase not-italic">TURBO_S</h2>
           <button className="px-12 py-6 border-4 border-black text-xl hover:bg-black hover:text-[#ffcc00] transition-all">TAKE_IT</button>
        </div>
        <div className="col-span-2 row-span-1 border-4 border-white/10 p-12 flex flex-col justify-end hover:bg-white/5 transition-colors">
           <span className="text-6xl uppercase">650_BHP</span>
        </div>
        <div className="col-span-1 row-span-1 border-4 border-white/10 flex items-center justify-center p-8 bg-white/5">
           <Zap size={64} className="opacity-20" />
        </div>
        <div className="col-span-1 row-span-1 border-4 border-white/10 flex flex-col justify-between p-8 text-right bg-white/5">
           <Shield size={24} className="ml-auto" />
           <span className="text-xs font-bold uppercase leading-none">ARMORED_CELL_V4</span>
        </div>
     </div>
  </section>
);

const CardsLibrary = () => (
  <section className="relative h-screen w-full p-24 overflow-hidden bg-[#0a0a0a] text-white">
    <div className="flex flex-col gap-12 h-full">
       <div className="flex justify-between items-baseline border-b border-white/10 pb-8">
          <h2 className="text-4xl font-serif italic">The Portfolio.</h2>
          <span className="text-xs uppercase tracking-widest opacity-40 italic">Sorted_By_Tier // 2026</span>
       </div>
       <div className="flex-1 flex gap-8 overflow-x-auto pb-12 snap-x">
          {[
            {n: "Vantage V12", p: "$1,200", d: "British engineering redefined." },
            {n: "Roma Spider", p: "$1,400", d: "La Nuova Dolce Vita." },
            {n: "GT3 Touring", p: "$1,300", d: "Analogue precision tool." },
            {n: "DBS Volante", p: "$1,800", d: "Brute force and elegance." }
          ].map((item, i) => (
            <div key={i} className="min-w-[400px] h-full bg-white/5 border border-white/10 p-12 flex flex-col justify-between snap-center group hover:border-[#C5A47E] transition-colors">
               <div className="flex flex-col gap-4">
                  <span className="text-[10px] text-[#C5A47E] uppercase tracking-widest font-bold font-sans not-italic">Tier_Platinum</span>
                  <h3 className="text-5xl font-serif italic leading-none">{item.n}</h3>
                  <p className="text-sm opacity-40 leading-relaxed font-sans mt-4 italic">{item.d}</p>
               </div>
               <div className="flex justify-between items-end font-sans not-italic">
                  <span className="text-3xl font-black">{item.p}</span>
                  <button className="px-8 py-4 bg-[#C5A47E] text-black text-[10px] font-black uppercase tracking-widest">Reserve</button>
               </div>
            </div>
          ))}
       </div>
    </div>
  </section>
);

export default function GeneratedSite() {
  

  return (
    <div className="font-grotesk bg-[#050a0a] text-[#00f0ff] w-full min-h-screen overflow-x-hidden">
      
      <motion.div 
        
        
        className="w-full"
      >
        <MinimalHero />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <FleetGridHero />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <TestimonialHero />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <TeamHero />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <SwissValues />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <FinalCTA />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <TimelineHero />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <FashionShowcase />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <BrutalistShowcase />
      </motion.div>
      
      <motion.div 
        
        
        className="w-full"
      >
        <CardsLibrary />
      </motion.div>
    </div>
  );
}