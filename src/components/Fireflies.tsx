"use client";

import React, { useMemo } from 'react';

const Fireflies = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 25, // Movimento mais lento e fluido
      delay: Math.random() * -20,
      size: 1.5 + Math.random() * 2.5, // Tamanho mais natural
      color: Math.random() > 0.3 ? 'rgba(255, 191, 0, 0.7)' : 'rgba(255, 240, 150, 0.6)',
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[70]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            // Brilho médio e mais suave
            boxShadow: `0 0 ${p.size * 3}px ${p.size}px ${p.color}`,
            animation: `
              wander-firefly ${p.duration}s infinite ease-in-out ${p.delay}s,
              twinkle-firefly ${3 + Math.random() * 4}s infinite ease-in-out ${p.delay}s
            `,
          }}
        />
      ))}
      <style>{`
        @keyframes wander-firefly {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(15vw, -10vh); }
          50% { transform: translate(-10vw, -25vh); }
          75% { transform: translate(-20vw, 5vh); }
        }

        @keyframes twinkle-firefly {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default Fireflies;