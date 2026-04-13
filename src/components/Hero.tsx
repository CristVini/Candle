"use client";

import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToQuiz = () => {
    document.getElementById('quiz-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-4 text-center">
      {/* Dark Ambient Glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-stone-800/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-stone-900/40 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="inline-block px-4 py-1.5 bg-stone-100 text-stone-950 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Alta Perfumaria & Neurociência
        </div>
        
        <h1 className="text-5xl md:text-8xl font-serif text-stone-100 leading-[0.9] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
          Sua mente desenha o <br />
          <span className="italic font-light text-stone-500">ambiente que habita.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          Descubra a assinatura olfativa desenvolvida para o seu estado emocional atual através do nosso protocolo de mapeamento arquétipo.
        </p>

        <div className="pt-10 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          <button 
            onClick={scrollToQuiz}
            aria-label="Iniciar Mapeamento Sensorial"
            className="group relative px-12 py-5 bg-stone-100 text-stone-950 rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Iniciar Mapeamento Gratuito</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20 text-stone-100">
        <ArrowDown className="w-6 h-6" />
      </div>
    </header>
  );
};

export default Hero;