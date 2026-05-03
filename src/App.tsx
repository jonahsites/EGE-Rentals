/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, ArrowRight, Shield, Zap, 
  Wrench, Car, Gem, ShieldCheck, Check
} from 'lucide-react';

const LOGO_URL = "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/472307243_2353191325036075_1140803435022429131_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=107&_nc_oc=Q6cZ2gFSPPfbZ-CVSKbh1fRhcePdOfFwoYapTu0IPJmvGvxyx3VuF4JGX1oL1eKIMhsGjJe8MX2GkwVCPTtVzs17ZpxG&_nc_ohc=ZJuf_IbbeMsQ7kNvwEApZN4&_nc_gid=pADZ-PaIcH1aCo4Rz3XAMA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af6hC0GsyMOHjuKxqD2Fk0WT_GYzZ8ISLOmDX7_pcDSukA&oe=69FD3E26&_nc_sid=7a9f4b";

const MinimalHero = () => (
  <section id="minimal-hero" className="relative h-screen w-full flex items-center border-y border-white/5 px-8 md:px-24 overflow-hidden bg-black text-white font-sans">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover opacity-10 grayscale" alt="" />
    </div>
    <div className="grid lg:grid-cols-2 w-full max-w-[1440px] mx-auto items-end gap-24 relative z-10 mt-20">
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <img src={LOGO_URL} alt="SOS Auto" className="w-12 h-12 rounded-full border border-red-800" />
          <span className="text-red-800 font-bold tracking-widest uppercase text-xs">SOS AUTO GROUP</span>
        </div>
        <h2 className="text-[10vw] font-black leading-[0.8] mb-12 tracking-[-0.06em]">SOS <br /> <span className="text-red-700">AUTO</span></h2>
        <p className="max-w-md text-white/40 text-lg font-light leading-relaxed mb-16 uppercase tracking-[0.2em]">
          Premium Leasing, Financing, Exotic Rentals & Professional Collision Services.
        </p>
        <button id="initiate-btn" className="flex items-center gap-8 group text-left">
          <div className="w-20 h-20 bg-red-800 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-[0_0_30px_rgba(153,27,27,0.3)]">
            <ArrowRight className="text-white" size={32} />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.6em] text-red-700">Initialize</span>
        </button>
      </div>
    </div>
  </section>
);

const FleetGridHero = () => (
  <section id="fleet-grid" className="relative h-screen w-full p-8 md:p-12 overflow-hidden bg-[#050505] text-white font-sans">
    <div className="flex justify-between items-end mb-12">
      <div className="flex flex-col gap-2">
        <span className="text-[10px] uppercase tracking-[0.6em] text-red-700">The Collection</span>
        <h2 className="text-6xl font-black tracking-tighter uppercase">SOS FLEET</h2>
      </div>
      <button className="text-xs font-bold uppercase border-b border-red-700 text-red-700 pb-2">View Inventory</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[60vh]">
      <div className="col-span-2 row-span-2 bg-white/5 border border-white/5 relative group overflow-hidden">
        <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c3d9?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
        <div className="absolute bottom-8 left-8">
           <span className="text-4xl font-black italic">ULTIMATE LUXURY</span>
        </div>
      </div>
      <div className="col-span-1 bg-white/5 border border-white/5 p-8 flex flex-col justify-between hover:bg-red-950/20 transition-all">
         <span className="text-[10px] opacity-20 uppercase tracking-widest text-red-700">Available</span>
         <span className="text-2xl font-bold uppercase text-zinc-300">Any Make & Model</span>
      </div>
      <div className="col-span-1 bg-red-800 text-white p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(153,27,27,0.1)]">
         <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Premium Service</span>
         <span className="text-2xl font-bold uppercase italic">Auto Leasing & Financing</span>
      </div>
      <div className="col-span-2 bg-white/5 border border-white/5 p-8 flex items-center justify-between group">
         <div className="flex flex-col">
            <span className="text-[10px] opacity-20 uppercase tracking-widest text-red-700">Operations</span>
            <span className="text-xl font-bold uppercase">Leasing, Rentals & Repair</span>
         </div>
         <Car size={32} className="opacity-20 group-hover:opacity-100 group-hover:text-red-700 transition-all" />
      </div>
    </div>
  </section>
);

const TestimonialHero = () => (
  <section id="testimonial" className="relative h-screen w-full flex items-center justify-center p-24 overflow-hidden bg-[#0a0a0a] text-white font-sans">
    <div className="relative z-10 text-center max-w-5xl">
       <span className="text-7xl font-sans italic text-red-800 opacity-20 mb-12 block leading-none">“</span>
       <h2 className="text-6xl font-light leading-tight tracking-tight mb-20 italic">"At SOS Auto Group, we specialize in affordable car leasing with flexible options to fit your budget. We make leasing easy, stress-free, and cost-effective."</h2>
       <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-[1px] bg-red-800" />
          <span className="text-xs font-bold uppercase tracking-[0.8em] text-red-700 text-zinc-500">SOS TEAM // EXPERTISE V20 YEARS</span>
       </div>
    </div>
  </section>
);

