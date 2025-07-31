'use client';

import { IFormContext } from './Form';

export default function Hint({
  label,
  className,
  children,
  visible,
  style = 'gray',
}: {
  label?: string;
  className?: string;
  children?: React.ReactNode;
  style?: 'red' | 'yellow' | 'green' | 'blue' | 'gray';
} & Partial<IFormContext>) {
  return (
    <p className={'rounded-md bg-gray-100 p-2.5 px-3 text-gray-600 ring ring-gray-200 leading-5'}>
      {label}
      {children}
    </p>
  );
}
