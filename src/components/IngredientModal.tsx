"use client";

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Sparkles, Droplets } from 'lucide-react';
import { Ingredient } from '../data/ingredients';

interface IngredientModalProps {
  ingredient: Ingredient | null;
  onClose: () => void;
}

const IngredientModal = ({ ingredient, onClose }: IngredientModalProps) => {
  useEffect(() => {
    if (ingredient) {
      // Bloqueio rigoroso de scroll no nível da raiz
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [ingredient]);

  if (!ingredient) return null;

  // Renderizamos o modal via Portal para que ele saia do container com scroll
  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-950/95 backdrop-blur-xl p-4 md:p-8 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] bg-stone-900 border border-stone-800 rounded-[40px] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col animate-in zoom-in-95 slide-in-from-bottom-10 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de fechar visível e acessível */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-stone-950/80 text-white rounded-full hover:bg-stone-100 hover:text-stone-950 transition-all border border-stone-800 shadow-xl"
        >
          <X size={24} />
        </button>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {ingredient.image && (
            <div className="h-64 md:h-80 w-full overflow-hidden relative shrink-0">
              <img 
                src={ingredient.image} 
                alt={ingredient.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent"></div>
            </div>
          )}

          <div className={`p-8 md:p-16 space-y-8 ${ingredient.image ? '-mt-12' : 'pt-20'} relative z-10 bg-stone-900`}>
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-stone-100 text-stone-950 rounded-[20px] flex items-center justify-center shrink-0 shadow-2xl">
                 <Droplets size={28} />
              </div>
              <div>
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.4em]">Arquitetura Olfativa</span>
                <h3 className="text-4xl md:text-6xl font-serif text-stone-100 leading-tight">{ingredient.name}</h3>
              </div>
            </div>
            
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-stone-800 border border-stone-700 text-stone-100 text-[11px] font-bold rounded-full uppercase tracking-widest shadow-inner">
              <Sparkles size={14} className="text-stone-400" />
              Benefício: {ingredient.benefit}
            </div>
            
            <div className="space-y-6">
              <p className="text-stone-200 leading-relaxed text-2xl md:text-3xl font-light italic font-serif">
                "{ingredient.description}"
              </p>
              <div className="pt-8 border-t border-stone-800/50">
                <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-prose">
                  Este extrato molecular atua nos receptores olfativos para modular o estado de <span className="text-stone-100 font-medium">{ingredient.benefit.toLowerCase()}</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default IngredientModal;