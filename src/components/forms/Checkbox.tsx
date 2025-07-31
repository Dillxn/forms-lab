'use client';

import Field from './Field';
import Input, { InputProps } from './Input';

export default function Checkbox({
  label,
  ...props
}: Omit<InputProps, 'type'>) {
  return (
    <>
      <label className="text-gray-800 grid gap-1">
        {label}
        <Field
          element="input"
          type="checkbox"
          {...props}
        />
      </label>
    </>
  );
}
