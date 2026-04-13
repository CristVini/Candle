"use client";

import React from 'react';
import Quiz from '../components/Quiz';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const QuizPage = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="p-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="text-stone-400 hover:text-white gap-2">
              <ArrowLeft size={20} />
              Voltar para Início
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="py-10">
        <Quiz />
      </main>
    </div>
  );
};

export default QuizPage;