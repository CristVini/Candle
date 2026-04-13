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
    <div className="max-w-6xl mx-auto bg-stone-900/40 border border-stone-800 rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-1000">
      <div className="grid lg:grid-cols-12 min-h-[600px]">
        {/* Cinematic Image Side */}
        <div className="lg:col-span-5 relative overflow-hidden group">
          <img 
            src={profile.imageUrl} 
            alt={profile.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-stone-900/40"></div>
          
          <div className="absolute bottom-10 left-10 hidden lg:block">
            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
              <Sparkles className="w-4 h-4 text-stone-300" />
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">
                Composição Exclusiva
              </span>
            </div>
          </div>
        </div>
        
        {/* Content Side */}
        <div className="lg:col-span-7 p-10 md:p-20 flex flex-col justify-center space-y-10">
          <div className="space-y-4">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-[0.5em]">
              Resultado do Mapeamento
            </span>
            <h2 className="text-6xl md:text-8xl font-serif text-stone-100 leading-tight">
              {profile.name}
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-stone-700"></div>
              <p className="text-stone-400 italic text-xl md:text-2xl">{profile.archetype}</p>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-stone-300 text-lg md:text-xl leading-relaxed font-light">
              {profile.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {profile.notes.map((note, i) => (
                <span key={i} className="px-5 py-2 bg-stone-800/50 text-stone-300 text-xs md:text-sm rounded-full border border-stone-700/50 uppercase tracking-widest">
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 pt-10">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-stone-100 text-stone-950 py-6 rounded-full font-bold text-lg transition-all hover:bg-white hover:scale-[1.02] active:scale-95 shadow-xl"
            >
              <ShoppingBag size={20} />
              Encomendar Essência
            </a>
            <button 
              onClick={onReset}
              className="flex items-center justify-center gap-3 px-10 py-6 bg-stone-900 text-stone-400 border border-stone-800 rounded-full font-bold text-lg transition-all hover:bg-stone-800 hover:text-stone-100"
            >
              <RotateCcw size={20} />
              Refazer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;