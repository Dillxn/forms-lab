'use client';

import { use } from 'react';
import { nameToLabel } from './util/functions/nameToLabel';
import { FormContext } from './Form';
import { isDisabled } from './util/functions/isDisabled';

export default function Label({
  label,
  name,
  className,
  children,
}: {
  label?: string;
  name?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const formContext = use(FormContext);
  return (
    <label
      className={`relative ${className ?? ''}
        ${isDisabled(formContext) ? 'cursor-not-allowed' : ''}`}
    >
      {children}
      <span
        className="absolute -top-1 left-2 rounded-xs bg-white px-0.5
          text-xs/2 text-white opacity-0 select-none
          peer-focus:text-indigo-400 peer-focus:opacity-100"
      >
        {label ?? nameToLabel(name) ?? ''}
      </span>
    </label>
  );
}
