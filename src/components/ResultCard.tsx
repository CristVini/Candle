"use client";

import React from 'react';
import { CandleProfile } from '../data/candleProfiles';
import { Button } from './ui/button';
import { RefreshCw, MessageCircle, Brain, Droplets, Info } from 'lucide-react';

interface ResultCardProps {
  profile: CandleProfile;
  onReset: () => void;
}

const ResultCard = ({ profile, onReset }: ResultCardProps) => {
  const whatsappNumber = "5511999999999";
  const message = `Olá! Fiz o mapeamento emocional e meu perfil deu: ${profile.title} (${profile.scent}). Gostaria de saber mais sobre esta vela.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in zoom-in duration-500">
      <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-stone-100">
        <div className="grid md:grid-cols-2">
          {/* Coluna da Imagem */}
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img 
              src={profile.imageUrl} 
              alt={profile.scent} 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className={`absolute inset-0 opacity-20 ${profile.color.split(' ')[0]}`}></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-block px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-800 mb-2">
                Arquétipo: {profile.archetype}
              </div>
            </div>
          </div>

          {/* Coluna do Conteúdo */}
          <div className="p-8 md:p-12 space-y-8">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 mb-2">Seu Perfil Sensorial</h3>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-800 leading-tight mb-4">{profile.title}</h2>
              <p className="text-stone-500 leading-relaxed italic">"{profile.description}"</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-4">
                <div className="mt-1 h-8 w-8 rounded-full bg-stone-50 flex items-center justify-center shrink-0">
                  <Droplets className="w-4 h-4 text-stone-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800">Assinatura Olfativa</h4>
                  <p className="text-sm text-stone-600 font-medium">{profile.scent}</p>
                  <p className="text-[10px] text-stone-400 mt-1 uppercase tracking-tighter">Ativos: {profile.activeIngredients}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-8 w-8 rounded-full bg-stone-50 flex items-center justify-center shrink-0">
                  <Brain className="w-4 h-4 text-stone-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800">Mecanismo de Ação</h4>
                  <p className="text-sm text-stone-600 leading-snug">{profile.psychologicalAction}</p>
                  <p className="text-[10px] text-stone-400 mt-1 uppercase tracking-tighter">Contexto: {profile.clinicalContext}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <p className="text-sm font-bold text-stone-800 text-center">{profile.strongCTA}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-stone-900 text-white text-center py-4 rounded-xl font-bold hover:bg-stone-800 transition-colors shadow-lg shadow-stone-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Encomendar Essência
                </a>
                <button 
                  onClick={onReset}
                  className="px-6 py-4 border border-stone-200 text-stone-600 rounded-xl font-bold hover:bg-stone-50 transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refazer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex items-center justify-center gap-2 text-stone-400">
        <Info className="w-4 h-4" />
        <span className="text-[10px] uppercase tracking-widest font-medium">Protocolo Luz & Essência • Baseado em Aromaterapia Clínica</span>
      </div>
    </div>
  );
};

export default ResultCard;