const TeamHero = () => (
  <section id="team" className="relative h-screen w-full p-24 overflow-hidden bg-white text-black font-sans">
    <div className="flex justify-between items-end mb-16">
      <h2 className="text-7xl font-black uppercase tracking-tighter">EXPERT <br /> <span className="text-red-800 font-black">COMMAND</span></h2>
      <p className="max-w-xs text-[10px] opacity-40 uppercase tracking-[0.4em]">The specialists behind the SOS service.</p>
    </div>
    <div className="grid grid-cols-4 gap-8">
      {[ {n: "VANCE H", r: "Leasing Director"}, {n: "SARAH L", r: "Exotic Concierge"}, {n: "MARC D", r: "Body Shop Lead"}, {n: "ELENA S", r: "Financing Head"} ].map((m, i) => (
        <div key={i} className="flex flex-col group cursor-pointer">
           <div className="aspect-[3/4] bg-zinc-100 mb-6 overflow-hidden relative border-b-4 border-transparent group-hover:border-red-800 transition-all">
              <div className="absolute inset-0 bg-red-800 opacity-0 group-hover:opacity-10 transition-opacity" />
           </div>
           <span className="text-xl font-bold uppercase">{m.n}</span>
           <span className="text-[10px] opacity-30 uppercase tracking-widest">{m.r}</span>
        </div>
      ))}
    </div>
  </section>
);

const SwissValues = () => (
  <section id="values" className="relative h-screen w-full bg-white text-black p-24 font-sans font-black flex items-center">
    <div className="grid grid-cols-12 gap-8 w-full uppercase">
       <div className="col-span-1 border-l-4 border-red-800 pl-8 flex flex-col justify-between h-[400px]">
          <span className="text-xs text-red-700">01</span>
          <span className="text-xs">02</span>
          <span className="text-xs">03</span>
       </div>
       <div className="col-span-11 flex flex-col gap-12">
          <div className="flex flex-col">
             <h2 className="text-9xl tracking-tighter leading-none italic">LEASING.</h2>
             <p className="text-xs font-medium max-w-md mt-4 ml-2">New and used auto leasing with flexible plans for every driver.</p>
          </div>
          <div className="flex flex-col ml-24">
             <h2 className="text-9xl tracking-tighter leading-none italic">RENTALS.</h2>
             <p className="text-xs font-medium max-w-md mt-4 ml-2 text-red-700">Exotic & luxury car rentals for the ultimate performance experience.</p>
          </div>
          <div className="flex flex-col ml-48 text-zinc-950">
             <h2 className="text-9xl tracking-tighter leading-none italic uppercase">REPAIR</h2>
             <p className="text-xs font-medium max-w-md mt-4 ml-2">Auto collision body shop restoring your vehicle to perfection.</p>
          </div>
       </div>
    </div>
  </section>
);

const TimelineHero = () => (
  <section id="legacy" className="relative h-screen w-full p-24 bg-white text-red-800 font-black italic overflow-hidden font-sans border-y border-zinc-100">
    <div className="flex flex-col h-full">
       <h2 className="text-9xl tracking-tighter uppercase mb-12 border-b-8 border-red-800 pb-8 text-black">LEGACY.</h2>
       <div className="flex-1 flex gap-24 items-end overflow-hidden">
          {[
            {y: "2010", t: "Inception", d: "First leasing agreements signed in regional markets."},
            {y: "2015", t: "Collection", d: "Exotic rental fleet reaches milestone capacity."},
            {y: "2024", t: "SOS AUTO", d: "The premier destination for full spectrum auto solutions."}
          ].map((item, i) => (
            <div key={i} className="flex-1 flex flex-col gap-6">
               <span className="text-8xl leading-none text-red-700">{item.y}</span>
               <div className="flex flex-col gap-2">
                 <span className="text-2xl uppercase font-black text-black">{item.t}</span>
                 <p className="text-xs not-italic max-w-xs opacity-60 font-bold uppercase text-zinc-600">{item.d}</p>
               </div>
            </div>
          ))}
       </div>
    </div>
  </section>
);

