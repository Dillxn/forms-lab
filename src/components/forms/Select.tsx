'use client';

import React, { useRef } from 'react';
import Field from './Field';
import { nameToLabel } from './util/nameToLabel';
import Label from './Label';
import Input, { InputProps } from './Input';

type LabelProps = {
  options?: Array<{
    value: string;
    label?: string;
  }>;
} & InputProps;

export default function Select({
  name,
  label,
  options,
  defaultValue,
  ...props
}: LabelProps) {
  const labelText = label ?? nameToLabel(name);
  const selectRef = useRef(null);
  const inputRef = useRef(null);
  return (
    <>
      <Label
        label={labelText}
        className="group"
      >
        <Field
          name={name}
          element="select"
          className="w-full appearance-none pr-7"
          ref={selectRef}
          defaultValue={defaultValue ?? ''}
          {...props}
        >
          <option
            hidden
            disabled
            value=""
          ></option>
          {options?.map(({ value, label }) => (
            <option
              key={value}
              value={value}
            >
              {label ?? value}
            </option>
          ))}
        </Field>
        <div
          className="pointer-events-none absolute top-1/2 right-2.5
            z-1 -translate-1 text-lg text-gray-400"
        >
          🢓
        </div>
        <span
          className="pointer-events-none absolute top-0 left-0 block
            p-2 px-3 text-gray-500 peer-autofill:hidden
            peer-valid:hidden"
        >
          {labelText}
        </span>
      </Label>
    </>
  );
}
