'use client';

import { useContext } from 'react';
import { FormContext, IFormContext } from './Form';

export default function Page({
  children,
  required,
  disabled,
  visible,
}: {
  children: React.ReactNode;
} & Partial<IFormContext>) {
  const formContext = useContext(FormContext);
  const context: IFormContext = {
    required: required ?? formContext.required,
    disabled: disabled ?? formContext.disabled,
    visible: visible ?? formContext.visible,
    ...formContext,
  };
  return <FormContext value={context}>{children}</FormContext>;
}
