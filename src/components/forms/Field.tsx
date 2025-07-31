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
  element: keyof JSX.IntrinsicElements;
}) {
  const formContext = useContext(FormContext);

  return (
    <Element
      name={name}
      className={`${className} ${visible === false ? '!hidden' : ''}`}
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
