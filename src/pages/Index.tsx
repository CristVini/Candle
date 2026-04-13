"use client";

import React, { useState, Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import { X, Loader2 } from 'lucide-react';

// Carregamento dinâmico
const Quiz = lazy(() => import('../components/Quiz'));
const Science = lazy(() => import('../components/Science'));
const IngredientsGallery = lazy(() => import('../components/IngredientsGallery'));

type ViewState = 'hero' | 'quiz' | 'science' | 'ingredients';

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-full w-full bg-stone-950">
    <Loader2 className="w-8 h-8 text-stone-500 animate-spin" />
  </div>
);

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>('hero');

  return (
    <main className="relative w-full h-screen overflow-hidden bg-stone-950 text-stone-100 font-sans">
      {/* Camada Base: Hero */}
      <div className={`w-full h-full transition-all duration-700 ease-in-out ${currentView !== 'hero' ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
        <Hero 
          onStartQuiz={() => setCurrentView('quiz')} 
          onOpenScience={() => setCurrentView('science')} 
          onOpenIngredients={() => setCurrentView('ingredients')}
        />
      </div>

      {/* Camada Sobreposta: Quiz */}
      <div 
        className={`fixed inset-0 z-50 bg-stone-950 transition-transform duration-700 ease-in-out overflow-y-auto ${
          currentView === 'quiz' ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <Suspense fallback={<LoadingFallback />}>
          {currentView === 'quiz' && (
            <div className="relative min-h-screen py-10 md:py-20">
              <button 
                onClick={() => setCurrentView('hero')}
                className="fixed top-6 right-6 z-[60] p-3 bg-stone-900/50 border border-stone-800 rounded-full text-stone-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <Quiz />
            </div>
          )}
        </Suspense>
      </div>

      {/* Camada Sobreposta: Ciência */}
      <div 
        className={`fixed inset-0 z-50 bg-stone-950 transition-transform duration-700 ease-in-out overflow-y-auto ${
          currentView === 'science' ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Suspense fallback={<LoadingFallback />}>
          {currentView === 'science' && (
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
          )}
        </Suspense>
      </div>

      {/* Camada Sobreposta: Ingredientes */}
      <div 
        className={`fixed inset-0 z-50 bg-stone-950 transition-transform duration-700 ease-in-out overflow-y-auto ${
          currentView === 'ingredients' ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Suspense fallback={<LoadingFallback />}>
          {currentView === 'ingredients' && (
            <div className="relative min-h-screen">
              <button 
                onClick={() => setCurrentView('hero')}
                className="fixed top-6 right-6 z-[60] p-3 bg-stone-900/50 border border-stone-800 rounded-full text-stone-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <div className="pt-20">
                <IngredientsGallery />
              </div>
            </div>
          )}
        </Suspense>
      </div>
    </main>
  );
};

export default Index;