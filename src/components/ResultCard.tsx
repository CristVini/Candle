"use client";

import React from 'react';
import { ShoppingBag, RotateCcw, Sparkles } from 'lucide-react';

interface Profile {
  id: string;
  name: string;
  archetype: string;
  description: string;
  notes?: string[];
  emotion: string;
  imageUrl: string;
  color: string;
}

const ResultCard = ({ profile, onReset }: { profile: Profile; onReset: () => void }) => {
  if (!profile) return null;

  const phoneNumber = "5515996842962";
  const message = `Olá! Meu arquétipo olfativo é: ${profile.name} (${profile.archetype}). Gostaria de encomendar minha vela!`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="max-w-6xl mx-auto min-h-[80vh] bg-stone-900/40 border border-stone-800 rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-700 mx-4">
      <div className="grid lg:grid-cols-12 min-h-full">
        <div className="lg:col-span-5 relative h-72 md:h-auto overflow-hidden">
          <img 
            src={profile.imageUrl} 
            alt={profile.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="lg:col-span-7 p-8 md:p-16 flex flex-col justify-center space-y-10">
          <div className="space-y-4">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-[0.5em]">Seu Arquétipo Olfativo</span>
            <h2 className="text-5xl md:text-8xl font-serif text-stone-100 leading-none">{profile.name}</h2>
            <p className="text-stone-400 italic text-xl md:text-2xl">{profile.archetype}</p>
          </div>

          <p className="text-stone-300 text-lg md:text-xl leading-relaxed font-light">
            {profile.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {profile.notes?.map((note, i) => (
              <span key={i} className="px-5 py-2 bg-stone-800/50 text-stone-300 text-sm rounded-full border border-stone-700/50 uppercase tracking-widest">
                {note}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-10">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-stone-100 text-stone-950 py-6 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl"
            >
              <ShoppingBag size={20} />
              Encomendar Agora
            </a>
            <button 
              onClick={onReset}
              className="flex items-center justify-center gap-3 px-10 py-6 bg-stone-900 text-stone-400 border border-stone-800 rounded-full font-bold text-lg hover:bg-stone-800 hover:text-stone-100 transition-all"
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