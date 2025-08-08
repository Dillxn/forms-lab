'use client';

import { use } from 'react';
import { FormContext, IContextProps, IFormContext } from './Form';
import { isHidden } from './util/functions/isHidden';

export default function Hint({
  label,
  children,
  style = 'gray',
  ...contextProps
}: {
  label?: string;
  children?: React.ReactNode;
  style?: 'red' | 'yellow' | 'green' | 'blue' | 'gray';
} & Partial<IContextProps>) {
  const formContext = use(FormContext);
  const context: IFormContext = {
    ...formContext,
    ...contextProps
  }
  return !isHidden(context) && (
    <p
      className="rounded-md bg-gray-100 p-2.5 px-3 leading-5
        text-gray-600 ring ring-gray-200"
    >
      {label}
      {children}
    </p>
  );
}
