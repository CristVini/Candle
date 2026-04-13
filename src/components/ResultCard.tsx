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
    if (index === 0) return <Sun size={14} className="text-amber-400/80" />;
    if (index === 1) return <Coffee size={14} className="text-stone-400/80" />;
    return <Moon size={14} className="text-indigo-400/80" />;
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-stone-900/20 border border-stone-800/40 rounded-[32px] md:rounded-[48px] overflow-hidden shadow-2xl animate-in fade-in zoom-in-98 duration-1000 backdrop-blur-md">
      <div className="p-8 md:p-12 lg:p-16 flex flex-col space-y-12">
        
        {/* Top Bar: Status & Reset */}
        <div className="flex items-center justify-between border-b border-stone-800/30 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-stone-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.4em]">Diagnóstico Concluído</span>
          </div>
          <button 
            onClick={onReset}
            className="flex items-center gap-2 text-stone-500 hover:text-stone-200 transition-colors text-[10px] font-bold uppercase tracking-widest group"
          >
            <RotateCcw size={12} className="group-hover:rotate-[-45deg] transition-transform" />
            Refazer Análise
          </button>
        </div>

        {/* Main Content Grid - Expandido lateralmente */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Identity & Diagnosis (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-3">
              <h2 className="text-6xl md:text-8xl font-serif text-stone-100 tracking-tight leading-none">
                {profile.name}
              </h2>
              <p className="text-stone-500 text-xl md:text-2xl font-light tracking-wide">
                {profile.archetype}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-stone-600">
                <Beaker size={14} />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Parecer Neurobiológico</span>
              </div>
              <p className="text-stone-300 text-2xl md:text-3xl lg:text-4xl leading-tight font-serif italic font-light max-w-3xl">
                "{profile.description}"
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-2 text-stone-600">
                <Wind size={14} />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Composição de Atuação</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {profile.notes.map((note, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelectedIngredient(ingredientsData[note] || { name: note, description: "Nota olfativa essencial.", benefit: "Equilíbrio", image: "" })}
                    className="group flex items-center gap-3 px-6 py-3 bg-stone-800/20 hover:bg-stone-100 hover:text-stone-950 border border-stone-800/40 rounded-full transition-all duration-300"
                  >
                    <span className="text-[12px] font-bold uppercase tracking-widest">{note}</span>
                    <Info size={14} className="opacity-30 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Protocol (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-stone-900/40 border border-stone-800/50 rounded-[40px] p-10 space-y-10">
              <div className="flex items-center gap-2 text-stone-500">
                <Sparkles size={14} />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Protocolo de Aplicação</span>
              </div>
              
              <div className="space-y-10">
                {profile.candleRitual.map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center bg-stone-950/50 group-hover:border-stone-600 transition-colors">
                        {getIcon(i)}
                      </div>
                      {i < profile.candleRitual.length - 1 && (
                        <div className="w-[1px] flex-1 bg-stone-800/50"></div>
                      )}
                    </div>
                    <div className="space-y-2 pb-4">
                      <h5 className="text-stone-200 text-[12px] font-bold uppercase tracking-widest flex items-center gap-2">
                        {step.title}
                        <span className="w-1 h-1 rounded-full bg-stone-700"></span>
                        <span className="text-stone-500 font-medium lowercase">{step.candle}</span>
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
        </div>

        {/* Footer Action */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-stone-800/30">
          <div className="text-center md:text-left space-y-1">
            <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">Próximo Passo</p>
            <p className="text-stone-400 text-base font-light">Receba seu kit personalizado via WhatsApp.</p>
          </div>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-6 bg-stone-100 text-stone-950 px-12 py-6 rounded-full font-bold text-base uppercase tracking-[0.2em] hover:bg-white hover:scale-[1.02] transition-all shadow-xl active:scale-95 group"
          >
            <ShoppingBag size={20} />
            Garantir meu Protocolo
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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