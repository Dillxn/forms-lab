'use client';

import { useContext } from 'react';
import { FormContext, FormContextProps } from './Form';

export default function Page({
  children,
  required,
  disabled,
  visible,
}: {
  children: React.ReactNode;
} & Partial<FormContextProps>) {
  const formContext = useContext(FormContext);
  const context: FormContextProps = {
    required: required ?? formContext.required,
    disabled: disabled ?? formContext.disabled,
    visible: visible ?? formContext.visible,
    data: formContext.data,
  };
  return <FormContext value={context}>{children}</FormContext>;
}
