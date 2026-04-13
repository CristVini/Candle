"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, RefreshCcw, Share2 } from 'lucide-react';

const Result = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100">
          <div className="h-[400px] md:h-full relative">
            <img 
              src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=800" 
              alt="Vela Recomendada"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/20" />
          </div>

          <div className="p-8 md:p-12">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-4">
              Arquétipo: O Observador
            </span>
            <h1 className="text-4xl font-bold text-stone-800 mb-4">Serenity</h1>
            <p className="text-stone-600 leading-relaxed mb-8 italic">
              "Seu porto seguro em meio ao caos. Silencie o mundo externo e encontre a paz que já habita dentro de você."
            </p>

            <div className="space-y-4 mb-10">
              <h4 className="font-bold text-stone-400 uppercase text-[10px] tracking-widest">Notas de Topo</h4>
              <div className="flex flex-wrap gap-2">
                {['Lavanda', 'Camomila', 'Bamboo'].map(note => (
                  <span key={note} className="px-4 py-2 bg-stone-50 rounded-lg text-sm text-stone-700 font-medium">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-amber-700 transition-all flex items-center justify-center gap-2">
                <ShoppingBag className="w-5 h-5" /> Adicionar ao Carrinho
              </button>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/quiz" className="flex items-center justify-center gap-2 py-3 rounded-xl border border-stone-200 text-stone-500 font-bold hover:bg-stone-50 transition-colors">
                  <RefreshCcw className="w-4 h-4" /> Refazer
                </Link>
                <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-stone-200 text-stone-500 font-bold hover:bg-stone-50 transition-colors">
                  <Share2 className="w-4 h-4" /> Compartilhar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;