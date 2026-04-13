"use client";

import React, { useState } from 'react';
import Hero from '../components/Hero';
import Quiz from '../components/Quiz';
import Science from '../components/Science';
import { X } from 'lucide-react';

type ViewState = 'hero' | 'quiz' | 'science';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>('hero');

  return (
    <main className="relative w-full h-screen overflow-hidden bg-stone-950 text-stone-100">
      {/* Camada Base: Hero */}
      <div className={`w-full h-full transition-all duration-700 ease-in-out ${currentView !== 'hero' ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
        <Hero 
          onStartQuiz={() => setCurrentView('quiz')} 
          onOpenScience={() => setCurrentView('science')} 
        />
      </div>

      {/* Camada Sobreposta: Quiz (Sobe de baixo) */}
      <div 
        className={`fixed inset-0 z-50 bg-stone-950 transition-transform duration-700 ease-in-out overflow-y-auto ${
          currentView === 'quiz' ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="relative min-h-screen py-10 md:py-20">
          <button 
            onClick={() => setCurrentView('hero')}
            className="fixed top-6 right-6 z-[60] p-3 bg-stone-900/50 border border-stone-800 rounded-full text-stone-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <Quiz />
        </div>
      </div>

      {/* Camada Sobreposta: Ciência (Vem da direita) */}
      <div 
        className={`fixed inset-0 z-50 bg-stone-950 transition-transform duration-700 ease-in-out overflow-y-auto ${
          currentView === 'science' ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="relative min-h-screen">
          <button 
            onClick={() => setCurrentView('hero')}
            className="fixed top-6 left-6 z-[60] p-3 bg-stone-900/50 border border-stone-800 rounded-full text-stone-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <div className="pt-20">
            <Science />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;