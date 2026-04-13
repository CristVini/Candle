"use client";

import React from 'react';
import { Brain, Zap, Heart, Shield } from 'lucide-react';

const Science = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6 tracking-tight">A Ciência do Aroma</h1>
          <p className="text-xl text-stone-500 italic max-w-2xl mx-auto leading-relaxed">
            Como moléculas voláteis se transformam em memórias, emoções e estados de espírito através do sistema límbico.
          </p>
        </header>

        <div className="grid gap-12">
          <section className="bg-white p-8 md:p-12 rounded-[2rem] border border-stone-100 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-100 rounded-2xl text-amber-600">
                <Brain className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-stone-800">O Atalho para o Cérebro</h2>
            </div>
            <p className="text-stone-600 leading-relaxed text-lg">
              Diferente de outros sentidos, o olfato é o único que não passa pelo tálamo antes de chegar ao córtex cerebral. Ele possui uma conexão direta com o **sistema límbico**, o centro emocional do nosso cérebro. É por isso que um aroma pode despertar uma memória instantaneamente.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-900 text-stone-100 p-8 rounded-[2rem]">
              <Zap className="text-amber-500 w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-4">Estimulação Imediata</h3>
              <p className="text-stone-400 leading-relaxed">
                Essências como Hortelã-Pimenta e Alecrim enviam sinais bioelétricos que aumentam o fluxo sanguíneo cerebral, melhorando o foco em até 35% segundos após a inalação.
              </p>
            </div>
            <div className="bg-amber-600 text-white p-8 rounded-[2rem]">
              <Heart className="text-amber-200 w-10 h-10 mb-6" />
              <h3 className="text-xl font-bold mb-4">Redução de Cortisol</h3>
              <p className="text-stone-100 leading-relaxed">
                A inalação de moléculas de Linalol (presentes na Lavanda) reduz os níveis de cortisol salivar, induzindo um estado de relaxamento parassimpático comprovado.
              </p>
            </div>
          </div>

          <section className="text-center py-12">
            <Shield className="w-12 h-12 text-stone-300 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-stone-800 mb-4">Pureza é Essencial</h3>
            <p className="text-stone-500 max-w-xl mx-auto">
              Nossas fragrâncias são livres de ftalatos e parabenos, garantindo que a interação química com seu organismo seja limpa e terapêutica.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Science;