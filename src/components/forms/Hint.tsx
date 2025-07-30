'use client';

import { IFormContext } from './Form';

export default function Hint({
  label,
  className,
  children,
  visible,
}: {
  label?: string;
  className?: string;
  children?: React.ReactNode;
} & Partial<IFormContext>) {
  return (
    <p className={className}>
      {label}
      {children}
    </p>
  );
}
