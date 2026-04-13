"use client";

import React, { useState } from 'react';
import { candleProfiles } from '../data/candleProfiles';
import ResultCard from './ResultCard';

const questions = [
  {
    id: 1,
    text: "Qual é o seu objetivo sensorial prioritário neste momento?",
    options: [
      { text: "Celebrar uma vitória e elevar a vibração", value: "joy" },
      { text: "Despertar o magnetismo e a sedução", value: "sensuality" },
      { text: "Restaurar a energia após um dia exaustivo", value: "burnout" },
      { text: "Aterrar a mente e reduzir a ansiedade", value: "anxiety" }
    ]
  },
  {
    id: 2,
    text: "Como você deseja que seu espaço seja percebido pelos outros?",
    options: [
      { text: "Um ambiente solar, energético e receptivo", value: "joy" },
      { text: "Um refúgio de mistério, luxo e sofisticação", value: "sensuality" },
      { text: "Um templo de foco, ordem e silêncio", value: "mental_fatigue" },
      { text: "Um abraço acolhedor e seguro", value: "loneliness" }
    ]
  },
  {
    id: 3,
    text: "Escolha o estímulo tátil que mais ressoa com seu estado atual:",
    options: [
      { text: "Seda pura e veludo italiano", value: "sensuality" },
      { text: "Linho egípcio fresco ao sol", value: "joy" },
      { text: "Couro rústico e carvalho maciço", value: "mental_fatigue" },
      { text: "Caxemira espessa e envolvente", value: "loneliness" }
    ]
  },
  {
    id: 4,
    text: "Em qual cenário você encontra seu maior potencial?",
    options: [
      { text: "Em conexões sociais vibrantes e festivas", value: "joy" },
      { text: "Em momentos de intimidade e poder pessoal", value: "sensuality" },
      { text: "Na clareza estratégica e execução impecável", value: "mental_fatigue" },
      { text: "Na resiliência silenciosa diante do caos", value: "acute_stress" }
    ]
  },
  {
    id: 5,
    text: "O que sua mente mais pede neste exato segundo?",
    options: [
      { text: "Expansão e brilho", value: "joy" },
      { text: "Desejo e conexão profunda", value: "sensuality" },
      { text: "Estrutura e foco cognitivo", value: "mental_fatigue" },
      { text: "Pausa e silêncio regenerativo", value: "burnout" }
    ]
  }
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    setScores(prev => ({ ...prev, [value]: (prev[value] || 0) + 1 }));
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const getWinner = () => {
    return Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores({});
    setShowResult(false);
  };

  if (showResult) {
    const winnerId = getWinner();
    return <ResultCard profile={candleProfiles[winnerId]} onReset={resetQuiz} />;
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="max-w-2xl mx-auto px-4" role="form" aria-live="polite">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-[1px] w-8 bg-stone-800"></div>
          <span className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.3em]">
            Protocolo Sensorial • Passo {currentStep + 1} de {questions.length}
          </span>
          <div className="h-[1px] w-8 bg-stone-800"></div>
        </div>
        
        <div className="w-full bg-stone-900 h-1 rounded-full overflow-hidden max-w-xs mx-auto" role="progressbar" aria-valuenow={((currentStep + 1) / questions.length) * 100} aria-valuemin={0} aria-valuemax={100}>
          <div 
            className="bg-stone-100 h-full transition-all duration-700 ease-out" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl md:text-5xl font-serif text-center text-stone-100 leading-tight">
          {currentQuestion.text}
        </h2>
        
        <div className="grid gap-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              aria-label={`Escolher opção: ${option.text}`}
              className="group relative w-full text-left p-6 bg-stone-900/40 border border-stone-800 rounded-xl hover:border-stone-500 hover:bg-stone-800/60 transition-all duration-300 focus:ring-2 focus:ring-stone-600 focus:outline-none"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg text-stone-400 group-hover:text-stone-100 transition-colors">
                  {option.text}
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-stone-800 group-hover:bg-stone-100 transition-colors"></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;