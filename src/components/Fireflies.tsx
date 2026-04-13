"use client";

import React, { useMemo } from 'react';

const Fireflies = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * -20, // Delay negativo para começar em pontos diferentes da animação
      size: 1.5 + Math.random() * 4,
      color: Math.random() > 0.3 ? 'rgba(251, 191, 36, 0.8)' : 'rgba(190, 242, 100, 0.7)', // Mix de âmbar e um toque de verde lima
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
            boxShadow: `0 0 ${p.size * 6}px ${p.size * 2}px ${p.color}`,
            animation: `
              wander-firefly ${p.duration}s infinite ease-in-out ${p.delay}s,
              twinkle-firefly ${2 + Math.random() * 3}s infinite ease-in-out ${p.delay}s
            `,
          }}
        />
      ))}
      <style>{`
        @keyframes wander-firefly {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(60px, -40px);
          }
          50% {
            transform: translate(-20px, -100px);
          }
          75% {
            transform: translate(-80px, -30px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes twinkle-firefly {
          0%, 100% {
            opacity: 0.1;
            transform: scale(0.5);
            filter: blur(2px);
          }
          30%, 70% {
            opacity: 0.8;
            transform: scale(1.2);
            filter: blur(0px);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
            box-shadow: 0 0 20px 6px rgba(251, 191, 36, 0.9);
          }
        }
      `}</style>
    </div>
  );
};

export default Fireflies;