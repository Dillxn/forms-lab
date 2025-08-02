'use client';

import Field from './Field';
import { InputProps } from './Input';

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
  label,
  defaultValue,
  ...props
}: RadioProps) {
  return (
    <fieldset className="text-gray-600">
      <legend>{label}</legend>
      <span className="flex flex-wrap">
        {options?.map(({ value, label }) => (
          <label
            key={value}
            className="flex items-center-safe gap-2 p-4 text-gray-900"
          >
            <Field
              element="input"
              type="radio"
              defaultChecked={value === defaultValue}
              className="-mt-0.5 h-3.5 w-3.5 accent-indigo-500"
              value={value}
              {...props}
            />
            {label}
          </label>
        ))}
      </span>
    </fieldset>
  );
}
