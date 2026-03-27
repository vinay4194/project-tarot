'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';
import { Container } from './container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  noPadding?: boolean;
  animate?: boolean;
}

export function Section({
  className,
  containerSize = 'lg',
  noPadding = false,
  animate = true,
  children,
  ...props
}: SectionProps) {
  const content = (
    <section
      className={cn(
        'relative',
        !noPadding && 'py-20 lg:py-32',
        className
      )}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {content}
    </motion.div>
  );
}
