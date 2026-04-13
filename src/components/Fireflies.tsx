"use client";

import React, { useMemo } from 'react';

const Fireflies = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 5,
      size: 2 + Math.random() * 4
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[70]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-amber-500/40 blur-[2px] shadow-[0_0_20px_4px_rgba(245,158,11,0.3)]"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float-magical ${p.duration}s infinite ease-in-out ${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes float-magical {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          25% {
            transform: translate(20px, -40px) scale(1.5);
            opacity: 0.6;
          }
          50% {
            transform: translate(-10px, -80px) scale(1);
            opacity: 0.3;
          }
          75% {
            transform: translate(30px, -40px) scale(1.3);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Fireflies;