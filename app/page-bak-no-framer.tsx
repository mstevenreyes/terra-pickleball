"use client";

import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const SLIDES = [
  "https://images.unsplash.com/photo-1622225423857-89b5317eb112?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554068865-24cecd4e34f8?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2000&auto=format&fit=crop",
];

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="font-sans overflow-x-hidden bg-stone-950">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex flex-col">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1703376827787-899a034ac43e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pickleball Court Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/85"></div>
        </div>

        {/* Navigation Bar */}
        <header className="relative z-10 flex w-full items-center justify-between px-6 py-6 lg:px-12">
          {/* Terra Logo Recreated */}
          <div className="flex flex-col items-start justify-center pt-1">
            <span className="text-3xl font-black tracking-widest text-white leading-none">TERRA</span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/90 leading-none mt-1 ml-0.5">PICKLEBALL</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
              Register
            </button>
            <button className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
              Login
            </button>
          </div>
        </header>

        {/* Main Content Container */}
        <main className="relative z-10 mx-auto flex max-w-7xl flex-1 flex-col items-center justify-center gap-12 px-6 py-12 lg:flex-row lg:px-12 lg:py-0">
          
          {/* Left Column - Hero Text & CTAs */}
          <div className="flex flex-1 flex-col items-start gap-8">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="h-8 w-8 rounded-full border-2 border-stone-900 bg-orange-600"></div>
                <div className="h-8 w-8 rounded-full border-2 border-stone-900 bg-amber-500"></div>
                <div className="h-8 w-8 rounded-full border-2 border-stone-900 bg-emerald-600"></div>
                <div className="h-8 w-8 rounded-full border-2 border-stone-900 bg-stone-500"></div>
              </div>
              <div className="flex flex-col text-sm leading-tight">
                <span className="font-bold text-white">6,000+</span>
                <span className="text-stone-400">passionate players</span>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-5xl font-black uppercase leading-[1.1] tracking-tight text-white lg:text-7xl">
                Own The <br />
                <span className="text-orange-500">Court</span>
              </h1>
            </div>

            <p className="max-w-xl text-lg text-stone-300">
              Experience top-tier pickleball facilities crafted for enthusiasts and pros alike. Find your rhythm on our pristine, earth-toned courts.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="flex items-center gap-2 rounded-full bg-orange-600 px-7 py-3.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-orange-700 shadow-lg shadow-orange-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                BOOK A COURT
              </button>
              <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-bold tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                JOIN TERRA
              </button>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="flex w-full flex-col gap-6 lg:w-[420px]">
            <div className="flex flex-col gap-3 rounded-2xl border border-stone-700/50 bg-stone-800/60 p-7 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-500">6 Pro-Level Courts</span>
              <h3 className="text-xl font-bold text-white">Unmatched Surface Quality</h3>
              <p className="text-sm leading-relaxed text-stone-300">
                Engineered for consistent bounce and optimal playability, no matter your skill level.
              </p>
              <a href="#" className="mt-2 flex items-center gap-2 text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300">
                Explore Courts <span>&rarr;</span>
              </a>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-stone-700/50 bg-stone-800/60 p-7 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-500">Clear & Simple Rates</span>
              <h3 className="text-xl font-bold text-white">Play Without Surprises</h3>
              <p className="text-sm leading-relaxed text-stone-300">
                Accessible hourly rates starting at ₱500 with absolutely no hidden fees.
              </p>
              <a href="#" className="mt-2 flex items-center gap-2 text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300">
                View Pricing <span>&rarr;</span>
              </a>
            </div>
          </div>
        </main>
      </section>

      {/* ================= EXPLORE FACILITY SECTION ================= */}
      <section className="bg-[#151312] py-24 px-6 lg:px-12 w-full">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              DISCOVER <span className="font-light text-stone-500">Terra</span>
            </h2>
            <p className="max-w-sm text-sm text-stone-400 leading-relaxed md:text-right">
              Step inside our world-class arena. Featuring six meticulously maintained courts, premium lighting, and a vibrant community atmosphere.
            </p>
          </div>

          {/* Carousel Slider */}
          <div className="relative group">
            {/* Viewport */}
            <div className="overflow-hidden rounded-2xl bg-stone-900" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {SLIDES.map((slide, index) => (
                  <div className="relative flex-[0_0_100%] min-w-0" key={index}>
                    <img 
                      src={slide} 
                      alt={`Terra facility view ${index + 1}`} 
                      className="w-full h-[400px] md:h-[600px] object-cover"
                    />
                    
                    {/* Slide Counter Overlay */}
                    <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-widest border border-white/10">
                      {String(index + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 transition-all hover:bg-orange-600 hover:border-orange-500 hover:scale-105"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 transition-all hover:bg-orange-600 hover:border-orange-500 hover:scale-105"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? "w-8 bg-orange-500" 
                    : "w-2 bg-stone-700 hover:bg-stone-500"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING SECTION ================= */}
      <section className="bg-stone-950 py-24 px-6 lg:px-12 w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-500">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 tracking-tight">Court Rates</h2>
            <p className="mt-4 text-stone-400 max-w-md mx-auto text-sm leading-relaxed">
              Straightforward hourly rates for you and your crew. Pick a time and get ready to rally.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* Weekend Card */}
            <div className="flex flex-col rounded-3xl border border-stone-800 bg-stone-900/50 p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white">Weekend Rates</h3>
              <p className="text-sm text-stone-400 mt-1">All Day</p>
              
              <div className="flex items-baseline gap-1 mt-6">
                <span className="text-6xl font-bold text-orange-500 tracking-tight">600</span>
                <span className="text-sm font-medium text-stone-400">PHP/hr</span>
              </div>

              {/* Time indicator */}
              <div className="mt-8 flex items-center gap-3 rounded-xl bg-stone-950/80 p-4 border border-stone-800/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span className="text-sm font-medium text-stone-300">6 AM - 11 PM</span>
              </div>

              {/* Day Pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-lg bg-stone-950/80 px-4 py-1.5 text-xs font-semibold text-orange-500 border border-stone-800/50">Sat</span>
                <span className="rounded-lg bg-stone-950/80 px-4 py-1.5 text-xs font-semibold text-orange-500 border border-stone-800/50">Sun</span>
              </div>
            </div>

            {/* Weekday Card */}
            <div className="flex flex-col rounded-3xl border border-stone-800 bg-stone-900/50 p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white">Weekdays</h3>
              <p className="text-sm text-stone-400 mt-1">6am - 5pm</p>
              
              <div className="flex items-baseline gap-1 mt-6">
                <span className="text-6xl font-bold text-orange-500 tracking-tight">500</span>
                <span className="text-sm font-medium text-stone-400">PHP/hr</span>
              </div>

              {/* Time indicator */}
              <div className="mt-8 flex items-center gap-3 rounded-xl bg-stone-950/80 p-4 border border-stone-800/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span className="text-sm font-medium text-stone-300">6 AM - 5 PM</span>
              </div>

              {/* Day Pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
                  <span key={day} className="rounded-lg bg-stone-950/80 px-4 py-1.5 text-xs font-semibold text-orange-500 border border-stone-800/50">
                    {day}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER SECTION ================= */}
      <footer className="bg-[#0f0d0c] py-16 px-6 lg:px-12 w-full">
        <div className="max-w-7xl mx-auto flex flex-col">
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-16">
            {/* Left Column - Brand & Info */}
            <div className="flex flex-col max-w-sm gap-4">
              <div className="flex flex-col items-start justify-center pt-2 pb-2">
                <span className="text-3xl font-black tracking-widest text-white leading-none">TERRA</span>
                <span className="text-[10px] font-bold tracking-[0.4em] text-white/90 leading-none mt-1 ml-0.5">PICKLEBALL</span>
              </div>
              <p className="text-sm text-stone-400 leading-relaxed">
                Terra Pickleball is your ultimate destination for the sport. Premium facilities, an inviting community, and pure passion for every dink and drive.
              </p>
            </div>

            {/* Right Column - Contact Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Location Card */}
              <div className="flex items-center gap-4 rounded-xl border border-stone-800 bg-[#1a1716] p-4 min-w-[240px]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-900/30 text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Location</span>
                  <span className="text-xs text-stone-400 mt-1">Terra Pickleball,<br/>Philippines</span>
                </div>
              </div>

              {/* Facebook Card */}
              <a href="#" className="flex items-center gap-4 rounded-xl border border-stone-800 bg-[#1a1716] p-4 min-w-[240px] transition-colors hover:bg-stone-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-900/30 text-orange-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Facebook</span>
                  <span className="text-xs text-stone-400 mt-1">Follow our updates</span>
                </div>
              </a>
            </div>
          </div>

          {/* Divider & Copyright */}
          <div className="border-t border-stone-800/80 pt-8 flex justify-center text-center">
            <p className="text-xs font-medium text-stone-500 tracking-wider uppercase">
              © 2026 TERRA PICKLEBALL. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}