"use client";

import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-900 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-light tracking-[0.2em] uppercase text-stone-200 mb-2">
            Candle <span className="text-amber-500 font-medium">Mind</span>
          </h2>
          <p className="text-stone-500 text-sm max-w-xs italic">
            Velas para seu corpo, mente e espírito.
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="p-3 bg-stone-900 rounded-full text-stone-400 hover:text-amber-500 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="p-3 bg-stone-900 rounded-full text-stone-400 hover:text-amber-500 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="p-3 bg-stone-900 rounded-full text-stone-400 hover:text-amber-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="mt-8 md:mt-0 text-stone-600 text-[10px] uppercase tracking-[0.2em]">
          © 2024 Candle Mind. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;