"use client";

import React from 'react';
import { Instagram, Facebook, Mail, Flame } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Flame className="text-amber-500" size={28} />
              <span className="text-2xl font-light tracking-[0.2em] uppercase">Candle<span className="font-bold">Mind</span></span>
            </div>
            <p className="text-stone-500 max-w-md leading-relaxed mb-8">
              Acreditamos que o aroma tem o poder de transformar ambientes e estados de espírito. Nossa missão é iluminar seu caminho através de experiências olfativas curadas para o seu bem-estar.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:border-amber-500 hover:text-amber-500 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:border-amber-500 hover:text-amber-500 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:border-amber-500 hover:text-amber-500 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-stone-300">Explorar</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Nossa Ciência</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Coleção de Inverno</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Velas Personalizadas</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Guia de Aromas</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-6 text-stone-300">Suporte</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Envios e Devoluções</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Dicas de Uso</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-900 pt-8 flex flex-col md:row justify-between items-center gap-4 text-stone-600 text-xs uppercase tracking-widest">
          <p>© 2024 CANDLEMIND. TODOS OS DIREITOS RESERVADOS.</p>
          <p>VELAS PARA SEU CORPO, MENTE E ESPÍRITO.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;