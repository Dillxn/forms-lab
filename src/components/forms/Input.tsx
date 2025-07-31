'use client';

import { HTMLInputTypeAttribute } from 'react';
import Label from './Label';
import Field, { FieldProps } from './Field';

export type InputProps = {
  type?: HTMLInputTypeAttribute;
  defaultChecked?: boolean;
} & Pick<FieldProps, 'name'> &
  Partial<FieldProps>;

export default function Input({ name, label, ...props }: InputProps) {
  return (
    <Label name={name} label={label}>
      <Field
        element={'input'}
        name={name}
        className="peer w-full rounded-md bg-gray-50 p-2 ring-2
          ring-transparent transition-all duration-100 focus:bg-white
          focus:placeholder-transparent focus:ring-indigo-400
          focus:outline-0"
        {...props}
      />
    </Label>
  );
}
