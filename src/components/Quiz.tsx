"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { candleProfiles } from '../data/candleProfiles';
import ResultCard from './ResultCard';

const questions = [
  {
    id: 1,
    text: "Como você descreveria seu nível de energia hoje?",
    options: [
      { text: "Agitado, não consigo parar de pensar", value: "stressed" },
      { text: "Muito baixo, sinto dificuldade de começar o dia", value: "depressed" },
      { text: "Exausto, sinto que meu cérebro está 'frito'", value: "exhausted" },
      { text: "Sinto falta de um abraço ou conforto", value: "lonely" }
    ]
  },
  {
    id: 2,
    text: "Qual dessas sensações físicas é mais presente agora?",
    options: [
      { text: "Tensão nos ombros e mandíbula", value: "stressed" },
      { text: "Peso no corpo e movimentos lentos", value: "depressed" },
      { text: "Olhos cansados e dor de cabeça leve", value: "exhausted" },
      { text: "Um vazio ou aperto no peito", value: "lonely" }
    ]
  },
  {
    id: 3,
    text: "O que você mais deseja neste momento?",
    options: [
      { text: "Silenciar minha mente", value: "stressed" },
      { text: "Sentir alegria e disposição", value: "depressed" },
      { text: "Apenas desligar de todas as obrigações", value: "exhausted" },
      { text: "Sentir-me acolhido e seguro", value: "lonely" }
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
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Pergunta {currentStep + 1} de {questions.length}
        </span>
        <div className="w-full bg-gray-200 h-1 mt-2 rounded-full overflow-hidden">
          <div 
            className="bg-primary h-full transition-all duration-500" 
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-serif mb-8 text-center text-slate-800">
            {currentQuestion.text}
          </h2>
          <div className="grid gap-4">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto py-4 px-6 text-left justify-start text-base hover:bg-slate-50 hover:border-slate-400 transition-all"
                onClick={() => handleAnswer(option.value)}
              >
                {option.text}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;