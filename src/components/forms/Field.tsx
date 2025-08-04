import React, { useContext } from 'react';
import { FormContext, IFormContext } from './Form';
import { nameToLabel } from './util/nameToLabel';
import { isToggled } from './util/isToggled';
import { toggleClasses } from './util/toggleClasses';

export type FieldProps = {
  children?: React.ReactNode,
  name: string;
  label?: string;
  className?: string;
  defaultValue?: string;
  value?: string;
  pattern?: RegExp | string;
  placeholder?: string;
  type?: string;
  defaultChecked?: boolean;
} & Partial<IFormContext>;

export default function Field({
  element: Element,
  children,
  name,
  label,
  className,
  defaultValue,
  value,
  pattern,
  placeholder,
  type,
  defaultChecked,
  ...contextProps
}: {
  element: 'input';
} & FieldProps) {
  const formContext = useContext(FormContext);
  const context = {
    ...formContext,
    ...contextProps,
  };

  return (
    <>
      <Element
        name={name}
        className={`${className}
          ${toggleClasses(context)} peer
          rounded-md bg-gray-50 p-2 ring-2 ring-transparent
          transition-all duration-50 focus:bg-white
          focus:placeholder-transparent focus:ring-indigo-400
          focus:outline-0`}
        defaultValue={defaultValue}
        value={value}
        pattern={String(pattern)}
        placeholder={placeholder ?? label ?? nameToLabel(name)}
        type={type}
        defaultChecked={defaultChecked}
        required={isToggled('required', context)}
        disabled={isToggled('disabled', context)}
      >{children}</Element>
    </>
  );
}
