"use client";

import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToQuiz = () => {
    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-4 text-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[100%] h-[100%] bg-stone-800/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto space-y-6 md:space-y-10">
        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center gap-2 md:gap-3 px-4 py-1.5 md:px-6 md:py-2 bg-stone-900/50 border border-stone-800 rounded-full">
            <Sparkles className="w-3 h-3 text-stone-400" />
            <span className="text-[9px] md:text-[11px] font-bold text-stone-300 uppercase tracking-[0.3em] md:tracking-[0.4em]">
              Engenharia Olfativa
            </span>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[120px] font-serif text-stone-100 leading-[1.1] md:leading-[0.85] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          O aroma que <br />
          <span className="italic font-light text-stone-600 block mt-2 md:mt-4">define sua alma.</span>
        </h1>
        
        <p className="text-base md:text-xl lg:text-2xl text-stone-400 max-w-xs md:max-w-3xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          Descubra a assinatura olfativa desenvolvida para o seu estado emocional através do nosso protocolo exclusivo.
        </p>

        <div className="pt-8 md:pt-12 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500 px-4">
          <button 
            onClick={scrollToQuiz}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-16 py-5 md:py-6 bg-stone-100 text-stone-950 rounded-full font-bold text-base md:text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            <span className="relative z-10 tracking-tight">Iniciar Mapeamento</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden md:block">
        <div className="w-px h-12 bg-gradient-to-b from-stone-100 to-transparent"></div>
      </div>
    </header>
  );
};

export default Hero;