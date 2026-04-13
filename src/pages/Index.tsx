"use client";

import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Quiz from '../components/Quiz';
import ReferencesModal from '../components/ReferencesModal';
import { ShieldCheck, Heart, Sparkles, BookOpen } from 'lucide-react';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Luz & Essência | Mapeamento de Arquétipos Olfativos";
  }, []);

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 selection:bg-stone-800" role="main">
      <section aria-label="Introdução e Mapeamento">
        <Hero />
      </section>

      <section id="quiz-section" className="py-20 md:py-32" aria-labelledby="quiz-heading">
        <div className="container mx-auto">
          <Quiz />
        </div>
      </section>

      <section className="py-20 bg-stone-900/30 border-y border-stone-800/50" aria-labelledby="trust-heading">
        <div className="container mx-auto px-4">
          <h2 id="trust-heading" className="text-[10px] font-bold uppercase tracking-[0.4em] text-center text-stone-500 mb-16">
            A Ciência por trás da Essência
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <article className="text-center space-y-4">
              <div className="flex justify-center text-stone-400"><ShieldCheck className="w-8 h-8" /></div>
              <h3 className="font-serif text-xl text-stone-200">Aromaterapia Clínica</h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                Nossas fórmulas utilizam óleos essenciais puros com bioativos validados para interagir com o sistema límbico.
              </p>
            </article>

            <article className="text-center space-y-4">
              <div className="flex justify-center text-stone-400"><Sparkles className="w-8 h-8" /></div>
              <h3 className="font-serif text-xl text-stone-200">Design de Experiência</h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                Mais que velas decorativas, criamos ferramentas de modulação ambiental para alta performance e cura emocional.
              </p>
            </article>

            <article className="text-center space-y-4">
              <div className="flex justify-center text-stone-400"><Heart className="w-8 h-8" /></div>
              <h3 className="font-serif text-xl text-stone-200">Artesanal e Sustentável</h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                Produção consciente com ceras vegetais e pavios de algodão, garantindo uma queima limpa e segura.
              </p>
            </article>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-stone-900 bg-stone-950">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="flex justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone-500 hover:text-stone-300 transition-colors"
            >
              <BookOpen size={12} />
              Referências Científicas do Protocolo
            </button>
          </div>
          
          <p className="text-[10px] uppercase tracking-widest text-stone-700">
            © {new Date().getFullYear()} Luz & Essência • Engenharia Sensorial • Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <ReferencesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};

export default Index;