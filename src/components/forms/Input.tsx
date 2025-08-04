'use client';

import Label from './Label';
import Field, { FieldProps } from './Field';

export type InputProps = Pick<FieldProps, 'name'> &
  Partial<FieldProps>;

export default function Input({ name, label, ...props }: InputProps) {
  return (
    <Label
      name={name}
      label={label}
    >
      <Field
        element={'input'}
        name={name}
        className="w-full"
        {...props}
      />
    </Label>
  );
}
