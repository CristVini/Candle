"use client";

import React, { useMemo } from 'react';

const Fireflies = () => {
  // Geramos as partículas uma única vez para evitar re-renderizações desnecessárias
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() > 0.5 ? Math.random() * 20 : 80 + Math.random() * 20}%`, // Foca nas laterais
      top: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 10,
      size: 2 + Math.random() * 4
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-amber-200/40 blur-[2px] shadow-[0_0_8px_rgba(252,211,77,0.6)]"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float ${p.duration}s infinite ease-in-out ${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          25% {
            transform: translate(20px, -40px) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translate(-10px, -80px) scale(0.8);
            opacity: 0.3;
          }
          75% {
            transform: translate(30px, -40px) scale(1.1);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Fireflies;