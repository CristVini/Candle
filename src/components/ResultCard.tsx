"use client";

import React, { useState } from 'react';
import { ShoppingBag, RotateCcw, Info, Sparkles, Wind, Moon, Sun, Coffee, ArrowRight } from 'lucide-react';
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
    if (index === 1) return <Coffee size={18} className="text-amber-200" />;
    return <Moon size={18} className="text-amber-500" />;
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-stone-900/40 border border-stone-800/60 rounded-[48px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-98 duration-1000 backdrop-blur-2xl">
      <div className="p-8 md:p-12 flex flex-col space-y-10">
        
        {/* Grid Principal de 3 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Coluna 1: Identidade do Perfil */}
          <div className="space-y-8 lg:border-r lg:border-stone-800/50 lg:pr-12 h-full">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)] animate-pulse"></div>
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.5em]">Perfil Identificado</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-serif text-stone-100 tracking-tighter leading-none">
                {profile.name}
              </h2>
              <p className="text-amber-500/80 text-xl font-light italic tracking-wide">
                {profile.archetype}
              </p>
            </div>
            
            <p className="text-stone-400 text-lg font-serif italic leading-relaxed">
              "{profile.description}"
            </p>

            <button 
              onClick={onReset}
              className="flex items-center gap-2 text-stone-600 hover:text-amber-200 transition-colors text-[10px] font-bold uppercase tracking-widest group"
            >
              <RotateCcw size={12} className="group-hover:rotate-[-45deg] transition-transform" />
              Refazer Análise
            </button>
          </div>

          {/* Coluna 2: Arquitetura de Notas */}
          <div className="space-y-8 lg:border-r lg:border-stone-800/50 lg:pr-12 h-full">
            <div className="flex items-center gap-3 text-stone-600">
              <Wind size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Arquitetura de Notas</span>
            </div>
            
            <div className="flex flex-col gap-4">
              {profile.notes.map((note, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedIngredient(ingredientsData[note] || { name: note, description: "Nota olfativa essencial.", benefit: "Equilíbrio", image: "" })}
                  className="group relative flex items-center gap-6 p-6 bg-stone-950/40 border border-amber-500/10 rounded-[24px] transition-all duration-500 hover:border-amber-500/40 hover:bg-amber-500/5"
                >
                  <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-500 text-xs font-bold">
                    0{i + 1}
                  </div>
                  <span className="text-xl md:text-2xl font-serif text-stone-100 group-hover:translate-x-2 transition-transform duration-500">{note}</span>
                  <Info size={14} className="ml-auto text-stone-700 group-hover:text-amber-500 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Coluna 3: Protocolo de Ativação */}
          <div className="space-y-8 h-full">
            <div className="flex items-center gap-3 text-amber-500/80">
              <Sparkles size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Protocolo de Ativação</span>
            </div>

            <div className="flex flex-col gap-6">
              {profile.candleRitual.map((step, i) => (
                <div key={i} className="flex gap-5 group/step">
                  <div className="shrink-0 w-10 h-10 rounded-xl border border-stone-800 flex items-center justify-center bg-stone-950/80 group-hover/step:border-amber-500/50 transition-all">
                    {getIcon(i)}
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-stone-100 text-[11px] font-bold uppercase tracking-widest">
                      {step.title}
                    </h5>
                    <p className="text-stone-500 text-xs leading-relaxed font-light group-hover/step:text-stone-300 transition-colors">
                      <span className="text-amber-500/70 font-medium">Vela {step.candle}:</span> {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer: CTA (Ocupa a largura total abaixo das colunas) */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-stone-800/40">
          <div className="space-y-1">
            <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">Finalizar Experiência</p>
            <p className="text-stone-300 text-lg font-light">Seu kit personalizado está pronto para ser enviado.</p>
          </div>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-6 bg-stone-100 text-stone-950 px-12 py-6 rounded-full font-bold text-sm uppercase tracking-[0.3em] hover:bg-white hover:scale-[1.02] transition-all shadow-[0_20px_60px_rgba(0,0,0,0.4)] active:scale-95 group"
          >
            <ShoppingBag size={18} />
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