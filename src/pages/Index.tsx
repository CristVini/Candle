"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
      <Hero onStartQuiz={() => setCurrentView('quiz')} onOpenScience={() => setCurrentView('science')} />

      <AnimatePresence>
        {/* Camada Sobreposta: Quiz */}
        {currentView === 'quiz' && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-stone-950 overflow-y-auto"
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
          </motion.div>
        )}

        {/* Camada Sobreposta: Ciência */}
        {currentView === 'science' && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-stone-950 overflow-y-auto"
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
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Index;