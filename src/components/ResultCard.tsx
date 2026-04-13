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
    if (index === 0) return <Sun size={18} className="text-amber-400" />;
    if (index === 1) return <Coffee size={18} className="text-stone-400" />;
    return <Moon size={18} className="text-indigo-400" />;
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-stone-900/40 border border-stone-800/50 rounded-[40px] md:rounded-[64px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-700 backdrop-blur-xl">
      <div className="p-8 md:p-12 lg:p-16 flex flex-col space-y-10">
        {/* Header - Mais compacto verticalmente */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-[10px] md:text-[12px] font-bold text-stone-500 uppercase tracking-[0.5em]">Diagnóstico Finalizado</span>
              <div className="h-[1px] w-12 bg-stone-800/50"></div>
            </div>
            <h2 className="text-6xl md:text-9xl font-serif text-stone-100 leading-none tracking-tight">{profile.name}</h2>
            <p className="text-stone-400 italic text-2xl md:text-4xl font-light">{profile.archetype}</p>
          </div>
          
          {/* Botão de Refazer movido para o topo no desktop para economizar espaço embaixo */}
          <button 
            onClick={onReset}
            className="hidden md:flex items-center gap-3 px-8 py-4 bg-stone-900/50 text-stone-500 border border-stone-800 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-stone-800 hover:text-stone-100 transition-all active:scale-95"
          >
            <RotateCcw size={16} />
            Refazer Mapeamento
          </button>
        </div>

        {/* Grid de Informações - Mais largo */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Coluna 1: Diagnóstico (3/5 da largura) */}
          <div className="lg:col-span-3 space-y-10">
            <div className="space-y-6">
              <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                <Beaker size={16} /> Análise Neurobiológica
              </h4>
              <p className="text-stone-200 text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-light italic font-serif border-l-4 border-stone-800 pl-10">
                "{profile.description}"
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                <Wind size={16} /> Notas de Atuação
              </h4>
              <div className="flex flex-wrap gap-4">
                {profile.notes.map((note, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelectedIngredient(ingredientsData[note] || { name: note, description: "Uma nota olfativa essencial.", benefit: "Equilíbrio", image: "" })}
                    className="group flex items-center gap-4 px-8 py-4 bg-stone-800/30 text-stone-300 text-[14px] rounded-full border border-stone-700/30 uppercase tracking-widest hover:bg-stone-100 hover:text-stone-950 transition-all font-bold"
                  >
                    {note}
                    <Info size={16} className="opacity-40 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna 2: Protocolo (2/5 da largura) */}
          <div className="lg:col-span-2 space-y-8 bg-stone-950/30 p-8 rounded-[32px] border border-stone-800/30">
            <h4 className="text-[11px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500" /> Protocolo de Uso
            </h4>
            <div className="space-y-8">
              {profile.candleRitual.map((step, i) => (
                <div key={i} className="relative pl-12 border-l border-stone-800/50 group">
                  <div className="absolute -left-[13px] top-0 w-6 h-6 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center">
                    {getIcon(i)}
                  </div>
                  <div className="space-y-2">
                    <h5 className="text-stone-100 text-[14px] font-bold uppercase tracking-widest">
                      {step.title} <span className="text-stone-600 font-normal ml-2">— {step.candle}</span>
                    </h5>
                    <p className="text-stone-400 text-base leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ação Principal - Centralizada e de destaque */}
        <div className="pt-10 border-t border-stone-800/50 flex flex-col items-center gap-6">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-2xl flex items-center justify-center gap-6 bg-stone-100 text-stone-950 py-8 rounded-full font-bold text-xl md:text-2xl hover:bg-white transition-all shadow-2xl active:scale-95 group"
          >
            <ShoppingBag size={28} className="group-hover:rotate-12 transition-transform" />
            Garantir meu Protocolo Personalizado
          </a>
          
          <button 
            onClick={onReset}
            className="md:hidden flex items-center gap-3 text-stone-500 font-bold text-sm uppercase tracking-widest"
          >
            <RotateCcw size={16} />
            Refazer Mapeamento
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