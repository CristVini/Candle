"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Quiz from '../components/Quiz';
import Result from '../components/Result';
import Science from '../components/Science';
import Footer from '../components/Footer';
import { archetypesData } from '../data/archetypes';

const Index = () => {
  const [view, setView] = useState<'hero' | 'quiz' | 'result' | 'science'>('hero');
  const [selectedArchetype, setSelectedArchetype] = useState(archetypesData[0]);

  const handleStartQuiz = () => setView('quiz');
  const handleOpenScience = () => setView('science');
  
  const handleQuizComplete = (answers: string[]) => {
    // Lógica simples de sorteio para garantir que o resultado sempre apareça
    // Em um sistema real, aqui você mapearia as respostas
    const randomIndex = Math.floor(Math.random() * archetypesData.length);
    setSelectedArchetype(archetypesData[randomIndex]);
    setView('result');
  };

  const reset = () => setView('hero');

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500/30">
      <Header />
      
      <main>
        {view === 'hero' && (
          <Hero onStartQuiz={handleStartQuiz} onOpenScience={handleOpenScience} />
        )}
        
        {view === 'quiz' && (
          <Quiz onComplete={handleQuizComplete} />
        )}
        
        {view === 'result' && (
          <Result archetype={selectedArchetype} onReset={reset} />
        )}

        {view === 'science' && (
          <div className="pt-20">
            <Science />
            <div className="pb-20 text-center">
              <button 
                onClick={reset}
                className="px-8 py-4 bg-amber-600 rounded-full text-white hover:bg-amber-500 transition-all"
              >
                Voltar ao Início
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;