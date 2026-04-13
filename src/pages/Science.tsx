"use client";

import React, { useState } from 'react';
import { 
  Info, 
  Leaf, 
  Wind, 
  Sparkles, 
  ArrowLeft, 
  ChevronRight, 
  Apple, 
  Coffee, 
  Flower2, 
  Flame 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ingredientsData } from '../data/ingredients';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const categories = [
  { id: 'herbals', name: 'Herbais / Terapêuticos', icon: Leaf },
  { id: 'fruity', name: 'Frutados', icon: Apple },
  { id: 'gourmand', name: 'Gourmand', icon: Coffee },
  { id: 'floral', name: 'Florais', icon: Flower2 },
  { id: 'spices', name: 'Especiarias', icon: Flame },
  { id: 'special', name: 'Combinações & Perfumes', icon: Sparkles }
];

const categoryMapping: Record<string, string[]> = {
  herbals: ["Alecrim", "Alecrim Blanc", "Alfazema", "Arruda", "Arnica", "Andiroba", "Babosa", "Aloe Vera", "Capim Limão", "Camomila", "Calêndula", "Cedro", "Copaíba", "Erva Cidreira", "Erva Doce", "Eucalipto", "Eucalipto Globulus", "Eucalipto Exp", "Hortelã", "Hortelã-Pimenta", "Manjerona", "Mirra", "Olíbano", "Patchouli", "Sândalo", "Sete Ervas", "Tomilho", "Verbena", "Bamboo", "Pinho"],
  fruity: ["Abacaxi", "Abacaxi em Calda", "Açaí", "Ameixa", "Amora Negra", "Banana", "Blueberry", "Caju", "Cajá", "Cereja", "Jabuticaba", "Pitanga", "Pitanga Preta", "Pitaya", "Romã", "Siriguela", "Melão", "Figo", "Goiaba", "Kiwi", "Lichia", "Maçã Verde", "Manga", "Maracujá", "Melancia", "Morango", "Pêssego", "Pêra", "Tangerina", "Uva"],
  gourmand: ["Chocolate Branco", "Choconilha", "Chocotone", "Amêndoas", "Avelã c/ Café", "Buriti", "Papaya", "Yogurte de Morango", "Baunilha", "Black Vanilla", "Chocolate", "Caramelo", "Doce de Leite", "Panetone", "Chantilly", "Café", "Café Torrado", "Mel", "Coco", "Coco Queimado"],
  floral: ["Flor de Algodão", "Flor de Cerejeira", "Flor de Cupuaçu", "Flor de Lótus", "Flor de Maracujá", "Flor de Melissa", "Floral Rose", "Frésia", "Gerânio", "Girassol", "Neroli", "Lavanda", "Lavanda Francesa", "Jasmim", "Rosa", "Rosa Damascena", "Orquídea", "Lírio", "Flor de Laranjeira", "Gardênia", "Violeta", "Dama da Noite"],
  spices: ["Canela", "Cravo", "Gengibre", "Noz Moscada", "Pimenta Preta", "Pimenta Rosa", "Cravo e Canela"],
  special: ["Cereja c/ Avelã", "Morango c/ Champanhe", "Pêra c/ Chantilly", "Maçã c/ Canela", "Chocolate c/ Pimenta", "Eucalipto c/ Bergamota", "Café em Grãos", "Love Spell", "Donna Spark", "Douvie", "Eco Brasilis", "Iguatemi", "Marine", "Noite Feliz", "Palmoluxo", "Âmbar Lelis", "Breu Branco", "Cipreste", "Citronela", "Figo em Calda", "Bergamota", "Vet Vert"]
};

const Science = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('herbals');

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold text-slate-800">A Ciência por Trás</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <section className="mb-12">
          <div className="bg-indigo-600 rounded-3xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6" />
              Como a Aromaterapia Funciona?
            </h2>
            <p className="text-indigo-100 leading-relaxed mb-6">
              Quando você inala um aroma, as moléculas de odor viajam pelo nariz até o sistema límbico, 
              a parte do cérebro que controla as emoções e a memória.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <Wind className="w-5 h-5 mb-2" />
                <h3 className="font-semibold text-sm">Inalação</h3>
                <p className="text-xs text-indigo-100">Moléculas entram no bulbo olfatório.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <Info className="w-5 h-5 mb-2" />
                <h3 className="font-semibold text-sm">Processamento</h3>
                <p className="text-xs text-indigo-100">O sistema límbico recebe os sinais.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <Sparkles className="w-5 h-5 mb-2" />
                <h3 className="font-semibold text-sm">Resposta</h3>
                <p className="text-xs text-indigo-100">Liberação de neurotransmissores.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Nossa Biblioteca de Aromas</h2>
          
          <div className="flex overflow-x-auto gap-2 mb-8 pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id 
                  ? 'bg-slate-800 text-white shadow-md scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{cat.name}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {categoryMapping[activeCategory]?.map((name) => {
              const data = ingredientsData[name];
              if (!data) return null;
              
              return (
                <button
                  key={name}
                  onClick={() => setSelectedIngredient(name)}
                  className="bg-white p-4 rounded-2xl border border-slate-100 text-left hover:border-indigo-200 transition-all duration-200 hover:-translate-y-1 shadow-sm group animate-in fade-in zoom-in duration-300"
                >
                  <Badge variant="outline" className="mb-2 text-[10px] uppercase tracking-wider text-indigo-600 border-indigo-100">
                    {data.benefit}
                  </Badge>
                  <h3 className="font-semibold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">
                    {name}
                  </h3>
                  <div className="mt-2 flex items-center text-slate-400 text-[10px] font-medium uppercase">
                    Ver detalhes <ChevronRight className="w-3 h-3 ml-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </main>

      {/* Modal Manual com Tailwind */}
      {selectedIngredient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setSelectedIngredient(null)}
          />
          <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative z-10 animate-in zoom-in-95 duration-200">
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100 border-none px-3 py-1">
                  Benefício: {ingredientsData[selectedIngredient]?.benefit}
                </Badge>
                <button 
                  onClick={() => setSelectedIngredient(null)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  Fechar
                </button>
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">{selectedIngredient}</h2>
              <div className="w-12 h-1 bg-indigo-500 rounded-full mb-6" />
              <p className="text-slate-600 leading-relaxed text-lg">
                {ingredientsData[selectedIngredient]?.description}
              </p>
              
              <Button 
                className="w-full mt-8 bg-slate-800 hover:bg-slate-900 text-white h-12 rounded-xl"
                onClick={() => setSelectedIngredient(null)}
              >
                Entendido
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Science;