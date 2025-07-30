'use client';

import React, { useContext } from 'react';
import { FormContext, IFormContext } from './Form';
import { FieldProps } from './Input';
import { isToggled } from './util/isToggled';

type LabelProps = {
  options?: Array<{
    value: string;
    label?: string;
  }>;
};

export default function Select({
  label,
  name,
  defaultValue,
  required,
  disabled,
  visible,
  options,
  children,
}: FieldProps &
  Partial<IFormContext> &
  LabelProps & { children?: React.ReactNode }) {
  const formContext = useContext(FormContext);
  const context: IFormContext = {
    required: required ?? formContext.required,
    disabled: disabled ?? formContext.disabled,
    visible: visible ?? formContext.visible,
    data: formContext.data,
  };
  return (
    <select
      name={name}
      required={context.required}
      disabled={isToggled(context, 'disabled')}
      defaultValue={defaultValue}
    >
      {children ??
        options?.map(({ value, label }) => (
          <option key={value} value={value}>
            {label ?? value}
          </option>
        ))}
    </select>
  );
}
