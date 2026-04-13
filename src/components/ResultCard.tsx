"use client";

import React from 'react';
import { ShoppingBag, RotateCcw } from 'lucide-react';

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
  const message = `Olá! Realizei o Mapeamento Arquétipo Olfativo e meu perfil é: ${profile.name} (${profile.archetype}). Gostaria de encomendar minha vela personalizada!`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="max-w-4xl mx-auto bg-stone-900/50 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-700">
      <div className="grid md:grid-cols-2">
        <div className="relative h-64 md:h-auto overflow-hidden">
          <img 
            src={profile.imageUrl} 
            alt={profile.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-stone-900/50"></div>
        </div>
        
        <div className="p-8 md:p-12 space-y-8">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.4em]">
              Seu Perfil Arquétipo
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-100">{profile.name}</h2>
            <p className="text-stone-500 italic text-lg">{profile.archetype}</p>
          </div>

          <div className="space-y-4">
            <p className="text-stone-300 leading-relaxed">
              {profile.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.notes.map((note, i) => (
                <span key={i} className="px-3 py-1 bg-stone-800 text-stone-400 text-xs rounded-full border border-stone-700">
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-stone-100 text-stone-950 py-4 rounded-full font-bold transition-all hover:bg-white hover:scale-105 active:scale-95"
            >
              <ShoppingBag size={18} />
              Encomendar Essência
            </a>
            <button 
              onClick={onReset}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-stone-800 text-stone-300 rounded-full font-bold transition-all hover:bg-stone-700"
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