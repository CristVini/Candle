"use client";

import React, { useMemo } from 'react';

const Fireflies = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({ 
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * -20,
      size: 3 + Math.random() * 3, // Aumentado levemente o tamanho base
      color: Math.random() > 0.3 ? '#ffcc00' : '#fff4b3', // Cores mais saturadas
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[70]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full opacity-0"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            willChange: 'transform, opacity',
            transform: 'translate3d(0,0,0)',
            // Aumentado significativamente o raio do brilho (glow)
            boxShadow: `0 0 15px 4px ${p.color}, 0 0 30px 8px ${p.color}44`,
            animation: `
              wander-firefly ${p.duration}s infinite ease-in-out ${p.delay}s,
              twinkle-firefly ${3 + Math.random() * 3}s infinite ease-in-out ${p.delay}s
            `,
          }}
        />
      ))}
      <style>{`
        @keyframes wander-firefly {
          0%, 100% { transform: translate3d(0, 0, 0); }
          25% { transform: translate3d(15vw, -10vh, 0); }
          50% { transform: translate3d(-10vw, -20vh, 0); }
          75% { transform: translate3d(-15vw, 10vh, 0); }
        }

        @keyframes twinkle-firefly {
          0%, 100% { opacity: 0.4; } /* Aumentada a opacidade mínima para não sumirem tanto */
          50% { opacity: 1; }   /* Opacidade máxima total */
        }
      `}</style>
    </div>
  );
};

export default Fireflies;