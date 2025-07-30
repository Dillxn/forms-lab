'use client';

import { IFormContext } from './Form';

export default function Label({
  label,
  className,
  visible,
  isFocused,
  children,
}: {
  label?: string;
  name?: string;
  className?: string;
  isFocused?: boolean;
  children?: React.ReactNode;
} & Partial<IFormContext>) {
  return (
    <label className="relative">
      {children}
      <span
        className="absolute -top-1 left-2 rounded-xs bg-white px-0.5
          text-xs/2 text-white opacity-0 transition-all duration-100
          select-none peer-focus:text-indigo-400
          peer-focus:opacity-100"
      >
        {label}
      </span>
    </label>
  );
}
