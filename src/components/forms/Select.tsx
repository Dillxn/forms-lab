'use client';

import React, { useContext, useRef, useState } from 'react';
import { FormContext, IFormContext } from './Form';
import { FieldProps } from './Input';
import { isToggled } from './util/isToggled';
import { nameToLabel } from './util/nameToLabel';
import Label from './Label';

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
  const [isFocused, setIsFocused] = useState(false);
  const formContext = useContext(FormContext);
  const labelText = label ?? nameToLabel(name);
  const ref = useRef<HTMLSelectElement>(null);

  return (
    <Label label={labelText} isFocused={isFocused}>
      <select
        ref={ref}
        name={name}
        required={required ?? formContext.required}
        disabled={isToggled(
          disabled ?? formContext.disabled,
          formContext,
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`${ref.current?.value === '__none__' && 'text-gray-500'}
          bg-gray-50 p-2 pl-1.5 rounded-md w-full focus:outline-0
          focus:ring-2 focus:ring-indigo-400 focus:bg-white`}
        defaultValue={defaultValue ?? '__none__'}
      >
        <option value="__none__" disabled={true} hidden={true}>
          {labelText}
        </option>
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
