"use client";

import React from 'react';
import { Brain, Heart, Wind, Zap } from 'lucide-react';

const Science = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <h2 className="text-sm uppercase tracking-[0.3em] text-amber-500 mb-4 font-medium">A Ciência por trás do Aroma</h2>
        <h3 className="text-4xl md:text-5xl font-light mb-8">Como o Olfato Conecta-se à Alma</h3>
        <p className="text-stone-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Na Candle Mind, não apenas criamos velas; estudamos a interação entre moléculas odoríferas e o sistema límbico — o centro das emoções e memórias no cérebro.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: <Brain className="text-amber-500" />,
            title: "Sistema Límbico",
            desc: "Ao contrário dos outros sentidos, o olfato é o único conectado diretamente ao sistema emocional do cérebro, permitindo respostas imediatas ao estresse e humor."
          },
          {
            icon: <Heart className="text-amber-500" />,
            title: "Memória Afetiva",
            desc: "Certas essências podem resgatar memórias de segurança e conforto, ativando neurotransmissores como a serotonina e a dopamina."
          },
          {
            icon: <Zap className="text-amber-500" />,
            title: "Neuroquímica",
            desc: "Ingredientes como Lavanda e Bergamota interagem quimicamente com o corpo para reduzir os níveis de cortisol, o hormônio do estresse."
          },
          {
            icon: <Wind className="text-amber-500" />,
            title: "Pureza Molecular",
            desc: "Utilizamos apenas essências de alta qualidade para garantir que as moléculas suspensas no ar sejam benéficas para o seu trato respiratório e sistema nervoso."
          }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-stone-900/30 border border-stone-800/50 rounded-2xl hover:border-amber-500/30 transition-all duration-500">
            <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h4 className="text-xl font-medium mb-4">{item.title}</h4>
            <p className="text-stone-500 leading-relaxed text-sm italic">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Science;