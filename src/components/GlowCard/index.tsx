'use client';

import { useRef } from 'react';

export default function GlowCard({ children }: { children?: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current?.style.setProperty('--x', `${x}px`);
    cardRef.current?.style.setProperty('--y', `${y}px`);
  };

  return (
    <div ref={cardRef} className='glowCard' onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
}
