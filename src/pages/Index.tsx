"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-amber-200/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-stone-200/40 blur-[100px] rounded-full" />

      <div className="max-w-4xl w-full text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100 text-stone-500 text-xs font-bold uppercase tracking-widest mb-8 border border-stone-200">
          <Sparkles className="w-3 h-3 text-amber-500" /> Neurobiologia do Aroma
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold text-stone-800 mb-8 tracking-tighter leading-[0.9]">
          Sua mente em <br />
          <span className="italic font-light text-amber-600">equilíbrio.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-stone-500 mb-12 max-w-2xl mx-auto leading-relaxed italic">
          Descubra o arquétipo olfativo que sua mente precisa agora através de um mapeamento emocional guiado pela ciência.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Link 
            to="/quiz" 
            className="group w-full md:w-auto bg-stone-900 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-amber-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl shadow-stone-300"
          >
            Iniciar Mapeamento <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/ingredients" 
            className="w-full md:w-auto px-10 py-5 rounded-full font-bold text-lg text-stone-600 hover:bg-stone-100 transition-colors"
          >
            Explorar Aromas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;