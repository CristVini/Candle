"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Beaker, BookOpen } from 'lucide-react';

const questions = [
  {
    id: 'emotion',
    title: 'Como você está se sentindo hoje?',
    subtitle: 'Identifique seu estado emocional predominante.',
    options: [
      { id: 'anxiety', label: 'Ansioso ou agitado', icon: '🌪️' },
      { id: 'burnout', label: 'Exausto e sem energia', icon: '🔋' },
      { id: 'mental_fatigue', label: 'Com a mente nublada', icon: '☁️' },
      { id: 'loneliness', label: 'Precisando de conforto', icon: '🧸' },
      { id: 'joy', label: 'Radiante e querendo celebrar', icon: '✨' },
      { id: 'sensuality', label: 'Querendo conexão e romance', icon: '🌹' },
      { id: 'acute_stress', label: 'Sob muita pressão', icon: '🛡️' }
    ]
  },
  {
    id: 'environment',
    title: 'Onde essa vela será acesa?',
    subtitle: 'O ambiente influencia na difusão do aroma.',
    options: [
      { id: 'bedroom', label: 'Quarto ou refúgio pessoal', icon: '🛏️' },
      { id: 'office', label: 'Escritório ou local de estudo', icon: '💻' },
      { id: 'living', label: 'Sala de estar ou social', icon: '🛋️' },
      { id: 'bath', label: 'Banheiro ou spa caseiro', icon: '🛁' }
    ]
  },
  {
    id: 'preference',
    title: 'Qual família olfativa mais te agrada?',
    subtitle: 'Suas preferências sensoriais são únicas.',
    options: [
      { id: 'floral', label: 'Florais delicados', icon: '🌸' },
      { id: 'woody', label: 'Amadeirados e terrosos', icon: '🌲' },
      { id: 'citrus', label: 'Cítricos e refrescantes', icon: '🍋' },
      { id: 'gourmand', label: 'Doces e aconchegantes', icon: '🍪' }
    ]
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleSelect = (optionId: string) => {
    const newAnswers = { ...answers, [questions[currentStep].id]: optionId };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      setTimeout(() => navigate('/result', { state: { answers: newAnswers } }), 300);
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col">
      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-stone-100">
        <motion.div 
          className="h-full bg-stone-800"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full px-6 py-12 flex flex-col">
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={() => currentStep > 0 ? setCurrentStep(prev => prev - 1) : navigate('/')}
            className="text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-2 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Voltar
          </button>
          <div className="flex gap-3">
            <button 
              onClick={() => navigate('/library')}
              className="text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-2 text-sm"
            >
              <BookOpen size={16} />
              Biblioteca
            </button>
            <button 
              onClick={() => navigate('/science')}
              className="text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-2 text-sm"
            >
              <Beaker size={16} />
              Ciência por trás
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col"
          >
            <span className="text-stone-400 font-medium mb-2 tracking-widest uppercase text-xs">
              Passo {currentStep + 1} de {questions.length}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mb-2 leading-tight">
              {questions[currentStep].title}
            </h2>
            <p className="text-stone-500 mb-8 font-light">
              {questions[currentStep].subtitle}
            </p>

            <div className="grid gap-4">
              {questions[currentStep].options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSelect(option.id)}
                  className={`
                    flex items-center p-5 rounded-2xl border-2 transition-all text-left group
                    ${answers[questions[currentStep].id] === option.id 
                      ? 'border-stone-800 bg-stone-800 text-white' 
                      : 'border-stone-100 bg-white hover:border-stone-300'}
                  `}
                >
                  <span className="text-2xl mr-4 group-hover:scale-110 transition-transform">{option.icon}</span>
                  <span className="flex-1 font-medium">{option.label}</span>
                  <ArrowRight 
                    size={20} 
                    className={`transition-all ${answers[questions[currentStep].id] === option.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} 
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;