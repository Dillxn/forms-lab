import React, { useContext } from 'react';
import { FormContext, IFormContext } from './Form';
import { nameToLabel } from './util/nameToLabel';
import { isToggled } from './util/isToggled';
import { isHidden } from './util/isHidden';
import { isDisabled } from './util/isDisabled';

export type FieldProps = {
  children?: React.ReactNode;
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
    !isHidden(context) && (
      <Element
        name={name}
        className={`${className} peer rounded-md bg-gray-50 p-2 ring-2
          ring-transparent transition-all duration-50 focus:bg-white
          focus:placeholder-transparent focus:ring-indigo-400
          focus:outline-0 disabled:cursor-not-allowed`}
        defaultValue={defaultValue}
        value={value}
        pattern={
          pattern instanceof RegExp
            ? pattern.toString().slice(1, -1)
            : pattern
        }
        placeholder={placeholder ?? label ?? nameToLabel(name)}
        type={type}
        defaultChecked={defaultChecked}
        required={isToggled('required', context)}
        disabled={isDisabled(context)}
      >
        {children}
      </Element>
    )
  );
}
