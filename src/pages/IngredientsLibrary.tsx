"use client";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Beaker, Leaf, Apple, Coffee, Flower2, Sparkles, Info } from 'lucide-react';
import { ingredientsData } from '../data/ingredients';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'herbais', name: 'Herbais & Terapêuticos', icon: Leaf, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { id: 'frutados', name: 'Frutados & Tropicais', icon: Apple, color: 'text-orange-600', bg: 'bg-orange-50' },
  { id: 'gourmand', name: 'Gourmand & Doces', icon: Coffee, color: 'text-amber-700', bg: 'bg-amber-50' },
  { id: 'florais', name: 'Florais & Delicados', icon: Flower2, color: 'text-pink-600', bg: 'bg-pink-50' },
  { id: 'especiarias', name: 'Especiarias & Quentes', icon: Sparkles, color: 'text-red-700', bg: 'bg-red-50' },
  { id: 'outros', name: 'Especiais & Perfumaria', icon: Beaker, color: 'text-indigo-600', bg: 'bg-indigo-50' }
];

// Mapeamento manual baseado nas chaves enviadas anteriormente
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
  const navigate = useNavigate();
  const [selectedIngredient, setSelectedIngredient] = useState<any>(null);

  const ingredientsByCategory = categories.reduce((acc: any, cat) => {
    acc[cat.id] = Object.values(ingredientsData).filter(ing => getCategory(ing.name) === cat.id);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#FDFCFB] pb-20">
      {/* Header */}
      <div className="bg-white border-b border-stone-100 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-stone-50 rounded-full transition-colors text-stone-500"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-serif text-stone-800 font-medium">Biblioteca de Essências</h1>
          <div className="w-10" /> {/* Spacer */}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-8">
        <header className="mb-12 text-center">
          <p className="text-stone-500 font-light max-w-lg mx-auto">
            Explore nossa coleção completa de aromas e descubra os benefícios terapêuticos por trás de cada nota.
          </p>
        </header>

        {/* Categories Grid */}
        <div className="space-y-12">
          {categories.map((category) => (
            <section key={category.id} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-3">
                <div className={`p-2 rounded-lg ${category.bg} ${category.color}`}>
                  <category.icon size={20} />
                </div>
                <h2 className="text-lg font-serif text-stone-800">{category.name}</h2>
                <span className="text-stone-400 text-sm ml-auto">
                  {ingredientsByCategory[category.id]?.length || 0} essências
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {ingredientsByCategory[category.id]?.map((ing: any) => (
                  <button
                    key={ing.name}
                    onClick={() => setSelectedIngredient(ing)}
                    className="group flex flex-col items-start p-4 bg-white border border-stone-100 rounded-2xl hover:border-stone-300 hover:shadow-sm transition-all text-left"
                  >
                    <span className="text-stone-800 font-medium mb-1 group-hover:text-stone-900 transition-colors">
                      {ing.name}
                    </span>
                    <span className="text-xs text-stone-400 uppercase tracking-wider font-medium">
                      {ing.benefit}
                    </span>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Modal de Detalhes (Tailwind Puro) */}
      <AnimatePresence>
        {selectedIngredient && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIngredient(null)}
              className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="relative w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-stone-100 text-stone-500 text-xs font-semibold uppercase tracking-widest mb-2">
                      {selectedIngredient.benefit}
                    </span>
                    <h3 className="text-3xl font-serif text-stone-900">{selectedIngredient.name}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedIngredient(null)}
                    className="p-2 hover:bg-stone-50 rounded-full transition-colors text-stone-400"
                  >
                    <ArrowLeft className="rotate-90 sm:rotate-0" size={24} />
                  </button>
                </div>
                
                <div className="prose prose-stone">
                  <p className="text-stone-600 leading-relaxed text-lg italic">
                    "{selectedIngredient.description}"
                  </p>
                </div>

                <button
                  onClick={() => setSelectedIngredient(null)}
                  className="w-full mt-8 py-4 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors"
                >
                  Fechar Detalhes
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IngredientsLibrary;