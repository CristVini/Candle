"use client";

import React, { useState } from 'react';
import { ShoppingBag, RotateCcw, Info, Sparkles, Wind, Beaker, Moon, Sun, Coffee, ArrowRight } from 'lucide-react';
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
    if (index === 0) return <Sun size={20} className="text-amber-400" />;
    if (index === 1) return <Coffee size={20} className="text-amber-200" />;
    return <Moon size={20} className="text-amber-500" />;
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-stone-900/40 border border-stone-800/60 rounded-[48px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-98 duration-1000 backdrop-blur-2xl">
      <div className="p-8 md:p-12 flex flex-col space-y-12">
        
        {/* Header: Identidade */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-stone-800/40 pb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)] animate-pulse"></div>
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.5em]">Perfil Identificado</span>
            </div>
            <h2 className="text-7xl md:text-9xl font-serif text-stone-100 tracking-tighter leading-none">
              {profile.name}
            </h2>
            <p className="text-amber-500/80 text-xl md:text-2xl font-light italic tracking-wide">
              {profile.archetype}
            </p>
          </div>
          
          <div className="max-w-md text-right hidden md:block">
             <button 
              onClick={onReset}
              className="flex items-center gap-2 text-stone-500 hover:text-amber-200 transition-colors text-[10px] font-bold uppercase tracking-widest group mb-4 ml-auto"
            >
              <RotateCcw size={12} className="group-hover:rotate-[-45deg] transition-transform" />
              Refazer Análise
            </button>
            <p className="text-stone-400 text-lg font-serif italic leading-relaxed">
              "{profile.description}"
            </p>
          </div>
        </div>

        {/* Seção 1: Notas Olfativas (3 Colunas) */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-stone-600">
            <Wind size={16} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Arquitetura de Notas</span>
            <div className="h-[1px] flex-1 bg-stone-800/50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {profile.notes.map((note, i) => (
              <button 
                key={i} 
                onClick={() => setSelectedIngredient(ingredientsData[note] || { name: note, description: "Nota olfativa essencial.", benefit: "Equilíbrio", image: "" })}
                className="group relative flex flex-col items-center justify-center p-8 bg-stone-950/40 border border-amber-500/20 rounded-[32px] transition-all duration-500 hover:border-amber-500 hover:bg-amber-500/5 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]"
              >
                <span className="text-stone-500 text-[10px] font-bold uppercase tracking-widest mb-2 group-hover:text-amber-500/50 transition-colors">Essência {i + 1}</span>
                <span className="text-2xl md:text-3xl font-serif text-stone-100 group-hover:scale-110 transition-transform duration-500">{note}</span>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Info size={16} className="text-amber-500" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Seção 2: Protocolo de Aplicação (3 Colunas) */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-amber-500/80">
            <Sparkles size={16} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Protocolo de Ativação</span>
            <div className="h-[1px] flex-1 bg-amber-500/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profile.candleRitual.map((step, i) => (
              <div key={i} className="relative group/step p-8 bg-stone-900/20 border border-stone-800/40 rounded-[40px] hover:bg-stone-900/40 transition-all duration-500">
                <div className="flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-2xl border border-stone-800 flex items-center justify-center bg-stone-950/80 group-hover/step:border-amber-500/50 group-hover/step:shadow-[0_0_25px_rgba(245,158,11,0.2)] transition-all duration-500">
                    {getIcon(i)}
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-stone-100 text-sm font-bold uppercase tracking-widest">
                      {step.title}
                    </h5>
                    <div className="inline-block px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] text-amber-500 font-bold uppercase tracking-widest">
                      Vela: {step.candle}
                    </div>
                    <p className="text-stone-400 text-base leading-relaxed font-light group-hover/step:text-stone-200 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: CTA */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-stone-800/40">
          <div className="space-y-1">
            <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">Finalizar Experiência</p>
            <p className="text-stone-300 text-lg font-light">Seu kit personalizado está pronto para ser enviado.</p>
          </div>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-6 bg-stone-100 text-stone-950 px-16 py-7 rounded-full font-bold text-sm uppercase tracking-[0.3em] hover:bg-white hover:scale-[1.02] transition-all shadow-[0_20px_60px_rgba(0,0,0,0.4)] active:scale-95 group"
          >
            <ShoppingBag size={20} />
            Garantir meu Protocolo
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
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