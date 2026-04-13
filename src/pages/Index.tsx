"use client";

import React from 'react';
import Hero from '../components/Hero';
import Quiz from '../components/Quiz';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-900 selection:bg-stone-200" role="main">
      {/* SEO Optimized Header hidden for screen readers but good for bots could be added via Helmet, 
          but here we focus on semantic structure */}
      
      <section aria-label="Introdução e Mapeamento">
        <Hero />
      </section>

      <section id="quiz-section" className="py-20 md:py-32" aria-labelledby="quiz-heading">
        <div className="container mx-auto">
          <h2 id="quiz-heading" className="sr-only">Mapeamento de Perfil Sensorial</h2>
          <Quiz />
        </div>
      </section>

      {/* Trust Section - SEO and Copywriting */}
      <section className="py-20 bg-stone-50 border-y border-stone-200" aria-labelledby="trust-heading">
        <div className="container mx-auto px-4">
          <h2 id="trust-heading" className="text-[10px] font-bold uppercase tracking-[0.4em] text-center text-stone-400 mb-16">
            A Ciência por trás da Essência
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <article className="text-center space-y-4">
              <div className="flex justify-center text-stone-800"><ShieldCheck className="w-8 h-8" /></div>
              <h3 className="font-serif text-xl">Aromaterapia Clínica</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Nossas fórmulas utilizam óleos essenciais puros com bioativos validados para interagir com o sistema límbico.
              </p>
            </article>

            <article className="text-center space-y-4">
              <div className="flex justify-center text-stone-800"><Sparkles className="w-8 h-8" /></div>
              <h3 className="font-serif text-xl">Design de Experiência</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Mais que velas decorativas, criamos ferramentas de modulação ambiental para alta performance e cura emocional.
              </p>
            </article>

            <article className="text-center space-y-4">
              <div className="flex justify-center text-stone-800"><Heart className="w-8 h-8" /></div>
              <h3 className="font-serif text-xl">Artesanal e Sustentável</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Produção consciente com ceras vegetais e pavios de algodão, garantindo uma queima limpa e segura.
              </p>
            </article>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-stone-100 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[10px] uppercase tracking-widest text-stone-400">
            © {new Date().getFullYear()} Luz & Essência • Engenharia Sensorial • Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;