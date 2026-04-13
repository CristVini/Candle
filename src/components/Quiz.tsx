"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import { candleProfiles } from '../data/candleProfiles';
import ResultCard from './ResultCard';

const questions = [
  {
    id: 1,
    text: "Como você descreveria o 'clima' da sua mente agora?",
    options: [
      { text: "Uma tempestade de pensamentos que não param", value: "anxiety" },
      { text: "Uma neblina densa, sinto-me esgotado", value: "burnout" },
      { text: "Um deserto seco, sem ideias ou inspiração", value: "creative_block" },
      { text: "Um vulcão prestes a entrar em erupção", value: "irritability" }
    ]
  },
  {
    id: 2,
    text: "O que mais te incomoda no seu dia a dia ultimamente?",
    options: [
      { text: "A falta de paciência com as pessoas", value: "irritability" },
      { text: "A sensação de estar sempre atrasado ou ansioso", value: "anxiety" },
      { text: "Não conseguir focar em nada por muito tempo", value: "mental_fatigue" },
      { text: "Sentir que nada mais me traz prazer", value: "hopelessness" }
    ]
  },
  {
    id: 3,
    text: "Como você se sente ao olhar para o seu futuro?",
    options: [
      { text: "Com medo do que pode dar errado", value: "anxiety" },
      { text: "Sem esperança de que algo mude", value: "hopelessness" },
      { text: "Cansado só de pensar no trabalho", value: "burnout" },
      { text: "Sinto falta de alguém ou de um tempo que passou", value: "grief" }
    ]
  },
  {
    id: 4,
    text: "Qual é o seu maior desejo sensorial agora?",
    options: [
      { text: "Um silêncio absoluto para relaxar", value: "acute_stress" },
      { text: "Um abraço quente e acolhedor", value: "loneliness" },
      { text: "Um choque de energia para acordar", value: "mental_fatigue" },
      { text: "Sentir que estou flutuando sem peso", value: "creative_block" }
    ]
  },
  {
    id: 5,
    text: "Como está sua produtividade?",
    options: [
      { text: "Trabalho muito, mas sinto que não saio do lugar", value: "burnout" },
      { text: "Minha mente 'trava' quando preciso criar algo", value: "creative_block" },
      { text: "Estou distraído por notificações e ruídos", value: "mental_fatigue" },
      { text: "Fico irritado quando sou interrompido", value: "irritability" }
    ]
  },
  {
    id: 6,
    text: "O que você sente no corpo quando está sob pressão?",
    options: [
      { text: "Aperto no peito e respiração curta", value: "anxiety" },
      { text: "Tensão extrema nos ombros e mandíbula", value: "acute_stress" },
      { text: "Um vazio ou um peso no estômago", value: "sadness" },
      { text: "Uma exaustão que nem 10 horas de sono curam", value: "burnout" }
    ]
  },
  {
    id: 7,
    text: "Como você lida com a solidão hoje?",
    options: [
      { text: "Sinto um vazio, como se faltasse conexão", value: "loneliness" },
      { text: "Prefiro ficar sozinho, as pessoas me irritam", value: "irritability" },
      { text: "A solidão me traz lembranças dolorosas", value: "grief" },
      { text: "Uso o tempo sozinho para tentar ser produtivo", value: "mental_fatigue" }
    ]
  },
  {
    id: 8,
    text: "Se sua vida fosse uma cor agora, qual seria?",
    options: [
      { text: "Cinza estático", value: "sadness" },
      { text: "Vermelho pulsante", value: "acute_stress" },
      { text: "Amarelo desbotado", value: "hopelessness" },
      { text: "Roxo elétrico (ansioso)", value: "anxiety" }
    ]
  },
  {
    id: 9,
    text: "O que te faria sorrir agora?",
    options: [
      { text: "Uma notícia de que tudo vai ficar bem", value: "hopelessness" },
      { text: "Ter uma ideia brilhante para um projeto", value: "creative_block" },
      { text: "Rever alguém que perdi ou sinto falta", value: "grief" },
      { text: "Um dia inteiro sem nenhuma obrigação", value: "burnout" }
    ]
  },
  {
    id: 10,
    text: "Qual frase mais ressoa com você?",
    options: [
      { text: "'Eu não aguento mais'", value: "burnout" },
      { text: "'E se algo ruim acontecer?'", value: "anxiety" },
      { text: "'Eu me sinto invisível'", value: "loneliness" },
      { text: "'Preciso de um tempo para mim'", value: "acute_stress" }
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
          <div className="h-[1px] w-8 bg-orange-200"></div>
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-[0.3em]">
            Mapeamento Sensorial • {currentStep + 1} de {questions.length}
          </span>
          <div className="h-[1px] w-8 bg-orange-200"></div>
        </div>
        
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden max-w-xs mx-auto">
          <div 
            className="bg-orange-400 h-full transition-all duration-700 ease-out" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl md:text-4xl font-serif text-center text-slate-800 leading-tight">
          {currentQuestion.text}
        </h2>
        
        <div className="grid gap-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="group relative w-full text-left p-5 bg-white border-2 border-slate-100 rounded-2xl hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg text-slate-600 group-hover:text-slate-900 transition-colors">
                  {option.text}
                </span>
                <div className="h-2 w-2 rounded-full bg-slate-200 group-hover:bg-orange-400 transition-colors"></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;