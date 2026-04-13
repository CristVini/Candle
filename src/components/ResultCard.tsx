"use client";

import React from 'react';
import { CandleProfile } from '../data/candleProfiles';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MessageCircle, RefreshCw, Star, Info } from 'lucide-react';

interface ResultCardProps {
  profile: CandleProfile;
  onReset: () => void;
}

const ResultCard = ({ profile, onReset }: ResultCardProps) => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const message = `Olá! Fiz o teste de Mapeamento Emocional e meu perfil deu "${profile.title}" (${profile.scent}). Gostaria de encomendar essa vela para me ajudar com ${profile.archetype.toLowerCase()}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-700">
      <Card className="overflow-hidden border-none shadow-2xl bg-white/95 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Lado da Imagem */}
          <div className="relative h-64 md:h-full min-h-[400px]">
            <img 
              src={profile.imageUrl} 
              alt={profile.scent}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-end p-8 items-end">
              <div className="text-white">
                <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-80 mb-2">Prescrição Sensorial</p>
                <h3 className="text-2xl font-serif">{profile.scent}</h3>
              </div>
            </div>
          </div>

          {/* Lado do Conteúdo */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-4">
                <Star className="w-3 h-3 fill-slate-500" /> {profile.archetype}
              </div>
              <h2 className="text-4xl font-serif text-slate-800 mb-4 leading-tight">
                {profile.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg italic">
                "{profile.description}"
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                  <Info className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-1">Análise Terapêutica</h4>
                  <p className="text-sm text-slate-500 leading-snug">{profile.psychologicalAction}</p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-slate-800 font-medium text-center">
                  {profile.strongCTA}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Button 
                asChild
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white h-16 rounded-2xl text-lg font-bold shadow-lg shadow-green-200 transition-all hover:scale-[1.02]"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Encomendar minha Vela
                </a>
              </Button>
              
              <Button 
                onClick={onReset}
                variant="ghost"
                className="text-slate-400 hover:text-slate-800 flex items-center gap-2 mx-auto"
              >
                <RefreshCw className="w-4 h-4" /> Refazer teste
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResultCard;