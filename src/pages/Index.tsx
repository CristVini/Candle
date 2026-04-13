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

  // Resetar o scroll sempre que a view mudar
  useEffect(() => {
    const activeContainer = scrollContainerRef.current[currentView];
    if (activeContainer) {
      activeContainer.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentView]);

  const handleClose = () => setCurrentView('hero');

  return (
    <main className="relative w-full h-screen overflow-hidden bg-stone-950 text-stone-100 font-sans">
      {/* Camada Global: Vagalumes/Brasas (agora em Z-70) */}
      <Fireflies />

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
        ref={el => scrollContainerRef.current['quiz'] = el}
        className={`fixed inset-0 z-50 bg-stone-950 transition-transform duration-700 ease-in-out overflow-y-auto md:overflow-hidden flex flex-col items-center justify-center ${
          currentView === 'quiz' ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <Suspense fallback={<LoadingFallback />}>
          {currentView === 'quiz' && (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
              <button 
                onClick={handleClose}
                className="fixed top-6 right-6 z-[80] p-3 bg-stone-900/50 border border-stone-800 rounded-full text-stone-400 hover:text-white transition-colors backdrop-blur-md"
              >
                <X size={24} />
              </button>
              <div className="w-full">
                <Quiz />
              </div>
            </div>
          )}
        </Suspense>
      </div>

      {/* Camada Sobreposta: Ciência */}
      <div 
        ref={el => scrollContainerRef.current['science'] = el}
        className={`fixed inset-0 z-50 bg-stone-950 transition-transform duration-700 ease-in-out overflow-y-auto ${
          currentView === 'science' ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Suspense fallback={<LoadingFallback />}>
          {currentView === 'science' && (
            <div className="relative min-h-screen">
              <button 
                onClick={handleClose}
                className="fixed top-6 left-6 z-[80] p-3 bg-stone-900/50 border border-stone-800 rounded-full text-stone-400 hover:text-white transition-colors backdrop-blur-md"
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
        ref={el => scrollContainerRef.current['ingredients'] = el}
        className={`fixed inset-0 z-50 bg-stone-950 transition-transform duration-700 ease-in-out overflow-y-auto ${
          currentView === 'ingredients' ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Suspense fallback={<LoadingFallback />}>
          {currentView === 'ingredients' && (
            <div className="relative min-h-screen">
              <button 
                onClick={handleClose}
                className="fixed top-6 right-6 z-[80] p-3 bg-stone-900/50 border border-stone-800 rounded-full text-stone-400 hover:text-white transition-colors backdrop-blur-md"
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