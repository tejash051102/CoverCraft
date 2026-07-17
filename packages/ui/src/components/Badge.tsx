import React from 'react';
import { cn } from '../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
        variant === 'default' && 'bg-blue-100 text-blue-800',
        variant === 'success' && 'bg-green-100 text-green-800',
        variant === 'warning' && 'bg-yellow-100 text-yellow-800',
        variant === 'error' && 'bg-red-100 text-red-800',
        className
      )}
      {...props}
    />
  )
);

Badge.displayName = 'Badge';

export { Badge };
