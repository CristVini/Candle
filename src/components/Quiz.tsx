"use client";

import React, { useState } from 'react';
import { olfactoryProfiles } from '../data/olfactoryProfiles';
import ResultCard from './ResultCard';

const questions = [
  {
    id: 1,
    text: "O que você mais está precisando sentir agora?",
    options: [
      { text: "Mais alegria e vontade de celebrar", value: "energy" },
      { text: "Me sentir mais atraente e confiante", value: "sensual" },
      { text: "Recuperar minhas energias, estou exausto(a)", value: "relax" },
      { text: "Acalmar os pensamentos e relaxar", value: "balance" }
    ]
  },
  {
    id: 2,
    text: "Qual clima você quer criar no seu ambiente hoje?",
    options: [
      { text: "Um lugar iluminado, animado e aberto", value: "energy" },
      { text: "Um cantinho íntimo, chique e misterioso", value: "sophisticated" },
      { text: "Um espaço focado, onde eu consiga produzir", value: "focus" },
      { text: "Um refúgio que pareça um abraço quentinho", value: "cozy" }
    ]
  },
  {
    id: 3,
    text: "Se você pudesse tocar em algo agora, o que seria mais gostoso?",
    options: [
      { text: "O toque luxuoso da seda ou do veludo", value: "sophisticated" },
      { text: "O frescor de um lençol de linho limpo", value: "clean" },
      { text: "A firmeza de uma mesa de madeira maciça", value: "nature" },
      { text: "Uma manta de lã bem fofinha e pesada", value: "comfort" }
    ]
  },
  {
    id: 4,
    text: "Como você se sente quando está em um lugar com muita gente e barulho?",
    options: [
      { text: "Tenho vontade de fugir para um lugar quieto", value: "relax" },
      { text: "Fico impaciente e perco a paciência fácil", value: "balance" },
      { text: "Tento me concentrar, mas minha cabeça dói", value: "soft" },
      { text: "Eu gosto, me sinto vivo(a) e animado(a)", value: "energy" }
    ]
  },
  {
    id: 5,
    text: "Qual é o momento do dia que você mais sente cansaço?",
    options: [
      { text: "Logo que acordo, parece que não descansei", value: "stimulus" },
      { text: "No meio da tarde, quando o foco some", value: "focus" },
      { text: "No fim do dia, quando me sinto meio só", value: "connection" },
      { text: "Na hora de dormir, quando a mente não para", value: "relax" }
    ]
  },
  {
    id: 6,
    text: "Que cheiro te faz fechar os olhos e sorrir na hora?",
    options: [
      { text: "Cheiro de terra molhada e mato", value: "nature" },
      { text: "Cheiro de roupa limpa e brisa do mar", value: "clean" },
      { text: "Cheiro de temperos doces e perfumes intensos", value: "sensual" },
      { text: "Cheiro de frutas frescas e flores", value: "energy" }
    ]
  },
  {
    id: 7,
    text: "Como está sua vontade de conversar com as pessoas hoje?",
    options: [
      { text: "Zero. Só quero o meu próprio silêncio", value: "relax" },
      { text: "Só quero falar com quem eu gosto muito", value: "connection" },
      { text: "Me sinto na defensiva, meio irritado(a)", value: "balance" },
      { text: "Estou ótimo(a), quero ver gente!", value: "energy" }
    ]
  },
  {
    id: 8,
    text: "Para você, o silêncio é...",
    options: [
      { text: "Meu porto seguro, onde eu me encontro", value: "nature" },
      { text: "Essencial para eu conseguir pensar", value: "focus" },
      { text: "Meio agoniante, prefiro um som de fundo", value: "soft" },
      { text: "Um luxo para eu aproveitar meu momento", value: "sophisticated" }
    ]
  },
  {
    id: 9,
    text: "O que mais atrapalha o seu dia de fluir bem?",
    options: [
      { text: "O cansaço que carrego dos últimos dias", value: "stimulus" },
      { text: "Muita gente me chamando toda hora", value: "focus" },
      { text: "Preocupações com o que ainda vai acontecer", value: "balance" },
      { text: "Falta de algo que me deixe empolgado(a)", value: "escape" }
    ]
  },
  {
    id: 10,
    text: "Se o seu estresse fosse um toque na pele, como ele seria?",
    options: [
      { text: "Algo áspero que incomoda o tempo todo", value: "soft" },
      { text: "Um peso invisível que me aperta", value: "nature" },
      { text: "Algo frio e pontiagudo que me assusta", value: "clean" },
      { text: "Uma sensação de estar afundando", value: "escape" }
    ]
  },
  {
    id: 11,
    text: "O que você faz para 'recarregar as pilhas' de verdade?",
    options: [
      { text: "Um banho bem longo e relaxante", value: "sensual" },
      { text: "Uma caminhada ou algo ao ar livre", value: "nature" },
      { text: "Arrumar minhas coisas e organizar a casa", value: "clean" },
      { text: "Ficar quietinho(a) lendo ou escrevendo", value: "cozy" }
    ]
  },
  {
    id: 12,
    text: "Se pudesse ganhar um presente para sua mente agora, o que seria?",
    options: [
      { text: "Muita energia e alegria de viver", value: "energy" },
      { text: "Poder e magnetismo pessoal", value: "sophisticated" },
      { text: "Clareza para tomar decisões difíceis", value: "focus" },
      { text: "Paz absoluta e descanso profundo", value: "relax" }
    ]
  }
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const newScores = { ...scores, [value]: (scores[value] || 0) + 1 };
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
      {/* Header Fixo */}
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

      {/* Container de Perguntas com Key para resetar estado no mobile */}
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