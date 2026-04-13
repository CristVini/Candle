"use client";

import React from 'react';
import Quiz from '../components/Quiz';
import { Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-slate-900 font-sans selection:bg-orange-100">
      {/* Luz ambiente suave no fundo */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100/30 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-16 md:py-32">
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-white/50 backdrop-blur-sm border border-orange-100 rounded-full shadow-sm mb-8 animate-bounce-slow">
            <Sparkles className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">Alquimia Olfativa & Psicologia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 tracking-tighter text-slate-800 leading-[0.9]">
            Como está sua <br/> <span className="italic text-orange-800">alma</span> hoje?
          </h1>
          
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Responda nosso protocolo de mapeamento emocional para descobrir qual combinação de óleos essenciais sua mente precisa para se restaurar.
          </p>
        </header>

        <section className="relative">
          <Quiz />
        </section>

        <footer className="mt-32 text-center">
          <div className="h-px w-20 bg-slate-200 mx-auto mb-8" />
          <p className="text-[11px] text-slate-400 uppercase tracking-[0.3em] mb-2 font-bold">Luz & Essência Laboratory</p>
          <p className="text-xs text-slate-400 italic">Curadoria sensorial baseada em neurociência do olfato.</p>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;