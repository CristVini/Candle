"use client";

import React, { useMemo } from 'react';

const Fireflies = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      size: 1.5 + Math.random() * 3
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[70]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-amber-400/60"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: `0 0 ${p.size * 4}px ${p.size / 2}px rgba(251, 191, 36, 0.4)`,
            animation: `breathe-firefly ${p.duration}s infinite ease-in-out ${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes breathe-firefly {
          0%, 100% {
            transform: translate(0, 0) scale(0.5);
            opacity: 0;
            filter: blur(1px);
          }
          20% {
            opacity: 0.1;
          }
          50% {
            transform: translate(40px, -60px) scale(1.2);
            opacity: 0.8;
            filter: blur(0px);
            box-shadow: 0 0 15px 4px rgba(251, 191, 36, 0.6);
          }
          80% {
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

export default Fireflies;