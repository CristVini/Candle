"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const questions = [
  {
    id: 'emotion',
    question: "Como você se sente a maior parte do tempo hoje?",
    options: [
      { id: 'anxiety', label: 'Ansioso ou Agitado', icon: '🌪️' },
      { id: 'mental_fatigue', label: 'Cansado Mentalmente', icon: '🧠' },
      { id: 'loneliness', label: 'Carente ou Solitário', icon: '☁️' },
      { id: 'joy', label: 'Energizado e Feliz', icon: '✨' }
    ]
  },
  {
    id: 'goal',
    question: "O que você mais busca no momento?",
    options: [
      { id: 'relax', label: 'Relaxamento Profundo', icon: '🧘' },
      { id: 'focus', label: 'Foco e Produtividade', icon: '🎯' },
      { id: 'comfort', label: 'Aconchego e Abraço', icon: '🏡' },
      { id: 'energy', label: 'Vibração e Alegria', icon: '🔥' }
    ]
  }
];

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const handleSelect = (optionId: string) => {
    const newAnswers = { ...answers, [questions[currentStep].id]: optionId };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Simulação de processamento e navegação para o resultado
      navigate('/result');
    }
  };

  const question = questions[currentStep];

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-100">
        <div className="flex justify-between items-center mb-12">
          <div className="flex gap-2">
            {questions.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 w-8 rounded-full transition-all duration-500 ${idx <= currentStep ? 'bg-amber-600' : 'bg-stone-200'}`}
              />
            ))}
          </div>
          <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">
            Passo {currentStep + 1} de {questions.length}
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-10 leading-tight">
          {question.question}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className="group flex items-center gap-4 p-6 rounded-2xl border-2 border-stone-100 hover:border-amber-500 hover:bg-amber-50 transition-all duration-300 text-left"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{option.icon}</span>
              <span className="font-bold text-stone-700 group-hover:text-amber-900">{option.label}</span>
            </button>
          ))}
        </div>

        {currentStep > 0 && (
          <button 
            onClick={() => setCurrentStep(currentStep - 1)}
            className="mt-8 flex items-center gap-2 text-stone-400 hover:text-stone-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Voltar
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;