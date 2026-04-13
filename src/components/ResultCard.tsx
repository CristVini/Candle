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
    <div className="max-w-6xl mx-auto min-h-[85vh] bg-stone-900/60 border border-stone-800 rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-700 mx-4 mb-20 backdrop-blur-md">
      <div className="grid lg:grid-cols-12 min-h-full">
        {/* Imagem Lateral */}
        <div className="lg:col-span-4 relative h-64 lg:h-auto overflow-hidden">
          <img 
            src={profile.imageUrl} 
            alt={profile.name}
            className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent lg:bg-gradient-to-r"></div>
        </div>
        
        {/* Conteúdo Principal */}
        <div className="lg:col-span-8 p-8 md:p-16 flex flex-col space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.5em]">Prescrição Olfativa</span>
              <div className="h-[1px] flex-1 bg-stone-800"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif text-stone-100 leading-none">{profile.name}</h2>
            <p className="text-stone-400 italic text-xl md:text-2xl font-light">{profile.archetype}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Coluna Esquerda: Descrição e Notas */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                  <Beaker size={14} /> Diagnóstico
                </h4>
                <p className="text-stone-300 text-lg leading-relaxed font-light">
                  {profile.description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                  <Wind size={14} /> Essências Recomendadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profile.notes.map((note, i) => (
                    <button 
                      key={i} 
                      onClick={() => setSelectedIngredient(ingredientsData[note] || { name: note, description: "Uma nota olfativa essencial.", benefit: "Equilíbrio", image: "" })}
                      className="group flex items-center gap-2 px-4 py-2 bg-stone-800/40 text-stone-400 text-xs rounded-full border border-stone-700/30 uppercase tracking-widest hover:bg-stone-100 hover:text-stone-950 transition-all"
                    >
                      {note}
                      <Info size={12} className="opacity-40 group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna Direita: Ritual e Formatos */}
            <div className="space-y-8 p-8 bg-stone-950/40 rounded-[32px] border border-stone-800/50">
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest flex items-center gap-2">
                  <Sparkles size={14} className="text-amber-500" /> Sugestão de Ritual
                </h4>
                <p className="text-stone-400 text-sm leading-relaxed italic">
                  "{profile.ritual}"
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Formatos Indicados</h4>
                <div className="flex flex-wrap gap-3">
                  {profile.products.map((prod, i) => (
                    <span key={i} className="text-[11px] text-stone-200 font-medium border-b border-stone-700 pb-1">
                      {prod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ações */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 bg-stone-100 text-stone-950 py-6 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl active:scale-95"
            >
              <ShoppingBag size={20} />
              Consultar Especialista
            </a>
            <button 
              onClick={onReset}
              className="flex items-center justify-center gap-3 px-10 py-6 bg-stone-900 text-stone-400 border border-stone-800 rounded-full font-bold text-lg hover:bg-stone-800 hover:text-stone-100 transition-all active:scale-95"
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