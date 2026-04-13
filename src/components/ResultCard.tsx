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
  const message = `Olá! Concluí meu mapeamento olfativo e meu perfil é: ${profile.name}. Gostaria de garantir meu Protocolo Personalizado!`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const getIcon = (index: number) => {
    if (index === 0) return <Sun size={16} className="text-amber-400" />;
    if (index === 1) return <Coffee size={16} className="text-stone-400" />;
    return <Moon size={16} className="text-indigo-400" />;
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-stone-900/40 border border-stone-800/50 rounded-[40px] md:rounded-[56px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-700 backdrop-blur-xl">
      <div className="p-8 md:p-16 lg:p-20 flex flex-col space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="text-[10px] md:text-[12px] font-bold text-stone-500 uppercase tracking-[0.5em]">Diagnóstico Finalizado</span>
            <div className="h-[1px] w-12 bg-stone-800/50"></div>
          </div>
          <h2 className="text-5xl md:text-8xl font-serif text-stone-100 leading-none tracking-tight">{profile.name}</h2>
          <p className="text-stone-400 italic text-xl md:text-3xl font-light">{profile.archetype}</p>
        </div>

        {/* Grid de Informações */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Coluna 1: Diagnóstico e Notas */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                <Beaker size={16} /> Análise Neurobiológica
              </h4>
              <p className="text-stone-200 text-2xl md:text-3xl leading-relaxed font-light italic font-serif border-l-2 border-stone-800 pl-8">
                "{profile.description}"
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                <Wind size={16} /> Notas de Atuação
              </h4>
              <div className="flex flex-wrap gap-3">
                {profile.notes.map((note, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelectedIngredient(ingredientsData[note] || { name: note, description: "Uma nota olfativa essencial.", benefit: "Equilíbrio", image: "" })}
                    className="group flex items-center gap-3 px-6 py-3 bg-stone-800/30 text-stone-300 text-[12px] rounded-full border border-stone-700/30 uppercase tracking-widest hover:bg-stone-100 hover:text-stone-950 transition-all font-bold"
                  >
                    {note}
                    <Info size={14} className="opacity-40 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna 2: Protocolo */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500" /> Protocolo de Uso Recomendado
            </h4>
            <div className="space-y-8">
              {profile.candleRitual.map((step, i) => (
                <div key={i} className="relative pl-10 border-l border-stone-800/50 group">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center">
                    {getIcon(i)}
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-stone-100 text-[13px] font-bold uppercase tracking-widest">
                      {step.title} <span className="text-stone-600 font-normal ml-2">— {step.candle}</span>
                    </h5>
                    <p className="text-stone-400 text-sm md:text-base leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ações */}
        <div className="flex flex-col sm:flex-row gap-6 pt-12 border-t border-stone-800/50">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] flex items-center justify-center gap-4 bg-stone-100 text-stone-950 py-6 rounded-full font-bold text-lg md:text-xl hover:bg-white transition-all shadow-2xl active:scale-95 group"
          >
            <ShoppingBag size={24} className="group-hover:rotate-12 transition-transform" />
            Garantir meu Protocolo Personalizado
          </a>
          <button 
            onClick={onReset}
            className="flex-1 flex items-center justify-center gap-4 px-10 py-6 bg-stone-900/50 text-stone-500 border border-stone-800 rounded-full font-bold text-lg md:text-xl hover:bg-stone-800 hover:text-stone-100 transition-all active:scale-95"
          >
            <RotateCcw size={20} />
            Refazer
          </button>
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