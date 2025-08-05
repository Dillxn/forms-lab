'use client';

import { useContext } from 'react';
import { nameToLabel } from './util/nameToLabel';
import { FormContext } from './Form';
import { isDisabled } from './util/isDisabled';

export default function Label({
  label,
  name,
  className,
  children,
}: {
  label?: string;
  name?: string;
  className: string;
  children?: React.ReactNode;
}) {
  const formContext = useContext(FormContext);
  return (
    <label
      className={`relative ${className}
        ${isDisabled(formContext) ? 'cursor-not-allowed' : ''}`}
    >
      {children}
      <span
        className="absolute -top-1 left-2 rounded-xs bg-white px-0.5
          text-xs/2 text-white opacity-0 transition-all duration-50
          select-none peer-focus:text-indigo-400
          peer-focus:opacity-100"
      >
        {label ?? nameToLabel(name) ?? ''}
      </span>
    </label>
  );
}
