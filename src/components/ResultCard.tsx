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
    if (index === 0) return <Sun size={16} className="text-amber-400" />;
    if (index === 1) return <Coffee size={16} className="text-stone-400" />;
    return <Moon size={16} className="text-indigo-400" />;
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-stone-900/60 border border-stone-800 rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-700 mb-10 backdrop-blur-md">
      <div className="grid lg:grid-cols-12">
        {/* Imagem Lateral */}
        <div className="lg:col-span-4 relative h-56 md:h-72 lg:h-auto overflow-hidden">
          <img 
            src={profile.imageUrl} 
            alt={profile.name}
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent lg:bg-gradient-to-r"></div>
        </div>
        
        {/* Conteúdo Principal */}
        <div className="lg:col-span-8 p-6 md:p-12 lg:p-16 flex flex-col space-y-10 md:space-y-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.5em]">Sua Jornada Olfativa</span>
              <div className="h-[1px] flex-1 bg-stone-800"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-stone-100 leading-tight">{profile.name}</h2>
            <p className="text-stone-400 italic text-xl md:text-3xl font-light">{profile.archetype}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Coluna Esquerda: Diagnóstico e Notas */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                  <Beaker size={14} /> O Chamado da sua Mente
                </h4>
                <p className="text-stone-200 text-lg md:text-xl leading-relaxed font-light italic font-serif">
                  "{profile.description}"
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                  <Wind size={14} /> Suas Notas de Poder
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profile.notes.map((note, i) => (
                    <button 
                      key={i} 
                      onClick={() => setSelectedIngredient(ingredientsData[note] || { name: note, description: "Uma nota olfativa essencial.", benefit: "Equilíbrio", image: "" })}
                      className="group flex items-center gap-2 px-4 py-2 bg-stone-800/40 text-stone-400 text-[11px] rounded-full border border-stone-700/30 uppercase tracking-widest hover:bg-stone-100 hover:text-stone-950 transition-all"
                    >
                      {note}
                      <Info size={12} className="opacity-40 group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna Direita: Ritual Narrativo */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={14} className="text-amber-500" /> Ritual de Transformação
              </h4>
              <div className="space-y-8">
                {profile.candleRitual.map((step, i) => (
                  <div key={i} className="relative pl-8 border-l border-stone-800 group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center">
                      {getIcon(i)}
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-stone-100 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                        {step.title} <span className="text-[10px] text-stone-600 font-normal">— Vela de {step.candle}</span>
                      </h5>
                      <p className="text-stone-400 text-xs md:text-sm leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-stone-100 text-stone-950 py-6 rounded-full font-bold text-lg hover:bg-white transition-all shadow-2xl active:scale-95 group"
            >
              <ShoppingBag size={22} className="group-hover:rotate-12 transition-transform" />
              Manifestar meu Ritual
            </a>
            <button 
              onClick={onReset}
              className="flex items-center justify-center gap-3 px-10 py-6 bg-stone-900 text-stone-500 border border-stone-800 rounded-full font-bold text-lg hover:bg-stone-800 hover:text-stone-100 transition-all active:scale-95"
            >
              <RotateCcw size={20} />
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