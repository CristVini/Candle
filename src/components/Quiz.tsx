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
    text: "Como você deseja que seu espaço seja percebido?",
    options: [
      { text: "Um ambiente solar, energético e receptivo", value: "joy" },
      { text: "Um refúgio de mistério e sofisticação", value: "sensuality" },
      { text: "Um templo de foco e clareza estratégica", value: "mental_fatigue" },
      { text: "Um abraço acolhedor e seguro", value: "loneliness" }
    ]
  },
  {
    id: 3,
    text: "Qual estímulo tátil ressoa mais com seu estado atual?",
    options: [
      { text: "Seda pura e veludo", value: "sensuality" },
      { text: "Linho fresco ao sol", value: "joy" },
      { text: "Couro rústico e madeira", value: "mental_fatigue" },
      { text: "Caxemira espessa e envolvente", value: "loneliness" }
    ]
  },
  {
    id: 4,
    text: "Como é sua resposta a ambientes com excesso de informação?",
    options: [
      { text: "Sinto necessidade imediata de isolamento", value: "burnout" },
      { text: "Minha mente acelera e perco o foco", value: "anxiety" },
      { text: "Consigo filtrar, mas exijo esforço cognitivo", value: "mental_fatigue" },
      { text: "Absorvo a energia e me sinto estimulado", value: "joy" }
    ]
  },
  {
    id: 5,
    text: "Em qual período sua energia oscila mais drasticamente?",
    options: [
      { text: "Início da manhã (dificuldade em despertar)", value: "burnout" },
      { text: "Meio da tarde (queda de produtividade)", value: "mental_fatigue" },
      { text: "Crepúsculo (aumento da melancolia/solidão)", value: "loneliness" },
      { text: "Madrugada (insônia ou hiperatividade mental)", value: "anxiety" }
    ]
  },
  {
    id: 6,
    text: "Qual memória olfativa te traz segurança instantânea?",
    options: [
      { text: "Terra molhada e floresta densa", value: "acute_stress" },
      { text: "Roupas limpas e brisa marinha", value: "anxiety" },
      { text: "Especiarias quentes e resinas", value: "sensuality" },
      { text: "Cítricos e flores frescas", value: "joy" }
    ]
  },
  {
    id: 7,
    text: "Como você descreveria sua 'Bateria Social' hoje?",
    options: [
      { text: "Esgotada. Preciso de silêncio regenerativo", value: "burnout" },
      { text: "Seletiva. Apenas conexões profundas", value: "sensuality" },
      { text: "Em alerta. Sinto necessidade de proteção", value: "acute_stress" },
      { text: "Carregada. Pronta para expansão", value: "joy" }
    ]
  },
  {
    id: 8,
    text: "Qual é a sua relação atual com o silêncio?",
    options: [
      { text: "É o único lugar onde me sinto seguro", value: "loneliness" },
      { text: "É necessário para meu trabalho intelectual", value: "mental_fatigue" },
      { text: "Às vezes é ensurdecedor e gera angústia", value: "anxiety" },
      { text: "Um espaço para contemplação e prazer", value: "sensuality" }
    ]
  },
  {
    id: 9,
    text: "O que mais te impede de entrar em estado de 'Flow'?",
    options: [
      { text: "Cansaço físico e mental acumulado", value: "burnout" },
      { text: "Interrupções externas e ruído visual", value: "mental_fatigue" },
      { text: "Pensamentos intrusivos sobre o futuro", value: "anxiety" },
      { text: "Falta de propósito ou estímulo emocional", value: "joy" }
    ]
  },
  {
    id: 10,
    text: "Se sua ansiedade fosse uma textura, qual seria?",
    options: [
      { text: "Lixa áspera e persistente", value: "anxiety" },
      { text: "Nuvem densa e opaca", value: "burnout" },
      { text: "Espinhos metálicos e frios", value: "acute_stress" },
      { text: "Areia movediça e instável", value: "loneliness" }
    ]
  },
  {
    id: 11,
    text: "Qual é o seu 'Ritual de Poder' favorito?",
    options: [
      { text: "Um banho longo com óleos essenciais", value: "sensuality" },
      { text: "Uma caminhada rápida ao ar livre", value: "joy" },
      { text: "Organizar meticulosamente meu espaço", value: "mental_fatigue" },
      { text: "Meditação ou escrita terapêutica", value: "acute_stress" }
    ]
  },
  {
    id: 12,
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
    if (entries.length === 0) return "joy";
    return entries.reduce((a, b) => a[1] > b[1] ? a : b)[0];
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
    <div className="max-w-5xl mx-auto px-6" role="form">
      <div className="mb-20 text-center space-y-6">
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-stone-800"></div>
          <span className="text-[12px] font-bold text-stone-500 uppercase tracking-[0.5em]">
            Passo {currentStep + 1} / {questions.length}
          </span>
          <div className="h-[1px] w-12 bg-stone-800"></div>
        </div>
        
        <div className="w-full bg-stone-900/50 h-1.5 rounded-full overflow-hidden max-w-md mx-auto">
          <div 
            className="bg-stone-100 h-full transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1)" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-16 animate-in fade-in slide-in-from-right-8 duration-500">
        <h2 className="text-4xl md:text-7xl font-serif text-center text-stone-100 leading-[1.1] max-w-4xl mx-auto">
          {currentQuestion.text}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="group relative w-full text-left p-10 bg-stone-900/30 border border-stone-800 rounded-3xl hover:border-stone-400 hover:bg-stone-900/60 transition-all duration-500"
            >
              <div className="flex flex-col gap-4">
                <span className="text-xl md:text-2xl text-stone-400 group-hover:text-stone-100 transition-colors leading-relaxed">
                  {option.text}
                </span>
                <div className="h-[1px] w-8 bg-stone-800 group-hover:w-full group-hover:bg-stone-100 transition-all duration-700"></div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;