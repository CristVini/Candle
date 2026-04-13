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
    if (index === 0) return <Sun size={16} className="text-amber-400" />;
    if (index === 1) return <Coffee size={16} className="text-amber-200" />;
    return <Moon size={16} className="text-amber-500" />;
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-stone-900/30 border border-stone-800/60 rounded-[40px] md:rounded-[56px] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-98 duration-1000 backdrop-blur-xl">
      <div className="p-8 md:p-12 lg:p-14 flex flex-col space-y-10">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-stone-800/40 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.5)] animate-pulse"></div>
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.4em]">Diagnóstico Concluído</span>
          </div>
          <button 
            onClick={onReset}
            className="flex items-center gap-2 text-stone-500 hover:text-amber-200 transition-colors text-[10px] font-bold uppercase tracking-widest group"
          >
            <RotateCcw size={12} className="group-hover:rotate-[-45deg] transition-transform" />
            Refazer Análise
          </button>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Identity & Diagnosis */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-3">
              <h2 className="text-6xl md:text-8xl font-serif text-stone-100 tracking-tight leading-none">
                {profile.name}
              </h2>
              <p className="text-amber-500/60 text-xl md:text-2xl font-light tracking-wide italic">
                {profile.archetype}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-stone-600">
                <Beaker size={14} />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Parecer Neurobiológico</span>
              </div>
              <p className="text-stone-200 text-2xl md:text-3xl lg:text-4xl leading-[1.2] font-serif italic font-light max-w-3xl">
                "{profile.description}"
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-2 text-stone-600">
                <Wind size={14} />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em]">Composição de Atuação</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {profile.notes.map((note, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelectedIngredient(ingredientsData[note] || { name: note, description: "Nota olfativa essencial.", benefit: "Equilíbrio", image: "" })}
                    className="group flex items-center gap-3 px-6 py-3 bg-amber-500/5 hover:bg-amber-500 text-stone-300 hover:text-stone-950 border border-amber-500/20 hover:border-amber-400 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(245,158,11,0.05)] hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]"
                  >
                    <span className="text-[12px] font-bold uppercase tracking-[0.15em]">{note}</span>
                    <Info size={14} className="opacity-30 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Protocol - Destaque Especial */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Glow de fundo sutil */}
              <div className="absolute -inset-1 bg-gradient-to-b from-amber-500/10 to-transparent rounded-[42px] blur-xl opacity-50"></div>
              
              <div className="relative bg-stone-900/60 border border-stone-800/80 rounded-[40px] p-10 space-y-10 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-500/80">
                    <Sparkles size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Protocolo de Aplicação</span>
                  </div>
                  <div className="h-[1px] flex-1 bg-stone-800 ml-4"></div>
                </div>
                
                <div className="space-y-10">
                  {profile.candleRitual.map((step, i) => (
                    <div key={i} className="flex gap-6 group/step">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl border border-stone-800 flex items-center justify-center bg-stone-950/80 group-hover/step:border-amber-500/50 group-hover/step:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-500">
                          {getIcon(i)}
                        </div>
                        {i < profile.candleRitual.length - 1 && (
                          <div className="w-[1px] flex-1 bg-gradient-to-b from-stone-800 to-transparent"></div>
                        )}
                      </div>
                      <div className="space-y-2 pb-4">
                        <h5 className="text-stone-100 text-[13px] font-bold uppercase tracking-widest flex items-center gap-3">
                          {step.title}
                          <span className="text-amber-500/40 font-serif italic lowercase font-normal text-base">/ {step.candle}</span>
                        </h5>
                        <p className="text-stone-400 text-sm md:text-base leading-relaxed font-light group-hover/step:text-stone-300 transition-colors">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-stone-800/40">
          <div className="text-center md:text-left space-y-1">
            <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">Próximo Passo</p>
            <p className="text-stone-400 text-base font-light">Receba seu kit personalizado via WhatsApp.</p>
          </div>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-6 bg-stone-100 text-stone-950 px-14 py-6 rounded-full font-bold text-base uppercase tracking-[0.2em] hover:bg-white hover:scale-[1.02] transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] active:scale-95 group"
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