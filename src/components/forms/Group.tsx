'use client';

import { useContext } from 'react';
import { FormContext, IFormContext } from './Form';
import { isToggled } from './util/isToggled';

export default function Group({
  label,
  children,
  ...contextProps
}: {
  label?: string;
  children?: React.ReactNode;
} & Partial<IFormContext>) {
  const formContext = useContext(FormContext);
  const context = {
    ...formContext,
    ...contextProps,
  };
  return (
    <div
      className={`relative -mx-3 my-4 grid gap-2 rounded-sm border
        border-gray-200 p-3 py-4 ${isToggled('hidden', context) ? 'hidden' : ''}`}
    >
      <span
        className="absolute -top-2 left-3 bg-white px-1 text-xs
          font-semibold text-gray-400 uppercase select-none"
      >
        {label}
      </span>
      <FormContext value={context}>{children}</FormContext>
    </div>
  );
}
