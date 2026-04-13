"use client";

import React from 'react';
import { Sparkles, Brain, Heart, Wind, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFB]">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl w-full text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Aromaterapia Baseada em Ciência</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif text-slate-900 mb-8 leading-tight">
            Sua mente em <br />
            <span className="text-indigo-600 italic">equilíbrio.</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Descubra a vela perfeita para o seu estado emocional através de um mapeamento de arquétipos e neurociência olfativa.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/quiz">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-7 rounded-full text-lg shadow-xl shadow-indigo-200 group transition-all duration-300 hover:scale-105">
                Começar Jornada
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/science">
              <Button size="lg" variant="outline" className="px-10 py-7 rounded-full text-lg border-2 hover:bg-slate-50 gap-2 transition-all duration-300">
                <BookOpen className="w-5 h-5" />
                Ver Biblioteca de Aromas
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-7 h-7 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Mapeamento</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Nosso quiz identifica padrões de estresse, ansiedade e fadiga mental.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
                  <Wind className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Sinergia</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Óleos essenciais combinados para atingir áreas específicas do sistema límbico.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-pink-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Resultado</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Uma recomendação personalizada que vai além do cheiro, focando no seu bem-estar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Science Preview */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-slate-900 mb-8">Base Científica</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Nossas velas não são apenas decorativas. Utilizamos a neurociência olfativa para ajudar você a gerenciar suas emoções através de ingredientes selecionados.
          </p>
          <Link to="/science">
            <Button variant="link" className="text-indigo-600 text-lg font-semibold hover:text-indigo-700">
              Explore nossa biblioteca de ingredientes <ArrowRight className="ml-2 w-5 h-5 inline" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-100 text-center">
        <p className="text-slate-400 font-medium">© 2024 CandleMind. Ciência e Alma.</p>
      </footer>
    </div>
  );
};

export default Index;