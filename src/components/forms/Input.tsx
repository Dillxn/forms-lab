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
  const [isFocused, setIsFocused] = useState(false);

  const formContext = useContext(FormContext);

  const labelText = label ?? nameToLabel(name);

  return (
    <Label label={labelText} isFocused={isFocused}>
      <input
        className="bg-gray-50 p-2 rounded-md w-full focus:outline-0
          focus:ring-2 focus:ring-indigo-400 focus:bg-white"
        name={name}
        required={required ?? formContext.required}
        disabled={isToggled(
          disabled ?? formContext.disabled,
          formContext,
        )}
        pattern={String(pattern)}
        placeholder={isFocused ? '' : labelText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </Label>
  );
}
