'use client';

import { generateStars } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Starfield() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    setStars(generateStars(100));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            // @ts-ignore
            '--star-delay': star.delay,
          }}
        />
      ))}
    </div>
  );
}
