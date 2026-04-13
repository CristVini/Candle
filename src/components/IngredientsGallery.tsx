"use client";

import React, { useState, useMemo } from 'react';
import { ingredientsData } from '../data/ingredients';
import IngredientModal from './IngredientModal';
import { Search, Filter, Droplets } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'herbals', name: 'Herbais' },
  { id: 'fruity', name: 'Frutados' },
  { id: 'gourmand', name: 'Gourmand' },
  { id: 'florals', name: 'Florais' },
  { id: 'spices', name: 'Especiarias' }
];

// Mapeamento manual baseado no conteúdo de ingredients.ts
const categorize = (name: string) => {
  const herbais = ["Alecrim", "Alfazema", "Arruda", "Arnica", "Andiroba", "Babosa", "Aloe Vera", "Capim Limão", "Camomila", "Calêndula", "Cedro", "Copaíba", "Erva Cidreira", "Erva Doce", "Eucalipto", "Hortelã", "Manjerona", "Mirra", "Olíbano", "Patchouli", "Sândalo", "Bamboo", "Pinho", "Hortelã-Pimenta", "Alecrim Blanc"];
  const frutados = ["Abacaxi", "Açaí", "Ameixa", "Amora Negra", "Banana", "Blueberry", "Caju", "Cajá", "Cereja", "Jabuticaba", "Pitanga", "Pitaya", "Romã", "Siriguela", "Melão"];
  const gourmand = ["Chocolate", "Baunilha", "Avelã", "Café", "Buriti", "Choconilha", "Chocotone", "Amêndoas", "Mel"];
  const florais = ["Flor", "Rosa", "Gerânio", "Girassol", "Neroli", "Frésia", "Jasmim", "Lavanda"];
  const especiarias = ["Canela", "Cravo", "Gengibre", "Noz Moscada", "Pimenta"];

  if (herbais.some(h => name.includes(h))) return 'herbals';
  if (frutados.some(f => name.includes(f))) return 'fruity';
  if (gourmand.some(g => name.includes(g))) return 'gourmand';
  if (florais.some(fl => name.includes(fl))) return 'florals';
  if (especiarias.some(e => name.includes(e))) return 'spices';
  return 'others';
};

const IngredientsGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedIngredient, setSelectedIngredient] = useState<any>(null);

  const filteredIngredients = useMemo(() => {
    return Object.values(ingredientsData).filter(ing => {
      const matchesSearch = ing.name.toLowerCase().includes(search.toLowerCase());
      const category = categorize(ing.name);
      const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-6 pb-32">
      <div className="space-y-8 mb-16 text-center">
        <div className="flex flex-col items-center gap-4">
           <div className="w-12 h-12 bg-stone-900 border border-stone-800 rounded-full flex items-center justify-center text-stone-500">
             <Droplets size={24} />
           </div>
           <h2 className="text-4xl md:text-7xl font-serif text-stone-100">Biblioteca de Essências</h2>
           <p className="text-stone-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
             Explore as moléculas e extratos que compõem nossas assinaturas olfativas. 
             Clique em cada nota para entender seu benefício neurobiológico.
           </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-between pt-8 border-t border-stone-900">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                  selectedCategory === cat.id 
                    ? 'bg-stone-100 text-stone-950 border-stone-100' 
                    : 'bg-transparent text-stone-500 border-stone-800 hover:border-stone-600'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600" size={18} />
            <input 
              type="text"
              placeholder="Buscar nota..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-stone-900/50 border border-stone-800 rounded-full py-3 pl-12 pr-6 text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-stone-500 transition-colors"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredIngredients.map((ing, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIngredient(ing)}
            className="group text-left p-6 bg-stone-900/30 border border-stone-800 rounded-[32px] hover:bg-stone-900/60 hover:border-stone-500 transition-all duration-300 flex flex-col justify-between min-h-[160px]"
          >
            <div className="space-y-2">
              <span className="text-[9px] font-bold text-stone-600 uppercase tracking-widest group-hover:text-stone-400 transition-colors">
                {ing.benefit}
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-stone-300 group-hover:text-stone-100 transition-colors">
                {ing.name}
              </h3>
            </div>
            <div className="h-[1px] w-8 bg-stone-800 group-hover:w-full group-hover:bg-stone-500 transition-all duration-500"></div>
          </button>
        ))}
      </div>

      {filteredIngredients.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <p className="text-stone-500 italic text-xl">Nenhuma essência encontrada para esta busca.</p>
        </div>
      )}

      <IngredientModal 
        ingredient={selectedIngredient} 
        onClose={() => setSelectedIngredient(null)} 
      />
    </div>
  );
};

export default IngredientsGallery;