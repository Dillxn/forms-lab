'use client';

import Field from './Field';
import { InputProps } from './Input';

export default function Checkbox({
  label,
  required,
  ...props
}: Omit<InputProps, 'type'>) {
  return (
    <>
      <label
        className="flex items-center-safe justify-items-start gap-3
          text-gray-600 select-none"
      >
        <Field
          element="input"
          type="checkbox"
          className="-mt-0.5 h-[1em] w-[.9em] accent-indigo-500"
          required={required} /* must be explicitly set on
          checkboxes as no check is still considered a
          valid value for contextual required */
          {...props}
        />
        {label}
      </label>
    </>
  );
}
