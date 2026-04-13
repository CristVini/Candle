"use client";

import React, { useState } from 'react';
import { ShoppingBag, RotateCcw, Info, Sparkles, Wind, Beaker } from 'lucide-react';
import { ingredientsData } from '../data/ingredients';
import IngredientModal from './IngredientModal';

interface Profile {
  id: string;
  name: string;
  archetype: string;
  description: string;
  notes: string[];
  ritual: string;
  products: string[];
  imageUrl: string;
  color: string;
}

const ResultCard = ({ profile, onReset }: { profile: Profile; onReset: () => void }) => {
  const [selectedIngredient, setSelectedIngredient] = useState<any>(null);

  if (!profile) return null;

  const phoneNumber = "5515996842962";
  const message = `Olá! Meu perfil olfativo é: ${profile.name}. Gostaria de conhecer os produtos recomendados para o meu ritual!`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="w-full max-w-6xl mx-auto bg-stone-900/60 border border-stone-800 rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-700 mb-10 backdrop-blur-md">
      <div className="grid lg:grid-cols-12">
        {/* Imagem Lateral */}
        <div className="lg:col-span-4 relative h-48 md:h-64 lg:h-auto overflow-hidden">
          <img 
            src={profile.imageUrl} 
            alt={profile.name}
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent lg:bg-gradient-to-r"></div>
        </div>
        
        {/* Conteúdo Principal */}
        <div className="lg:col-span-8 p-6 md:p-12 lg:p-16 flex flex-col space-y-8 md:space-y-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[9px] md:text-[10px] font-bold text-stone-500 uppercase tracking-[0.3em] md:tracking-[0.5em]">Prescrição Olfativa</span>
              <div className="h-[1px] flex-1 bg-stone-800"></div>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-stone-100 leading-tight">{profile.name}</h2>
            <p className="text-stone-400 italic text-lg md:text-2xl font-light">{profile.archetype}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Coluna Esquerda: Descrição e Notas */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3">
                <h4 className="text-[9px] md:text-[10px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                  <Beaker size={14} /> Diagnóstico
                </h4>
                <p className="text-stone-300 text-base md:text-lg leading-relaxed font-light">
                  {profile.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-[9px] md:text-[10px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                  <Wind size={14} /> Essências
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profile.notes.map((note, i) => (
                    <button 
                      key={i} 
                      onClick={() => setSelectedIngredient(ingredientsData[note] || { name: note, description: "Uma nota olfativa essencial.", benefit: "Equilíbrio", image: "" })}
                      className="group flex items-center gap-2 px-3 py-1.5 bg-stone-800/40 text-stone-400 text-[10px] md:text-xs rounded-full border border-stone-700/30 uppercase tracking-widest hover:bg-stone-100 hover:text-stone-950 transition-all"
                    >
                      {note}
                      <Info size={10} className="opacity-40 group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna Direita: Ritual e Formatos */}
            <div className="space-y-6 md:space-y-8 p-6 md:p-8 bg-stone-950/40 rounded-[24px] md:rounded-[32px] border border-stone-800/50">
              <div className="space-y-3">
                <h4 className="text-[9px] md:text-[10px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={14} className="text-amber-500" /> Ritual
                </h4>
                <p className="text-stone-400 text-xs md:text-sm leading-relaxed italic">
                  "{profile.ritual}"
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-[9px] md:text-[10px] font-bold text-stone-500 uppercase tracking-widest">Formatos</h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {profile.products.map((prod, i) => (
                    <span key={i} className="text-[10px] md:text-[11px] text-stone-200 font-medium border-b border-stone-700 pb-0.5">
                      {prod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-stone-100 text-stone-950 py-4 md:py-6 rounded-full font-bold text-sm md:text-lg hover:bg-white transition-all shadow-xl active:scale-95"
            >
              <ShoppingBag size={18} />
              Consultar Especialista
            </a>
            <button 
              onClick={onReset}
              className="flex items-center justify-center gap-2 px-6 py-4 md:py-6 bg-stone-900 text-stone-400 border border-stone-800 rounded-full font-bold text-sm md:text-lg hover:bg-stone-800 hover:text-stone-100 transition-all active:scale-95"
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