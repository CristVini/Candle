"use client";

import React from 'react';
import { Flame, BookOpen, Droplets } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
  onOpenScience: () => void;
  onOpenIngredients: () => void;
}

const Hero = ({ onStartQuiz, onOpenScience, onOpenIngredients }: HeroProps) => {
  return (
    <header className="relative h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      {/* Background Ambience - Otimizado */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-[-10%] left-[-5%] w-[110%] h-[110%] bg-stone-800/5 rounded-full blur-[80px]"
          style={{ willChange: 'opacity' }}
        ></div>
      </div>

      <div className="w-full max-w-6xl mx-auto space-y-8 md:space-y-12">
        <div className="flex justify-center">
          <div className="flex items-center gap-3 px-5 py-2 bg-stone-900/30 border border-stone-800/50 rounded-full backdrop-blur-sm">
            <Flame className="w-3.5 h-3.5 text-stone-100" strokeWidth={1.5} />
            <span className="text-[10px] md:text-[11px] font-medium text-stone-400 uppercase tracking-[0.5em]">
              Engenharia Olfativa
            </span>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[110px] font-serif text-stone-100 leading-[1.1] md:leading-[0.9] tracking-tight">
          O aroma que <br />
          <span className="italic font-light text-stone-500 block mt-2">define sua alma.</span>
        </h1>
        
        <p className="text-base md:text-xl text-stone-400 max-w-xs md:max-w-2xl mx-auto leading-relaxed font-light">
          Descubra a assinatura olfativa desenvolvida para o seu estado emocional através do nosso protocolo exclusivo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 pt-8 px-4">
          <button 
            onClick={onStartQuiz}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-stone-100 text-stone-950 rounded-full font-bold text-base md:text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl"
          >
            Começar Mapeamento
          </button>
          
          <div className="flex flex-wrap items-center justify-center gap-1">
            <button 
              onClick={onOpenScience}
              className="flex items-center gap-2 px-6 py-5 text-stone-500 hover:text-stone-100 transition-colors font-medium text-sm md:text-base"
            >
              <BookOpen size={18} strokeWidth={1.5} />
              <span>A Ciência por trás</span>
            </button>
            <div className="w-[1px] h-4 bg-stone-800 hidden md:block"></div>
            <button 
              onClick={onOpenIngredients}
              className="flex items-center gap-2 px-6 py-5 text-stone-500 hover:text-stone-100 transition-colors font-medium text-sm md:text-base"
            >
              <Droplets size={18} strokeWidth={1.5} />
              <span>Nossas Essências</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;