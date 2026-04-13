"use client";

import React, { useMemo } from 'react';

const Fireflies = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * -20,
      size: 1 + Math.random() * 2.5,
      color: Math.random() > 0.3 ? 'rgba(251, 191, 36, 0.6)' : 'rgba(190, 242, 100, 0.5)',
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
          25% { transform: translate(40px, -30px); }
          50% { transform: translate(-15px, -60px); }
          75% { transform: translate(-50px, -20px); }
        }

        @keyframes twinkle-firefly {
          0%, 100% {
            opacity: 0.1;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
            box-shadow: 0 0 10px 2px rgba(251, 191, 36, 0.4);
          }
        }
      `}</style>
    </div>
  );
};

export default Fireflies;