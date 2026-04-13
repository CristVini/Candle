"use client";

import React, { useState } from 'react';
import { ingredientsData } from '../data/ingredients';
import { ChevronRight, Leaf, Cherry, Cookie, Flower2, Flame, Sparkles, BookOpen } from 'lucide-react';

const Science = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Herbais");

  const categories = {
    "Herbais": {
      icon: <Leaf className="w-5 h-5" />,
      items: ["Alecrim", "Alecrim Blanc", "Alfazema", "Arruda", "Arnica", "Andiroba", "Babosa", "Aloe Vera", "Capim Limão", "Camomila", "Calêndula", "Cedro", "Copaíba", "Erva Cidreira", "Erva Doce", "Eucalipto", "Hortelã-Pimenta", "Manjerona", "Mirra", "Olíbano", "Patchouli", "Sândalo", "Sete Ervas", "Tomilho", "Verbena", "Bamboo", "Pinho"]
    },
    "Frutados": {
      icon: <Cherry className="w-5 h-5" />,
      items: ["Abacaxi", "Abacaxi em Calda", "Açaí", "Ameixa", "Amora Negra", "Banana", "Blueberry", "Caju", "Cajá", "Cereja", "Jabuticaba", "Pitanga", "Pitanga Preta", "Pitaya", "Romã", "Siriguela", "Melão"]
    },
    "Gourmand": {
      icon: <Cookie className="w-5 h-5" />,
      items: ["Chocolate Branco", "Choconilha", "Chocotone", "Amêndoas", "Avelã c/ Café", "Buriti", "Papaya", "Yogurte de Morango", "Baunilha", "Black Vanilla", "Caramelo", "Doce de Leite", "Café"]
    },
    "Florais": {
      icon: <Flower2 className="w-5 h-5" />,
      items: ["Flor de Algodão", "Flor de Cerejeira", "Flor de Cupuaçu", "Flor de Lótus", "Flor de Maracujá", "Flor de Melissa", "Floral Rose", "Frésia", "Gerânio", "Girassol", "Neroli", "Lavanda", "Jasmim", "Rosa", "Orquídea"]
    },
    "Especiarias": {
      icon: <Flame className="w-5 h-5" />,
      items: ["Canela", "Cravo", "Gengibre", "Noz Moscada", "Pimenta Preta", "Pimenta Rosa", "Cravo e Canela"]
    },
    "Especiais": {
      icon: <Sparkles className="w-5 h-5" />,
      items: ["Love Spell", "Donna Spark", "Douvie", "Eco Brasilis", "Iguatemi", "Marine", "Noite Feliz", "Palmoluxo", "Âmbar Lelis", "Cereja c/ Avelã", "Morango c/ Champanhe"]
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20 space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-900 border border-stone-800 rounded-full text-[10px] text-stone-500 font-bold uppercase tracking-[0.3em]">
          Bioquímica Sensorial
        </div>
        <h2 className="text-4xl md:text-7xl font-serif text-stone-100">Biblioteca de Essências</h2>
        <p className="text-stone-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
          Explore nossa curadoria olfativa organizada por grupos terapêuticos e descubra o poder de cada molécula.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Navegação de Categorias */}
        <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-1 gap-2">
          {Object.entries(categories).map(([name, data]) => (
            <button
              key={name}
              onClick={() => {
                setActiveCategory(name);
                setSelectedIngredient(null);
              }}
              className={`flex items-center gap-3 px-5 py-4 rounded-2xl transition-all border ${
                activeCategory === name 
                ? 'bg-stone-100 text-stone-950 border-stone-100 shadow-[0_0_20px_rgba(255,255,255,0.1)]' 
                : 'bg-stone-900/40 text-stone-400 border-stone-800 hover:border-stone-600'
              }`}
            >
              {data.icon}
              <span className="text-sm font-bold uppercase tracking-wider">{name}</span>
            </button>
          ))}
        </div>

        {/* Catálogo Central */}
        <div className="lg:col-span-9 bg-stone-900/40 border border-stone-800 rounded-[40px] overflow-hidden backdrop-blur-sm min-h-[600px] flex flex-col md:flex-row">
          {/* Lista de Itens */}
          <div className="w-full md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-stone-800/50 overflow-y-auto max-h-[500px] md:max-h-[600px] custom-scrollbar">
            <div className="grid grid-cols-1 gap-1">
              {categories[activeCategory as keyof typeof categories].items.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedIngredient(item)}
                  className={`text-left px-5 py-4 rounded-xl text-sm transition-all flex items-center justify-between group ${
                    selectedIngredient === item
                    ? 'bg-stone-100/10 text-stone-100 font-medium'
                    : 'text-stone-500 hover:text-stone-300 hover:bg-stone-800/30'
                  }`}
                >
                  {item}
                  <ChevronRight className={`w-4 h-4 transition-transform ${selectedIngredient === item ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Detalhes do Ingrediente */}
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col items-center justify-center text-center bg-stone-950/20">
            {selectedIngredient && ingredientsData[selectedIngredient] ? (
              <div className="animate-in fade-in zoom-in-95 duration-500 space-y-8">
                <div className="w-20 h-20 bg-stone-100 text-stone-950 rounded-[24px] flex items-center justify-center mx-auto shadow-2xl rotate-3">
                  {categories[activeCategory as keyof typeof categories].icon}
                </div>
                <div className="space-y-4">
                  <h4 className="text-4xl md:text-5xl font-serif text-stone-100">{selectedIngredient}</h4>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-800 border border-stone-700 text-stone-300 text-[10px] font-bold rounded-full uppercase tracking-[0.2em]">
                    <Sparkles size={12} className="text-stone-500" />
                    Benefício: {ingredientsData[selectedIngredient].benefit}
                  </div>
                </div>
                <p className="text-stone-400 leading-relaxed text-xl font-light italic">
                  "{ingredientsData[selectedIngredient].description}"
                </p>
              </div>
            ) : (
              <div className="text-stone-700 space-y-4">
                <BookOpen className="w-16 h-16 mx-auto opacity-20" />
                <p className="font-serif text-lg">Selecione uma essência para<br/>revelar seu segredo terapêutico.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;