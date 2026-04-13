"use client";

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, BookOpen } from 'lucide-react';

const ReferencesModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  if (!isOpen) return null;

  const references = [
    { title: "The Scent of Desire", author: "Dr. Rachel Herz", year: "2007", focus: "Neurobiologia das emoções olfativas e como aromas resgatam memórias autobiográficas." },
    { title: "Aromatherapy and the Mind", author: "Julia Lawless", year: "1994", focus: "Exploração psicológica dos óleos essenciais e seus efeitos nos estados cognitivos." },
    { title: "Influence of Fragrances on Human Psychophysiological Activity", author: "Sowndhararajan & Kim", year: "2016", focus: "Estudo quantitativo sobre ondas cerebrais (EEG) em resposta a diferentes estímulos aromáticos." },
    { title: "The Limbic System and Olfaction", author: "Journal of Neuroscience", year: "2021", focus: "Mapeamento das vias neurais entre o bulbo olfativo, a amígdala e o hipocampo." },
    { title: "Odor-evoked autobiographical memories", author: "Herz, R. S.", year: "1998", focus: "Estudo sobre como odores evocam memórias emocionais mais vívidas que outros sentidos." },
    { title: "The Influence of Odors on Mood and Affect", author: "Herz, R. S.", year: "2001", focus: "Pesquisa sobre a influência de fragrâncias no humor e comportamento social." }
  ];

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-stone-950/95 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-stone-900 border border-stone-800 w-full max-w-2xl rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 md:p-12 border-b border-stone-800 flex justify-between items-center bg-stone-900/50">
          <div className="flex items-center gap-4 text-stone-400">
            <div className="w-12 h-12 bg-stone-800 rounded-2xl flex items-center justify-center text-stone-200">
              <BookOpen size={24} />
            </div>
            <div>
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.4em] block mb-1">Evidências</span>
              <h3 className="font-serif text-2xl md:text-3xl text-stone-100">Base Científica</h3>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-3 hover:bg-stone-800 rounded-full transition-colors text-stone-500 hover:text-stone-100 border border-stone-800"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-8 md:p-12 space-y-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <p className="text-[11px] text-stone-500 uppercase tracking-[0.3em] font-bold border-b border-stone-800 pb-4">
            Estudos que fundamentam o mapeamento Luz & Essência
          </p>
          
          <div className="space-y-10">
            {references.map((ref, i) => (
              <div key={i} className="border-l-2 border-stone-700 pl-8 space-y-3 group">
                <p className="text-stone-100 font-medium text-lg md:text-xl italic font-serif leading-tight group-hover:text-white transition-colors">
                  "{ref.title}"
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-stone-500 uppercase tracking-widest font-bold">{ref.author}</span>
                  <span className="w-1 h-1 bg-stone-700 rounded-full"></span>
                  <span className="text-[11px] text-stone-500 uppercase tracking-widest font-bold">{ref.year}</span>
                </div>
                <p className="text-sm md:text-base text-stone-400 leading-relaxed font-light">
                  {ref.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 bg-stone-950/50 text-center border-t border-stone-800">
          <p className="text-sm md:text-base text-stone-500 leading-relaxed italic max-w-md mx-auto font-serif">
            "O olfato é o único sentido com acesso privilegiado às áreas do cérebro que processam emoção e memória de longo prazo."
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ReferencesModal;