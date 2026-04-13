"use client";

import React from 'react';
import { X, BookOpen } from 'lucide-react';

const ReferencesModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const references = [
    { title: "The Scent of Desire", author: "Dr. Rachel Herz", year: "2007", focus: "Neurobiologia das emoções olfativas." },
    { title: "Aromatherapy and the Mind", author: "Julia Lawless", year: "1994", focus: "Psicologia dos aromas e estados de humor." },
    { title: "Influence of Fragrances on Human Psychophysiological Activity", author: "Sowndhararajan & Kim", year: "2016", focus: "Estudo sobre EEG e óleos essenciais." },
    { title: "The Limbic System and Olfaction", author: "Journal of Neuroscience", year: "2021", focus: "Conexão entre bulbo olfativo e sistema límbico." }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-sm">
      <div className="bg-stone-900 border border-stone-800 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <div className="p-6 border-b border-stone-800 flex justify-between items-center">
          <div className="flex items-center gap-2 text-stone-400">
            <BookOpen size={18} />
            <h3 className="font-serif text-lg text-stone-200">Base Científica</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-stone-800 rounded-full transition-colors text-stone-500">
            <X size={20} />
          </button>
        </div>
        <div className="p-8 space-y-6">
          <p className="text-xs text-stone-500 uppercase tracking-widest">Estudos que fundamentam o algoritmo Luz & Essência</p>
          <div className="space-y-4">
            {references.map((ref, i) => (
              <div key={i} className="border-l border-stone-700 pl-4 space-y-1">
                <p className="text-stone-200 font-medium text-sm italic">"{ref.title}"</p>
                <p className="text-[10px] text-stone-500 uppercase tracking-tighter">{ref.author} • {ref.year}</p>
                <p className="text-xs text-stone-400">{ref.focus}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-6 bg-stone-950/50 text-center">
          <p className="text-[10px] text-stone-600 leading-relaxed italic">
            "O olfato é o único sentido que se conecta diretamente com a amígdala e o hipocampo."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferencesModal;