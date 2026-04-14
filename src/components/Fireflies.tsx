"use client";

import React, { useMemo } from 'react';

const Fireflies = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({ 
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * -20,
      size: 2 + Math.random() * 3,
      color: Math.random() > 0.3 ? '#ffbf00' : '#fff096',
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
            boxShadow: `0 0 8px 2px ${p.color}`,
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
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </div>
  );
};

export default Fireflies;