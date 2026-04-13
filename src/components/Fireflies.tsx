"use client";

import React, { useMemo } from 'react';

const Fireflies = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 15, // Mais rápidos
      delay: Math.random() * -20,
      size: 2 + Math.random() * 4, // Maiores
      // Cores mais vibrantes (Âmbar e Ouro)
      color: Math.random() > 0.3 ? 'rgba(255, 191, 0, 0.9)' : 'rgba(255, 240, 150, 0.8)',
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
            // Brilho muito mais forte
            boxShadow: `0 0 ${p.size * 4}px ${p.size * 1.5}px ${p.color}, 0 0 ${p.size * 8}px ${p.size}px rgba(251, 191, 36, 0.4)`,
            animation: `
              wander-firefly ${p.duration}s infinite ease-in-out ${p.delay}s,
              twinkle-firefly ${2 + Math.random() * 3}s infinite ease-in-out ${p.delay}s
            `,
          }}
        />
      ))}
      <style>{`
        @keyframes wander-firefly {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(60px, -40px); }
          50% { transform: translate(-20px, -80px); }
          75% { transform: translate(-70px, -30px); }
        }

        @keyframes twinkle-firefly {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.7);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
            box-shadow: 0 0 15px 4px rgba(255, 191, 0, 0.8);
          }
        }
      `}</style>
    </div>
  );
};

export default Fireflies;