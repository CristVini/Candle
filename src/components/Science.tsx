"use client";

import React, { useState } from 'react';
import { Brain, Wind, FlaskConical, Microscope, BookOpen } from 'lucide-react';
import ReferencesModal from './ReferencesModal';

const Science = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const principles = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Sistema Límbico",
      description: "Diferente de outros sentidos, o olfato tem conexão direta com o sistema límbico, a 'central emocional' do cérebro, acessando memórias e sentimentos instantaneamente."
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Notas de Cabeça",
      description: "Moléculas leves que impactam o humor no primeiro contato. Bergamota e Hortelã são usadas para clareza mental imediata."
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Coração & Base",
      description: "Notas que sustentam a experiência. O Patchouli e o Sândalo atuam no aterramento e redução de picos de cortisol."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 pb-20 space-y-16">
      <div className="text-center space-y-6">
        <h2 className="text-4xl md:text-7xl font-serif text-stone-100">Bioquímica Sensorial</h2>
        <p className="text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Nossas velas não são apenas fragrâncias, são ferramentas neurobiológicas desenvolvidas para modular estados de espírito através de moléculas aromáticas específicas.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {principles.map((p, i) => (
          <div key={i} className="p-8 bg-stone-900/50 border border-stone-800 rounded-[32px] space-y-4 hover:border-stone-600 transition-colors">
            <div className="w-12 h-12 bg-stone-100 text-stone-950 rounded-2xl flex items-center justify-center">
              {p.icon}
            </div>
            <h3 className="text-xl font-serif text-stone-200">{p.title}</h3>
            <p className="text-stone-400 text-sm leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>

      <div className="relative p-10 md:p-16 bg-stone-100 text-stone-950 rounded-[40px] overflow-hidden">
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-950/10 rounded-full text-[10px] font-bold uppercase tracking-widest">
              Protocolo Luz & Essência
            </div>
            <h3 className="text-3xl md:text-5xl font-serif leading-tight">Ciência a serviço do bem-estar.</h3>
            <p className="text-stone-700 leading-relaxed">
              Cada combinação em nosso mapeamento foi validada por estudos de psicologia olfativa, garantindo que o aroma escolhido seja exatamente o que seu sistema nervoso precisa.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-stone-900 font-bold border-b-2 border-stone-900 pb-1 hover:opacity-70 transition-opacity"
            >
              <BookOpen size={16} />
              Ver Referências Bibliográficas
            </button>
          </div>
          <div className="flex justify-center">
             <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-dashed border-stone-300 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <Microscope size={64} className="text-stone-300" />
             </div>
          </div>
        </div>
      </div>

      <ReferencesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Science;