const CardsLibrary = () => (
  <section id="cards-library" className="relative h-screen w-full p-24 overflow-hidden bg-[#0a0a0a] text-white font-sans">
    <div className="flex flex-col gap-12 h-full">
       <div className="flex justify-between items-baseline border-b border-white/10 pb-8">
          <h2 className="text-4xl font-bold italic text-red-700">The Portfolio.</h2>
          <span className="text-xs uppercase tracking-widest opacity-40 italic">Sorted By SOS // 2024</span>
       </div>
       <div className="flex-1 flex gap-8 overflow-x-auto pb-12 snap-x hide-scrollbar">
          {[
            {n: "Luxury Lease", p: "Custom Rate", d: "Flexible financing for any make and model you desire." },
            {n: "Exotic Rental", p: "$1,200/day", d: "Experience the thrill of absolute performance." },
            {n: "Body Shop", p: "OEM Quality", d: "Master craft restoration and factory paint matching." },
            {n: "Fleet Admin", p: "Consultation", d: "End to end management for corporate vehicle needs." }
          ].map((item, i) => (
            <div key={i} className="min-w-[400px] h-full bg-white/5 border border-white/10 p-12 flex flex-col justify-between snap-center group hover:border-red-700 transition-colors">
               <div className="flex flex-col gap-4">
                  <span className="text-[10px] text-red-700 uppercase tracking-widest font-bold not-italic">Service Tier</span>
                  <h3 className="text-5xl font-black italic leading-none">{item.n}</h3>
                  <p className="text-sm opacity-40 leading-relaxed mt-4 italic">{item.d}</p>
               </div>
               <div className="flex justify-between items-end not-italic">
                  <span className="text-3xl font-black text-red-700">{item.p}</span>
                  <button className="px-8 py-4 bg-red-800 text-white text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">Inquire</button>
               </div>
            </div>
          ))}
       </div>
    </div>
  </section>
);

const BrutalistShowcase = () => (
  <section id="brutalist" className="relative h-screen w-full p-24 overflow-hidden bg-black text-white font-black italic font-sans">
     <div className="grid grid-cols-4 grid-rows-2 h-full gap-2">
        <div className="col-span-2 row-span-2 bg-red-800 text-white p-12 flex flex-col justify-between relative group">
           <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 uppercase">Precision Repair</span>
           <h2 className="text-7xl lg:text-8xl tracking-[-0.05em] leading-[0.9] uppercase not-italic font-black">COLLISION</h2>
           <button className="px-12 py-6 border-4 border-white text-xl hover:bg-white hover:text-red-700 transition-all font-black uppercase">Schedule Now</button>
        </div>
        <div className="col-span-2 row-span-1 border-4 border-white/10 p-12 flex flex-col justify-end hover:bg-red-800 transition-colors group">
           <span className="text-6xl uppercase group-hover:italic transition-all">FACTORY MATCH</span>
        </div>
        <div className="col-span-1 row-span-1 border-4 border-white/10 flex items-center justify-center p-8 bg-white/5">
           <Wrench size={64} className="opacity-20 text-red-700" />
        </div>
        <div className="col-span-1 row-span-1 border-4 border-white/10 flex flex-col justify-between p-8 text-right bg-white/5">
           <ShieldCheck size={24} className="ml-auto text-red-700" />
           <span className="text-xs font-bold uppercase leading-none">SOS WARRANTY V4</span>
        </div>
     </div>
  </section>
);

const FinalCTA = () => (
  <section id="cta" className="relative h-screen w-full flex flex-col items-center justify-center bg-black text-white p-24 overflow-hidden border-t border-red-950 font-sans">
     <div className="absolute inset-0 opacity-20">
        <img id="footer-bg-img" src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover" />
     </div>
     <div className="relative z-10 flex flex-col items-center gap-12 text-center">
        <h2 className="text-[10vw] font-black tracking-tighter uppercase leading-[0.8] mb-0">DRIVE <br /> <span className="text-red-700 italic">NOW.</span></h2>
        <div className="flex gap-4">
           <button className="px-16 py-6 bg-red-800 text-white font-black uppercase text-xs tracking-[0.4em] hover:scale-105 transition-all shadow-[0_10px_40px_rgba(153,27,27,0.4)]">Build Your Lease</button>
           <button className="px-16 py-6 border border-white/20 font-black uppercase text-xs tracking-[0.4em] hover:bg-white/10 transition-all">Rent Exotic</button>
        </div>
     </div>
  </section>
);

export default function App() {
  return (
    <div className="bg-[#050a0a] text-white w-full min-h-screen overflow-x-hidden selection:bg-red-800/30 font-sans">
      <motion.div className="w-full">
        <MinimalHero />
      </motion.div>
      
      <motion.div className="w-full">
        <FleetGridHero />
      </motion.div>
      
      <motion.div className="w-full">
        <TestimonialHero />
      </motion.div>
      
      <motion.div className="w-full">
        <TeamHero />
      </motion.div>
      
      <motion.div className="w-full">
        <SwissValues />
      </motion.div>
      
      <motion.div className="w-full">
        <TimelineHero />
      </motion.div>
      
      <motion.div className="w-full">
        <CardsLibrary />
      </motion.div>
      
      <motion.div className="w-full">
        <BrutalistShowcase />
      </motion.div>
      
      <motion.div className="w-full mt-24">
        <FinalCTA />
      </motion.div>

      {/* Footer Branding */}
      <footer id="main-footer" className="py-12 bg-black border-t border-white/5 text-center">
        <img src={LOGO_URL} alt="SOS Auto" className="w-12 h-12 rounded-full mx-auto mb-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
        <p className="text-[10px] font-sans uppercase tracking-[0.5em] text-white/20">© 2024 SOS AUTO GROUP // SYSTEM ACCESS GRANTED</p>
      </footer>
    </div>
  );
}
