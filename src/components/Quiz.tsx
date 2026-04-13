"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { candleProfiles } from '../data/candleProfiles';
import ResultCard from './ResultCard';

const questions = [
  {
    id: 1,
    text: "Como você avalia seu padrão de pensamento nas últimas 24 horas?",
    options: [
      { text: "Acelerado, com dificuldade de focar em uma única coisa", value: "stressed" },
      { text: "Lento, como se houvesse uma 'névoa mental'", value: "depressed" },
      { text: "Fragmentado, sinto que esqueço as coisas rapidamente", value: "exhausted" },
      { text: "Introspectivo, focado em sentimentos de vazio", value: "lonely" }
    ]
  },
  {
    id: 2,
    text: "Qual é a sua relação com o descanso no momento?",
    options: [
      { text: "Durmo, mas acordo sentindo que não descansei", value: "exhausted" },
      { text: "Tenho dificuldade para pegar no sono por causa da mente", value: "stressed" },
      { text: "Sinto vontade de dormir o dia todo para evitar a realidade", value: "depressed" },
      { text: "O silêncio da noite me traz uma sensação de isolamento", value: "lonely" }
    ]
  },
  {
    id: 3,
    text: "Como você reage a pequenas interrupções ou imprevistos?",
    options: [
      { text: "Com irritabilidade ou reações desproporcionais", value: "stressed" },
      { text: "Com apatia, sinto que não tenho forças para reagir", value: "depressed" },
      { text: "Com choro fácil ou uma sensação de sobrecarga extrema", value: "exhausted" },
      { text: "Com o desejo imediato de me isolar ainda mais", value: "lonely" }
    ]
  },
  {
    id: 4,
    text: "Sobre sua produtividade e engajamento com tarefas:",
    options: [
      { text: "Trabalho muito, mas com muita ansiedade e cobrança", value: "stressed" },
      { text: "Perdi o interesse em atividades que antes me davam prazer", value: "depressed" },
      { text: "Sinto um esgotamento físico que me impede de produzir", value: "exhausted" },
      { text: "Trabalho para preencher o tempo e não me sentir só", value: "lonely" }
    ]
  },
  {
    id: 5,
    text: "O que seu corpo parece estar 'gritando' agora?",
    options: [
      { text: "Tensão na mandíbula, pescoço e batimentos acelerados", value: "stressed" },
      { text: "Peso nos membros e falta de apetite ou excesso dele", value: "depressed" },
      { text: "Dores de cabeça constantes e cansaço nos olhos", value: "exhausted" },
      { text: "Uma necessidade física de contato humano ou conforto", value: "lonely" }
    ]
  },
  {
    id: 6,
    text: "Como você se sente ao imaginar o futuro próximo?",
    options: [
      { text: "Apreensivo com a quantidade de coisas a fazer", value: "stressed" },
      { text: "Pessimista, sinto que nada vai mudar realmente", value: "depressed" },
      { text: "Incapaz de pensar no futuro, só quero sobreviver ao hoje", value: "exhausted" },
      { text: "Com medo de enfrentar os desafios sem apoio", value: "lonely" }
    ]
  },
  {
    id: 7,
    text: "Qual dessas frases mais ressoa com seu estado atual?",
    options: [
      { text: "'Eu preciso de uma pausa do mundo'", value: "exhausted" },
      { text: "'Eu só queria conseguir relaxar um pouco'", value: "stressed" },
      { text: "'Eu queria voltar a sentir alegria nas coisas'", value: "depressed" },
      { text: "'Eu queria me sentir pertencente e conectado'", value: "lonely" }
    ]
  },
  {
    id: 8,
    text: "Sobre o seu ambiente imediato:",
    options: [
      { text: "Sinto que o ambiente está bagunçado e isso me agita", value: "stressed" },
      { text: "Não tenho energia nem para organizar meu espaço", value: "depressed" },
      { text: "Procuro um ambiente que me traga segurança e calor", value: "lonely" },
      { text: "Ambientes com muita luz ou barulho me incomodam", value: "exhausted" }
    ]
  }
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({
    stressed: 0,
    depressed: 0,
    exhausted: 0,
    lonely: 0
  });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    setScores(prev => ({ ...prev, [value]: prev[value] + 1 }));
    
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
    setScores({ stressed: 0, depressed: 0, exhausted: 0, lonely: 0 });
    setShowResult(false);
  };

  if (showResult) {
    return <ResultCard profile={candleProfiles[getWinner()]} onReset={resetQuiz} />;
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-8 text-center">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Avaliação Psico-Aromática • {currentStep + 1} de {questions.length}
        </span>
        <div className="w-full bg-slate-100 h-1.5 mt-3 rounded-full overflow-hidden">
          <div 
            className="bg-slate-400 h-full transition-all duration-700 ease-in-out" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <Card className="border-none shadow-xl bg-white/90 backdrop-blur-md ring-1 ring-slate-200">
        <CardContent className="pt-8 pb-8 px-6 md:px-10">
          <h2 className="text-xl md:text-2xl font-serif mb-10 text-center text-slate-800 leading-snug">
            {currentQuestion.text}
          </h2>
          <div className="grid gap-3">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto py-5 px-6 text-left justify-start text-[15px] border-slate-200 hover:bg-slate-50 hover:border-slate-800 hover:text-slate-900 transition-all duration-200 group"
                onClick={() => handleAnswer(option.value)}
              >
                <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">→</span>
                {option.text}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <p className="text-center mt-6 text-[10px] text-slate-400 uppercase tracking-tighter">
        Análise baseada em indicadores de bem-estar emocional
      </p>
    </div>
  );
};

export default Quiz;