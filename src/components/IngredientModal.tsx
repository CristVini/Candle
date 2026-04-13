"use client";

import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { Ingredient } from '../data/ingredients';

interface IngredientModalProps {
  ingredient: Ingredient | null;
  onClose: () => void;
}

const IngredientModal = ({ ingredient, onClose }: IngredientModalProps) => {
  if (!ingredient) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-lg bg-stone-900 border border-stone-800 rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-stone-950/50 text-white rounded-full hover:bg-stone-800 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="h-64 overflow-hidden">
          <img 
            src={ingredient.image} 
            alt={ingredient.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-stone-400 w-4 h-4" />
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Aromaterapia</span>
          </div>
          
          <h3 className="text-3xl font-serif text-stone-100">{ingredient.name}</h3>
          
          <div className="inline-block px-3 py-1 bg-stone-100 text-stone-950 text-[11px] font-bold rounded-full uppercase">
            Benefício: {ingredient.benefit}
          </div>
          
          <p className="text-stone-400 leading-relaxed text-sm">
            {ingredient.description}
          </p>
        </div>
      </div>
      
      {/* Overlay click para fechar */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

export default IngredientModal;