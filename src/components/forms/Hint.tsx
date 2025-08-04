'use client';

import { useContext } from 'react';
import { FormContext, IFormContext } from './Form';
import { toggleClasses } from './util/toggleClasses';

export default function Hint({
  label,
  children,
  style = 'gray',
  ...contextProps
}: {
  label?: string;
  children?: React.ReactNode;
  style?: 'red' | 'yellow' | 'green' | 'blue' | 'gray';
} & Partial<IFormContext>) {
  const formContext = useContext(FormContext);
  const context: IFormContext = {
    ...formContext,
    ...contextProps
  }
  return (
    <p
      className={`rounded-md bg-gray-100 p-2.5 px-3 leading-5
        text-gray-600 ring ring-gray-200 ${toggleClasses(context)}`}
    >
      {label}
      {children}
    </p>
  );
}
