'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({
  className,
  glow = true,
  hover = true,
  gradient = false,
  children,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        'rounded-xl border border-cosmic-purple/30 bg-cosmic-midnight/50 backdrop-blur-sm p-6',
        glow && 'card-glow',
        hover && 'cursor-pointer transition-all duration-300',
        gradient && 'bg-gradient-to-br from-cosmic-midnight/80 to-cosmic-dark/80',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
