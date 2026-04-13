"use client";

import React from 'react';
import { ShoppingBag, RotateCcw, Sparkles } from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  archetype: string;
  description: string;
  notes: string[];
  emotion: string;
  imageUrl: string;
  color: string;
}

const ResultCard = ({ profile, onReset }: { profile: Profile; onReset: () => void }) => {
  const phoneNumber = "5515996842962";
  const message = `Olá! Meu arquétipo olfativo é: ${profile.name} (${profile.archetype}). Gostaria de encomendar minha vela!`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="max-w-6xl mx-auto bg-stone-900/40 border border-stone-800 rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-700">
      <div className="grid lg:grid-cols-12">
        {/* Image Side */}
        <div className="lg:col-span-5 relative h-64 md:h-96 lg:h-auto overflow-hidden group">
          <img 
            src={profile.imageUrl} 
            alt={profile.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-950/40 backdrop-blur-md border border-white/10 rounded-full">
              <Sparkles className="w-3 h-3 text-stone-300" />
              <span className="text-[9px] font-bold text-white uppercase tracking-[0.2em]">
                Composição Exclusiva
              </span>
            </div>
          </div>
        </div>
        
        {/* Content Side */}
        <div className="lg:col-span-7 p-8 md:p-12 lg:p-20 flex flex-col justify-center space-y-8 md:space-y-10">
          <div className="space-y-3 md:space-y-4 text-center lg:text-left">
            <span className="text-[10px] md:text-[11px] font-bold text-stone-500 uppercase tracking-[0.4em] md:tracking-[0.5em]">
              Resultado do Mapeamento
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif text-stone-100 leading-tight">
              {profile.name}
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4">
              <div className="h-[1px] w-8 md:w-12 bg-stone-700"></div>
              <p className="text-stone-400 italic text-base md:text-xl lg:text-2xl">{profile.archetype}</p>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <p className="text-stone-300 text-base md:text-lg lg:text-xl leading-relaxed font-light text-center lg:text-left">
              {profile.description}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3">
              {profile.notes.map((note, i) => (
                <span key={i} className="px-3 py-1 md:px-5 md:py-2 bg-stone-800/50 text-stone-300 text-[9px] md:text-sm rounded-full border border-stone-700/50 uppercase tracking-widest">
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6 md:pt-10">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 md:gap-3 bg-stone-100 text-stone-950 py-4 md:py-6 rounded-full font-bold text-sm md:text-lg transition-all hover:bg-white active:scale-95 shadow-xl"
            >
              <ShoppingBag size={18} />
              Encomendar Essência
            </a>
            <button 
              onClick={onReset}
              className="flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-4 md:py-6 bg-stone-900 text-stone-400 border border-stone-800 rounded-full font-bold text-sm md:text-lg transition-all hover:bg-stone-800 hover:text-stone-100"
            >
              <RotateCcw size={18} />
              Refazer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;