import React, { JSX, useContext } from 'react';
import { FormContext } from './Form';
import { nameToLabel } from './util/nameToLabel';
import { isToggled } from './util/isToggled';

export type FieldProps = {
  name: string;
  label?: string;
  className?: string;
  defaultValue?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean | string;
  visible?: boolean | string;
  pattern?: RegExp | string;
  placeholder?: string;
  type?: string;
};

export default function Field({
  name,
  label,
  className,
  defaultValue,
  value,
  required,
  disabled,
  visible,
  pattern,
  placeholder,
  element: Element,
  ...props
}: FieldProps & {
  element: 'input';
}) {
  const formContext = useContext(FormContext);

  return (
    <Element
      name={name}
      className={`${className} ${visible === false ? '!hidden' : ''}
        peer rounded-md bg-gray-50 p-2 ring-2 ring-transparent
        transition-all duration-50 focus:bg-white
        focus:placeholder-transparent focus:ring-indigo-400
        focus:outline-0`}
      defaultValue={defaultValue}
      value={value}
      required={required ?? formContext.required}
      disabled={isToggled(
        disabled ?? formContext.disabled,
        formContext,
      )}
      pattern={String(pattern)}
      placeholder={placeholder ?? label ?? nameToLabel(name)}
      {...props}
    />
  );
}
