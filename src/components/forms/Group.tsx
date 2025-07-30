'use client';

import { IFormContext } from './Form';

export default function Group({
  label,
  className,
  visible,
  required,
  disabled,
  children,
}: {
  label?: string;
  name?: string;
  className?: string;
  isFocused?: boolean;
  children?: React.ReactNode;
} & Partial<IFormContext>) {
  return (
    <div
      className="-mx-3 grid gap-2 rounded-sm p-3 py-4 mt-4 relative
        border border-gray-200"
    >
      <span
        className="absolute -top-2 left-3 text-xs uppercase
          text-gray-400 bg-white font-semibold px-1"
      >
        {label}
      </span>
      {children}
    </div>
  );
}
