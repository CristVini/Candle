"use client";

import React, { useState } from 'react';
import { Leaf, Apple, Coffee, Flower2, Sparkles, Beaker, Info, X } from 'lucide-react';
import { ingredientsData } from '../data/ingredients';
import IngredientModal from './IngredientModal';

const categories = [
  { id: 'herbais', name: 'Herbais & Terapêuticos', icon: Leaf },
  { id: 'frutados', name: 'Frutados & Tropicais', icon: Apple },
  { id: 'gourmand', name: 'Gourmand & Doces', icon: Coffee },
  { id: 'florais', name: 'Florais & Delicados', icon: Flower2 },
  { id: 'especiarias', name: 'Especiarias & Quentes', icon: Sparkles },
  { id: 'outros', name: 'Especiais & Perfumaria', icon: Beaker }
];

const getCategory = (name: string) => {
  const herbais = ["Alecrim", "Alfazema", "Arruda", "Arnica", "Andiroba", "Babosa", "Aloe Vera", "Capim Limão", "Camomila", "Calêndula", "Cedro", "Copaíba", "Erva Cidreira", "Erva Doce", "Eucalipto", "Hortelã", "Hortelã-Pimenta", "Manjerona", "Mirra", "Olíbano", "Patchouli", "Sândalo", "Sete Ervas", "Tomilho", "Verbena", "Bamboo", "Pinho"];
  const frutados = ["Abacaxi", "Açaí", "Ameixa", "Amora Negra", "Banana", "Blueberry", "Caju", "Cajá", "Cereja", "Jabuticaba", "Pitanga", "Pitaya", "Romã", "Siriguela", "Melão", "Manga", "Maracujá", "Melancia", "Morango", "Pêssego", "Pêra", "Tangerina", "Uva"];
  const gourmand = ["Chocolate", "Baunilha", "Black Vanilla", "Caramelo", "Doce de Leite", "Panetone", "Chantilly", "Café", "Mel", "Coco", "Choconilha", "Amêndoas"];
  const florais = ["Lavanda", "Jasmim", "Rosa", "Orquídea", "Lírio", "Flor de Laranjeira", "Gardênia", "Violeta", "Dama da Noite", "Flor de Algodão", "Flor de Cerejeira", "Neroli"];
  const especiarias = ["Canela", "Cravo", "Gengibre", "Noz Moscada", "Pimenta"];

  if (herbais.some(h => name.includes(h))) return 'herbais';
  if (frutados.some(f => name.includes(f))) return 'frutados';
  if (gourmand.some(g => name.includes(g))) return 'gourmand';
  if (florais.some(fl => name.includes(fl))) return 'florais';
  if (especiarias.some(e => name.includes(e))) return 'especiarias';
  return 'outros';
};

const IngredientsLibrary = () => {
  const [selectedIngredient, setSelectedIngredient] = useState<any>(null);

  const ingredientsByCategory = categories.reduce((acc: any, cat) => {
    acc[cat.id] = Object.values(ingredientsData).filter(ing => getCategory(ing.name) === cat.id);
    return acc;
  }, {});

  return (
    <div className="max-w-6xl mx-auto px-6 pb-32">
      <div className="text-center mb-16 md:mb-24 space-y-6">
        <h2 className="text-4xl md:text-8xl font-serif text-stone-100">Biblioteca Olfativa</h2>
        <p className="text-stone-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
          Explore as propriedades bioquímicas e os benefícios emocionais de cada elemento da nossa coleção.
        </p>
      </div>

      <div className="space-y-20 md:space-y-32">
        {categories.map((category) => (
          <section key={category.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-12 h-12 bg-stone-100 text-stone-950 rounded-2xl flex items-center justify-center">
                <category.icon size={24} />
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl font-serif text-stone-100">{category.name}</h3>
                <p className="text-stone-500 text-xs md:text-sm uppercase tracking-widest">
                  {ingredientsByCategory[category.id]?.length || 0} essências catalogadas
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {ingredientsByCategory[category.id]?.map((ing: any) => (
                <button
                  key={ing.name}
                  onClick={() => setSelectedIngredient(ing)}
                  className="group relative p-6 md:p-8 bg-stone-900/40 border border-stone-800 rounded-3xl hover:border-stone-400 hover:bg-stone-900/60 transition-all duration-300 text-left"
                >
                  <div className="flex flex-col h-full justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-widest block mb-2">
                        {ing.benefit}
                      </span>
                      <h4 className="text-xl md:text-2xl font-serif text-stone-200 group-hover:text-stone-100 transition-colors">
                        {ing.name}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500 text-xs group-hover:text-stone-300 transition-colors">
                      <Info size={14} />
                      Ver Propriedades
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      <IngredientModal 
        ingredient={selectedIngredient} 
        onClose={() => setSelectedIngredient(null)} 
      />
    </div>
  );
};

export default IngredientsLibrary;