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
    if (index === 0) return <Sun size={18} className="text-amber-500" />;
    if (index === 1) return <Coffee size={18} className="text-amber-500" />;
    return <Moon size={18} className="text-amber-500" />;
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-stone-950/40 border border-stone-800/40 rounded-[40px] overflow-hidden shadow-2xl animate-in fade-in zoom-in-98 duration-1000 backdrop-blur-xl">
      <div className="p-10 md:p-16 flex flex-col space-y-12">
        
        {/* Grid Principal de 3 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch">
          
          {/* Coluna 1: Identidade do Perfil */}
          <div className="flex flex-col justify-between space-y-8 lg:border-r lg:border-stone-800/30 lg:pr-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.4em]">Perfil Identificado</span>
              </div>
              <h2 className="text-7xl md:text-8xl font-serif text-stone-100 tracking-tight leading-none">
                {profile.name}
              </h2>
              <p className="text-amber-600 text-xl font-serif italic">
                {profile.archetype}
              </p>
              <p className="text-stone-400 text-lg font-serif italic leading-relaxed pt-4">
                "{profile.description}"
              </p>
            </div>

            <button 
              onClick={onReset}
              className="flex items-center gap-2 text-stone-600 hover:text-stone-400 transition-colors text-[10px] font-bold uppercase tracking-[0.2em] group pt-8"
            >
              <RotateCcw size={14} className="group-hover:rotate-[-45deg] transition-transform" />
              Refazer Análise
            </button>
          </div>

          {/* Coluna 2: Arquitetura de Notas */}
          <div className="space-y-10 lg:border-r lg:border-stone-800/think
The user is pointing out that my previous response was cut off. I need to complete the `ResultCard.tsx` file exactly where it stopped.

Looking at the previous output:
```tsx
          {/* Coluna 2: Arquitetura de Notas */}
          <div className="space-y-10 lg:border-r lg:border-stone-800/
```

I need to continue from `30 lg:pr-16">` and finish the component.

Plan:
1. Complete the `ResultCard.tsx` file.
2. Ensure it matches the visual reference provided in the image (3 columns, specific styling).
3. Close the `dyad-write` tag.
4. Provide the summary.

Wait, I should probably rewrite the whole file to be safe and ensure it's complete, as per the instructions "do NOT be lazy and ALWAYS write the entire file".

Let's re-examine the image:
- Column 1: Label, Title, Subtitle, Quote, Reset button at bottom.
- Column 2: Label, List of notes in dark boxes with numbers and info icon.
- Column 3: Label, List of ritual steps with icons, titles, and descriptions.
- Footer: Left side text, Right side large white button with icon and arrow.

I will rewrite the entire `src/components/ResultCard.tsx` to ensure it's perfect.<dyad-write path="src/components/ResultCard.tsx" description="Finalizando a implementação do ResultCard com o layout de 3 colunas e rodapé conforme a referência visual.">
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
    if (index === 0) return <Sun size={18} className="text-amber-500" />;
    if (index === 1) return <Coffee size={18} className="text-amber-500" />;
    return <Moon size={18} className="text-amber-500" />;
  };

  return (
    <div className="w-full max-w-7xl mx-auto bg-stone-950/40 border border-stone-800/40 rounded-[40px] overflow-hidden shadow-2xl animate-in fade-in zoom-in-98 duration-1000 backdrop-blur-xl">
      <div className="p-10 md:p-16 flex flex-col space-y-12">
        
        {/* Grid Principal de 3 Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-stretch">
          
          {/* Coluna 1: Identidade do Perfil */}
          <div className="flex flex-col justify-between space-y-8 lg:border-r lg:border-stone-800/30 lg:pr-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.4em]">Perfil Identificado</span>
              </div>
              <h2 className="text-7xl md:text-8xl font-serif text-stone-100 tracking-tight leading-none">
                {profile.name}
              </h2>
              <p className="text-amber-600 text-xl font-serif italic">
                {profile.archetype}
              </p>
              <p className="text-stone-400 text-lg font-serif italic leading-relaxed pt-4">
                "{profile.description}"
              </p>
            </div>

            <button 
              onClick={onReset}
              className="flex items-center gap-2 text-stone-600 hover:text-stone-400 transition-colors text-[10px] font-bold uppercase tracking-[0.2em] group pt-8"
            >
              <RotateCcw size={14} className="group-hover:rotate-[-45deg] transition-transform" />
              Refazer Análise
            </button>
          </div>

          {/* Coluna 2: Arquitetura de Notas */}
          <div className="space-y-10 lg:border-r lg:border-stone-800/30 lg:pr-16">
            <div className="flex items-center gap-3 text-stone-500">
              <Wind size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Arquitetura de Notas</span>
            </div>
            
            <div className="flex flex-col gap-4">
              {profile.notes.map((note, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedIngredient(ingredientsData[note] || { name: note, description: "Nota olfativa essencial.", benefit: "Equilíbrio", image: "" })}
                  className="group relative flex items-center gap-6 p-6 bg-stone-900/20 border border-stone-800/40 rounded-[24px] transition-all duration-500 hover:border-stone-700 hover:bg-stone-900/40"
                >
                  <div className="w-10 h-10 rounded-full bg-stone-950 border border-stone-800 flex items-center justify-center text-stone-600 text-xs font-bold">
                    0{i + 1}
                  </div>
                  <span className="text-xl md:text-2xl font-serif text-stone-100 group-hover:translate-x-2 transition-transform duration-500">{note}</span>
                  <Info size={14} className="ml-auto text-stone-800 group-hover:text-stone-500 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Coluna 3: Protocolo de Ativação */}
          <div className="space-y-10">
            <div className="flex items-center gap-3 text-amber-500">
              <Sparkles size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Protocolo de Ativação</span>
            </div>

            <div className="flex flex-col gap-8">
              {profile.candleRitual.map((step, i) => (
                <div key={i} className="flex gap-6 group/step">
                  <div className="shrink-0 w-12 h-12 rounded-2xl border border-stone-800 flex items-center justify-center bg-stone-900/40 group-hover/step:border-amber-500/30 transition-all">
                    {getIcon(i)}
                  </div>
                  <div className="space-y-1.5">
                    <h5 className="text-stone-100 text-xs font-bold uppercase tracking-widest">
                      {step.title}
                    </h5>
                    <p className="text-stone-500 text-sm leading-relaxed font-light group-hover/step:text-stone-400 transition-colors">
                      <span className="text-amber-600 font-medium">Vela {step.candle}:</span> {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer: CTA */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-stone-800/30">
          <div className="space-y-1">
            <p className="text-stone-600 text-[10px] font-bold uppercase tracking-widest">Finalizar Experiência</p>
            <p className="text-stone-300 text-xl font-light">Seu kit personalizado está pronto para ser enviado.</p>
          </div>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto flex items-center justify-center gap-8 bg-stone-100 text-stone-950 px-12 py-7 rounded-full font-bold text-sm uppercase tracking-[0.3em] hover:bg-white hover:scale-[1.02] transition-all shadow-xl active:scale-95 group"
          >
            <ShoppingBag size={20} />
            Garantir meu Protocolo
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
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