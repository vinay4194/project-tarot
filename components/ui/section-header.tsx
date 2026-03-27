import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 lg:mb-16',
        centered && 'text-center',
        className
      )}
      {...props}
    >
      <h2 className="text-4xl lg:text-5xl font-semibold mb-4 cosmic-text-gradient tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto font-light tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
}
