"use client";

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
  onOpenScience: () => void;
}

const Hero = ({ onStartQuiz, onOpenScience }: HeroProps) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=2000" 
          alt="Candle Atmosphere" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/60 to-stone-950" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
          <Sparkles size={14} className="text-amber-400" />
          <span className="text-xs uppercase tracking-[0.2em] text-stone-300">Consultoria Olfativa Profissional</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-white">
          Candle <span className="italic font-serif text-amber-500">Mind</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-stone-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Velas para seu corpo, mente e espírito. Descubra a fragrância que ressoa com a sua frequência emocional hoje.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={onStartQuiz}
            className="group relative px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-full transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center font-medium">
              Iniciar Jornada Sensorial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={onOpenScience}
            className="px-8 py-4 text-stone-300 hover:text-white transition-colors underline-offset-8 hover:underline decoration-amber-500/50"
          >
            A Ciência do Aroma
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-amber-500/50 to-transparent" />
      </div>
    </div>
  );
};

export default Hero;