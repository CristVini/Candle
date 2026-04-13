"use client";

import React, { useState } from 'react';
import { olfactoryProfiles } from '../data/olfactoryProfiles';
import ResultCard from './ResultCard';

const questions = [
  {
    id: 1,
    text: "Qual desses aromas te traz mais conforto ou saudade de momentos felizes do passado?",
    options: [
      { text: "Cheiro de bolo caseiro assando", value: "cozy" },
      { text: "Perfume marcante de um amor antigo", value: "romance,sensual" },
      { text: "Brisa fresca após chuva na floresta", value: "nature" },
      { text: "Xícara de café fresco pela manhã", value: "focus,energy" }
    ]
  },
  {
    id: 2,
    text: "Quando você quer relaxar após um dia estressante, aromas te fazem sentir...",
    options: [
      { text: "Calmo e sereno (como numa praia tranquila)", value: "relax" },
      { text: "Aconchegado e protegido (como em casa)", value: "cozy" },
      { text: "Energizado e renovado", value: "energy" },
      { text: "Confiante e sofisticado", value: "sophisticated" }
    ]
  },
  {
    id: 3,
    text: "Qual cheiro você escolheria para manter o foco enquanto estuda ou trabalha?",
    options: [
      { text: "Alecrim ou hortelã-pimenta", value: "focus" },
      { text: "Ambiente natural (cheiro de pinho/cedro)", value: "nature,focus" },
      { text: "Lavanda suave", value: "relax" },
      { text: "Café forte", value: "focus,energy" }
    ]
  },
  {
    id: 4,
    text: "Para criar um clima acolhedor em casa, você prefere aromas...",
    options: [
      { text: "Doces e quentes (baunilha, chocolate)", value: "cozy" },
      { text: "Amadeirados elegantes (sândalo, âmbar)", value: "sophisticated" },
      { text: "Florais suaves (jasmim, camomila)", value: "sensual,relax" },
      { text: "Frescos e herbais (capim-limão, ervas)", value: "clean,energy" }
    ]
  },
  {
    id: 5,
    text: "Em uma ocasião especial ou encontro romântico, que aroma você acha mais apropriado?",
    options: [
      { text: "Florais intensos (jasmim, rosa)", value: "sensual,romance" },
      { text: "Doce/oriental (baunilha, patchouli)", value: "sensual,cozy" },
      { text: "Amadeirados sofisticados (oud, âmbar)", value: "sophisticated" },
      { text: "Frutados leves (manga, maracujá)", value: "romance,energy" }
    ]
  },
  {
    id: 6,
    text: "Depois de limpar a casa, qual aroma você escolheria para manter o ar fresco?",
    options: [
      { text: "Cítricos energizantes (limão, grapefruit)", value: "clean,energy" },
      { text: "Menta ou eucalipto", value: "clean" },
      { text: "Florais leves (lírio-do-vale)", value: "clean,balance" },
      { text: "Natureza pura (pinheiro, terra molhada)", value: "nature,clean" }
    ]
  },
  {
    id: 7,
    text: "Ao escolher seu perfume favorito, você prefere...",
    options: [
      { text: "Aromas sofisticados e amadeirados", value: "sophisticated" },
      { text: "Notas doces e acolhedoras", value: "cozy" },
      { text: "Perfumes florais marcantes", value: "romance,sensual" },
      { text: "Fragrâncias frescas e energizantes", value: "energy,clean" }
    ]
  },
  {
    id: 8,
    text: "Quando está cansado e precisa de estímulo, você procura aromas que...",
    options: [
      { text: "Te acordem (café, chá preto)", value: "focus,energy" },
      { text: "Revigorem com frescor (menta, limão)", value: "focus,energy" },
      { text: "Acalmem antes de dormir (camomila, lavanda)", value: "relax" },
      { text: "Tragam conforto imediato (baunilha, chocolate)", value: "cozy" }
    ]
  },
  {
    id: 9,
    text: "Para se sentir confiante em um dia importante, você usaria um aroma...",
    options: [
      { text: "Forte e marcante (gengibre, patchouli)", value: "sensual,energy" },
      { text: "Amadeirado e sofisticado (âmbar, cedro)", value: "sophisticated" },
      { text: "Leve e fresco (cítrico, menta)", value: "energy,focus" },
      { text: "Doce e acolhedor (baunilha, caramelo)", value: "cozy" }
    ]
  },
  {
    id: 10,
    text: "Quando busca equilíbrio emocional, prefere aromas...",
    options: [
      { text: "Suaves e neutros", value: "balance" },
      { text: "Herbais e calmantes (verbena, erva-doce)", value: "balance,relax" },
      { text: "Flores discretas e leves", value: "balance" },
      { text: "Madeirados sutis (olíbano, cedro)", value: "balance,sophisticated" }
    ]
  },
  {
    id: 11,
    text: "Para atrair elogios com um novo perfume, você escolheria...",
    options: [
      { text: "Florais românticos (rosa, lírio)", value: "romance,sensual" },
      { text: "Orientais misteriosos (patchouli, âmbar)", value: "sensual,sophisticated" },
      { text: "Cítricos vibrantes (bergamota, limão)", value: "energy" },
      { text: "Gourmand adocicados (caramelo, coco)", value: "cozy,sensual" }
    ]
  },
  {
    id: 12,
    text: "Quando está em casa sozinho, prefere velas com aroma que te façam sentir...",
    options: [
      { text: "Totalmente relaxado e zen", value: "relax" },
      { text: "Convidativo e acolhedor para os amigos", value: "cozy" },
      { text: "Fresco e limpo no ambiente", value: "clean" },
      { text: "Energizado para realizar tarefas", value: "energy,focus" }
    ]
  }
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const profiles = value.split(',');
    const newScores = { ...scores };
    
    profiles.forEach(p => {
      newScores[p] = (newScores[p] || 0) + 1;
    });
    
    setScores(newScores);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const getWinner = () => {
    const entries = Object.entries(scores);
    if (entries.length === 0) return "energy";
    // Retorna o perfil com maior pontuação
    return entries.reduce((a, b) => a[1] > b[1] ? a : b)[0];
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores({});
    setShowResult(false);
  };

  if (showResult) {
    const winnerId = getWinner();
    return (
      <div className="flex items-center justify-center min-h-full w-full py-10">
        <ResultCard profile={olfactoryProfiles[winnerId]} onReset={resetQuiz} />
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center py-10">
      <div className="mb-6 md:mb-12 text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] w-6 md:w-8 bg-stone-800"></div>
          <span className="text-[9px] md:text-[10px] font-bold text-stone-500 uppercase tracking-[0.3em] md:tracking-[0.4em]">
            Passo {currentStep + 1} / {questions.length}
          </span>
          <div className="h-[1px] w-6 md:w-8 bg-stone-800"></div>
        </div>
        
        <div className="w-full bg-stone-900/50 h-1 rounded-full overflow-hidden max-w-[120px] md:max-w-[160px] mx-auto">
          <div 
            className="bg-stone-100 h-full transition-all duration-700 ease-out" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div 
        key={currentStep} 
        className="flex flex-col justify-center space-y-6 md:space-y-12 animate-in fade-in slide-in-from-right-4 duration-500"
      >
        <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-serif text-center text-stone-100 leading-tight max-w-4xl mx-auto min-h-[3em] flex items-center justify-center px-2">
          {currentQuestion.text}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto w-full">
          {currentQuestion.options.map((option, index) => (
            <button
              key={`${currentStep}-${index}`}
              onClick={() => handleAnswer(option.value)}
              className="group relative w-full text-left p-4 md:p-8 bg-stone-900/30 border border-stone-800 rounded-xl md:rounded-2xl hover:border-stone-500 hover:bg-stone-900/60 transition-all duration-300 active:scale-[0.98]"
            >
              <div className="flex flex-col gap-1.5 md:gap-2">
                <span className="text-sm md:text-xl text-stone-400 group-hover:text-stone-100 transition-colors leading-snug md:leading-relaxed">
                  {option.text}
                </span>
                <div className="h-[1px] w-4 md:w-6 bg-stone-800 group-hover:w-full group-hover:bg-stone-500 transition-all duration-500"></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;