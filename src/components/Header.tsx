"use client";

import React from 'react';
import { Flame } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-900">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
            <Flame className="text-amber-500" size={24} />
          </div>
          <span className="text-xl font-light tracking-[0.2em] uppercase">Candle<span className="font-bold">Mind</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-stone-400">
          <a href="#" className="hover:text-amber-500 transition-colors">Aromaterapia</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Coleções</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Sobre</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;