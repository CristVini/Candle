"use client";

import React, { useState } from 'react';
import { ingredientsData } from '../data/ingredients';
import { ChevronRight, Leaf, Cherry, Cookie, Flower2, Flame, Sparkles } from 'lucide-react';

const ScienceOfScents = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Herbais");

  const categories = {
    "Herbais": {
      icon: <Leaf className="w-5 h-5" />,
      items: ["Alecrim", "Alecrim Blanc", "Alfazema", "Arruda", "Arnica", "Andiroba", "Babosa", "Aloe Vera", "Capim Limão", "Camomila", "Calêndula", "Cedro", "Copaíba", "Erva Cidreira", "Erva Doce", "Eucalipto", "Eucalipto Globulus", "Eucalipto Exp", "Hortelã", "Hortelã-Pimenta", "Manjerona", "Mirra", "Olíbano", "Patchouli", "Sândalo", "Sete Ervas", "Tomilho", "Verbena", "Bamboo", "Pinho"]
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
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">A Ciência por Trás do Aroma</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Cada essência é selecionada não apenas pelo perfume, mas pelo impacto neurológico e emocional que proporciona ao seu bem-estar.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Menu de Categorias */}
        <div className="lg:col-span-3 space-y-2">
          {Object.entries(categories).map(([name, data]) => (
            <button
              key={name}
              onClick={() => {
                setActiveCategory(name);
                setSelectedIngredient(null);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeCategory === name 
                ? 'bg-amber-100 text-amber-900 font-semibold shadow-sm' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
              }`}
            >
              {data.icon}
              <span className="text-sm">{name}</span>
            </button>
          ))}
        </div>

        {/* Lista de Ingredientes e Detalhes */}
        <div className="lg:col-span-9 bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden min-h-[500px] flex flex-col">
          <div className="p-6 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between">
            <h3 className="font-serif text-xl font-bold text-gray-800 flex items-center gap-2">
              {categories[activeCategory as keyof typeof categories].icon}
              {activeCategory}
            </h3>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              {categories[activeCategory as keyof typeof categories].items.length} Essências
            </span>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
            {/* Lista Scrollável */}
            <div className="p-4 overflow-y-auto max-h-[400px] border-r border-gray-50">
              <div className="grid grid-cols-1 gap-2">
                {categories[activeCategory as keyof typeof categories].items.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedIngredient(item)}
                    className={`text-left px-4 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between group ${
                      selectedIngredient === item
                      ? 'bg-amber-50 text-amber-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item}
                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedIngredient === item ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Painel de Descrição */}
            <div className="p-8 bg-white flex flex-col items-center justify-center text-center">
              {selectedIngredient && ingredientsData[selectedIngredient] ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {categories[activeCategory as keyof typeof categories].icon}
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-gray-900 mb-2">{selectedIngredient}</h4>
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full mb-6 uppercase tracking-widest">
                    Benefício: {ingredientsData[selectedIngredient].benefit}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg italic">
                    "{ingredientsData[selectedIngredient].description}"
                  </p>
                </div>
              ) : (
                <div className="text-gray-400">
                  <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p>Selecione uma essência para ver<br/>suas propriedades terapêuticas</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceOfScents;