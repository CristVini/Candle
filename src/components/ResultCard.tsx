"use client";

import React from 'react';
import { CandleProfile } from '../data/candleProfiles';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ShieldCheck, Activity, User, BookOpen } from 'lucide-react';

interface ResultCardProps {
  profile: CandleProfile;
  onReset: () => void;
}

const ResultCard = ({ profile, onReset }: ResultCardProps) => {
  return (
    <div className="max-w-3xl mx-auto animate-in zoom-in-95 duration-500">
      <Card className={`border-t-8 shadow-2xl ${profile.color}`}>
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <span className="px-3 py-1 bg-white/50 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold">
              Perfil Identificado
            </span>
          </div>
          <CardTitle className="text-4xl font-serif mb-2">{profile.title}</CardTitle>
          <div className="flex items-center justify-center gap-2 text-sm font-medium opacity-80">
            <User className="w-4 h-4" /> Arquétipo: {profile.archetype}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8 pt-6">
          <div className="prose prose-slate">
            <p className="text-lg leading-relaxed text-center italic">
              "{profile.description}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/40 p-5 rounded-xl border border-white/50">
              <h4 className="font-bold flex items-center gap-2 mb-3 text-sm uppercase tracking-wider">
                <Activity className="w-4 h-4" /> Contexto Clínico
              </h4>
              <p className="text-sm leading-relaxed">{profile.clinicalContext}</p>
            </div>
            
            <div className="bg-white/40 p-5 rounded-xl border border-white/50">
              <h4 className="font-bold flex items-center gap-2 mb-3 text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> Prescrição Aromática
              </h4>
              <p className="text-sm font-semibold mb-1">{profile.scent}</p>
              <p className="text-xs opacity-70">Ativos: {profile.activeIngredients}</p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-6 rounded-xl shadow-inner">
            <h4 className="font-bold flex items-center gap-2 mb-3 text-sm uppercase tracking-wider text-slate-300">
              <BookOpen className="w-4 h-4" /> Mecanismo de Ação Psicológica
            </h4>
            <p className="text-sm leading-relaxed">{profile.psychologicalAction}</p>
          </div>

          <div className="flex flex-col items-center gap-4 pt-4">
            <Button 
              onClick={onReset}
              variant="ghost"
              className="text-xs uppercase tracking-widest hover:bg-black/5"
            >
              Refazer Mapeamento Emocional
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultCard;