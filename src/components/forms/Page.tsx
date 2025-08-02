'use client';

import { useContext } from 'react';
import { FormContext, IFormContext } from './Form';

export default function Page({
  children,
  ...contextProps
}: {
  children: React.ReactNode;
} & Partial<IFormContext>) {
  const formContext = useContext(FormContext);
  return (
    <FormContext
      value={{
        ...formContext,
        ...contextProps,
      }}
    >
      {children}
    </FormContext>
  );
}
