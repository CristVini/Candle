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
    { title: "The Scent of Desire", author: "Dr. Rachel Herz", year: "2007", focus: "Neurobiologia das emoções olfativas." },
    { title: "Aromatherapy and the Mind", author: "Julia Lawless", year: "1994", focus: "Psicologia dos aromas e estados de humor." },
    { title: "Influence of Fragrances on Human Psychophysiological Activity", author: "Sowndhararajan & Kim", year: "2016", focus: "Estudo sobre EEG e óleos essenciais." },
    { title: "The Limbic System and Olfaction", author: "Journal of Neuroscience", year: "2021", focus: "Conexão entre bulbo olfativo e sistema límbico." }
  ];

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-stone-950/95 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-stone-900 border border-stone-800 w-full max-w-lg rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 border-b border-stone-800 flex justify-between items-center bg-stone-900/50">
          <div className="flex items-center gap-3 text-stone-400">
            <div className="w-10 h-10 bg-stone-800 rounded-2xl flex items-center justify-center text-stone-200">
              <BookOpen size={20} />
            </div>
            <h3 className="font-serif text-xl text-stone-200">Base Científica</h3>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-stone-800 rounded-full transition-colors text-stone-500 hover:text-stone-100"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-8 space-y-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <p className="text-[10px] text-stone-500 uppercase tracking-[0.3em] font-bold">Estudos que fundamentam o algoritmo Luz & Essência</p>
          <div className="space-y-6">
            {references.map((ref, i) => (
              <div key={i} className="border-l-2 border-stone-800 pl-6 space-y-2 group">
                <p className="text-stone-200 font-medium text-base italic group-hover:text-stone-100 transition-colors">"{ref.title}"</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-stone-600 uppercase tracking-tighter font-bold">{ref.author}</span>
                  <span className="w-1 h-1 bg-stone-800 rounded-full"></span>
                  <span className="text-[10px] text-stone-600 uppercase tracking-tighter font-bold">{ref.year}</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">{ref.focus}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-stone-950/50 text-center border-t border-stone-800">
          <p className="text-[11px] text-stone-500 leading-relaxed italic max-w-[280px] mx-auto">
            "O olfato é o único sentido que se conecta diretamente com a amígdala e o hipocampo."
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ReferencesModal;