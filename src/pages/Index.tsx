"use client";

import React from 'react';
import Quiz from '../components/Quiz';
import { Flame } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-slate-900 font-sans selection:bg-orange-100">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-orange-100 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-green-100 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-6">
            <Flame className="w-8 h-8 text-orange-500 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-4 tracking-tight">
            Luz & Essência
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Descubra qual aroma sua mente precisa hoje. Um guia baseado em aromaterapia e psicologia para ajudar no seu bem-estar emocional.
          </p>
        </header>

        <section className="max-w-4xl mx-auto">
          <Quiz />
        </section>

        <footer className="mt-24 text-center text-slate-400 text-sm">
          <p>© 2024 Luz & Essência • Aromaterapia Consciente</p>
          <p className="mt-2 italic">Nota: Este guia não substitui acompanhamento psicológico profissional.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;