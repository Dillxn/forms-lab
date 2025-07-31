'use client';

import { nameToLabel } from './util/nameToLabel';

export default function Label({
  label,
  name,
  children,
}: {
  label?: string;
  name: string;
  children?: React.ReactNode;
}) {
  return (
    <label className="relative">
      {children}
      <span
        className="absolute -top-1 left-2 rounded-xs bg-white px-0.5
          text-xs/2 text-white opacity-0 transition-all duration-50
          select-none peer-focus:text-indigo-400
          peer-focus:opacity-100"
      >
        {label ?? nameToLabel(name)}
      </span>
    </label>
  );
}
