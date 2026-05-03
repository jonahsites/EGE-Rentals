/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, ArrowRight, Shield, Zap, 
  MapPin, Car, Gem, ShieldCheck, Check,
  Instagram, Map, Phone, Clock, Info,
  Menu, X, Star
} from 'lucide-react';

const LOGO_URL = "https://scontent-lga3-2.cdninstagram.com/v/t51.82787-19/639976399_17996417999914369_5839506053870583159_n.jpg?cb=8438d1d6-89aba764&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_cat=101&_nc_oc=Q6cZ2gFAjA_qovEmA_B-zTtOfNHGPEJ8N8jPN34E4hyjtSNbgsQqSkMvngoCr820j7iiu3xKRadhcx8d01Zo-J1vypvm&_nc_ohc=oDNEnA_halEQ7kNvwGeUZcs&_nc_gid=arNAUAqkUdHcuJoWaFF9iQ&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Af7GkYUI-W6Yc7jkux1F2krMv3Pk7loHtXnM1VINn3t_Sw&oe=69FD206D&_nc_sid=7a9f4b";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-luxury-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Ege Rentals" className="w-12 h-12 rounded-full border border-gold/30" />
          <div className="flex flex-col">
            <span className="text-white font-sans font-bold tracking-[0.3em] uppercase text-sm leading-none">EGE RENTALS</span>
            <span className="text-gold text-[10px] tracking-[0.2em] uppercase mt-1">Exotic Rental Co.</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['The Fleet', 'Services', 'Locations', 'Mandatory Info'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-gold transition-colors text-[10px] uppercase tracking-[0.3em] font-medium">
              {item}
            </a>
          ))}
          <button className="px-6 py-2 border border-gold/50 text-gold text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all">
            Quick Deal
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-luxury-black border-b border-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {['The Fleet', 'Services', 'Locations', 'Mandatory Info'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white font-sans text-xl tracking-widest uppercase" onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen min-h-[800px] w-full flex flex-col items-center justify-center overflow-hidden px-8 font-serif bg-[#0a0a0a]">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover opacity-30 grayscale" alt="Luxury Automotive" />
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-transparent via-black/40 to-black" />
    </div>
    <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.span 
        initial={{ y: 20, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="text-[10px] font-sans font-bold tracking-[0.8em] text-[#C5A47E] uppercase mb-8"
      >
        Elite Registry Protocol 0.1
      </motion.span>
      <motion.h1 
        initial={{ scale: 0.9, opacity: 0 }} 
        whileInView={{ scale: 1, opacity: 1 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[14vw] md:text-[8vw] font-black italic tracking-tighter leading-[0.8] text-white uppercase mb-12"
      >
        EGE <br /> <span className="text-outline">RENTALS</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <button className="px-16 py-6 bg-[#C5A47E] text-black font-sans font-black uppercase text-xs tracking-[0.4em] rounded-sm transition-all hover:scale-105 hover:bg-[#DBC1A2] active:scale-95 shadow-[0_0_50px_rgba(197,164,126,0.2)]">
          Inquiry Open
        </button>
      </motion.div>
    </div>
    
    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-px h-12 bg-gradient-to-b from-[#C5A47E] to-transparent opacity-40"
      />
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-24 bg-luxury-black border-y border-white/5">
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12">
      {[
        { label: "Followers", value: "1,687+", icon: <Instagram size={20} /> },
        { label: "Luxury States", value: "4 Locations", icon: <MapPin size={20} /> },
        { label: "Premium Fleet", value: "Exotic & Economy", icon: <Car size={20} /> },
        { label: "Support", value: "24/7 Dedicated", icon: <Shield size={20} /> }
      ].map((stat, i) => (
        <div key={i} className="flex flex-col items-center text-center">
          <div className="text-gold mb-4 opacity-50">{stat.icon}</div>
          <span className="text-white text-3xl font-serif mb-1 italic">{stat.value}</span>
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

const FeatureGrid = () => {
  const cars = [
    { name: "Phantom Series", category: "Rolls Royce", img: "https://images.unsplash.com/photo-1631214499520-7a14d0a89e82?auto=format&fit=crop&q=80&w=600" },
    { name: "Aventador S", category: "Lamborghini", img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=600" },
    { name: "911 Turbo S", category: "Porsche", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=600" },
    { name: "G63 AMG", category: "Mercedes", img: "https://images.unsplash.com/photo-1520031441872-265ec1765879?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <section id="the-fleet" className="py-32 bg-luxury-black px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <span className="text-gold text-xs uppercase tracking-[0.6em] mb-4 block">The Collection</span>
            <h2 className="text-6xl md:text-8xl font-serif italic text-white tracking-tight leading-none mb-6">Masterpieces in <span className="text-gold">Motion</span></h2>
            <p className="text-white/40 text-sm md:text-base leading-relaxed tracking-wide">
              From high-performance supercars to sophisticated luxury sedans, our fleet is curated for those who demand the absolute best in automotive engineering and style.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-4 text-white hover:text-gold transition-all group mt-8 md:mt-0">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">View Inventory</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cars.map((car, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative group aspect-[4/5] overflow-hidden bg-white/5 border border-white/5 cursor-pointer"
            >
              <img src={car.img} alt={car.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-1">{car.category}</span>
                  <span className="text-white text-3xl font-serif italic tracking-tight">{car.name}</span>
                </div>
                <div className="w-12 h-12 flex items-center justify-center border border-white/20 group-hover:border-gold group-hover:bg-gold group-hover:text-black transition-all">
                  <ChevronRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImportantInfo = () => (
  <section id="mandatory-info" className="py-32 bg-white px-6 md:px-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
      <div className="relative">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-gold/10 rounded-full blur-3xl z-0" />
        <img 
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2670" 
          className="relative z-10 w-full h-[600px] object-cover shadow-2xl skew-y-2 grayscale hover:grayscale-0 transition-all duration-700" 
          alt="Luxury Details"
        />
        <div className="absolute -bottom-8 -right-8 bg-black p-12 text-white z-20 shadow-xl hidden lg:block">
           <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block">Requirements</span>
           <h3 className="text-4xl font-serif italic leading-none mb-4">Mandatory Policy</h3>
           <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium">Established 2024 // EGE PRESTIGE</p>
        </div>
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-col">
          <span className="text-gold text-xs uppercase tracking-[0.6em] mb-4 block">Policy & Ethics</span>
          <h2 className="text-5xl md:text-7xl font-sans font-black tracking-tighter leading-none mb-8">SECURE <br /><span className="text-gold">EXPERIENCE.</span></h2>
          <p className="text-black/60 leading-relaxed font-body">Our commitment to safety and excellence ensures every rental meets the highest standards of security. We maintain a zero-compromise policy on our vehicles' integrity.</p>
        </div>

        <div className="grid gap-8">
          {[
            { title: "Insurance Compliance", desc: "Valid insurance coverage is strictly mandatory for all luxury and exotic rentals.", icon: <ShieldCheck size={24} className="text-gold" /> },
            { title: "Security Deposit", desc: "A standard security deposit is required to guarantee vehicle protection.", icon: <Shield size={24} className="text-gold" /> },
            { title: "Rental Options", desc: "Discover our diverse range of Luxury & Economy rentals tailored to you.", icon: <Gem size={24} className="text-gold" /> },
            { title: "Flexible Deals", desc: "Experience daily, weekly, or monthly arrangements at competitive rates.", icon: <Zap size={24} className="text-gold" /> }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 group hover:bg-gold/5 p-6 transition-colors rounded-xl border border-transparent hover:border-gold/10">
              <div className="mt-1">{item.icon}</div>
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold uppercase tracking-tight text-black">{item.title}</span>
                <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const LocationsSection = () => (
  <section id="locations" className="py-32 bg-luxury-black px-6 md:px-12 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
       <Map className="w-full h-full scale-150" />
    </div>
    
    <div className="max-w-[1600px] mx-auto">
      <div className="text-center mb-24">
        <span className="text-gold text-xs uppercase tracking-[0.6em] mb-4 block">Continental Presence</span>
        <h2 className="text-7xl md:text-9xl font-serif italic text-white leading-none">SERVICE <span className="text-white/20">ZONES.</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {['New York', 'New Jersey', 'Connecticut', 'Florida'].map((state, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-12 border border-white/5 bg-white/2 flex flex-col items-center text-center group hover:border-gold/30 transition-all"
          >
            <MapPin size={32} className="text-gold/30 group-hover:text-gold transition-colors mb-8" />
            <span className="text-white text-3xl font-serif italic mb-4">{state}</span>
            <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] group-hover:text-gold/50 transition-colors">Fully Operational 24/7</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-32 pb-12 bg-luxury-black text-white px-6 md:px-12">
    <div className="max-w-[1600px] mx-auto">
      <div className="grid md:grid-cols-12 gap-16 pb-24 border-b border-white/5">
        <div className="md:col-span-4 flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Ege Rentals" className="w-16 h-16 rounded-full border border-gold/30" />
            <div className="flex flex-col">
              <span className="text-white font-sans font-bold tracking-[0.3em] uppercase text-xl leading-none">EGE RENTALS</span>
              <span className="text-gold text-[10px] tracking-[0.2em] uppercase mt-1">Exotic Rental Company</span>
            </div>
          </div>
          <p className="text-white/40 leading-relaxed font-light max-w-sm">
            Setting the standard in luxury automotive solutions. From exotic car rentals to premium economy services across the East Coast and Florida.
          </p>
          <div className="flex gap-4">
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all cursor-pointer">
                <Instagram size={18} />
             </div>
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all cursor-pointer">
                <Phone size={18} />
             </div>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-8">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-gold">Navigation</span>
          <div className="flex flex-col gap-4">
            {['The Fleet', 'Services', 'Locations', 'Booking'].map(item => (
              <a key={item} href="#" className="text-white/40 hover:text-white transition-colors text-sm font-light italic">{item}</a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-8">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-gold">Support</span>
          <div className="flex flex-col gap-4">
            {['Insurance Policy', 'Security Deposits', 'Privacy', 'Contact'].map(item => (
              <a key={item} href="#" className="text-white/40 hover:text-white transition-colors text-sm font-light italic">{item}</a>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-8">
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-gold">Newsletter</span>
          <p className="text-white/40 text-sm font-light">Join our elite list for monthly deals and fleet updates.</p>
          <div className="flex flex-col gap-3">
             <input type="text" placeholder="Email Address" className="bg-white/5 border border-white/10 px-6 py-4 text-sm focus:border-gold outline-none transition-all placeholder:text-white/20" />
             <button className="w-full py-4 bg-gold text-black font-bold uppercase tracking-widest text-[10px]">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="text-[10px] text-white/20 uppercase tracking-[0.3em]">© 2024 Ege Rentals Exotic Company. All Rights Reserved.</span>
        <div className="flex gap-8 items-center opacity-20">
           <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 grayscale invert" alt="Visa" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 grayscale invert" alt="Mastercard" />
           <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5 grayscale invert" alt="Paypal" />
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-luxury-black min-h-screen selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <FeatureGrid />
        <ImportantInfo />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
}
