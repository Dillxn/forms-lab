'use client';

import { createContext, useContext } from 'react';
import { FormContext, IFormContext } from './Form';

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
  const formContext = useContext(FormContext);
  const prevLevel = formContext.groupLevel ?? 0;
  const context: IFormContext = {
    groupLevel: prevLevel + 1,
    ...formContext,
  };
  return (
    <FormContext value={context}>
      <div className="-mx-2 grid gap-2 rounded-sm bg-gray-50 p-2">
        <span>{label}</span>
        {children}
      </div>
    </FormContext>
  );
}
