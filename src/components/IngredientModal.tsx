"use client";

import React from 'react';
import { X, Sparkles, Droplets } from 'lucide-react';
import { Ingredient } from '../data/ingredients';

interface IngredientModalProps {
  ingredient: Ingredient | null;
  onClose: () => void;
}

const IngredientModal = ({ ingredient, onClose }: IngredientModalProps) => {
  if (!ingredient) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-xl animate-in fade-in duration-500">
      <div 
        className="relative w-full max-w-xl bg-stone-900 border border-stone-800 rounded-[40px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in zoom-in-95 slide-in-from-bottom-10 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-3 bg-stone-950/60 text-white rounded-full hover:bg-stone-800 transition-all active:scale-90"
        >
          <X size={24} />
        </button>

        {ingredient.image && (
          <div className="h-72 overflow-hidden relative">
            <img 
              src={ingredient.image} 
              alt={ingredient.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
          </div>
        )}

        <div className={`p-10 md:p-14 space-y-6 ${ingredient.image ? '-mt-10' : ''} relative z-10`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-stone-100 text-stone-950 rounded-full flex items-center justify-center">
               <Droplets size={20} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.3em]">Neurobiologia Olfativa</span>
              <h3 className="text-4xl md:text-5xl font-serif text-stone-100">{ingredient.name}</h3>
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-800 border border-stone-700 text-stone-200 text-xs font-bold rounded-full uppercase tracking-widest">
            <Sparkles size={12} className="text-stone-400" />
            {ingredient.benefit}
          </div>
          
          <p className="text-stone-300 leading-relaxed text-lg md:text-xl font-light italic">
            "{ingredient.description}"
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default IngredientModal;