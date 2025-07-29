'use client';

import React, { useContext } from 'react';
import { FormContext, FormContextProps } from './Form';
import Label from './Label';
import { FieldProps, isToggled } from './Input';

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
  Partial<FormContextProps> &
  LabelProps & { children?: React.ReactNode }) {
  const formContext = useContext(FormContext);
  const context: FormContextProps = {
    required: required ?? formContext.required,
    disabled: disabled ?? formContext.disabled,
    visible: visible ?? formContext.visible,
    data: formContext.data,
  };
  return (
    <Label label={label}>
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
    </Label>
  );
}
