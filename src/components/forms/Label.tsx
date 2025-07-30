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
      {isFocused && (
        <span
          className="text-indigo-400 absolute text-xs -top-2 left-2
            px-0.5 rounded-full
            bg-[linear-gradient(0deg,white_0%,white_60%,transparent_100%)]"
        >
          {label}
        </span>
      )}
      {children}
    </label>
  );
}
