"use client";

import React, { useEffect } from 'react';
import { X, Sparkles, Droplets } from 'lucide-react';
import { Ingredient } from '../data/ingredients';

interface IngredientModalProps {
  ingredient: Ingredient | null;
  onClose: () => void;
}

const IngredientModal = ({ ingredient, onClose }: IngredientModalProps) => {
  useEffect(() => {
    if (ingredient) {
      // Bloqueia o scroll do corpo
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [ingredient]);

  if (!ingredient) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-stone-950/98 backdrop-blur-2xl animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl max-h-[90vh] bg-stone-900 border border-stone-800 rounded-[40px] shadow-[0_0_100px_rgba(0,0,0,1)] animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar Fixo no Modal */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-30 p-2 bg-stone-950/50 text-white rounded-full hover:bg-stone-100 hover:text-stone-950 transition-all active:scale-90 border border-stone-800"
        >
          <X size={20} />
        </button>

        {ingredient.image && (
          <div className="h-56 md:h-72 overflow-hidden relative shrink-0">
            <img 
              src={ingredient.image} 
              alt={ingredient.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
          </div>
        )}

        <div className={`p-8 md:p-12 space-y-6 ${ingredient.image ? '-mt-10' : 'pt-16'} relative z-10`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-stone-100 text-stone-950 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
               <Droplets size={24} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.3em]">Propriedade Terapêutica</span>
              <h3 className="text-3xl md:text-5xl font-serif text-stone-100 leading-tight">{ingredient.name}</h3>
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-800 border border-stone-700 text-stone-100 text-xs font-bold rounded-full uppercase tracking-widest shadow-sm">
            <Sparkles size={14} className="text-stone-400" />
            {ingredient.benefit}
          </div>
          
          <div className="space-y-6">
            <p className="text-stone-200 leading-relaxed text-xl md:text-2xl font-light italic font-serif">
              "{ingredient.description}"
            </p>
            <div className="pt-6 border-t border-stone-800/50">
              <p className="text-stone-400 text-sm leading-relaxed">
                Esta essência atua diretamente no sistema límbico, auxiliando no processo de <span className="text-stone-200 font-medium">{ingredient.benefit.toLowerCase()}</span> e equilíbrio emocional.
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-4 mt-4 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-2xl text-sm font-bold uppercase tracking-widest transition-colors border border-stone-700 md:hidden"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default IngredientModal;