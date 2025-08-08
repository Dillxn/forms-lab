'use client';

import { use } from 'react';
import { FormContext, IContextProps } from './Form';
import { isHidden } from './util/isHidden';

export default function Group({
  label,
  children,
  ...contextProps
}: {
  label?: string;
  children?: React.ReactNode;
} & Partial<IContextProps>) {
  const formContext = use(FormContext);
  const context = {
    ...formContext,
    ...contextProps,
  };
  return !isHidden(context) && (
    <div
      className="relative -mx-3 mt-3 mb-1 grid gap-[inherit] rounded-md border
        border-gray-200 p-4 pt-5"
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