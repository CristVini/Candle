"use client";

import React, { useEffect, useRef } from 'react';
import { X, Sparkles, Droplets } from 'lucide-react';
import { Ingredient } from '../data/ingredients';

interface IngredientModalProps {
  ingredient: Ingredient | null;
  onClose: () => void;
}

const IngredientModal = ({ ingredient, onClose }: IngredientModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ingredient) {
      // Bloquear o scroll do corpo da página ao abrir o modal
      document.body.style.overflow = 'hidden';
      // Forçar o container do modal a começar no topo absoluto
      if (modalRef.current) {
        modalRef.current.scrollTo(0, 0);
      }
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
      ref={modalRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-start p-0 md:p-10 bg-stone-950/95 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto touch-pan-y"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-stone-900 border-x border-b md:border border-stone-800 rounded-b-[40px] md:rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] animate-in zoom-in-95 slide-in-from-top-10 duration-500 my-0 md:my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-3 bg-stone-950/80 text-white rounded-full hover:bg-stone-800 transition-all active:scale-90 border border-stone-800"
        >
          <X size={24} />
        </button>

        {ingredient.image && (
          <div className="h-64 md:h-80 overflow-hidden relative">
            <img 
              src={ingredient.image} 
              alt={ingredient.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent"></div>
          </div>
        )}

        <div className={`p-8 md:p-14 space-y-6 ${ingredient.image ? '-mt-12' : 'pt-20'} relative z-10 bg-stone-900`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-stone-100 text-stone-950 rounded-full flex items-center justify-center shrink-0">
               <Droplets size={20} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.3em]">Propriedade Terapêutica</span>
              <h3 className="text-3xl md:text-5xl font-serif text-stone-100 leading-tight">{ingredient.name}</h3>
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-800 border border-stone-700 text-stone-200 text-[10px] md:text-xs font-bold rounded-full uppercase tracking-widest">
            <Sparkles size={12} className="text-stone-400" />
            {ingredient.benefit}
          </div>
          
          <div className="space-y-4">
            <p className="text-stone-300 leading-relaxed text-lg md:text-xl font-light italic">
              "{ingredient.description}"
            </p>
            <div className="pt-4 border-t border-stone-800">
              <p className="text-stone-500 text-sm font-light">
                Esta essência atua diretamente no sistema límbico, auxiliando no processo de {ingredient.benefit.toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Espaçador de segurança para o final do modal */}
      <div className="h-10 shrink-0"></div>
    </div>
  );
};

export default IngredientModal;