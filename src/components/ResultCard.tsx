"use client";

import React from 'react';
import { CandleProfile } from '../data/candleProfiles';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Sparkles, Brain, Wind } from 'lucide-react';

interface ResultCardProps {
  profile: CandleProfile;
  onReset: () => void;
}

const ResultCard = ({ profile, onReset }: ResultCardProps) => {
  return (
    <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Card className={`border-2 ${profile.color}`}>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <Sparkles className="w-8 h-8" />
            </div>
          </div>
          <CardTitle className="text-3xl font-serif">{profile.title}</CardTitle>
          <p className="text-lg opacity-90 italic">{profile.scent}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-white/50 p-4 rounded-lg">
            <h4 className="font-bold flex items-center gap-2 mb-2">
              <Brain className="w-4 h-4" /> Análise do Perfil
            </h4>
            <p>{profile.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/50 p-4 rounded-lg">
              <h4 className="font-bold flex items-center gap-2 mb-2">
                <Wind className="w-4 h-4" /> Benefícios Aromáticos
              </h4>
              <p className="text-sm">{profile.benefits}</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h4 className="font-bold mb-2">Nota Psicológica</h4>
              <p className="text-sm italic">{profile.psychologicalNote}</p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Button 
              onClick={onReset}
              variant="outline"
              className="hover:bg-white/80"
            >
              Refazer Teste
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultCard;