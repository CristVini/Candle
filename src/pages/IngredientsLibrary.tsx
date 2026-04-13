"use client";

import React, { useState } from 'react';
import { ingredientsData, Ingredient } from '../data/ingredients';
import { Search, X, Info } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'herbais', name: 'Herbais' },
  { id: 'frutados', name: 'Frutados' },
  { id: 'gourmand', name: 'Gourmand' },
  { id: 'florais', name: 'Florais' },
  { id: 'especiarias', name: 'Especiarias' },
  { id: 'especiais', name: 'Especiais' }
];

const categoryMap: Record<string, string[]> = {
  herbais: ["Alecrim", "Alecrim Blanc", "Alfazema", "Arruda", "Arnica", "Andiroba", "Babosa", "Aloe Vera", "Capim Limão", "Camomila", "Calêndula", "Cedro", "Copaíba", "Erva Cidreira", "Erva Doce", "Eucalipto", "Eucalipto Globulus", "Eucalipto Exp", "Hortelã", "Hortelã-Pimenta", "Manjerona", "Mirra", "Olíbano", "Patchouli", "Sândalo", "Sete Ervas", "Tomilho", "Verbena", "Bamboo", "Pinho"],
  frutados: ["Abacaxi", "Abacaxi em Calda", "Açaí", "Ameixa", "Amora Negra", "Banana", "Blueberry", "Caju", "Cajá", "Cereja", "Jabuticaba", "Pitanga", "Pitanga Preta", "Pitaya", "Romã", "Siriguela", "Melão", "Maracujá", "Melancia", "Morango", "Pêssego", "Pêra", "Tangerina", "Uva", "Manga", "Lichia", "Kiwi", "Goiaba", "Figo", "Cupuaçu", "Maçã Verde"],
  gourmand: ["Baunilha", "Black Vanilla", "Chocolate", "Chocolate Branco", "Choconilha", "Chocotone", "Amêndoas", "Avelã c/ Café", "Buriti", "Papaya", "Yogurte de Morango", "Caramelo", "Doce de Leite", "Panetone", "Chantilly", "Café", "Café Torrado", "Mel", "Coco", "Coco Queimado"],
  florais: ["Flor de Algodão", "Flor de Cerejeira", "Flor de Cupuaçu", "Flor de Lótus", "Flor de Maracujá", "Flor de Melissa", "Floral Rose", "Frésia", "Gerânio", "Girassol", "Neroli", "Lavanda", "Lavanda Francesa", "Jasmim", "Rosa", "Rosa Damascena", "Orquídea", "Lírio", "Flor de Laranjeira", "Gardênia", "Violeta", "Dama da Noite"],
  especiarias: ["Canela", "Cravo", "Gengibre", "Noz Moscada", "Pimenta Preta", "Pimenta Rosa", "Cravo e Canela"],
  especiais: ["Cereja c/ Avelã", "Morango c/ Champanhe", "Pêra c/ Chantilly", "Maçã c/ Canela", "Chocolate c/ Pimenta", "Eucalipto c/ Bergamota", "Café em Grãos", "Love Spell", "Donna Spark", "Douvie", "Eco Brasilis", "Iguatemi", "Marine", "Noite Feliz", "Palmoluxo", "Âmbar Lelis", "Breu Branco", "Cipreste", "Citronela", "Figo em Calda", "Bergamota", "Vet Vert"]
};

const IngredientsLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  const filterIngredients = () => {
    let filtered = Object.values(ingredientsData);

    if (activeCategory !== 'all') {
      const allowedNames = categoryMap[activeCategory] || [];
      filtered = filtered.filter(ing => allowedNames.includes(ing.name));
    }

    if (searchQuery) {
      filtered = filtered.filter(ing => 
        ing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ing.benefit.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  };

  const currentIngredients = filterIngredients();

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4 tracking-tight">Biblioteca de Aromas</h1>
          <p className="text-stone-600 max-w-2xl mx-auto italic">
            Explore nossa coleção completa de essências e descubra como cada nota pode transformar seu ambiente e suas emoções.
          </p>
        </header>

        {/* Filtros e Busca */}
        <div className="sticky top-20 z-40 bg-stone-50/90 backdrop-blur-sm pb-6 space-y-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat.id 
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-200' 
                  : 'bg-white text-stone-500 border border-stone-200 hover:border-amber-300'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar essência ou benefício..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white"
            />
          </div>
        </div>

        {/* Grid de Ingredientes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
          {currentIngredients.map((ing) => (
            <button
              key={ing.name}
              onClick={() => setSelectedIngredient(ing)}
              className="group relative bg-white p-6 rounded-2xl border border-stone-200 text-left hover:border-amber-400 hover:shadow-xl hover:shadow-stone-200 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Info className="w-4 h-4 text-amber-500" />
              </div>
              <span className="inline-block px-2 py-1 rounded-md bg-stone-100 text-[10px] font-bold text-stone-500 uppercase tracking-tighter mb-2 group-hover:bg-amber-50 group-hover:text-amber-700 transition-colors">
                {ing.benefit}
              </span>
              <h3 className="text-lg font-bold text-stone-800 group-hover:text-amber-700 transition-colors">{ing.name}</h3>
              <p className="text-sm text-stone-500 mt-2 line-clamp-2 italic leading-relaxed">
                {ing.description}
              </p>
            </button>
          ))}
        </div>

        {currentIngredients.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-400 italic">Nenhum aroma encontrado para esta busca.</p>
          </div>
        )}
      </div>

      {/* Modal Customizado (Tailwind Puro) */}
      {selectedIngredient && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedIngredient(null)}
          />
          
          {/* Conteúdo do Modal */}
          <div className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedIngredient(null)}
              className="absolute top-4 right-4 p-2 hover:bg-stone-100 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5 text-stone-400" />
            </button>

            <div className="p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-4">
                {selectedIngredient.benefit}
              </span>
              <h2 className="text-3xl font-bold text-stone-800 mb-4">{selectedIngredient.name}</h2>
              <div className="h-px w-12 bg-amber-500 mb-6" />
              <p className="text-stone-600 leading-relaxed text-lg italic">
                "{selectedIngredient.description}"
              </p>
              
              <button 
                onClick={() => setSelectedIngredient(null)}
                className="w-full mt-10 bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-amber-700 transition-colors"
              >
                Voltar à Exploração
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IngredientsLibrary;