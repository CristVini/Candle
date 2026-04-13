"use client";

import React, { useState } from 'react';
import { ShoppingBag, RotateCcw, Info, Sparkles, Wind, Beaker, Moon, Sun, Coffee } from 'lucide-react';
import { ingredientsData } from '../data/ingredients';
import IngredientModal from './IngredientModal';

interface RitualStep {
  title: string;
  candle: string;
  description: string;
}

interface Profile {
  id: string;
  name: string;
  archetype: string;
  description: string;
  notes: string[];
  candleRitual: RitualStep[];
  imageUrl: string;
  color: string;
}

const ResultCard = ({ profile, onReset }: { profile: Profile; onReset: () => void }) => {
  const [selectedIngredient, setSelectedIngredient] = useState<any>(null);

  if (!profile) return null;

  const phoneNumber = "5515996842962";
  const message = `Olá! Fiz o mapeamento e meu perfil é: ${profile.name}. Quero manifestar esse ritual na minha vida e encomendar meu Kit!`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const getIcon = (index: number) => {
    if (index === 0) return <Sun size={14} className="text-amber-400" />;
    if (index === 1) return <Coffee size={14} className="text-stone-400" />;
    return <Moon size={14} className="text-indigo-400" />;
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-stone-900/40 border border-stone-800/50 rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-700 backdrop-blur-xl">
      <div className="flex flex-col lg:flex-row">
        {/* Imagem - Ocupa topo no mobile e lateral no desktop */}
        <div className="lg:w-1/3 relative h-48 md:h-64 lg:h-auto overflow-hidden shrink-0">
          <img 
            src={profile.imageUrl} 
            alt={profile.name}
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-stone-900/40"></div>
        </div>
        
        {/* Conteúdo */}
        <div className="flex-1 p-6 md:p-10 lg:p-14 flex flex-col space-y-10">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold text-stone-500 uppercase tracking-[0.4em]">Seu Perfil Olfativo</span>
              <div className="h-[1px] flex-1 bg-stone-800/50"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-stone-100 leading-tight">{profile.name}</h2>
            <p className="text-stone-400 italic text-lg md:text-xl font-light">{profile.archetype}</p>
          </div>

          {/* Grid de Informações */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Coluna 1: Diagnóstico e Notas */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                  <Beaker size={14} /> O Chamado da Mente
                </h4>
                <p className="text-stone-200 text-lg md:text-xl leading-relaxed font-light italic font-serif border-l-2 border-stone-800 pl-6">
                  "{profile.description}"
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                  <Wind size={14} /> Notas de Poder
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profile.notes.map((note, i) => (
                    <button 
                      key={i} 
                      onClick={() => setSelectedIngredient(ingredientsData[note] || { name: note, description: "Uma nota olfativa essencial.", benefit: "Equilíbrio", image: "" })}
                      className="group flex items-center gap-2 px-4 py-2 bg-stone-800/30 text-stone-400 text-[10px] rounded-full border border-stone-700/30 uppercase tracking-widest hover:bg-stone-100 hover:text-stone-950 transition-all"
                    >
                      {note}
                      <Info size={12} className="opacity-40 group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna 2: Ritual */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={14} className="text-amber-500" /> Ritual de Transformação
              </h4>
              <div className="space-y-6">
                {profile.candleRitual.map((step, i) => (
                  <div key={i} className="relative pl-8 border-l border-stone-800/50 group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center">
                      {getIcon(i)}
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-stone-100 text-[11px] font-bold uppercase tracking-widest">
                        {step.title} <span className="text-stone-600 font-normal ml-1">— {step.candle}</span>
                      </h5>
                      <p className="text-stone-400 text-xs leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-stone-800/50">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[2] flex items-center justify-center gap-3 bg-stone-100 text-stone-950 py-5 rounded-full font-bold text-base md:text-lg hover:bg-white transition-all shadow-xl active:scale-95 group"
            >
              <ShoppingBag size={20} className="group-hover:rotate-12 transition-transform" />
              Manifestar meu Ritual
            </a>
            <button 
              onClick={onReset}
              className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-stone-900/50 text-stone-500 border border-stone-800 rounded-full font-bold text-base md:text-lg hover:bg-stone-800 hover:text-stone-100 transition-all active:scale-95"
            >
              <RotateCcw size={18} />
              Refazer
            </button>
          </div>
        </div>
      </div>

      <IngredientModal 
        ingredient={selectedIngredient} 
        onClose={() => setSelectedIngredient(null)} 
      />
    </div>
  );
};

export default ResultCard;