"use client";

import React, { useState, Suspense, lazy, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Fireflies from '../components/Fireflies';
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
  const scrollContainerRef = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const activeContainer = scrollContainerRef.current[currentView];
    if (activeContainer) {
      activeContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView]);

  const handleClose = () => setCurrentView('hero');

  return (
    <main className="relative w-full h-screen overflow-hidden bg-stone-950 text-stone-100 font-sans">
      <Fireflies />

      {/* Camada Base: Hero */}
      <div className={`w-full h-full transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${currentView !== 'hero' ? 'scale-[0.98] opacity-30 blur-sm' : 'scale-100 opacity-100 blur-0'}`}>
        <Hero 
          onStartQuiz={() => setCurrentView('quiz')} 
          onOpenScience={() => setCurrentView('science')} 
          onOpenIngredients={() => setCurrentView('ingredients')}
        />
      </div>

      {/* Camada Sobreposta: Quiz & Result */}
      <div 
        ref={el => scrollContainerRef.current['quiz'] = el}
        className={`fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) overflow-y-auto ${
          currentView === 'quiz' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <Suspense fallback={<LoadingFallback />}>
          {currentView === 'quiz' && (
            <div className="relative min-h-screen w-full flex flex-col items-center py-20 px-4">
              <button 
                onClick={handleClose}
                className="fixed top-6 right-6 z-[80] p-3 bg-stone-900/80 border border-stone-800/50 rounded-full text-stone-400 hover:text-white transition-all hover:bg-stone-800 shadow-xl"
              >
                <X size={20} />
              </button>
              <div className="w-full max-w-5xl">
                <Quiz />
              </div>
            </div>
          )}
        </Suspense>
      </div>

      {/* Camada Sobreposta: Ciência */}
      <div 
        ref={el => scrollContainerRef.current['science'] = el}
        className={`fixed inset-0 z-50 bg-stone-950/98 backdrop-blur-md transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) overflow-y-auto ${
          currentView === 'science' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <Suspense fallback={<LoadingFallback />}>
          {currentView === 'science' && (
            <div className="relative min-h-screen">
              <button 
                onClick={handleClose}
                className="fixed top-6 left-6 z-[80] p-3 bg-stone-900/80 border border-stone-800/50 rounded-full text-stone-400 hover:text-white transition-all hover:bg-stone-800 shadow-xl"
              >
                <X size={20} />
              </button>
              <div className="pt-24 pb-12">
                <Science />
              </div>
            </div>
          )}
        </Suspense>
      </div>

      {/* Camada Sobreposta: Ingredientes */}
      <div 
        ref={el => scrollContainerRef.current['ingredients'] = el}
        className={`fixed inset-0 z-50 bg-stone-950/98 backdrop-blur-md transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) overflow-y-auto ${
          currentView === 'ingredients' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <Suspense fallback={<LoadingFallback />}>
          {currentView === 'ingredients' && (
            <div className="relative min-h-screen">
              <button 
                onClick={handleClose}
                className="fixed top-6 right-6 z-[80] p-3 bg-stone-900/80 border border-stone-800/50 rounded-full text-stone-400 hover:text-white transition-all hover:bg-stone-800 shadow-xl"
              >
                <X size={20} />
              </button>
              <div className="pt-24 pb-12">
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