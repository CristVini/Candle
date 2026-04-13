"use client";

import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero = ({ onStart }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=2000" 
          alt="Atmospheric candle" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-stone-950/60 to-stone-950"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-xs font-medium uppercase tracking-widest mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Experiência Sensorial Única
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 leading-tight">
            Candle<span className="font-serif italic text-amber-500/90">Mind</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-400 font-light mb-12 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Velas para seu corpo, mente e espírito. Descubra a fragrância que ressoa com sua frequência emocional através da nossa curadoria arquétipa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <button 
              onClick={onStart}
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-full transition-all duration-300 hover:scale-105"
            >
              INICIAR CONSULTORIA
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button className="flex items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Play size={14} fill="currentColor" />
              </div>
              VER MANIFESTO
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-stone-400"></div>
      </div>
    </section>
  );
};

export default Hero;