"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { candleProfiles } from '../data/candleProfiles';
import ResultCard from './ResultCard';

const questions = [
  {
    id: 1,
    text: "Se sua mente fosse um estado climático hoje, como ela estaria?",
    options: [
      { text: "Uma tempestade elétrica incessante", value: "acute_stress" },
      { text: "Uma neblina densa e fria que não se dissipa", value: "burnout" },
      { text: "Um céu cinza e estático, sem vento", value: "sadness" },
      { text: "Um eclipse total, onde a luz parece ter sumido", value: "hopelessness" }
    ]
  },
  {
    id: 2,
    text: "Como você se sente em relação às suas responsabilidades atuais?",
    options: [
      { text: "Sufocado, como se estivesse carregando o mundo", value: "acute_stress" },
      { text: "Indiferente, não sinto mais conexão com o que faço", value: "burnout" },
      { text: "Incapaz de enxergar sentido em continuar tentando", value: "hopelessness" },
      { text: "Sinto que ninguém percebe o quanto estou sobrecarregado", value: "loneliness" }
    ]
  },
  {
    id: 3,
    text: "Ao final do dia, qual é o sentimento predominante?",
    options: [
      { text: "Vazio e isolamento, mesmo perto de pessoas", value: "loneliness" },
      { text: "Esgotamento que vai além do sono físico", value: "burnout" },
      { text: "Nervosismo e dificuldade em 'desligar' o corpo", value: "acute_stress" },
      { text: "Uma tristeza silenciosa e profunda", value: "sadness" }
    ]
  },
  {
    id: 4,
    text: "Como você descreveria sua 'centelha' interior agora?",
    options: [
      { text: "Parece que o combustível acabou completamente", value: "burnout" },
      { text: "Ela brilha freneticamente mas está me queimando", value: "acute_stress" },
      { text: "Sinto que ela se apagou e não sei como reacender", value: "hopelessness" },
      { text: "Ela brilha fraco, pedindo por um abraço", value: "loneliness" }
    ]
  },
  {
    id: 5,
    text: "Qual dessas situações mais te define socialmente hoje?",
    options: [
      { text: "Evito as pessoas porque não tenho energia para conversar", value: "burnout" },
      { text: "Estou entre pessoas mas me sinto a quilômetros de distância", value: "loneliness" },
      { text: "Fico irritado com barulhos ou conversas triviais", value: "acute_stress" },
      { text: "Sinto que não sou importante para ninguém", value: "sadness" }
    ]
  },
  {
    id: 6,
    text: "O que você busca em um momento de pausa?",
    options: [
      { text: "Silêncio absoluto e redução de estímulos", value: "acute_stress" },
      { text: "Sentir que a vida ainda tem cor e alegria", value: "hopelessness" },
      { text: "Sentir que alguém se importa comigo", value: "loneliness" },
      { text: "Apenas conseguir fechar os olhos e parar de pensar", value: "burnout" }
    ]
  },
  {
    id: 7,
    text: "Sobre sua percepção de tempo:",
    options: [
      { text: "O tempo voa e eu estou sempre atrasado", value: "acute_stress" },
      { text: "O tempo parou e os dias são todos iguais", value: "depressed" },
      { text: "O tempo é um peso que eu mal consigo carregar", value: "burnout" },
      { text: "Sinto saudade de tempos que não voltam mais", value: "sadness" }
    ]
  },
  {
    id: 8,
    text: "Se você pudesse escolher um refúgio agora, qual seria?",
    options: [
      { text: "Um chalé isolado com uma lareira acesa", value: "loneliness" },
      { text: "Um campo aberto com o sol batendo no rosto", value: "hopelessness" },
      { text: "Um quarto escuro e silencioso com lençóis limpos", value: "burnout" },
      { text: "Uma biblioteca antiga e tranquila", value: "sadness" }
    ]
  },
  {
    id: 9,
    text: "Como está sua motivação para novos projetos?",
    options: [
      { text: "Inexistente, sinto cinismo sobre o futuro", value: "burnout" },
      { text: "Bloqueada por um medo constante de falhar", value: "acute_stress" },
      { text: "Dormitante, sinto que perdi meu propósito", value: "hopelessness" },
      { text: "Gostaria de ter alguém para fazer comigo", value: "loneliness" }
    ]
  },
  {
    id: 10,
    text: "Para você, o que é mais difícil de lidar no momento?",
    options: [
      { text: "A autocobrança e o perfeccionismo", value: "acute_stress" },
      { text: "A falta de esperança de que as coisas melhorem", value: "hopelessness" },
      { text: "A apatia emocional perante a vida", value: "burnout" },
      { text: "A falta de conexão genuína", value: "loneliness" }
    ]
  }
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    burnout: 0,
    hopelessness: 0,
    sadness: 0,
    acute_stress: 0,
    loneliness: 0
  });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    // Handling specific mapping for time question if needed, else general
    const category = value === 'depressed' ? 'sadness' : value;
    setScores(prev => ({ ...prev, [category]: (prev[category] || 0) + 1 }));
    
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
    setScores({ burnout: 0, hopelessness: 0, sadness: 0, acute_stress: 0, loneliness: 0 });
    setShowResult(false);
  };

  if (showResult) {
    return <ResultCard profile={candleProfiles[getWinner()]} onReset={resetQuiz} />;
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-[1px] w-8 bg-slate-300"></div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">
            Protocolo de Análise S-0{currentStep + 1}
          </span>
          <div className="h-[1px] w-8 bg-slate-300"></div>
        </div>
        
        <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden max-w-xs mx-auto">
          <div 
            className="bg-slate-900 h-full transition-all duration-1000 ease-out" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-10">
        <h2 className="text-2xl md:text-3xl font-serif text-center text-slate-800 leading-tight">
          {currentQuestion.text}
        </h2>
        
        <div className="grid gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="group relative w-full text-left p-6 bg-white border border-slate-200 rounded-2xl hover:border-slate-900 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-[16px] text-slate-600 group-hover:text-slate-900 transition-colors pr-8">
                  {option.text}
                </span>
                <div className="h-2 w-2 rounded-full bg-slate-200 group-hover:bg-slate-900 transition-colors"></div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <p className="text-center mt-12 text-[10px] text-slate-400 font-medium uppercase tracking-[0.2em]">
        Privacidade garantida • Processamento anônimo de dados emocionais
      </p>
    </div>
  );
};

export default Quiz;