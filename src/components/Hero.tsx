"use client";

import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToQuiz = () => {
    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-stone-800/20 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-stone-900/40 rounded-full blur-[160px] animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto space-y-10">
        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center gap-3 px-6 py-2 bg-stone-900/50 border border-stone-800 rounded-full">
            <Sparkles className="w-3 h-3 text-stone-400" />
            <span className="text-[11px] font-bold text-stone-300 uppercase tracking-[0.4em]">
              Engenharia Olfativa de Precisão
            </span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-[120px] font-serif text-stone-100 leading-[0.85] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          O aroma que <br />
          <span className="italic font-light text-stone-600 block mt-4">define sua alma.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-stone-400 max-w-3xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          Descubra a assinatura olfativa desenvolvida para o seu estado emocional através do nosso protocolo de mapeamento arquétipo exclusivo.
        </p>

        <div className="pt-12 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <button 
            onClick={scrollToQuiz}
            className="group relative inline-flex items-center justify-center px-16 py-6 bg-stone-100 text-stone-950 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10 tracking-tight">Iniciar Mapeamento Sensorial</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-px h-16 bg-gradient-to-b from-stone-100 to-transparent"></div>
      </div>
    </header>
  );
};

export default Hero;