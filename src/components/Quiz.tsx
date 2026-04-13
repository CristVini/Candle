"use client";

import React, { useState } from 'react';
import { olfactoryProfiles } from '../data/olfactoryProfiles';
import ResultCard from './ResultCard';

const questions = [
  {
    id: 1,
    text: "Quando você para por um momento, o que mais pesa dentro de você?",
    options: [
      { text: "Um cansaço difícil de explicar", value: "relax" },
      { text: "Pensamentos que não se organizam", value: "focus" },
      { text: "Falta de motivação ou entusiasmo", value: "energy" },
      { text: "Nada pesa, mas sinto que algo poderia ser melhor", value: "balance,sophisticated" }
    ]
  },
  {
    id: 2,
    text: "Como você descreveria seu estado interno hoje?",
    options: [
      { text: "Sobrecarregado", value: "relax" },
      { text: "Disperso", value: "focus" },
      { text: "Apático", value: "energy" },
      { text: "Estável, porém sem destaque", value: "balance" }
    ]
  },
  {
    id: 3,
    text: "O que mais tem consumido sua energia ultimamente?",
    options: [
      { text: "Emoções e preocupações", value: "relax,romance" },
      { text: "Excesso de tarefas ou estímulos", value: "focus,clean" },
      { text: "Falta de novidade ou propósito", value: "energy,sensual" },
      { text: "Rotina repetitiva", value: "cozy,nature" }
    ]
  },
  {
    id: 4,
    text: "Se você pudesse ajustar algo em você agora, seria:",
    options: [
      { text: "Acalmar a mente e o corpo", value: "relax" },
      { text: "Ter mais clareza e direção", value: "focus" },
      { text: "Sentir mais energia e vontade", value: "energy" },
      { text: "Tornar seus momentos mais agradáveis", value: "cozy,sophisticated" }
    ]
  },
  {
    id: 5,
    text: "Como você reage quando finalmente tem um tempo livre?",
    options: [
      { text: "Só quer descansar e se desligar", value: "relax,nature" },
      { text: "Tenta se organizar ou resolver coisas", value: "focus,clean" },
      { text: "Procura algo que te anime", value: "energy" },
      { text: "Quer aproveitar de forma leve e confortável", value: "cozy,balance" }
    ]
  },
  {
    id: 6,
    text: "O que você sente que está faltando no seu dia a dia?",
    options: [
      { text: "Paz", value: "relax,balance" },
      { text: "Foco", value: "focus" },
      { text: "Energia", value: "energy" },
      { text: "Prazer/conforto", value: "cozy,sensual" }
    ]
  },
  {
    id: 7,
    text: "Qual dessas situações mais se aproxima da sua realidade?",
    options: [
      { text: "Minha mente não desacelera", value: "relax" },
      { text: "Eu começo coisas e não termino", value: "focus" },
      { text: "Eu não tenho vontade de começar", value: "energy" },
      { text: "Faço tudo, mas sem prazer", value: "cozy,sophisticated" }
    ]
  },
  {
    id: 8,
    text: "Quando você entra em um ambiente ideal, ele precisa ter:",
    options: [
      { text: "Silêncio e calma", value: "relax,nature" },
      { text: "Organização e estímulo mental", value: "focus,clean" },
      { text: "Leveza e energia", value: "energy" },
      { text: "Aconchego e conforto", value: "cozy" }
    ]
  },
  {
    id: 9,
    text: "Como você gostaria de se sentir ao final do dia?",
    options: [
      { text: "Em paz", value: "relax,balance" },
      { text: "Satisfeito com o que produziu", value: "focus" },
      { text: "Animado e leve", value: "energy" },
      { text: "Confortável e acolhido", value: "cozy,romance" }
    ]
  },
  {
    id: 10,
    text: "Qual dessas frases mais combina com você hoje?",
    options: [
      { text: "“Eu preciso desacelerar”", value: "relax" },
      { text: "“Eu preciso me organizar”", value: "focus,clean" },
      { text: "“Eu preciso me animar”", value: "energy" },
      { text: "“Eu só quero me sentir bem”", value: "balance,cozy" }
    ]
  },
  {
    id: 11,
    text: "O que mais te desconecta de você mesmo?",
    options: [
      { text: "Ansiedade ou excesso de emoção", value: "relax,balance" },
      { text: "Distrações constantes", value: "focus" },
      { text: "Falta de estímulo", value: "energy,sensual" },
      { text: "Rotina sem prazer", value: "cozy,sophisticated" }
    ]
  },
  {
    id: 12,
    text: "Se você pudesse criar um momento perfeito agora, ele seria:",
    options: [
      { text: "Um espaço calmo para descansar", value: "relax,nature" },
      { text: "Um ambiente que te faça focar", value: "focus" },
      { text: "Um clima leve e estimulante", value: "energy" },
      { text: "Um espaço acolhedor e prazeroso", value: "cozy,sensual" }
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