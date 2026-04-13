"use client";

import React from 'react';
import { Flame } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 md:px-12 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 pointer-events-auto group cursor-pointer">
          <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center group-hover:bg-amber-500/20 transition-all duration-500">
            <Flame size={20} className="text-amber-500" />
          </div>
          <span className="text-lg font-light tracking-[0.2em] uppercase text-stone-200">
            Candle <span className="text-amber-500 font-medium">Mind</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;