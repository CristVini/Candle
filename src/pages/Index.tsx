"use client";

import React from 'react';
import Quiz from '../components/Quiz';
import { Sparkles, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f4f1ec] text-slate-900 font-sans selection:bg-stone-200">
      {/* Design mais sóbrio e texturizado */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-stone-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-200/30 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-16 md:py-32">
        <header className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-stone-800 text-white rounded-full shadow-lg mb-8 animate-fade-in">
            <Shield className="w-3.5 h-3.5 text-orange-400 mr-2" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Protocolo de Engenharia Sensorial</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-light mb-8 tracking-tighter text-stone-800 leading-[0.85]">
            Mapeamento <br/> <span className="italic font-normal">Arquétipo</span>
          </h1>
          
          <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl mx-auto">
            Descubra a fragrância terapêutica que corresponde ao seu estado psicológico atual. Uma abordagem científica e ancestral para homens e mulheres de alto desempenho.
          </p>
        </header>

        <section className="relative">
          <div className="bg-white/40 backdrop-blur-md border border-white/20 p-8 md:p-16 rounded-[40px] shadow-2xl shadow-stone-200/50">
            <Quiz />
          </div>
        </section>

        <footer className="mt-32 text-center">
          <div className="h-px w-20 bg-stone-300 mx-auto mb-8" />
          <p className="text-[11px] text-stone-400 uppercase tracking-[0.4em] mb-2 font-bold">Luz & Essência • Atelier de Alquimia</p>
          <p className="text-[10px] text-stone-400 italic">Perfumes de ambiente baseados em neurociência e psicologia profunda.</p>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;600;700&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
        }
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
};

export default Index;