'use client';

import Input, { InputProps } from './Input';

type RadioProps = {
  options?: Array<{
    value: string;
    label?: string;
  }>;
} & Omit<InputProps, 'type'>;

const defaultOptions = [
  { value: 'true', label: 'Yes' },
  { value: 'false', label: 'No' },
];

export default function Radio({
  options = defaultOptions,
  defaultValue,
  ...props
}: RadioProps) {
  return (
    <>
      {options?.map(({ value, label }) => (
        <label key={value}>
          {label}
          <Input type="radio" {...props} defaultChecked={value === defaultValue} />
        </label>
      ))}
    </>
  );
}
