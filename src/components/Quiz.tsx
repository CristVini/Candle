"use client";

import React, { useState } from 'react';
import { candleProfiles } from '../data/candleProfiles';
import ResultCard from './ResultCard';

const questions = [
  {
    id: 1,
    text: "Qual é o seu objetivo principal ao acender uma vela agora?",
    options: [
      { text: "Celebrar uma conquista ou elevar a energia", value: "joy" },
      { text: "Criar um clima de sedução e intimidade", value: "sensuality" },
      { text: "Recuperar-me de um dia exaustivo", value: "burnout" },
      { text: "Acalmar pensamentos acelerados", value: "anxiety" }
    ]
  },
  {
    id: 2,
    text: "Como você quer que as pessoas se sintam ao entrar no seu ambiente?",
    options: [
      { text: "Energizadas e felizes", value: "joy" },
      { text: "Atraídas pelo mistério e sofisticação", value: "sensuality" },
      { text: "Respeitadas pelo silêncio e ordem", value: "mental_fatigue" },
      { text: "Acolhidas e seguras", value: "loneliness" }
    ]
  },
  {
    id: 3,
    text: "Se você pudesse escolher uma textura para o seu momento, qual seria?",
    options: [
      { text: "Seda preta e veludo (Sensual)", value: "sensuality" },
      { text: "Linho branco ao sol (Alegre)", value: "joy" },
      { text: "Couro rústico e madeira (Foco)", value: "mental_fatigue" },
      { text: "Lã grossa e quente (Conforto)", value: "loneliness" }
    ]
  },
  {
    id: 4,
    text: "Qual bebida combina mais com o seu estado de espírito atual?",
    options: [
      { text: "Um drink cítrico e refrescante", value: "joy" },
      { text: "Um vinho tinto encorpado ou whisky", value: "sensuality" },
      { text: "Um café preto forte e curto", value: "mental_fatigue" },
      { text: "Um chá de ervas calmante", value: "acute_stress" }
    ]
  },
  {
    id: 5,
    text: "O que te faz sentir mais poderoso(a)?",
    options: [
      { text: "Minha capacidade de contagiar os outros com alegria", value: "joy" },
      { text: "Meu magnetismo e mistério pessoal", value: "sensuality" },
      { text: "Minha disciplina e clareza mental", value: "mental_fatigue" },
      { text: "Minha resiliência em momentos difíceis", value: "burnout" }
    ]
  },
  {
    id: 6,
    text: "Como está sua energia social hoje?",
    options: [
      { text: "No auge, quero celebrar!", value: "joy" },
      { text: "Intensa, focada em conexões profundas", value: "sensuality" },
      { text: "Baixa, preciso de isolamento para curar", value: "burnout" },
      { text: "Irritada, prefiro que não me amolem", value: "irritability" }
    ]
  },
  {
    id: 7,
    text: "Qual é o seu maior desafio no momento?",
    options: [
      { text: "Manter esse estado de felicidade e gratidão", value: "joy" },
      { text: "Explorar mais minha autoconfiança e desejo", value: "sensuality" },
      { text: "Vencer o bloqueio de novas ideias", value: "creative_block" },
      { text: "Controlar o estresse constante", value: "acute_stress" }
    ]
  },
  {
    id: 8,
    text: "Escolha um cenário ideal:",
    options: [
      { text: "Uma festa vibrante com amigos", value: "joy" },
      { text: "Um encontro à meia-luz e sem pressa", value: "sensuality" },
      { text: "Um escritório silencioso e produtivo", value: "mental_fatigue" },
      { text: "Uma cabana isolada nas montanhas", value: "loneliness" }
    ]
  },
  {
    id: 9,
    text: "Qual palavra define sua semana?",
    options: [
      { text: "Brilho", value: "joy" },
      { text: "Intensidade", value: "sensuality" },
      { text: "Sobrevivência", value: "burnout" },
      { text: "Estratégia", value: "hopelessness" }
    ]
  },
  {
    id: 10,
    text: "O que você busca na 'Luz & Essência' hoje?",
    options: [
      { text: "Um presente para celebrar a vida", value: "joy" },
      { text: "Um segredo para noites inesquecíveis", value: "sensuality" },
      { text: "Uma ferramenta de foco e trabalho", value: "mental_fatigue" },
      { text: "Um remédio para a alma cansada", value: "burnout" }
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
    <div className="max-w-2xl mx-auto px-4">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-[1px] w-8 bg-stone-300"></div>
          <span className="text-[10px] font-bold text-stone-600 uppercase tracking-[0.3em]">
            Engenharia do Estado Mental • {currentStep + 1} de {questions.length}
          </span>
          <div className="h-[1px] w-8 bg-stone-300"></div>
        </div>
        
        <div className="w-full bg-stone-100 h-1 rounded-full overflow-hidden max-w-xs mx-auto">
          <div 
            className="bg-stone-800 h-full transition-all duration-700 ease-out" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl md:text-5xl font-serif text-center text-stone-800 leading-tight">
          {currentQuestion.text}
        </h2>
        
        <div className="grid gap-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="group relative w-full text-left p-6 bg-white/50 border border-stone-200 rounded-xl hover:border-stone-800 hover:bg-stone-50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg text-stone-600 group-hover:text-stone-900 transition-colors">
                  {option.text}
                </span>
                <div className="h-1.5 w-1.5 rounded-full bg-stone-200 group-hover:bg-stone-800 transition-colors"></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;