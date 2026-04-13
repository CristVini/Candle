"use client";

import React, { useMemo } from 'react';

const Fireflies = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() > 0.5 ? Math.random() * 25 : 75 + Math.random() * 25}%`,
      top: `${Math.random() * 100}%`,
      duration: 8 + Math.random() * 15,
      delay: Math.random() * 10,
      size: 3 + Math.random() * 5
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-amber-400 blur-[1px] shadow-[0_0_15px_6px_rgba(251,191,36,0.8)]"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float-vivid ${p.duration}s infinite ease-in-out ${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes float-vivid {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(30px, -50px) scale(1.4);
            opacity: 0.9;
          }
          50% {
            transform: translate(-15px, -100px) scale(0.9);
            opacity: 0.4;
          }
          75% {
            transform: translate(40px, -50px) scale(1.3);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default Fireflies;