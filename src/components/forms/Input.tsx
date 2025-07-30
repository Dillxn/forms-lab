'use client';

import { HTMLInputTypeAttribute, useContext, useState } from 'react';
import { FormContext, IFormContext } from './Form';
import Label from './Label';
import { isToggled } from './util/isToggled';
import { nameToLabel } from './util/nameToLabel';

export type FieldProps = {
  label?: string;
  name?: string;
  defaultValue?: string;
  value?: string;
};

export type InputProps = {
  pattern?: RegExp | string;
  type?: HTMLInputTypeAttribute;
  defaultChecked?: boolean;
} & FieldProps &
  Partial<IFormContext>;

export default function Input({
  name,
  label,
  pattern,
  required,
  disabled,
  visible,
  ...props
}: InputProps) {
  const formContext = useContext(FormContext);

  const labelText = label ?? nameToLabel(name);

  return (
    <Label label={labelText}>
      <input
        className="peer w-full rounded-md bg-gray-50 p-2 ring-2
          ring-transparent transition-all duration-100 focus:bg-white
          focus:ring-indigo-400 focus:outline-0 focus:placeholder-transparent"
        name={name}
        required={required ?? formContext.required}
        disabled={isToggled(
          disabled ?? formContext.disabled,
          formContext,
        )}
        pattern={String(pattern)}
        placeholder={labelText}
        {...props}
      />
    </Label>
  );
}
